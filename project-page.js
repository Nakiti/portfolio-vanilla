class ProjectPage extends HTMLElement {
   connectedCallback() {
      const title = this.getAttribute("title");
      const github = this.getAttribute("github");
      const description = this.getAttribute("description")?.replace(/\n/g, "<br><br>") || "";
      const images = JSON.parse(this.getAttribute("images") || "[]");

      const shadow = this.attachShadow({ mode: "open" });

      const wrapper = document.createElement("div");
      wrapper.innerHTML = `
         <div class="project-page">
            <a href="/" class="back-btn">← Back to Home</a>
            <h1 class="project-title">${title}</h1>
            <div class="project-content">
               <div class="left">
                  <div class="carousel-gallery">
                     <button class="nav left">‹</button>
                     <img class="carousel-img" src="${images[0]}" alt="Project image" />
                     <button class="nav right">›</button>
                  </div>
                  <a href="${github}" target="_blank" class="project-github">↗ View on GitHub</a>
               </div>
               <div class="right">
                  <p class="project-description">${description}</p>
               </div>
            </div>
         </div>
      `;

      const style = document.createElement("style");
      style.textContent = `
         .back-btn {
            display: inline-block;
            font-size: 0.95rem;
            color: #5eead4;
            text-decoration: none;
            border: 1px solid #5eead4;
            padding: 6px 12px;
            border-radius: 8px;
            transition: background 0.2s ease;
         }

         .back-btn:hover {
            background: rgba(94, 234, 212, 0.1);
         }
         .project-page {
            padding: 60px 40px;
            max-width: 1100px;
            margin: auto;
            background: #0a192f;
            color: #e0e0e0;
            font-family: sans-serif;
         }

         .project-title {
            font-size: 2rem;
            margin-bottom: 12px;
            color: white;
         }

         .project-content {
            display: flex;
            flex-direction: row;
            gap: 40px;
         }

         .left {
            flex: 1;
            max-width: 600px;
         }

         .right {
            flex: 1;
            display: flex;
            align-items: center;
         }

         .project-github {
            display: inline-block;
            margin-top: 12px;
            font-size: 1.1rem;
            color: #5eead4;
            text-decoration: none;
         }

         .project-description {
            font-size: 1rem;
            color: #cbd5e1;
            line-height: 1.7;
            white-space: pre-wrap;
         }

         .carousel-gallery {
            position: relative;
            width: 100%;
            height: 300px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
         }

         .carousel-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 12px;
            opacity: 1;
            transition: opacity 0.4s ease-in-out;
         }

         .nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255,);
            color: gray;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 6px 14px;
            z-index: 2;
            opacity: 1;
            border-radius: 30px;
         }

         .nav.left {
            left: 10px;
         }

         .nav.right {
            right: 10px;
         }

         @media (max-width: 800px) {
            .project-content {
               flex-direction: column;
            }
            .right {
               align-items: flex-start;
            }
         }
      `;

      shadow.appendChild(style);
      shadow.appendChild(wrapper);

      const imgEl = shadow.querySelector(".carousel-img");
      const prevBtn = shadow.querySelector(".nav.left");
      const nextBtn = shadow.querySelector(".nav.right");

      let index = 0;
      let timer;

      function updateImage(newIndex) {
         imgEl.style.opacity = 0;
         setTimeout(() => {
            imgEl.src = images[newIndex];
            imgEl.style.opacity = 1;
         }, 200);
      }

      function showNext() {
         index = (index + 1) % images.length;
         updateImage(index);
      }

      function showPrev() {
         index = (index - 1 + images.length) % images.length;
         updateImage(index);
      }

      function startAutoScroll() {
         timer = setInterval(showNext, 5000);
      }

      function resetAutoScroll() {
         clearInterval(timer);
         startAutoScroll();
      }

      prevBtn.addEventListener("click", () => {
         showPrev();
         resetAutoScroll();
      });

      nextBtn.addEventListener("click", () => {
         showNext();
         resetAutoScroll();
      });

      startAutoScroll();
   }
}

customElements.define("project-page", ProjectPage);
