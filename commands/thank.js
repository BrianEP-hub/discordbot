const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thank')
		.setDescription('Thank user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('Give user credit for their help'),
		),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		return interaction.reply(
			`${interaction.user.username} gave ${member.user.username}, a point for their help`,
		);
	},
};
