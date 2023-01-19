const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('help')
        .setDescription('Request help')
        .addUserOption(option => 
            option
                .setName('subject')
                .setDescription('Subject you need help with')
            ),
    async execute(interaction) {
        const subject = interaction.options.getMember('subject');
        return interaction.reply(
            `${interaction.user.username} is asking for help with an issue`,
        );
    },
};

