function gohome(){

   window.location.href = "main.html";
     document.getElementById("bhome").className = "buttonTopBarActive";
     document.getElementById("bapps").className = "buttonTopBar";
     document.getElementById("bgames").className = "buttonTopBar";
     document.getElementById("bmodels").className = "buttonTopBar";

}

function gogames(){
   window.location.href = "games.html";
     document.getElementById("bgames").className = "buttonTopBarActive";
     document.getElementById("bhome").className = "buttonTopBar";
     document.getElementById("bapps").className = "buttonTopBar";
     document.getElementById("bmodels").className = "buttonTopBar";
}

function goapplications(){
   window.location.href = "applications.html";
     document.getElementById("bapps").className = "buttonTopBarActive";
     document.getElementById("bhome").className = "buttonTopBar";
     document.getElementById("bgames").className = "buttonTopBar";
     document.getElementById("bmodels").className = "buttonTopBar";
}

function gomodels(){
   window.location.href = "models.html";
     document.getElementById("bmodels").className = "buttonTopBarActive";
     document.getElementById("bhome").className = "buttonTopBar";
     document.getElementById("bapps").className = "buttonTopBar";
     document.getElementById("bgames").className = "buttonTopBar";
}
function bodgrey(){
  window.setTimeout(function(){ bodygreyy.style.display = 'none';}, 400);
}
