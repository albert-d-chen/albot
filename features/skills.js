
const { BotkitConversation } = require("botkit");

module.exports = function(controller) {
    let typing = new BotkitConversation("typing", controller);

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
        setTimeout(resolve, 3000);
      });
    });

    controller.addDialog(typing);

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'skills', ['message'], async (bot, message) => {
        await bot.reply(message, { type: "typing" });
        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          await bot.reply(message, 'My skills include Javascript, Ruby, Ruby on Rails, React, Redux.');

        }, 1000);

        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
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