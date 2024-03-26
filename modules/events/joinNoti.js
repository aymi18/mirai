module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "cl]ff",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": "",
	},
};

module.exports.run = async function ({ api, event }) {
const { join } = require('path');
const axios = require('axios');
	const request = require("request");
	const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;

	if (event.logMessageData.addedParticipants.some((i) => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(
			`》 ${global.config.PREFIX} 《 ❃ ➠${!global.config.BOTNAME ? " " : global.config.BOTNAME}`,
			threadID,
			api.getCurrentUserID()
		);
		api.sendMessage("", event.threadID, () => api.sendMessage({ body: `🔴🟡🟢\n\n✅ Connected successfully!....\n•──────────────────•\n→ Admin: CliffVincent\n→ Facebook: https://www.facebook.com/swordigo.swordslush\n\nUsage: ${global.config.PREFIX}help\nUse ${global.config.PREFIX}callad if there is an error to the Bot the bot admin will try to fix this as soon as possible\n→ Thank you for using this bot, have fun using it.`, attachment: fs.createReadStream(__dirname + "/cache/join/connected.mp4") }, threadID));
	} else {
		try {
			const { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};

			for (let newParticipant of event.logMessageData.addedParticipants) {
				const userID = newParticipant.userFbId;
				if (userID === api.getCurrentUserID()) continue;

				const data = await api.getUserInfo(userID);
				const userName = data[userID].name.replace("@", "");

				const mentions = [{ tag: userName, id: userID, fromIndex: 0 }];
				const memLength = participantIDs.length;

				// Assuming necessary imports and variables are declared before this function
				let msg =
					typeof threadData.customJoin === "undefined"
						? `Hello ${userName}! Welcome to ${threadName}\nYou're the ${memLength}th member of this group, please enjoy!❤️🥳️`
						: threadData.customJoin
								.replace(/\{uName}/g, userName)
								.replace(/\{soThanhVien}/g, memLength);

				function fetchAndSendWelcomeGif(userID, threadName, userName, mentions, event, api, threadData, memLength) {
					try {
						const welcomeGifUrl = `https://i.imgur.com/wJBoiIH.gif`;
						const options = {
							uri: encodeURI(welcomeGifUrl),
							method: "GET",
						};

						const callback = function () {
							return api.sendMessage(
								{
									body: msg,
									attachment: fs.createReadStream(__dirname + `/cache/welcome.gif`),
									mentions,
								},
								event.threadID,
								() => {
									fs.unlinkSync(__dirname + `/cache/welcome.gif`);
								}
							);
						};

						request(options)
							.pipe(fs.createWriteStream(__dirname + `/cache/welcome.gif`))
							.on("close", callback);
					} catch (err) {
						return console.log("ERROR: " + err);
					}
				}
				// Call the fetchAndSendWelcomeGif function with required parameters
				fetchAndSendWelcomeGif(userID, threadName, userName, mentions, event, api, threadData, memLength);
			}
		} catch (err) {
			console.log("ERROR: " + err);
		}
	}
};
