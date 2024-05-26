document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('drawer');
    const closeDrawer = document.getElementById('close-drawer');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
        drawer.classList.add('open');
        overlay.classList.add('visible');
    });

    closeDrawer.addEventListener('click', () => {
        drawer.classList.remove('open');
        overlay.classList.remove('visible');
    });

    overlay.addEventListener('click', () => {
        drawer.classList.remove('open');
        overlay.classList.remove('visible');
    });
});
