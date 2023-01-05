const form = document.forms.sendForm;

const getInputs = () => {
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    console.log(data)
    return data
};

const sendMessage = (e) => {
    e.preventDefault();
    const {email, message} = getInputs();
    window.location.href = `http://localhost:8080/formData?email=${email}&message=${message}`;
}

form.addEventListener('submit', sendMessage);