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
window.addEventListener("load", () => {
    dropDownOpenClose()
})