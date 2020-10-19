module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'contact information', ['message'], async (bot, message) => {
        await bot.reply(message, {
          text: "Here is my contact information:",
          quick_replies: [
            {
              title: "Email",
              payload: "Email",
            },
            {
              title: "Phone Number",
              payload: "Phone Number",
            },
            {
              title: "Github",
              payload: 'Github',
            },
            {
              title: "LinkedIn",
              payload: 'LinkedIn',
            },
            {
              title: "AngelList",
              payload: 'AngelList',
            },
          ],
        });
    });

}