var options = {
	options: {
		debug: true;
	},
	connection: {
		reconnect: true;
	},
	identity: {
		username: "overstim",
		password: "oauth:4714dm2drd2klrgcx7ssqvmvcm8rak"
	},
};

var client = new tmi.client(options);

client.connect();