var sideBarHidden = false;
var menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
    var menuItems = document.getElementsByClassName("index");

    if(sideBarHidden) {
        sideBarHidden = false;
        for (let i = 0; i < menuItems.length; ++i) {
            menuItems[i].style.display = "block";
          }        
    } else{
        sideBarHidden = true;
        for (let i = 0; i < menuItems.length; ++i) {
            menuItems[i].style.display = "none";
        }        
    }
});