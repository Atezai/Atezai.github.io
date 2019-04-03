var paralaxObjects = document.getElementsByClassName("paralax");

InitializeParalaxEffect();

function InitializeParalaxEffect(){
  for(var i = 0; i < paralaxObjects.length; i++){
    paralaxObjects[i].style.backgroundPositionX = i*i*500 + "px";
    paralaxObjects[i].style.opacity = 1 - i/9;
  }
  ParalaxEffect();
}

function ParalaxEffect(){
  for(var i = 0; i < paralaxObjects.length; i++){
    paralaxObjects[i].style.backgroundPositionY =  (i * 300) - window.scrollY/Math.max(1.3, i+1) + "px";
  }
}
