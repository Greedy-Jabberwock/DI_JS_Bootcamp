// In your Javascript file add the functionality which will allow you to drag 
// the box and drop it into the target. 

const box = document.getElementById('box');

box.draggable = true;
box.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
});


const target = document.getElementById('target');
target.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
});
target.addEventListener('drop', (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text/plain');
    e.target.appendChild(document.getElementById(data));
});