document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };
  
    fetch('https://europe-west2-gcp-project-425513.cloudfunctions.net/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting the form');
    });
  });
  
  