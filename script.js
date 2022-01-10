const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const wrapper = document.querySelector(".wrapper")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  wrapper.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    wrapper.classList.remove("active")
  }))

let about = document.querySelector(".about-button");
about.addEventListener('click', () => {
    let about_open = document.querySelector(".about-open");
    about_open.classList.toggle("open");
    if (about.innerHTML === "About Me") about.innerHTML = "That's too much";
    else about.innerHTML = "About Me";
})





