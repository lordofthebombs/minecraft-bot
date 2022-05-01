import { Client, ClientOptions } from "discord.js";


const token = require("../secrets.json").token;

console.log("Bot is starting")

const client = new Client({
    intents: []
});

client.login(token);

console.log(client);