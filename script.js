
gsap.from(".header",{
    duration: 4,
    y: -100,
    opacity: 0,
    ease: "bounce"
})
/*gsap.from(".images img", {
    duration: 3,
    x: -500,
    opacity: 0,
    scale: 0.5,       // icons grow from half size
    ease: "back.out(1.7)",
    stagger: 0.2
});*/
// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".images img", {       
        duration: 1,                  
        x: -100,                      
        opacity: 0,                    
        ease: "power2.out",           
        stagger: 0.2                  
    });
});

const homeBtn = document.getElementById("homeBTN");
const aboutBtn = document.getElementById("aboutBTN");
const contactBtn = document.getElementById("ContactBTN");

const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const contactSection = document.getElementById("contactSection");

function showSection(sectionToShow) {
    
 // hide all
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";

    // show chosen
    sectionToShow.style.display = "block";

    // animate section reveal
    gsap.from(sectionToShow, { opacity: 0, y: 30, duration: 0.5 });
}

  homeBtn.addEventListener("click", () => showSection(homeSection));
  aboutBtn.addEventListener("click", () => showSection(aboutSection));
  contactBtn.addEventListener("click", () => showSection(contactSection));
;




