let nav = document.getElementById("nav-bar");
let list = nav.classList;


nav.onmouseover = function nav_logic(){
    list.add("nav-bar-opened");
};

nav.onmouseout = function nav_logic(){
    list.remove("nav-bar-opened");
};