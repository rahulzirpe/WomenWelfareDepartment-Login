// Check if there are already users in localStorage
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));  // Initialize an empty users array if not already in localStorage
  }
  
  // Switch between login and signup forms
  document.getElementById('goToSignUp').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
  });
  
  document.getElementById('goToLogin').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
  });
  
  // Sign-up functionality
  document.getElementById('signUpButton').addEventListener('click', () => {
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
  
    // Validate input
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
  
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users'));
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert('User already exists');
      return;
    }
  
    // Save new user to localStorage
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Sign-up successful! You can now log in.');
    document.getElementById('goToLogin').click();  // Switch to login form after signup
  });
  
  // Login functionality
  document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate input
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
  
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      //alert('Login successful!');
      window.location.href = "https://rahulzirpe.github.io/WomenSafety/";
      // Redirect to a protected page or show user-specific content here
    } else {
      alert('Invalid credentials, please try again.');
    }
  });
  