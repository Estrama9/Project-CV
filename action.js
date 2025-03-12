const page = document.querySelector("body");
const btnDark = document.getElementById("dark");
const btnLight = document.getElementById("light");
const flexcont = document.getElementsByClassName("flex-container")[0];
const asidecont = document.getElementsByClassName("aside-container")[0];
const insidecont = document.getElementsByClassName("inside-container")[0];
const profilcont = document.getElementsByClassName("profil")[0];
const contactcont = document.getElementsByClassName("contact")[0];
const maincont = document.getElementsByClassName("main-container")[0];
const maincontentcont = document.getElementsByClassName("main-content")[0];
const licont = document.querySelectorAll("ul.skills > li");
const btnNav = document.getElementsByClassName("menu-btn")[0];
const navBar = document.getElementsByClassName("nav-bar")[0]

btnDark.addEventListener("click", () => {
    page.style.backgroundColor = "black";
    page.style.color = "white";
    flexcont.style.backgroundColor = "black";
    asidecont.style.backgroundColor = "black";
    insidecont.style.backgroundColor = "black";
    profilcont.style.backgroundColor = "black";
    contactcont.style.backgroundColor = "black";
    maincont.style.backgroundColor = "black";
    maincontentcont.style.backgroundColor = "black";

    // Loop through each list item and apply dark theme
    licont.forEach((li) => {
        li.style.backgroundColor = "black";
        li.style.color = "white";  // Optional: Change text color for better visibility in dark mode
    });
});

btnLight.addEventListener("click", () => {
    page.style.backgroundColor = "";
    page.style.color = "";
    flexcont.style.backgroundColor = "";
    asidecont.style.backgroundColor = "";
    insidecont.style.backgroundColor = "";
    profilcont.style.backgroundColor = "";
    contactcont.style.backgroundColor = "";
    maincont.style.backgroundColor = "";
    maincontentcont.style.backgroundColor = "";
    
    // Loop through each list item and reset to light theme
    licont.forEach((li) => {
        li.style.backgroundColor = "";
        li.style.color = "black";  // Reset text color for better visibility in light mode
    });
});


let toggle = false

btnNav.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        navBar.style.display = "block"; // Show nav bar
    } else {
        navBar.style.display = "none"; // Hide nav bar
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
        navBar.style.display = "flex"
        toggle = false
    }else if (window.innerWidth <= 1050) {
        navBar.style.display = "none"
    }
})

