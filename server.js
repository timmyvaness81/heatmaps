var http = require("http");
var express = require("express");
var app = express();
var irc = require("irc");
var bodyParser = require("body-parser");

app.use("/public", express.static(__dirname + "/public"));

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

app.post('/startCounter', function (req, res) {
	new_counter = {}
	for (i=0;i<emote_list;i+=1) {
		new_counter[emote_list[i]] = 0;
	};
	res.send(JSON.stringify(new_counter));
});

app.listen(3000, function () {
	console.log("running");
});