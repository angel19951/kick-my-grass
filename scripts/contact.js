document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this);
    
    fetch('/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => alert('Email sent successfully!'))
    .catch(error => alert('Error sending email.'));
});
