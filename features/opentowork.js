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
        
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'employment status', ['message'], async (bot, message) => {
        await bot.reply(message, { type: "typing" });

        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);

          if (message.text && message.text.toLowerCase() === "email") {
            await bot.reply(message, "My email is adc054@eng.ucsd.edu");
          } else if (
            message.text &&
            message.text.toLowerCase() === "phone number"
          ) {
            await bot.reply(message, "My number is (408)-439-3568");
          } else if (message.text && message.text.toLowerCase() === "github") {
            await bot.reply(
              message,
              `My Github is ${"https://github.com/albert-d-chen".link(
                "https://github.com/albert-d-chen"
              )}`
            );
          } else if (
            message.text &&
            message.text.toLowerCase() === "angellist"
          ) {
            await bot.reply(
              message,
              `My AngelList is ${"https://angel.co/u/albert-d-chen".link(
                "https://angel.co/u/albert-d-chen"
              )}`
            );
          } else if (
            message.text &&
            message.text.toLowerCase() === "linkedin"
          ) {
            await bot.reply(
              message,
              `My LinkedIn is ${"https://www.linkedin.com/in/albertdchen/".link(
                "https://www.linkedin.com/in/albertdchen/"
              )}`
            );
          }

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
        }, 1000);
        
    });

}