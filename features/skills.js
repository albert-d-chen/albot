module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'skills', ['message'], async (bot, message) => {
        await bot.reply(message, 'Javascript, Ruby, Ruby on Rails, React, Redux');
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
          ],
        });
    });

}