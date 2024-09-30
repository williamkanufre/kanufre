document.getElementById('btn-menu').onclick = function() {
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('active');
};

document.querySelectorAll('#menu-mobile nav a').forEach(link => {
    link.onclick = function() {
        const menuMobile = document.getElementById('menu-mobile');
        menuMobile.classList.remove('active');
    };
});
<<<<<<< HEAD
/*Certificados Mikrotik */
=======
/*#######################
Certificados Mikrotik
#########################*/
>>>>>>> b1ff251bd4242846217de44abb31c3e621deb6cd
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage(direction) {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
}
