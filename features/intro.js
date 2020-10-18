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

            await bot.reply(message,{
                text: 'What would you like to know about me?',
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