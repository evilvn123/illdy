const body = document.body;
let menuState = false;
function showMenu() {
    const menu = document.getElementById("menu-responsive");
    if(menuState){
        menu.classList = 'menu-responsive menu-responsive--hide';
        menuState = false;
    }
    else{
        menu.classList = 'menu-responsive menu-responsive--display';
        menuState = true;
    }
}

const responsiveMenu = () => {
    const menu = document.getElementById("menu-responsive");
    if (window.innerWidth >= 767) {
        menu.classList = 'menu-responsive menu-responsive--hide';
        menuState = false;
    }
}
responsiveMenu();
body.onresize = () => responsiveMenu();