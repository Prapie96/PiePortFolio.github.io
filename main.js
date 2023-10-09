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
function goToRecipePage() {
    window.open("http://127.0.0.1:5500/Recipe/Recipe.html", "_blank");  }
    

function goToGridRecipePage() {
    window.open("http://127.0.0.1:5500/GridEdit/Grid.html", "_blank");  }    

function goToTextToPage(){
    window.open("http://127.0.0.1:5500/assignment5/index.html", "_blank");  
}
function goToRegisterPage() {
    window.open("http://127.0.0.1:5500/assignment6/register.html", "_blank");  }
    

function goToLoginPage() {
    window.open("http://127.0.0.1:5500/assignment6/login.html", "_blank");  }    

function goToGameBoxage(){
    window.open("http://127.0.0.1:5501/assignment7/index.html", "_blank");  
}
function goToSoulEscapePage(){
    window.open("https://play.google.com/store/apps/details?id=com.Pie.Game");
}

