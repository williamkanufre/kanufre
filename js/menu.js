document.getElementById('btn-menu').onclick = function() {
    const menuMobile = document.getElementById('menu-mobile');
    const btnMenu = document.getElementById('btn-menu');
    
    menuMobile.classList.toggle('active'); // Alterna a exibição do menu
    btnMenu.classList.toggle('active'); // Alterna a transformação do menu hamburguer
};

document.querySelectorAll('#menu-mobile nav a').forEach(link => {
    link.onclick = function() {
        const menuMobile = document.getElementById('menu-mobile');
        const btnMenu = document.getElementById('btn-menu');
        
        menuMobile.classList.remove('active'); // Fecha o menu
        btnMenu.classList.remove('active'); // Retorna o menu ao estado original
    };
});
