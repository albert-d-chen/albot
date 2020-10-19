/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('Education'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here is a list of my education history, which would you like to know more about?',
                quick_replies: [
                    {
                        title: 'University of California, San Diego',
                        payload: 'University of California, San Diego',
                    },
                    {
                        title: 'Case Western Reserve University',
                        payload: 'Case Western Reserve University',
                    },
                    {
                        title: 'App Academy',
                        payload: 'App Academy',
                    },
                ]
            });
        });


    }

}