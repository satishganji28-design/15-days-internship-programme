const footerYear = document.querySelector(".footer-year");
if(footerYear){
    footerYear.textContent = new Date().getFullYear();
}
 
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
     menuToggle.setAttribute("aria-expanded");
     navLinks.classList.contains("open");
})