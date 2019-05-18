var ProjectBoxDivs = document.getElementsByClassName("project-box");
var ExtraInfoDivs = document.getElementsByClassName("project-info-extra");
var ExtraInfoButtons = document.getElementsByClassName("project-info-extra-button")

for(var i = 0; i < ExtraInfoDivs.length; i++){
    ExtraInfoDivs[i].style.height = "0px";
    //ExtraInfoButtons.addEventListener("click", ExtraInfoButtonAction(this));
}

function ExtraInfoButtonAction(buttonEl){

    for(var i = 0; i < ProjectBoxDivs.length; i++){
        if(ProjectBoxDivs[i].getElementsByClassName("project-info-extra-button")[0] == buttonEl){
            var infoextraDiv = ProjectBoxDivs[i].getElementsByClassName("project-info-extra")[0];
            if(infoextraDiv != null){
                if(infoextraDiv.style.height == "0px")
                {
                    ExpandExtraInfo(i);

                }
                else{
                    FoldExtraInfo(i);
                }
                //break;
            }
        }
        else{
            FoldExtraInfo(i);
        }
    }
}

function FoldExtraInfo(i){
    ExtraInfoDivs[i].style.height = "0";
    
    ExtraInfoButtons[i].innerHTML = "Rozwiń";
    //ExtraInfoButtons[i].classList.remove("project-info-extra-button-fold");
    //ExtraInfoButtons[i].classList.add("project-info-extra-button-expand");
}

function ExpandExtraInfo(i){
    ExtraInfoDivs[i].style.height = "auto";
    
    ExtraInfoButtons[i].innerHTML = "Zwiń";
    //ExtraInfoButtons[i].classList.add("project-fold-button");
    //ExtraInfoButtons[i].classList.add("project-info-extra-button-fold");
    //ExtraInfoButtons[i].classList.remove("project-info-extra-button-expand");
}