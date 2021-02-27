// $(document).ready(function() {
//     setTimeout(function(){
//         $('.preloader').addClass('loaded');
//     }, 1500);
//     $('.preloader').removeClass('loaded');
// });
const preloader = document.getElementById('preloader');
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function(){
        preloader.classList.add('loaded');
    }, 1500);
    preloader.classList.remove('loaded');
})