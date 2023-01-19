const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thank')
		.setDescription('Thank user')
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('Give user credit for their help'),
		),
	async execute(interaction) {
		const member = interaction.options.getMember('user');
		return interaction.reply(
			`<@${interaction.user.id}> gave <@${member.user.id}>, a point for their help`,
		);
	},
};
