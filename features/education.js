

module.exports = function(controller) {

    
    if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    controller.hears(new RegExp("University of California, San Diego"), "message", async (bot, message) => {
        await bot.reply(message, {
        text:
            "What do you want to know more about?",
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
    });
    }

    if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    controller.hears(new RegExp("Case Western Reserve University"), "message", async (bot, message) => {
        await bot.reply(message, {
        text:
            "What do you want to know more about?",
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
    });
    }

    if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    controller.hears(new RegExp("App Academy"), "message", async (bot, message) => {
        await bot.reply(message, {
        text:
            "What do you want to know more about?",
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
    });
    }

}