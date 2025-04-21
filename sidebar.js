class SideBar extends HTMLElement {
   connectedCallback() {
     this.innerHTML = `
       <aside class="sidebar">
         <h1>Hello, I'm Nikhil</h1>
         <h2>Software Engineer</h2>
         <p>I'm a rising junior studying computer science at the University of California, San Diego with a passion for problem solving!</p>
 
         <nav>
           <ul>
             <li><button data-section="about" onclick="scrollToSection('about')">About</button></li>
             <li><button data-section="experience" onclick="scrollToSection('experience')">Experience</button></li>
             <li><button data-section="projects" onclick="scrollToSection('projects')">Projects</button></li>
           </ul>
         </nav>
 
         <a class="resume-btn" href="NikhilAkitiResume.pdf" target="_blank">Resume</a>
 
         <div class="socials">
           <a href="https://linkedin.com/in/nikhil-akiti-445bb6242/" target="_blank">
             <i class="fa-brands fa-linkedin"></i>
           </a>
           <a href="mailto:nikhilakiti91@gmail.com">Email</a>
           <a href="https://github.com/nakiti" target="_blank">GitHub</a>
         </div>
       </aside>
     `;
   }
 }
 
 customElements.define('side-bar', SideBar);
 