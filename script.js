function scrollToSection(id) {
   document.getElementById(id).scrollIntoView({ behavior: "smooth" });
 }
 
 const buttons = document.querySelectorAll(".sidebar nav button");
 const sections = document.querySelectorAll("main .section");
 
const observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       const id = entry.target.getAttribute("id");
 
       if (entry.isIntersecting) {
         buttons.forEach((btn) => {
           btn.classList.toggle("active", btn.dataset.section === id);
         });
       }
     });
   },
   {
     root: null,
     threshold: 0.3, // Trigger when 50% of the section is visible
   }
);
 
// Observe each section
sections.forEach((section) => observer.observe(section));

const spotlight = document.querySelector('.cursor-spotlight');

document.addEventListener('mousemove', (e) => {
  const x = `${e.clientX}px`;
  const y = `${e.clientY}px`;
  spotlight.style.setProperty('--x', x);
  spotlight.style.setProperty('--y', y);
});