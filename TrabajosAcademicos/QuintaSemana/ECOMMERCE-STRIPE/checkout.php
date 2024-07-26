<?php
require 'vendor/init.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $totalamount = $_POST['precio-total'];

    // Convertir el monto a centavos
    $totalamount_cents = $totalamount * 100;

    $stripe = new \Stripe\StripeClient('sk_test_51PHUEJ2LFvaRuHZRPm69APS5sX448NuqDdITRZQqFw2BpbK7Ng46jDOcRge5srIjTiv4Ai5xXQbormnqLKJV5Jrg00K3Vyh4NN');

    $checkout_session = $stripe->checkout->sessions->create([
        'line_items' => [[
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => 'Total a Pagar',
                ],
                'unit_amount' => $totalamount_cents,
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',
        'success_url' => 'http://localhost/ECOMMERCE/sucess.php',
        'cancel_url' => 'http://localhost/ECOMMERCE/cancel.php',
    ]);

    header("HTTP/1.1 303 See Other");
    header("Location: " . $checkout_session->url);
}
?>
