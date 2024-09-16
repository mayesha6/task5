const menu = document.getElementById("menu");
const login = document.getElementById("login");
const menuIcon = document.getElementById("menu-bar");
const menuCloseBtn = document.getElementById("close-btn");

menuIcon.addEventListener("click", ()=>{
    menu.style.display="block";
    login.style.display="block";
    menuCloseBtn.style.display="block";
    menuIcon.style.display="none";
})
menuCloseBtn.addEventListener("click", ()=>{
    menu.style.display="none";
    login.style.display="none";
    menuCloseBtn.style.display="none";
    menuIcon.style.display="block";
})
