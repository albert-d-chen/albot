/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('education'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here is a list of my education history',
                quick_replies: [
                    {
                        title: 'University of California, San Diego',
                        payload: 'UCSD',
                    },
                    {
                        title: 'Case Western Reserve University',
                        payload: 'CWRU',
                    },
                ]
            });
        });


    }

}