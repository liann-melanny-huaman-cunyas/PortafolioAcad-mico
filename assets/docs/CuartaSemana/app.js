    // ejercio 5.1
    var btn = document.getElementById('btn-change');
    var text = document.getElementById('text-change');

    var estadoActual = false;

    btn.addEventListener('click', function() {
        if (estadoActual) {
            text.innerHTML = "FELIZ";
        } else {
            text.innerHTML = "TRISTE";
        }
        estadoActual = !estadoActual;
    });

// ejercicio5.2
document.getElementById('textInput').addEventListener('input', function() {
document.getElementById('output').innerText = this.value;
});

//ejercicio 3

document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').innerText = 'El resultado de la suma es: ' + result;
});

//ejercicio 4

var students = [
    { id: 1, apellidos: "García", nombres: "Juan", direccion: "Av. Principal 123", telefono: "555-1234" },
    { id: 2, apellidos: "López", nombres: "María", direccion: "Calle Secundaria 456", telefono: "555-5678" },
    { id: 3, apellidos: "García", nombres: "Juan", direccion: "Av. Principal 123", telefono: "555-1234" },
    { id: 4, apellidos: "López", nombres: "María", direccion: "Calle Secundaria 456", telefono: "555-5678" },
    { id: 5, apellidos: "García", nombres: "Juan", direccion: "Av. Principal 123", telefono: "555-1234" },
    { id: 6, apellidos: "López", nombres: "María", direccion: "Calle Secundaria 456", telefono: "555-5678" },
    { id: 7, apellidos: "García", nombres: "Juan", direccion: "Av. Principal 123", telefono: "555-1234" },
    { id: 8, apellidos: "López", nombres: "María", direccion: "Calle Secundaria 456", telefono: "555-5678" },
    { id: 9, apellidos: "García", nombres: "Juan", direccion: "Av. Principal 123", telefono: "555-1234" },
    { id: 10, apellidos: "López", nombres: "María", direccion: "Calle Secundaria 456", telefono: "555-5678" },
];

function generateStudentTable() {
    var tbody = document.getElementById('studentData');
    students.forEach(function(student) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + student.id + '</td>' +
                        '<td>' + student.apellidos + '</td>' +
                        '<td>' + student.nombres + '</td>' +
                        '<td>' + student.direccion + '</td>' +
                        '<td>' + student.telefono + '</td>';
        tbody.appendChild(row);
    });
}

window.onload = function() {
    generateStudentTable();
};



// Definición de la clase Persona
class Persona {
    constructor(id, apellidos, nombres, direccion, telefono) {
        this._id = id;
        this._apellidos = apellidos;
        this._nombres = nombres;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    // Métodos getters
    get id() {
        return this._id;
    }

    get apellidos() {
        return this._apellidos;
    }

    get nombres() {
        return this._nombres;
    }

    get direccion() {
        return this._direccion;
    }

    get telefono() {
        return this._telefono;
    }

    // Método para obtener el nombre completo (abstracción)
    getNombreCompleto() {
        return `${this._nombres} ${this._apellidos}`;
    }
}

// Definición de la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(id, apellidos, nombres, direccion, telefono) {
        super(id, apellidos, nombres, direccion, telefono);
    }

    // Polimorfismo: sobrescribir el método para mostrar información del estudiante
    getNombreCompleto() {
        return `Estudiante: ${this._nombres} ${this._apellidos}`;
    }
}

// Crear un array con 10 objetos Estudiante (abstracción y encapsulamiento)
const estudiantes = [
    new Estudiante(1, 'García', 'Juan', 'Calle Falsa 123', '123456789'),
    new Estudiante(2, 'Martínez', 'Ana', 'Avenida Siempre Viva 456', '987654321'),
    new Estudiante(3, 'Rodríguez', 'Pedro', 'Plaza Mayor 789', '564738291'),
    new Estudiante(4, 'López', 'María', 'Boulevard Central 101', '019283746'),
    new Estudiante(5, 'González', 'Luis', 'Calle Secundaria 202', '918273645'),
    new Estudiante(6, 'Hernández', 'Carla', 'Avenida Principal 303', '567890123'),
    new Estudiante(7, 'Pérez', 'Jorge', 'Callejón de los Milagros 404', '098765432'),
    new Estudiante(8, 'Sánchez', 'Laura', 'Calle Norte 505', '102938475'),
    new Estudiante(9, 'Ramírez', 'Andrés', 'Avenida Sur 606', '908172635'),
    new Estudiante(10, 'Torres', 'Isabel', 'Plaza Oeste 707', '456789012')
];

// Función para mostrar los datos en la tabla (abstracción)
function mostrarEstudiantes() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];

    estudiantes.forEach(estudiante => {
        let fila = document.createElement('tr');

        let celdaId = document.createElement('td');
        celdaId.textContent = estudiante.id;
        fila.appendChild(celdaId);

        let celdaApellidos = document.createElement('td');
        celdaApellidos.textContent = estudiante.apellidos;
        fila.appendChild(celdaApellidos);

        let celdaNombres = document.createElement('td');
        celdaNombres.textContent = estudiante.nombres;
        fila.appendChild(celdaNombres);

        let celdaDireccion = document.createElement('td');
        celdaDireccion.textContent = estudiante.direccion;
        fila.appendChild(celdaDireccion);

        let celdaTelefono = document.createElement('td');
        celdaTelefono.textContent = estudiante.telefono;
        fila.appendChild(celdaTelefono);

        tableBody.appendChild(fila);
    });
}

// Llamar a la función para mostrar los datos al cargar la página
document.addEventListener('DOMContentLoaded', mostrarEstudiantes);
