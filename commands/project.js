const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('project')
		.setDescription('Looking for project partner'),
	async execute(interaction) {
		return interaction.reply(
            `<@${interaction.user.id}> is looking for a project partner!`
            );
	},
};
