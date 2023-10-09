document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", function() {
        if (window.pageYOffset >= navOffset) {
            nav.classList.add("fixed");
        } else {
            nav.classList.remove("fixed");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        goToBackPage();
    });
});
function goToRecipePage() {
    window.open("http://127.0.0.1:5501/Recipe/Recipe.html", "_blank");  }
    

function goToGridRecipePage() {
    window.open("http://127.0.0.1:5501/GridEdit/Grid.html", "_blank");  }    

function goToTextToPage(){
    window.open("http://127.0.0.1:5501/assignment5/index.html", "_blank");  
}
function goToRegisterPage() {
    window.open("http://127.0.0.1:5501/assignment6/register.html", "_blank");  }
    

function goToLoginPage() {
    window.open("http://127.0.0.1:5501/assignment6/login.html", "_blank");  }    

function goToGameBoxage(){
    window.open("http://127.0.0.1:5501/assignment7/index.html", "_blank");  
}
function goToSoulEscapePage(){
    window.open("https://play.google.com/store/apps/details?id=com.Pie.Game");
}
function goToProjectPage(){
    window.location.replace("http://127.0.0.1:5501/Project.html");
}
function goToBackPage() {
    window.location.href = "http://127.0.0.1:5501/PortFolio.html";
}
function goToRefBG() {
    window.open("https://img.freepik.com/free-vector/halftone-background-with-waves_23-2148907690.jpg?w=1380&t=st=1696874238~exp=1696874838~hmac=317837af9b57389d176f2fe10ca40f4dec4e239a0cc9604888119dc65d5f9179");
}
function goToRefIcon() {
    window.open("https://fontawesome.com/icons");
}