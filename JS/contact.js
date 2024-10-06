document.getElementById('FormInput').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const message = document.getElementById('message').value; 

    if (name && email && message) {
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            to_name: 'Ally Cady',
            message: message,
            to_email: 'ac@allycadyphotos.com',
        })
        .then(function(response) {
            document.getElementById('FormMessage').innerText = 'Thank you for reaching out! The photographer will get back to you as soon as possible!';
        }, function(error) {
            document.getElementById('FormMessage').innerText = 'There was an error sending the message. Please try again later.';
        });
    } else {
        document.getElementById('FormMessage').innerText = 'Please fill out all fields';
    }
});
