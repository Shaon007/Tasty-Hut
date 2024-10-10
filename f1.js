const modal = document.getElementById('signinModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const signInForm = document.getElementById('signInForm');

// Open the modal
openModalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.classList.add('hidden');
  }
});

// Close the modal when the form is submitted
signInForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // You can add actual login logic here before closing the modal
  modal.classList.add('hidden'); // Close the modal
  alert('Sign In Successful!'); // Optional: You can remove this alert after testing
});


// console.log("f1")