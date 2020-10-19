/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const { BotkitConversation } = require("botkit");

module.exports = function(controller) {
    let typing = new BotkitConversation('typing', controller);

    typing.say('I am going to type for a while now...');
    typing.addAction('typing');

    // start the typing indicator
    typing.addMessage({type: 'typing'}, 'typing');
    // trigger a gotoThread, which gives us an opportunity to delay the next message
    typing.addAction('next_thread','typing');

    typing.addMessage('typed!','next_thread');

    // use the before handler to delay the next message 
    typing.before('next_thread',  async () => {
        return new Promise((resolve) => {
            // simulate some long running process
            setTimeout(resolve, 1500);
        });
    });

    controller.addDialog(typing);


    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('Education'), 'message', async (bot, message) => {
            await bot.reply(message, { type: "typing" });
            setTimeout(async () => {
              // will have to reset context because turn has now ended.
              await bot.changeContext(message.reference);
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
            }, 1000);
        });

        controller.hears(new RegExp('education'), 'message', async (bot, message) => {

            await bot.reply(message, { type: "typing" });
            setTimeout(async () => {
              // will have to reset context because turn has now ended.
              await bot.changeContext(message.reference);
              await bot.reply(message, {
                text:
                  "Here is a list of my education history, which would you like to know more about?",
                quick_replies: [
                  {
                    title: "University of California, San Diego",
                    payload: "University of California, San Diego",
                  },
                  {
                    title: "Case Western Reserve University",
                    payload: "Case Western Reserve University",
                  },
                  {
                    title: "App Academy",
                    payload: "App Academy",
                  },
                ],
              });
            }, 1000);
            
        });


    }

}