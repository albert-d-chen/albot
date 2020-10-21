/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    // controller.hears('sample','message,direct_message', async(bot, message) => {
    //     await bot.reply(message, 'I heard a sample message.');
    // });

    // controller.on('message,direct_message', async(bot, message) => {
    //     await bot.reply(message, `I don't think I understood what you said, maybe try: "education", "skills", "job history", "contact information", or "open to work?"`);
    // });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });

}
