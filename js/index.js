window.onload = function() {
    let logoMenu = document.getElementById('contain-logo');
    logoMenu.addEventListener('click', clickLogo);
    function clickLogo() {
        var hiddenMenu = document.getElementById('email-session');
        var visibility = hiddenMenu.style.visibility;
        if (visibility == 'hidden') {
            hiddenMenu.style.visibility = 'visible';
            hiddenMenu.style.opacity = 1;
        }
        else if (visibility == 'visible') {
            hiddenMenu.style.visibility = 'hidden';
            hiddenMenu.style.opacity = 0;
        }
        else {
            hiddenMenu.style.visibility = 'visible';
            hiddenMenu.style.opacity = 1;
        }  
    }
    function upDown() {
        var hiddenMenu = document.getElementById('email-session');
        if (window.matchMedia('screen and (max-width:520px) and (max-aspect-ratio: 77/100)').matches) {
            
        } else {
            hiddenMenu.classList.add ('first-anim');
        }
    }
    upDown();
    
    function appear() {
        var textAppear = document.querySelector('div.titulo');
        var textAppear2 = document.querySelector('div.subtitulo');
        textAppear.classList.add('appear-effect');
        textAppear2.classList.add('appear-effect');
    }
    appear();

    var inputMail = document.getElementById('email');
    inputMail.addEventListener('focus',madeiraPulse);
    inputMail.addEventListener('blur',madeiraPulse);
    function madeiraPulse() {
        var logoMade = document.querySelector('.logo-madeira');
        var inputMail = document.getElementById('email');
        if (inputMail === document.activeElement) {
            logoMade.classList.add('pulse-effect');
        } else {
            logoMade.classList.remove('pulse-effect');
        }
    }
}