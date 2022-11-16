// Exercise 4 : Volume Of A Sphere

var form = document.getElementById('MyForm');
form.addEventListener('submit', calculateVolume);

function calculateVolume(e) {
    let volume_field = form.elements.volume;
    let radius = form.elements.radius.value;
    let volume = 4 / 3 * Math.PI * Math.pow(parseInt(radius), 3);
    volume_field.value = volume;
    e.preventDefault();
}

console.log(form);