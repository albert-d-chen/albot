module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'contact information', ['message'], async (bot, message) => {
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
            {
              title: "Github",
              payload: `${'https://github.com/albert-d-chen'.link('https://github.com/albert-d-chen')}`,
            },
            {
              title: "LinkedIn",
              payload: `${'https://www.linkedin.com/in/albertdchen/'.link('https://www.linkedin.com/in/albertdchen/')}`,
            },
            {
              title: "AngelList",
              payload: `${'https://angel.co/u/albert-d-chen'.link('https://angel.co/u/albert-d-chen')}`,
            },
          ],
        });
    });

}