//Express-session lets us create persistent sessions inside of our app
//so we can send our users information that is specific to them individually.

module.exports = {
    sessionSecret: 'random string'  //This session secret is what our app uses to sign the sessions ID cookie.
};
