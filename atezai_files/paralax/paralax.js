var paralaxObjects = document.getElementsByClassName("paralax");

function ParalaxEffect(){
  for(var i = 0; i < paralaxObjects.length; i++){
    paralaxObjects[i].style.opacity = 1 - i/9;
    paralaxObjects[i].style.backgroundPositionX = i*i*300 + "px";
    paralaxObjects[i].style.backgroundPositionY =  (i * 300) - window.scrollY/Math.max(1.3, i+1) + "px"; 
  }
}
