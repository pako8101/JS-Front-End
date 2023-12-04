function create(words) {
   const container = document.querySelector('#content');
 
 function createDiv(word) {

   
   const div = document.createElement("div");
   const p = document.createElement("p");
   p.textContent = word 
   p.style.display = 'none';

   div.appendChild(p);
   div.addEventListener('click',(e) => {
     const invisibleParagraph = e.currentTarget.querySelector('p');
      invisibleParagraph.style.display = 'block';
   });
   return div;
  } 
  words.forEach(word => {
   container.appendChild(createDiv(word));
  });
 
}