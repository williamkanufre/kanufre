document.addEventListener('DOMContentLoaded', function() {
    function checkScreenSize() {
        const video = document.getElementById('bannerVideo');
        const videoSource = document.getElementById('videoSource');
        
        if (window.matchMedia("(max-width: 500px)").matches){
            // Se a tela for do tamanho de um smartphone, usar este vídeo
            videoSource.src = "/movie/movie_mobile.mp4";
        } else {
            // Para telas maiores que 500px, usar este vídeo
            videoSource.src = "/movie/movie_bck.mp4";
        }
        
        // Recarregar o vídeo para aplicar a nova fonte
        video.load();
    }

    // Verificar o tamanho da tela ao carregar a página
    checkScreenSize();

    // Verificar o tamanho da tela quando a janela é redimensionada
    window.addEventListener('resize', checkScreenSize);
});