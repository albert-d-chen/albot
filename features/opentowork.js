module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'employment status', ['message'], async (bot, message) => {
        await bot.reply(message, 'I am currently looking for an entry level fullstack, frontend, or backend software engineering position.');
        await bot.reply(message, {
          text: "What else would you like to know about me?",
          quick_replies: [
            {
              title: "Education",
              payload: "Education",
            },
            {
              title: "Skills",
              payload: "Skills",
            },
            {
              title: "Contact Information",
              payload: "Contact Information",
            },
            {
              title: "Open to work?",
              payload: "Employment Status",
            },
          ],
        });
    });

}