var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

//loop through the users array, find the user that matches req.body.name and confirm that the req.body.password matches the user's password.
//If we find a match we need to set req.session.currentUser equal to to the correct user object and res.send({ userFound: true });.
//If we don't find the user, we will need to res.send({ userFound: false });.
//This function will need an endpoint, let's create a 'POST' endpoint on the path '/api/login' and have it call our newly created login method.
module.exports = {
  login: function(req, res) {
    var userFound = false;
    users.forEach(function( user ) {  //loop through the users array
      if (user.userName === req.body.name && user.password === req.body.password) {
        req.session.currentUser = user;
        userFound = true
      }
    });
    if (userFound) {
      res.send({ userFound: true });
    } else {
      res.send({ userFound: false });
    }
  }
  }


//Because of our app.use(cors(corsOptions)); we don't need to set headers inside of our login function. 
//The CORS library is handling that for us on every request.
//We have set a property on the req.session equal to our user. 
//This lets us continue to track which user is currently active.

