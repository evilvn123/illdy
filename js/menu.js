const body = document.body;
function showMenu() {
    const menu = document.getElementById("menu-responsive");
    menu.classList.toggle('menu-responsive--display');
}

const responsiveMenu = () => {
    const menu = document.getElementById("menu-responsive");
    if (window.innerWidth >= 767) {
       menu.classList.remove('menu-responsive--display');
    }
}
responsiveMenu();
body.onresize = () => responsiveMenu();