document.addEventListener('DOMContentLoaded', function() {
    var msgCookies = document.getElementById('cookies-msg');

    function aceito() {
        localStorage.lgpd = 'sim';
        msgCookies.classList.remove('mostrar');
    }

    if (localStorage.lgpd === 'sim') {
        msgCookies.classList.remove('mostrar');
    } else {
        msgCookies.classList.add('mostrar');
    }

    document.querySelector('.cookies-btn button').addEventListener('click', aceito);
});
