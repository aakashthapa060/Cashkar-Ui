let sideNavOpen = false;
function sideNavOpenClose(){
    let sideNav = $(".container .dashboard_nav");
    let hamBurger = $(".container .top_nav .wrapper .ham_burger_menu")
    hamBurger.click(() => {
        if(sideNavOpen === true){
            sideNav.show()
            sideNavOpen = false
        }
        else if(sideNavOpen === false){
            sideNav.hide()
            sideNavOpen = true
        }
    })

}

let accountSetting_open = false

function TopNavExtraMenu(){
    let topNav_optionMenu = $(".top_nav .wrapper .user_content .user_info")
    topNav_optionMenu.click(() => {
        if(accountSetting_open === false){
            $(".top_nav .wrapper .user_content .profile_drop_down").fadeIn()
            accountSetting_open = true
        }
        else if(accountSetting_open === true){
            $(".top_nav .wrapper .user_content .profile_drop_down").fadeOut()
            accountSetting_open = false
        }
    })
}
window.addEventListener("load", () => {
    sideNavOpenClose()
    TopNavExtraMenu()
})