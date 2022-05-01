import { Client, Intents } from "discord.js";

// Loading in bot token
const token = require("../secrets.json").token;

// Creatomg client instance
const client: Client = new Client({ intents: [Intents.FLAGS.GUILDS] })

console.log("Starting bot...")

// When client is ready, run this code only once
client.once("ready", (): void => {
    console.log(`${client.user?.username} is online!`)
})

// Logging in
client.login(token);