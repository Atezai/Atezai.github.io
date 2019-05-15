var nav_element = document.getElementById("Navigation");
var nav_button_open = document.getElementById("Navigation_Open");
var nav_button_close = document.getElementById("Navigation_Close");
var nav_opened = false;

function NavButtonAction(){
    if(nav_opened){
        HideNav();
    }else{
        ShowNav();
    }
}

function ShowNav(){
    nav_button_open.style.display = "none";
    nav_button_close.style.display = "block";
    nav_element.className = "fullscreen-nav";
    document.body.style.height = "10vh";
    document.body.style.overflow = "hidden";
    nav_opened = true;
}

function HideNav(){
    if(window.innerWidth >= 1400)
        nav_button_open.style.display = "none";
    else
        nav_button_open.style.display = "block";
    nav_button_close.style.display = "none";
    nav_element.className = "";
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
    nav_opened = false;
}