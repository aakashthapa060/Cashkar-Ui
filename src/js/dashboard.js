let dropDownOpen = false;
function dropDownOpenClose(){
    $("#dashboard_nav .wrapper .second .profile-info").click(() => {
        if(dropDownOpen === true){
            $("#dashboard_nav .wrapper .second .nav-drop").fadeOut()
            dropDownOpen = false;

        }
        else if(dropDownOpen === false){
            $("#dashboard_nav .wrapper .second .nav-drop").fadeIn()
            dropDownOpen = true;


        }
    })
}
function widthCheacker(sideNav, navOpenClose){
    if(navOpenClose === false){
        sideNav.style.transform = "translateX(-100%)";
    }
    else if(navOpenClose === true){
        sideNav.style.transform = "translateX(0%)";
    }
}

let side_nav_open = true;
function side_nav(navOpenOrNot){
    let sideNav = document.querySelector(".side_nav");
    let hamBurgerMenu = document.querySelector("#dashboard_nav .wrapper .nav-box .hamburger-menu");
    let windowWidth = 0;

    window.addEventListener("resize", () => {
        windowWidth = window.innerWidth;
        if(windowWidth <= 900){
            navOpenOrNot = false;
            widthCheacker(sideNav, navOpenOrNot)
        }
        else if(windowWidth > 900){
            navOpenOrNot = true;
            widthCheacker(sideNav, navOpenOrNot)

        }
    })
    hamBurgerMenu.addEventListener("click", ()=>{
        let overlay = document.createElement("div");
        overlay.id='overlay';
        if(navOpenOrNot === false){
            sideNav.style.transform = "translateX(0%)";
            navOpenOrNot = true;

        }
        else if(navOpenOrNot === true){
            sideNav.style.transform = "translateX(-100%)";
            navOpenOrNot = false;
        }

    })

}
window.addEventListener("load", () => {
    dropDownOpenClose()
    side_nav(side_nav_open)
})