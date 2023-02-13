const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {const signupFormHandler = async (event) => {
      event.preventDefault();
    
      const username = document.querySelector('#username-signup').value.trim();
      const password = document.querySelector('#password-signup').value.trim();
      const passwordVerify = document.querySelector('#password-verify').value.trim();
    
      if (username && password && passwordVerify) {
        if (password === passwordVerify) {
            const response = await fetch('/create', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response);
          if (response.status.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to sign up.');
          }
        }
        else{ alert("Password don't match")}
      }
    };
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
