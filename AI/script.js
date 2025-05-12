// Autofill function to populate form with "Janarthanan M"
function autofillForm() {
    document.getElementById('name').value = "Janarthanan M";
    document.getElementById('email').value = "janarthanan@example.com";
    document.getElementById('phone').value = "987-654-3210";
}

// Basic form validation and storing data in localStorage
document.getElementById('smartForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';

    // Validate Full Name
    const name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required!";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email!";
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = "Please enter a valid phone number (xxx-xxx-xxxx)!";
        isValid = false;
    }

    // If all fields are valid, save data to localStorage and redirect
    if (isValid) {
        // Get existing records from localStorage or create an empty array if none exist
        let records = JSON.parse(localStorage.getItem('userRecords')) || [];

        // Add the new form data to the records
        records.push({
            name: name,
            email: email,
            phone: phone
        });

        // Save the updated records back to localStorage
        localStorage.setItem('userRecords', JSON.stringify(records));

        // Redirect to the confirmation page (where we will show the saved data)
        window.location.href = 'result.html';
    }
});
