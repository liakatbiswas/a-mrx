let contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name.length === 0) {
        alert('Please input Name');
    } else if (email.length === 0) {
        alert('Please enter Email');
    } else if (phone.length === 0) {
        alert('Please enter phone');
    }



});
