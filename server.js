var express = require('express')
	,	session = require('express-session')
	,	bodyParser = require('body-parser')
	,	cors = require('cors')
	,	config = require('./config.js')
	,	userCtrl = require('./controllers/userCtrl.js')
	,	profileCtrl = require('./controllers/profileCtrl.js')
	,	port = 8999
	, 	app = express();

var corsOptions = {
    origin: 'http://localhost:8999'
};


app.use(express.static(__dirname + '/public'));  //utilizing express's built in static method to serve static files from the directory we pass in
app.use(bodyParser.json());
app.use(cors(corsOptions));  //allow cross-orign requests from any domain, across all your endpoints.
app.use(session({ secret: config.sessionSecret })); //allow express-session to run on all endpoints w/ chosen secr being used to track cookies 

console.log(__dirname);

app.post('/api/login', userCtrl.login); //login func endpoint, call login method
app.get('/api/profiles', profileCtrl.getFriends); //endpoint, call getFriend method

app.listen(port, function() {
	console.log('Listening on ' + port);
});