document.addEventListener('DOMContentLoaded', function () {
    loadFormData();

    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sendMessage();
    });

    const inputFields = document.querySelectorAll('.input-field');
    inputFields.forEach(field => {
        field.addEventListener('input', saveFormData);
    });

    const gitButton = document.querySelector('.git');
    gitButton.addEventListener('click', function () {
        window.location.href = 'https://github.com/RifkiJunn';
    });
});

function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
        alert('Your message has been sent successfully!');
        
        document.querySelector('form').reset();
        localStorage.removeItem('contactFormData');
    } else {
        alert('Please fill out all fields before submitting.');
    }
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function () {
    if (!isValidEmail(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
        emailInput.setCustomValidity('');
    }
});

function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('contactFormData');

    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('message').value = formData.message;
    }
}
