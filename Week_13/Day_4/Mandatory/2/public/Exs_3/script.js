const div = document.getElementsByTagName('div')[0];

setInterval(()=>{
    div.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
}, 150)