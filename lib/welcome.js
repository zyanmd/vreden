const fs = require('fs')
const chalk = require('chalk')
const { TelegraPh } = require('./uploader')
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./myfunc')
let setting = JSON.parse(fs.readFileSync('./config.json'));
const welcome2 = setting.auto_welcomeMsg
const leave2 = setting.auto_leaveMsg
const {
	delay,
	proto,
	jidDecode,
	jidNormalizedUser,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	downloadContentFromMessage,
} = require('@whiskeysockets/baileys')
const moment = require('moment-timezone')

module.exports.welcome = async(iswel, isleft, vreden, anu) =>{
	try {
            const metadata = await vreden.groupMetadata(anu.id)
            const participants = anu.participants
            const memeg = metadata.participants.length;
  	        const groupName = metadata.subject
  		      const groupDesc = metadata.desc
  		      
            for (let num of participants) {
  		      const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(anu.id ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ``, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': setting.pathimg, thumbnail: setting.pathimg,sendEphemeral: true}}}
                try {
                    pp_user = await vreden.profilePictureUrl(num, 'image')
                } catch {
                    pp_user = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }

                try {
                    ppgroup = await vreden.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
                if (anu.action == 'add' && (iswel || setting.auto_welcomeMsg)) {

                	console.log(anu)
                if (global.db.data.chats[anu.id].setwelcome) {               	
                var get_teks_welcome = await global.db.data.chats[anu.id].setwelcome
                var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                var add = `https://api.vreden.my.id/api/notify?background=https://telegra.ph/file/588090b81788803c48717.jpg&title=Welcome&desk=semoga%20betah%20kak!!&avatar=${encodeURIComponent(pp_user)}`
                vreden.sendButtonImage(anu.id, { url: add }, [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Welcome 👋\",\"id\":\".biji\"}`
              }
           ], full_pesan, setting.footer, fkontaku)
                } else {
                var add = `https://api.vreden.my.id/api/notify?background=https://telegra.ph/file/588090b81788803c48717.jpg&title=Welcome&desk=semoga%20betah%20kak!!&avatar=${encodeURIComponent(pp_user)}`
                vreden.sendButtonImage(anu.id, { url: add }, [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Welcome 👋\",\"id\":\".biji\"}`
              }
           ], `*👋 Hello* @${num.split("@")[0]}\n\n*Selamat Datang Di*\n⏤͟͟͞͞✧ ${groupName}\n\n*Catatan:*\n_Baca Deskripsi Grupnya Yahh!_\n_Semoga Betah~~_`, setting.footer, fkontaku)
                }
                } else if (anu.action == 'remove' && (isleft || setting.auto_leaveMsg)) {
                	console.log(anu)
                		if (global.db.data.chats[anu.id].setleft) {            	
                        var get_teks_left = await global.db.data.chats[anu.id].setleft
                        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                var left = `https://api.vreden.my.id/api/notify?background=https://telegra.ph/file/a9fd3df1d53b8b0f32068.jpg&title=Goodbye&desk=jangan%20balik%20lagi%20kak!!&avatar=${encodeURIComponent(pp_user)}`
                vreden.sendButtonImage(anu.id, { url: left }, [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Byee👋\",\"id\":\".biji\"}`
              }
           ], full_pesan, setting.footer, fkontaku)
                       } else {
                       var usr = vreden.getName(num)
                var left = `https://api.vreden.my.id/api/notify?background=https://telegra.ph/file/a9fd3df1d53b8b0f32068.jpg&title=Goodbye&desk=jangan%20balik%20lagi%20kak!!&avatar=${encodeURIComponent(pp_user)}`
                vreden.sendButtonImage(anu.id, { url: left }, [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Byee👋\",\"id\":\".biji\"}`
              }
           ], `*👋GoodBye* @${num.split("@")[0]}\n\n*Quote:*\n_Karena Setiap Pertemuan Akan Ada Perpisahan_`, setting.footer, fkontaku)
                        } 
                } else if (anu.action == 'promote') {
                var promm = await getBuffer(`https://telegra.ph/file/0f665e9f52aca8d9e13ca.jpg`)
                //vreden.sendMessage(anu.id, { text:  `*🎊 Selamat* @${num.split("@")[0]}, Kamu Menjadi Admin\n\n*Quote:*\n_Jadilah Pemimpin Yang Baek_`, contextInfo:{ mentionedJid:[num], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Selamat Kak🥳`, "body": `${setting.ownerName}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": promm, "sourceUrl": `${setting.gcwa}`}}}, {quoted: fkontaku})
                } else if (anu.action == 'demote') {
                var demm = await getBuffer(`https://telegra.ph/file/527667156421dbe4c8d04.jpg`)
                //vreden.sendMessage(anu.id, { text:  `*😞 Yang Sabar* @${num.split("@")[0]}, Kamu Menjadi Orang Biasa\n\n*Quote:*\n_Hidup Itu Seperti Roda Kadang Diatas, Kadang Dibawah_`, contextInfo:{ mentionedJid:[num], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Yang Sabar Ya Boss🎭`, "body": `${setting.ownerName}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": demm, "sourceUrl": `${setting.gcwa}`}}}, {quoted: fkontaku})
              }
}
        } catch (err) {
            console.log(err)
            }
	}

	module.exports.aDelete = async (setting, vreden, m) => {
	  if(setting.antiDelete){
	try {
		const dataChat = global.dbc
		const mess = dataChat.find((a) => a.id == m.id);
		const mek = mess.m;
    //console.log(mek)
		const participant = mek.key.remoteJid.endsWith("@g.us") ? mek.key.participant : mek.key.remoteJid;
		console.log(participant)
		const froms = mek.key.remoteJid;
		await vreden.sendMessage(
			froms, {
				text: `「 *ANTI DELETE MESSAGE* 」
    
📛 *Name* : ${mek.pushName}
👤 *User* : @${mek.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB 
✍️ *MessageType* : ${mek.mtype}

_*⬇️PESAN YANG DIHAPUS⬇️*_
    `,
				mentions: [participant],
			}, {
				quoted: mek
			}
		);

		await vreden.copyNForward(froms, mek, true);
  	await delay(4000)
		let messek = dataChat.find((a) => a.id == m.id);
		for (let [i, te] of dataChat.entries()) {
			if (te.id === m.id) {
				dataChat.splice(i, 1); // Tim is now removed from "users"
		}
		}

	} catch (err) {
	  console.log(err)
	}
	  }
	}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})