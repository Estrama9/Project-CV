const page = document.querySelector("body");
const btnDark = document.getElementById("dark");
const btnLight = document.getElementById("light");
const flexcont = document.getElementsByClassName("flex-container")[0]
const asidecont = document.getElementsByClassName("aside-container")[0]
const insidecont = document.getElementsByClassName("inside-container")[0]
const profilcont = document.getElementsByClassName("profil")[0]
const contactcont = document.getElementsByClassName("contact")[0]
const maincont = document.getElementsByClassName("main-container")[0]
const maincontentcont = document.getElementsByClassName("main-content")[0]
const licont = document.querySelectorAll("li")

btnDark.addEventListener("click", () => {
    page.style.backgroundColor = "black";
    page.style.color = "white";
    flexcont.style.backgroundColor = "black"
    asidecont.style.backgroundColor = "black"
    insidecont.style.backgroundColor = "black"
    profilcont.style.backgroundColor = "black"
    contactcont.style.backgroundColor = "black"
    maincont.style.backgroundColor = "black"
    maincontentcont.style.backgroundColor = "black"
    licont.style.backgroundColor = "black"
});

btnLight.addEventListener("click", () => {
    page.style.backgroundColor = "white";
    page.style.color = "black";
});


// if (btnDark === true) {
//     btnLight = false
//     page.style.color = "black"
// }
// else if (btnLight === true) {
//     btnDark = true
//     page.style.color = "white"
// }