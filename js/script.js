const open_navIcon = document.querySelector(".nav-open");
const close_navIcon = document.querySelector(".nav-close");
const home = document.querySelector(".home");
const mobile_menu = document.querySelector(".nav-mobile");

open_navIcon.addEventListener("click",(e)=>{
    if (open_navIcon.classList.contains("nav-display")){
        open_navIcon.classList.remove("nav-display");
        close_navIcon.classList.add("nav-display");
        mobile_menu.classList.add("nav-down");
        home.classList.add("home-darken");
    }
})

close_navIcon.addEventListener("click", (e)=>{
    if (close_navIcon.classList.contains("nav-display")){
        close_navIcon.classList.remove("nav-display");
        open_navIcon.classList.add("nav-display");
        mobile_menu.classList.remove("nav-down");
        home.classList.remove("home-darken");
    }
})
