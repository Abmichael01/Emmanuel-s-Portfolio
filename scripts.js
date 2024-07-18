const menu = document.querySelector(".menu")
const closeMenu = document.querySelector(".close-menu")
const nav = document.querySelector("nav")
const home = document.querySelector(".hero")
const about = document.querySelector(".about")
const contact = document.querySelector(".contact")
const homeBtn = document.querySelector(".home-btn")
const aboutBtn = document.querySelector(".about-btn")
const contactBtns = document.querySelectorAll(".contact-btn")


function scrollToElementWithOffset(element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 50;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
    
    nav.classList.remove("toggle-nav")
}

homeBtn.addEventListener("click", () => {
    scrollToElementWithOffset(home)
}) 

aboutBtn.addEventListener("click", () => {
    scrollToElementWithOffset(about)
})

contactBtns.forEach(contactBtn=>{
    contactBtn.addEventListener("click", () => {
        scrollToElementWithOffset(contact)
    })
})

menu.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav")
})

closeMenu.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav")
})