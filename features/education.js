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
        setTimeout(resolve, 3000);
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
                 payload: "Master's of Science in Bioengineering",
               },
               {
                 title: "Year Graduated",
                 payload: "2017-2019",
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
                payload: "Bachelor's of Science in Bioengineering",
              },
              {
                title: "Year Graduated",
                payload: "2013-2017",
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
                    payload: "Web development / Fullstack software engineering",
                },
                {
                    title: "Year Graduated",
                    payload: "2020-2020",
                },
                ],
            });
         }, 1000);
    });
    }

}