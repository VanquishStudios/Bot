/**
 * @file Roast Command.
 * @author TechyGiraffe999
 */
const axios = require('axios');
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField  } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */


const roles_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('You do not have permission to use this command. Currently only [<@&1114602264292769902>] have access to this command')
  .setColor('Red')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('roast')
    .setDescription('Roast someone')
    .addUserOption(option => option.setName('user').setDescription('Select a user.').setRequired(true)),
    async execute (interaction) {
        const member = interaction.member;
        const allowedRoleIds = ['1114602264292769902','1068578900734652558','1112802199148433609','1068579171615387759']; 
        const allowedServerId = '1059913124645441616';
        const guildId = interaction.guild.id;
        const adminPermissions = new PermissionsBitField(PermissionsBitField.Flags.Administrator);
        const hasAllowedRole = member.roles.cache.some(role => allowedRoleIds.includes(role.id));

        if (guildId == allowedServerId) {
            if (!hasAllowedRole) {
            return await interaction.reply({ embeds: [roles_only], ephemeral: true });
            }
        }

                const { options } = interaction;
        const user = options.getUser('user');

        const response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
        const json = await response.data;
        const embed = new EmbedBuilder()
            .setColor('DarkRed')
            .setDescription(`${json.insult}`)
        interaction.reply({ content: `${user}`, embeds: [embed] });

    }
}