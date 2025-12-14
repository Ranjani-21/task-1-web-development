function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (name === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
    }
}
