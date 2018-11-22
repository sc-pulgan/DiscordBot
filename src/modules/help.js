const Discord = require("discord.js");

module.exports = function(bot) {
  bot.help = {
    helpMessage: function(message) {
      const embed = new Discord.RichEmbed()
        .setColor(0x00ae86)
        .addField(
          "Events :",
          "**!events :**\n return the list of the events. \n **!event :ID: :** \nreturn the informations about this event.\n !join :ID: add player to the participants of this event. \n !leave :ID: remove player from the participants of this event."
        )
        .addField(
          "Music :",
          "!play :URL: play the youtube music in your channel. \n !volume :VOL: change the volume of the bot (0-100)."
        )
        .addField(
          "Bot :",
          "!uptime : return the uptime of the bot. \n !presence :text: update the text presence of the bot.\n !clear :NUM: remove :NUM: messages in the channel."
        );
      message.reply({ embed });
    }
  };
};
