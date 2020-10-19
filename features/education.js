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
    
    if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    controller.hears(new RegExp("University of California, San Diego"), "message", async (bot, message) => {

        await bot.reply(message, { type: "typing" });
        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          await bot.reply(message, {
             text: "What do you want to know more about?",
             quick_replies: [
               {
                 title: "Degree",
                 payload: "UCSD Degree",
               },
               {
                 title: "Years Attended",
                 payload: "Years attended at UCSD",
               },
             ],
           });
        }, 1000);
    });
    }

    if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    controller.hears(new RegExp("Case Western Reserve University"), "message", async (bot, message) => {
        await bot.reply(message, { type: "typing" });
        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          await bot.reply(message, {
            text: "What do you want to know more about?",
            quick_replies: [
              {
                title: "Degree",
                payload: "CWRU Degree",
              },
              {
                title: "Year Attended",
                payload: "Years attended at CWRU",
              },
            ],
          });
        }, 1000);
    });
    }

    if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    controller.hears(new RegExp("App Academy"), "message", async (bot, message) => {
        

         await bot.reply(message, { type: "typing" });
         setTimeout(async () => {
           // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: "What do you want to know more about?",
                quick_replies: [
                {
                    title: "Degree",
                    payload: "AA Degree",
                },
                {
                    title: "Year Attended",
                    payload: "Years attended at AA",
                },
                ],
            });
         }, 1000);
    });
    }

}