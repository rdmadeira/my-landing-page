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
}