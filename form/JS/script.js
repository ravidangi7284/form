document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Form validation
    if (!firstName || !lastName) {
        alert("First and Last Name are required.");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert("Invalid phone number.");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Log form data to console
    const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
        password: password
    };
    console.log(formData);
    alert("Form submitted successfully!");
});
