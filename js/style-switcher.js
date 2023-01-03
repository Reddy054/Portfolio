// ========== Toggle Style Switcher ==========

let styleSwitcher = document.querySelector(".style-switcher-toggler");

styleSwitcher.addEventListener("click", () => {
    
    document.querySelector(".style-switcher").classList.toggle("open")
});


// Hide Style Switcher On Scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){

        document.querySelector(".style-switcher").classList.remove("open")
    };    
});


// ========== Theme Colors ==========


const data = {
   
    1: "css/skins/color-1.css",
    2: "css/skins/color-2.css",
    3: "css/skins/color-3.css",
    4: "css/skins/color-4.css",
    5: "css/skins/color-5.css",
}

const alternateStyles = document.querySelector(".alternate-style");

function setActiveStyle(id) {

    alternateStyles.setAttribute("href", data[id]);
}



// ========== Background Change ==========

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
        
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
});