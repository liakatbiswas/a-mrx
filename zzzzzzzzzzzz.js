let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name.length === 0) {
        alert("Please input Name");
    } else if (email.length === 0) {
        alert("Please enter Email");
    } else if (phone.length === 0) {
        alert("Please enter phone");
    } else {
        let formData = {
            fullName: name,
            email: email,
            phone: phone,
            message: message,
        };
        let URI = "/contactRequest";

        // loader show
        document.getElementById("loading-div").classList.remove("d-none");
        document.getElementById("content-div").classList.add("d-none");

        let result = await axios.post(URI, formData);

        // loader hide
        document.getElementById("loading-div").classList.add("d-none");
        document.getElementById("content-div").classList.remove("d-none");

        if (result.status === 200 && result.data === 1) {
            alert("Successfull");
            contactForm.reset();
        } else {
            alert("Something is wrong");
        }
    }
});
