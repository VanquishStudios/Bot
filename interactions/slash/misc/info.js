/**
 * @file Info Slash Command.
 * @author TechyGiraffe999
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

const info = new EmbedBuilder()
    .setTitle('Info')   
    .setColor('RANDOM')
    .setDescription("So you want some info, huh. Well, Vanquish Studios is a new company consisting of a few team members.\nWe are currently making games for you right now!\nThere wil be <#1160230620996317234> Soon. In the meantime feel free to checkout our [website](https://vanquishstudios.github.io)  ")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Says info about Vanquish Studios'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [info]
        });
    },
};