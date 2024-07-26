/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Front-End","Back-end","Full-Stack"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/** tabla de datos  */
const tablaContenidos = document.querySelector('#tabla-contenidos tbody');

  const semanas = [
      { semana: 1, tema: 'Usar Visual Studio Code', objetivo: 'Usar apropiadamente el Editor Visual Studio Code mediante el plugin Emmet y atajos de teclado de VSC.' },
      { semana: 2, tema: 'HTML y CSS', objetivo: 'Usar HTML y CSS para diseñar elementos utilizables en la web y para desarrollar componentes de una página web.' },
      { semana: 3, tema: 'Librerías CSS', objetivo: 'Usar y personalizar librerías de código CSS para el diseño responsive y para el diseño de componentes de una página web.' },
      { semana: 4, tema: 'JavaScript (Parte 1)', objetivo: 'Desarrollar aplicaciones dinámicas con JavaScript.' },
      { semana: 5, tema: 'Trabajo: Pasarela de Pagos y Monetización', objetivo: 'Trabajo usando Stripe y Google AdSense.' },
      { semana: 6, tema: 'JavaScript (Parte 2)', objetivo: 'Desarrollar aplicaciones dinámicas con JavaScript. Parte 2.' },
      { semana: 7, tema: 'Consumo de APIs con JavaScript puro', objetivo: 'Consumir APIs utilizando JavaScript puro.' },
      { semana: 8, tema: 'Trabajo Parcial: Ruleta en Web y Aplicación en React', objetivo: 'Desarrollar una aplicación web con una ruleta que gira aleatoriamente y selecciona un elemento. Crear una aplicación en React con 4 componentes anidados, pasando datos de un componente a otro y actualizándolos.' },
      { semana: 9, tema: 'React con Hooks', objetivo: 'Desarrollar aplicaciones dinámicas con React usando Hooks.' },
      { semana: 10, tema: 'Trabajo de React', objetivo: 'Realizar un examen práctico de React.' },
      { semana: 11, tema: 'Next.js', objetivo: 'Desarrollar aplicaciones dinámicas con Next.js.' },
      { semana: 12, tema: 'JSP', objetivo: 'Desarrollar aplicaciones backend con el lenguaje JSP.' },
      { semana: 13, tema: 'Spring 3 con Java 22', objetivo: 'Desarrollar aplicaciones backend con Spring 3 y la última versión de Java 22.' },
      { semana: 14, tema: 'Trabajo Parcial: API REST', objetivo: 'Diseñar y desarrollar una API REST para realizar operaciones CRUD en una base de datos con las tablas departamento(id, name), provincia(id, name), y distrito(id, name).' }
  ];

  semanas.forEach(item => {
    let row = tablaContenidos.insertRow();
    let cellSemana = row.insertCell(0);
    let cellTema = row.insertCell(1);
    let cellObjetivo = row.insertCell(2);

    cellSemana.textContent = item.semana;
    cellTema.textContent = item.tema;
    cellObjetivo.textContent = item.objetivo;
});

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

/* ----- DOWLOAND PDF ----- */
function descargarCV() {
  const link = document.createElement('a');
  link.href = 'assets/docs/CV_LiannMelannyHuamanCunyas.pdf';  // Reemplaza con la ruta real de tu PDF
  link.download = 'CV_LiannMelannyHuamanCunyas.pdf';  // Reemplaza con el nombre que deseas para el archivo descargado
  link.click();
}

function redireccionarInstagram() {
  window.open('https://www.instagram.com/liannmelanny/', '_blank');
}

function redireccionarLinkedIn() {
  window.open('https://www.linkedin.com/in/liannmelannyhuamancunyas/', '_blank');
}

function redireccionarDribbble() {
  window.open('https://dev.to/liannmelannyhuamancunyas', '_blank');
}

function redireccionarGitHub() {
  window.open('https://github.com/liann-melanny-huaman-cunyas', '_blank');
}

function openLinkOne() {
  window.open("./assets/docs/PrimeraSenana/trabajo.html", "_blank");
}

function openLinkTwo() {
  window.open("./assets/docs/SegundaSemana/Ejercicios-1,2,3,4/index.html", "_blank");
}

function openLinkTwoOne(){
  window.open("./assets/docs/SegundaSemana/sliderbar/index.html", "_blank");
}
function openLinkTreeOne(){
  window.open("./assets/docs/TerceraSemana/CSS.html", "_blank");
}

function openLinkTreeTwo(){
  window.open("./assets/docs/TerceraSemana/BootStrap.html", "_blank");
}

function openLinkTreeTree(){
  window.open("./assets/docs/TerceraSemana/Tailwind.html", "_blank");
}

function openLinkTreeFour(){
  window.open("./assets/docs/TerceraSemana/landingPage/pageLanding.html", "_blank");
}

function openLinkTreeFive(){
  window.open("./assets/docs/TerceraSemana/landingPage/Bostrap.html", "_blank");
}

function openLinkFour(){
  window.open("./assets/docs/CuartaSemana/index.html", "_blank");

}


