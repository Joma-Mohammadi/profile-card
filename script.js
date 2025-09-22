const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Login script
    document.getElementById('login-form').addEventListener('submit', e => {
      e.preventDefault();
      let email = document.getElementById('login-email').value;
      let password = document.getElementById('login-password').value;

      let valid = true;

      if (!emailRegex.test(email)) {
        document.getElementById('login-email-error').classList.remove('hidden');
        valid = false;
      } else {
        document.getElementById('login-email-error').classList.add('hidden');
      }

      if (password.length < 8) {
        document.getElementById('login-password-error').classList.remove('hidden');
        valid = false;
      } else {
        document.getElementById('login-password-error').classList.add('hidden');
      }

      if (valid) alert("Login Successful!");
    });

    // Register script
    document.getElementById('register-form').addEventListener('submit', e => {
      e.preventDefault();
      let username = document.getElementById('register-username').value;
      let email = document.getElementById('register-email').value;
      let password = document.getElementById('register-password').value;

      let valid = true;

      if (username.length < 3) {
        document.getElementById('register-username-error').classList.remove('hidden');
        valid = false;
      } else {
        document.getElementById('register-username-error').classList.add('hidden');
      }

      if (!emailRegex.test(email)) {
        document.getElementById('register-email-error').classList.remove('hidden');
        valid = false;
      } else {
        document.getElementById('register-email-error').classList.add('hidden');
      }

      if (!passwordRegex.test(password)) {
        document.getElementById('register-password-error').classList.remove('hidden');
        valid = false;
      } else {
        document.getElementById('register-password-error').classList.add('hidden');
      }

      if (valid) alert("Register Successful!");
    });