module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'contact information', ['message'], async (bot, message) => {
        // await bot.reply(message, 'I am currently looking for an entry level fullstack, frontend, or backend software engineering position.');
        await bot.reply(message, {
          text: "Here is my contact information:",
          quick_replies: [
            {
              title: "Email",
              payload: "adc054@eng.ucsd.edu",
            },
            {
              title: "Phone Number",
              payload: "(408)-439-3568",
            },
          ],
        });
    });

}