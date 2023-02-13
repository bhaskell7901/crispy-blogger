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
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up.');
        }
      }
      else{ alert("Password don't match")}
    }
  };

  
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);