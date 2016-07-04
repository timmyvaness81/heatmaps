var express = require("express");
var app = express();
var http = require("http").Server(app);
var irc = require("irc");
var bodyParser = require("body-parser");
var io = require('socket.io')(80);

app.use("/public", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

emote_list = 	['Kappa','PogChamp', '4Head', 'BabyRage',
				 'BibleThump', 'FrankerZ', 'HeyGuys', 'KappaPride',
				 'KappaRoss', 'PJSalt'];
var settings = {
	'channels': ["#nosleeptv"],
	'server': "irc.twitch.tv",
	'port': 6667,
	'secure': false,
	'nick': 'overstim',
	'password': ''
};

io.on('connection', function(socket){
	console.log('connected');
	socket.on('disconnect', function(){
		console.log('disconnected');
	});
});

var bot = new irc.Client(settings.server, settings.nick, {
	channels: [settings.channels + " " + settings.password],
	debug: false,
	password: settings.password,
	username: settings.nick
});

emote_counter = {};
for (i=0;i<emote_list.length;i+=1) {
	emote_counter[emote_list[i]] = 0;
	console.log(emote_counter);
};

bot.addListener('message', function (from, to, message) {
	console.log(from + ' => ' + to + ': ' + message);
	for (x=0;x<Object.keys(emote_counter).length; x+=1) {
		if (message.indexOf(emote_list[x]) > -1) {
			emote_counter[emote_list[x]] += 1;
		}
	}
	console.log(emote_counter);
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/map.html');
});

app.get('/updateCounter', function (req, res) {
	var current_counter = req.body;
	console.log(current_counter);
	res.send()
});

app.get('/startCounter', function (req, res) {
	new_counter = {}
	for (i=0;i<emote_list.length;i+=1) {
		new_counter[emote_list[i]] = 0;
		console.log(new_counter);
	};
	res.send(JSON.stringify(new_counter));
});

app.listen(3000, function () {
	console.log("running");
});