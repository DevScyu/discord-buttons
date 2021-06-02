const { Structures } = require("discord.js");
const {MessageComponentTypes, MessageButtonStylesAliases} = require('./v12/Constants')

var version = require('discord.js').version.split('');

version = parseInt(version[0] + version[1]);
module.exports = (client) => {

    if (version < 11 || version === 11) {
        throw new Error('The discord.js version must be v12 or high');
    }

    if (version === 12) {
        const Message = require('./v12/Classes/Message');
        Structures.extend('Message', () => Message);
    } else if (version === 13) {
        const Message = require('./v13/Classes/Message');
        Structures.extend('Message', () => Message);
    }

    client.ws.on('INTERACTION_CREATE', (data) => {

        if (!data.message) return;

        if (data.data.component_type === 2) {
            if (version === 12) {
                const INTERACTION_CREATE = require('./v12/Classes/INTERACTION_CREATE');
                const button = new INTERACTION_CREATE(client, data);

                client.emit('clickButton', button);
            }
        }
    });

    return;
};

module.exports.TextChannel = require('./v12/Classes/TextChannel');
module.exports.ExtendedTextChannel = require('./v12/Classes/TextChannel');
module.exports.DMChannel = require('./v12/Classes/DMChannel');
module.exports.ExtendedDMChannel = require('./v12/Classes/DMChannel');
module.exports.NewsChannel = require('./v12/Classes/NewsChannel');
module.exports.ExtendedNewsChannel = require('./v12/Classes/NewsChannel');
module.exports.MessageButtonStyles = MessageButtonStylesAliases;
module.exports.MessageComponentTypes = MessageComponentTypes;

module.exports.MessageButton = require('./v12/Classes/MessageButton');
module.exports.MessageActionRow = require('./v12/Classes/MessageActionRow');
module.exports.ButtonInteraction = require('./v12/Classes/INTERACTION_CREATE');

