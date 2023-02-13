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
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
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
      if (response.status) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
    else{ alert("Password don't match")}
  }
};

if(document.querySelector('.login-form')){
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
}

if(document.querySelector('.signup-form')){
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
}