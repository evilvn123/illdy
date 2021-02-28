const preloader = document.getElementById('preloader');
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){
        preloader.classList.add('loaded');
    }, 1300);
    preloader.classList.remove('loaded');
})