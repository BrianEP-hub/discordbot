const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feedback')
		.setDescription('Request feedback')
        .addStringOption(option => 
            option
                .setName('project')
                .setDescription('Project')
            ),
	async execute(interaction) {
        const project = interaction.options.getString('project')
		return interaction.reply(
            `<@${interaction.user.id}> is looking for feedback on their ${project}`
            );
	},
};
