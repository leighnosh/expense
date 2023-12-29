function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    alert('Please fill out all fields');
  } else {
    alert('Form Submitted');
  }
}
