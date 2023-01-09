const form = document.forms.register_form;

const noEmptyFields = (elems) => {
    for (el of elems) {
        if (!Boolean(el.value)) {
            return false
        }
    }
    return true;
}

const timer = setInterval(() => {
    if (noEmptyFields(form.elements)) {
        form.elements.submit.disabled = false;        
    }
}, 10);

const register = async () => {
    clearInterval(timer);
    const elems = form.elements;
    const userdata = {};
    for (item of elems) {
        userdata[item.name] = item.value;
    }
    
    await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
}

form.addEventListener('submit', register)

