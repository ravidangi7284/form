document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName").value;
    const firstNameError = document.getElementById("firstNameError");
    if (firstName.trim() === "") {
        firstNameError.textContent = "First name is required.";
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstNameError.style.display = "none";
    }

    const lastName = document.getElementById("lastName").value;
    const lastNameError = document.getElementById("lastNameError");
    if (lastName.trim() === "") {
        lastNameError.textContent = "Last name is required.";
        lastNameError.style.display = "block";
        isValid = false;
    } else {
        lastNameError.style.display = "none";
    }

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            email: email,
            password: password
        };
        console.log(formData);
    }
});
