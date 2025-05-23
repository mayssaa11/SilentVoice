import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { app } from './firebase-config.js';

const db = getFirestore(app);
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();  // Prevent page reload on form submit
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Store contact form data in Firestore
  try {
    await addDoc(collection(db, 'contactMessages'), {
      name: name,
      email: email,
      message: message,
      timestamp: new Date()
    });
    alert("Message sent successfully!");
    contactForm.reset(); // Reset form fields after submission
  } catch (error) {
    console.error("Error sending message:", error);
    alert("There was an issue sending your message. Please try again.");
  }
});
