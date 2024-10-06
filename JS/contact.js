document.getElementById('FormInput').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const message = document.getElementById('message').value; 

    if(name && email && message){
        document.getElementById('FormMessage').innerText = 'Thank you for reaching out! The photographer will get back to you as soon as possible!'; 
        document.getElementById('FormMessage').reset(); 
    }
    else{
        document.getElementById('FormMessage').innerText = 'Please fill out all fields';
    }
})
