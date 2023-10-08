/**
 * @file Default Bot Mention Command
 * @author Naman Vrati
 * @since 3.0.0
 */

const { prefix } = require("../config.json");

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {import('discord.js').Message} message The Message Object of the command.
	 */

	async execute(message) {
		if (message.author.id != "1160533832185958420"){
			return message.channel.send(
				`Hi ${message.author}! Im the Official Discord Bot for Vanquish Studios!`
			)};
		return	
	},
};
