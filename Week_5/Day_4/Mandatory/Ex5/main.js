// Exercise 5 : Event Listeners

let p = document.getElementsByTagName('p')[0];
p.style.fontSize = '30px';
console.log(p);
p.addEventListener('click', (e)=>e.target.style.fontStyle = 'italic');
p.addEventListener('dblclick', (e)=>e.target.style.color = 'violet');
p.addEventListener('mouseover', (e)=>e.target.style.fontFamily = 'Segoe UI');
p.addEventListener('mouseout', (e)=>e.target.style.margin = '20px');