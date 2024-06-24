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