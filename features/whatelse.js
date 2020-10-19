module.exports = function(controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'email' || 'phone number' || 'github' || 'angellist' || 'linkedin', ['message'], async (bot, message) => {
        if (message.text && message.text.toLowerCase() === "email") {
            await bot.reply(message, "My email is adc054@eng.ucsd.edu");
        } else if (message.text && message.text.toLowerCase() === "phone number") {
            await bot.reply(message, "My number is (408)-439-3568");
        } else if (message.text && message.text.toLowerCase() === "github") {
            await bot.reply(message, `My Github is ${'https://github.com/albert-d-chen'.link('https://github.com/albert-d-chen')}`);
        } else if (message.text && message.text.toLowerCase() === "angellist") {
            await bot.reply(message, `My AngelList is ${'https://angel.co/u/albert-d-chen'.link('https://angel.co/u/albert-d-chen')}`);
        } else if (message.text && message.text.toLowerCase() === "linkedin") {
            await bot.reply(message, `My LinkedIn is ${'https://www.linkedin.com/in/albertdchen/'.link('https://www.linkedin.com/in/albertdchen/')}`);
        } 


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


    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'https://angel.co/u/albert-d-chen'.link('https://angel.co/u/albert-d-chen') || 'https://github.com/albert-d-chen'.link('https://github.com/albert-d-chen') || 'https://www.linkedin.com/in/albertdchen/'.link('https://www.linkedin.com/in/albertdchen/'), ['message'], async (bot, message) => {
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