document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarNav = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");

    navbarToggler.addEventListener("click", function () {
        if (navbarNav.classList.contains("show")) {
            navbarNav.classList.remove("show");
            navbarOverlay.classList.remove("show-overlay");
        } else {
            navbarNav.classList.add("show");
            navbarOverlay.classList.add("show-overlay");
        }
    });

    navLinks.forEach(function (link) { 
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            const target = link.getAttribute("href").substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(target);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                const scrollDuration = 800; // Duración del desplazamiento en milisegundos

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth", // Activa el desplazamiento suave
                    duration: scrollDuration
                });

                // Cierra el menú desplegable
                navbarNav.classList.remove("show");
                navbarOverlay.classList.remove("show-overlay");
            }
        });
    });
});


$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
  $('.navbar').addClass('scrolled');
} else {
  $('.navbar').removeClass('scrolled');
}
});
});



document.addEventListener("DOMContentLoaded", function () {
    const cardImage = document.querySelector(".card-image img");
    const thumbnailImages = document.querySelectorAll(".thumbnail-images img");

    // Agregar un controlador de clic a cada miniatura
    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            // Obtener la ruta de la imagen grande desde el atributo data-src
            const newImageSrc = this.getAttribute("data-src");
            
            // Cambiar la imagen principal
            cardImage.src = newImageSrc;
        });
    });
});

function goBack() {
    window.history.back();
  }
  

 

  