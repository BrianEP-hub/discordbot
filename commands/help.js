const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('help')
        .setDescription('Request help')
        .addStringOption(option => 
            option
                .setName('subject')
                .setDescription('Subject you need help with')
            ),
    async execute(interaction) {
        const subject = interaction.options.getString('subject');
        return interaction.reply(
            `<@${interaction.user.id}> is asking for help ${subject}`,
        );
    },
};

