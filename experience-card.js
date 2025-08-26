class ExperienceCard extends HTMLElement {
   constructor() {
     super();
     const shadow = this.attachShadow({ mode: 'open' });
 
     const wrapper = document.createElement('div');
     wrapper.classList.add('experience-card');
 
     const date = this.getAttribute('date');
     const title = this.getAttribute('title');
     const company = this.getAttribute('company');
     const link = this.getAttribute('link');
     const description = this.getAttribute('description') || '';
     const tags = (this.getAttribute('tags') || '').split(',');
 
     wrapper.innerHTML = `
       <div class="header-row">
         <div class="title-wrap">
           <span class="title">${title}</span>
           <a href="${link}" target="_blank" class="company">· ${company} ↗</a>
         </div>
         <p class="date">${date}</p>
       </div>
 
       <p class="desc">${description.replace(/\n/g, "<br/>")}</p>
 
       <div class="tags">
         ${tags.map(tag => `<span>${tag.trim()}</span>`).join('')}
       </div>
     `;
 
     const style = document.createElement('style');
     style.textContent = `
       .experience-card {
         padding: 24px 0px 24px 0px;
         font-family: sans-serif;
       }
 
       .header-row {
         display: flex;
         align-items: center;
         justify-content: space-between;
         gap: 20px;
         flex-wrap: wrap;
         margin-bottom: 12px;
       }
 
       .date {
         min-width: 140px;
         font-size: 0.8rem;
         color: #94a3b8;
         margin: 0;
         line-height: 1.4;
       }
 
       .title-wrap {
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         gap: 6px;
       }
 
       .title {
         font-weight: 700;
         font-size: 1.1rem;
         color: #f8fafc;
       }
 
       .company {
         font-size: 1.05rem;
         color: #5eead4;
         text-decoration: none;
       }
 
       .company:hover {
         text-decoration: underline;
       }
 
       .desc {
         font-size: 0.9rem;
         color: #cbd5e1;
         line-height: 1.7;
         margin: 10px 0 16px;
         white-space: pre-wrap;
       }
 
       .tags {
         display: flex;
         flex-wrap: wrap;
         gap: 10px;
       }
 
       .tags span {
         background-color: #1e293b;
         color: #5eead4;
         font-size: 0.75rem;
         padding: 6px 12px;
         border-radius: 999px;
         white-space: nowrap;
       }
     `;
 
     shadow.appendChild(style);
     shadow.appendChild(wrapper);
   }
 }
 
 customElements.define('experience-card', ExperienceCard);
 