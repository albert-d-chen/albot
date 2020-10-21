const { BotkitConversation } = require("botkit");


module.exports = function(controller) {
    let typing = new BotkitConversation("typing", controller);

    typing.say("I am going to type for a while now...");
    typing.addAction("typing");

    // start the typing indicator
    typing.addMessage({ type: "typing" }, "typing");
    // trigger a gotoThread, which gives us an opportunity to delay the next message
    typing.addAction("next_thread", "typing");

    typing.addMessage("typed!", "next_thread");

    // use the before handler to delay the next message
    typing.before("next_thread", async () => {
      return new Promise((resolve) => {
        // simulate some long running process
        setTimeout(resolve, 1000);
      });
    });

    controller.addDialog(typing);


    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'email' || 'phone number' || 'github' || 'angellist' || 'linkedin' || 'ucsd degree' || 'cwru degree' || 'aa degree' || 'years attended at cwru' || 'years attended at ucsd' || 'years attended at aa' || 'personal site' || 'job history', ['message'], async (bot, message) => {
        await bot.reply(message, { type: "typing" });

        

        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          
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
            } else if (message.text && message.text.toLowerCase() === "ucsd degree") {
                await bot.reply(message, "I received my Master's of Science at UCSD in bioengineering");
            } else if (message.text && message.text.toLowerCase() === "cwru degree") {
                await bot.reply(message, "I received my Bachelor's of Science at CWRU in biomedical engineering");
            } else if (message.text && message.text.toLowerCase() === "years attended at cwru") {
                await bot.reply(message, "I attended CWRU from 2013-2017");
            } else if (message.text && message.text.toLowerCase() === "years attended at ucsd") {
                await bot.reply(message, "I attended UCSD from 2017-2019");
            } else if (message.text && message.text.toLowerCase() === "years attended at aa") {
                await bot.reply(message, "I attended App Academy from 2020-2020");
            } else if (message.text && message.text.toLowerCase() === "aa degree") {
                await bot.reply(message, "I completed the App Academy bootcamp with a concentration on web development and fullstack software engineering");
            } else if (message.text && message.text.toLowerCase() === "personal site") {
                await bot.reply(message, `My personal site is ${'https://albert-d-chen.github.io/portfolio/'.link('https://albert-d-chen.github.io/portfolio/')}`);
            } else if (
              message.text &&
              message.text.toLowerCase() === "exelixis details"
            ) {
              await bot.reply(
                message,
                "I was an Associate Research Scientist-I intern where I learned about Mosaic inventory system and how to process substances into the system, and worked with Hamilton Verso automated sample management system to simplify daily workflow"
              );
            } else if (
              message.text &&
              message.text.toLowerCase() === "exelixis time worked"
            ) {
              await bot.reply(
                message,
                "I worked at Exelixis from June 2018 to September 2018"
              );
            } else if (
              message.text &&
              message.text.toLowerCase() === "actri details"
            ) {
              await bot.reply(
                message,
                `I was a graduate researcher and defended thesis on “Effects of Osmotic Pressures and TRPV-4 Inhibitors on Calcium Levels in Dorsal Root Ganglion Cells”`
              );
            } else if (
              message.text &&
              message.text.toLowerCase() === "actri time worked"
            ) {
              await bot.reply(
                message,
                `I worked at ACTRI from September 2018 to June 2019`
              );
            } else {
                await bot.reply(
                  message,
                  `I did not understand that.`
                );

                await bot.reply(message, {
                  text: "Maybe try:",
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
                      title: "Job History",
                      payload: "Job History",
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
            }

        if (
          (message.text && message.text.toLowerCase() === "exelixis details") ||
          (message.text && message.text.toLowerCase() === "exelixis time worked") ||
          (message.text && message.text.toLowerCase() === "actri details") ||
          (message.text && message.text.toLowerCase() === "actri time worked") ||
          (message.text && message.text.toLowerCase() === "email") ||
          (message.text && message.text.toLowerCase() === "phone number") ||
          (message.text && message.text.toLowerCase() === "github") ||
          (message.text && message.text.toLowerCase() === "angellist") ||
          (message.text && message.text.toLowerCase() === "linkedin") ||
          (message.text && message.text.toLowerCase() === "ucsd degree") ||
          (message.text && message.text.toLowerCase() === "cwru degree") ||
          (message.text && message.text.toLowerCase() === "aa degree") ||
          (message.text &&
            message.text.toLowerCase() === "years attended at cwru") ||
          (message.text &&
            message.text.toLowerCase() === "years attended at ucsd") ||
          (message.text &&
            message.text.toLowerCase() === "years attended at aa") ||
          (message.text && message.text.toLowerCase() === "personal site")
        ) {
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
                title: "Job History",
                payload: "Job History",
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
        }
        }, 1000);
        

        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          if (message.text && message.text.toLowerCase() === "job history") {
                await bot.reply(message, {
                    text: "This is my job history, what would you like to know more about?",
                    quick_replies: [
                    {
                        title: "Exelixis",
                        payload: "Exelixis",
                    },
                    {
                        title: "Altman Clinical & Translational Research Institute",
                        payload: "ACTRI",
                    },
                    ],
          });
        }
        }, 1000);

        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          if (message.text && message.text.toLowerCase() === "exelixis") {
                await bot.reply(message, {
                    text: "What would you like to know more about?",
                    quick_replies: [
                    {
                        title: "Exelixis Details",
                        payload: "Exelixis Details",
                    },
                    {
                        title: "Exelixis Time Worked",
                        payload: "Exelixis Time Worked",
                    },
                    ],
          });
        }
          if (message.text && message.text.toLowerCase() === "actri") {
                await bot.reply(message, {
                    text: "What would you like to know more about?",
                    quick_replies: [
                    {
                        title: "ACTRI Details",
                        payload: "ACTRI Details",
                    },
                    {
                        title: "ACTRI Time Worked",
                        payload: "ACTRI Time Worked",
                    },
                    ],
          });
        }

        


        }, 1000);
    });


    
}