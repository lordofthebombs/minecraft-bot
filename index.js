// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


console.log('Starting bot...');


// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.username} is now online!`);
});

// Login to Discord with your client's token
client.login(token);
