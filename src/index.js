// Require the necessary discord.js classes
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Setting up commands collection
client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

// Setting commands for the client
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set new item in collection
    // where the key is the command name and the value is the exported module
    client.commands.set(command.data.name, command);
}

console.log('Starting bot...');


// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`${client.user.username} is now online!`);
});


// Command handling
client.on('interactionCreate', async interaction => {
    // Return early is command doesn't exist
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});


// Login to Discord with your client's token
client.login(token);
