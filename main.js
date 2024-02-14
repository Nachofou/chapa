const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
});


 window.addEventListener('scroll', function () {
        var container = document.querySelector('.chapadmalal__container');
        var offsetTop = container.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (offsetTop < windowHeight * 0.75) {
            container.classList.add('scrolled');
        }
 });
    
const swiper = new Swiper('.swiper', {
  // Configuración adicional

 pagination: {
    el: '.swiper-pagination',
  },



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



 document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var linkCabanias = document.getElementById('linkCabanias');
    linkCabanias.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 775,
        left: 213,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
 });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var linkchapa = document.getElementById('linkchapa');
    linkchapa.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 2315,
        left: 455,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
  });

    document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var linkactividades = document.getElementById('linkactividades');
    linkactividades.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 3150,
        left: 455,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
    });
  
       document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var linkcontacto = document.getElementById('linkcontacto');
    linkcontacto.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 3950,
        left: 455,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
       });
  
        document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var footercabanas = document.getElementById('footercabanas');
    footercabanas.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 775,
        left: 213,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
 });

  document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var footerchapa = document.getElementById('footerchapa');
   footerchapa.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 2315,
        left: 455,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var footeracti = document.getElementById('footeracti');
    footeracti.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 3150,
        left: 455,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
    });

       document.addEventListener('DOMContentLoaded', function() {
    // Agregamos un evento de clic al enlace de "Cabañas"
    var footercontact = document.getElementById('footercontact');
    footercontact.addEventListener('click', function(event) {
      // Prevenimos el comportamiento predeterminado del enlace
      event.preventDefault();

      // Utilizamos el método scrollTo para desplazar la pantalla al punto específico
      window.scrollTo({
        top: 3000,
        left: 455,
        behavior: 'smooth' // Esto proporciona un desplazamiento suave
      });
    });
       });





