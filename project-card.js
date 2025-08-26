class ProjectCard extends HTMLElement {
   constructor() {
     super();
      const shadow = this.attachShadow({ mode: 'open' });

      const wrapper = document.createElement('div');
      wrapper.classList.add('project-card');

      const img = document.createElement('img');
      img.src = this.getAttribute('img');
      img.alt = this.getAttribute('title');
      img.className = 'project-img';

      const content = document.createElement('div');
      content.className = 'project-content';

      const header = document.createElement('div');
      header.className = 'project-header';
      header.innerHTML = `
         <h2>${this.getAttribute('title')}</h2>
         <a href="${this.getAttribute('link')}" target="_blank">↗</a>
      `;

      const description = document.createElement('p');
      description.className = 'project-description';
      description.textContent = this.getAttribute('description');

      const tagsWrapper = document.createElement('div');
      tagsWrapper.className = 'project-tags';
      const tags = this.getAttribute('tags')?.split(',') || [];
      tags.forEach(tag => {
         const span = document.createElement('span');
         span.textContent = tag.trim();
         tagsWrapper.appendChild(span);
      });
 
      content.appendChild(header);
      content.appendChild(description);
      content.appendChild(tagsWrapper);

      wrapper.appendChild(img);
      wrapper.appendChild(content);

      const link = this.getAttribute('link');

      wrapper.addEventListener('click', (e) => {
      // Prevent clicks on the ↗ link from triggering the wrapper click
      if (e.target.tagName.toLowerCase() !== 'a' && link) {
         window.location.href = link
      }
      });

      const style = document.createElement('style');
      style.textContent = `
      .project-card {
        display: flex;
        align-items: flex-start;
        border-radius: 16px;
        padding: 24px;
        gap: 20px;
        margin-bottom: 40px;
        background-color: transparent;
        transition: background 0.3s;
      }
    
      .project-card:hover {
        background-color: #112240;
        cursor: pointer;
      }
    
      .project-img {
        width: 220px;
        height: 150px;
        object-fit: contain;
        flex-shrink: 0;
        border-radius: 8px;
      }
    
      .project-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    
      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        gap: 10px;
      }
    
      .project-header h2 {
        font-size: 1.3rem;
        color: #f1f5f9;
        margin: 0;
        flex: 1;
      }
    
      .project-header a {
        font-size: 1.1rem;
        color: #46ecd5;
        text-decoration: none;
        white-space: nowrap;
      }
    
      .project-header a:hover {
        color: #7dd3fc;
      }
    
      .project-description {
        font-size: 0.92rem;
        color: #cbd5e1;
        line-height: 1.6;
        margin: 8px 0 16px;
      }
    
      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
    
      .project-tags span {
        background-color: #1e293b;
        color: #46ecd5;
        font-size: 0.75rem;
        padding: 6px 12px;
        border-radius: 999px;
        white-space: nowrap;
      }
    
      /* Responsive styles */
      @media (max-width: 768px) {
        .project-card {
          flex-direction: column;
          padding: 16px;
        }
    
        .project-img {
          width: 100%;
          height: auto;
          max-height: 180px;
          margin-bottom: 16px;
        }
    
        .project-header {
          flex-direction: row;
          align-items: flex-start;
        }
    
        .project-header a {
          margin-top: 4px;
        }
      }
    `;
 
     shadow.appendChild(style);
     shadow.appendChild(wrapper);
   }
}
 
customElements.define('project-card', ProjectCard);
 