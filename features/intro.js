module.exports = function (controller) {

    // controller.on("hello", async (bot, message) => {
    //   await bot.reply(message, `What do you want to know about me?`);
    // });
    // controller.on("welcome_back", async (bot, message) => {
    //   await bot.reply(message, `What do you want to know about me?`);
    // });

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

       
        controller.on('welcome_back', async (bot, message) => {
            await bot.reply(message, "Welcome! I am ALBot, Albert's personal digital avatar.");

            await bot.reply(message,{
                text: 'What would you like to know about me?',
                quick_replies: [
                    {
                        title: 'Education',
                        payload: 'Education',
                    },
                    {
                        title: 'Skills',
                        payload: 'Skills',
                    },
                    {
                        title: 'Job History',
                        payload: 'Job History'
                    },
                    {
                        title: 'Contact Information',
                        payload: 'Contact Information'
                    },
                    {
                        title: 'Open to work?',
                        payload: 'Employment Status'
                    },
                    
                ]
            });
        });


    }

}