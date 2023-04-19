axios.post('/register', {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: 'password123'
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  