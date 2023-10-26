let currentPage = window.location.pathname; // Récupérer le chemin de la page actuelle

if (currentPage !== "/panier.html" && currentPage !== "/categories.html" && currentPage !== "/connexion.html") {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    // Cacher toutes les slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Retirer "active" de tous les points
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // Afficher la slide demandée
    slides[slideIndex - 1].style.display = "block";

    // Ajouter "active" sur le point cliqué
    dots[slideIndex - 1].classList.add("active");
  } 
}

// partie mobile

/**
 * Au clic sur l'icone,
 * la Div modal descend jusqu'en bas de l'écran
 * et l'icone se modifie en croix.
 * Au clic suivant,
 * la Div modal remonte jusqu'en haut de l'écran
 * et l'icone reprends sa forme d'origine (menu burger).
 */

const icone = document.querySelector(".icone");

const modal = document.querySelector(".modal");
let modalIsOpen = false; // Initialise la variable à false

icone.addEventListener("click", function () {
  console.log("click");
  // icone.classList.toggle("fa-times");
  // if (modalIsOpen) { // Vérifie si la modale est déjà ouverte
  //   modal.style.opacity = "0";
  //   modalIsOpen = false; // Met à jour l'état de la modale
  // } else {
  //   modal.style.opacity = "1";
  //   modalIsOpen = true; // Met à jour l'état de la modale
  // }

  icone.classList.toggle("fa-times");
  modal.classList.toggle("modal--close");
});
//  icone.addEventListener('click',function () {
//     console.log('click');
//     icone.classList.toggle('fa-bars');
//    modal.classList.toggle();

// });
/* <i class="fa-solid fa-xmark"></i> */
