require('dotenv').config(); // Pulls in authorization information.

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "br!";
client.on('message', msg => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.content.startsWith(prefix + "help"))
  {
    message.channel.send({embed: {
        color: 3066993,
        title: "Commands",
        description: "Brinley The Motivational Bot supports the following commands. They are case-sensitive.",
        fields: [{
            name: "br!help",
            value: "Brings up this very message."
          },
          {
            name: "br!ping",
            value: "Pings the bot to make sure that it is working."
          },
          {
            name: "br!motivate",
            value: "Spreads motivation to the user that wrote the message."
          },
          {
            name: "br!version",
            value: "Displays the current version of the bot."
          }
        ]
      }
    });
  }
  else if(message.content.startsWith(prefix + "ping"))
  {
    message.channel.send(`${message.author}, I am ready for your command!`);
  }
  else if(message.content.startsWith(prefix + "motivate"))
  {
    message.channel.send(`${message.author}, I hope you have a wonderful day!`);
  }
  else if(message.content.startsWith(prefix + "version"))
  {
    message.channel.send(`${message.author}, the current version is 1.0.0!`);
  }
});

client.login(process.env.DISCORD_TOKEN);
