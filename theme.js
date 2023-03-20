// Set the defualt theme to light if one is set in the localStorage browser



function setDefaultTheme(){
            
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/*  Set the body of the HTML to the selected theme. If it hasn't be selected, then it will 
    be light*/
    
function setSelectedTheme(){
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

