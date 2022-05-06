const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const testEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Testing embed for minecraft')
    .setDescription('Some random stuff goes in here I guess');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embedtest')
        .setDescription('Testing how embeds work'),
    async execute(interaction) {
        await interaction.reply({ embeds: [testEmbed] });
    },
};

