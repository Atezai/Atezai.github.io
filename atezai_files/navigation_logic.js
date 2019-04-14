var nav_element = document.getElementById("Navigation");
var nav_button_element = document.getElementById("Navigation_Button");
var nav_opened = false;

function NavButtonAction(){
    if(nav_opened){
        HideNav();
    }else{
        ShowNav();
    }
}

function ShowNav(){
    nav_button_element.className = "nav-close-button";
    nav_element.className = "fullscreen-nav";
    document.body.style.height = "10vh";
    nav_opened = true;
}

function HideNav(){
    nav_button_element.className = "nav-button";
    nav_element.className = "";
    document.body.style.height = "auto";
    nav_opened = false;
}