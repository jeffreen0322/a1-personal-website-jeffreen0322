var menu = document.getElementById("menu");
var menuItems = document.getElementsByClassName("index");
var sideBarHidden = menuItems[0].getAttribute("display") == null;

console.log(sideBarHidden);

menu.addEventListener("click", (event) => {

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