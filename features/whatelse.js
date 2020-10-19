module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'adc054@eng.ucsd.edu', ['message'], async (bot, message) => {
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

    controller.hears(async (message) => message.text && message.text.toLowerCase() === '(408)-439-3568', ['message'], async (bot, message) => {
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

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'https://angel.co/u/albert-d-chen'.link('https://angel.co/u/albert-d-chen'), ['message'], async (bot, message) => {
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
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'https://www.linkedin.com/in/albertdchen/'.link('https://www.linkedin.com/in/albertdchen/'), ['message'], async (bot, message) => {
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

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'https://github.com/albert-d-chen'.link('https://github.com/albert-d-chen'), ['message'], async (bot, message) => {
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