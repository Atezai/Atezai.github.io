var planet_canvas = document.getElementById('WorldCanvas');

function UnhideEarth(){
    planet_canvas.style.opacity = 1;
}

function HideEarth(){
    planet_canvas.style.opacity = 0;
}

function ViewportResize(){
    
    if(window.innerWidth > 767){
        var size = 200;
        planet_canvas.height = size;
        planet_canvas.width = size;
        
        planet_canvas.style.top = 10;
        planet_canvas.style.left = 30;
    }else{
        var size = Math.min(window.innerWidth, window.innerHeight);
        planet_canvas.height = size;
        planet_canvas.width = size;
        
        planet_canvas.style.top = window.innerHeight/2 - size/2 + 100;
        planet_canvas.style.left = window.innerWidth/2 - size/2;
    }
    
}

ViewportResize();