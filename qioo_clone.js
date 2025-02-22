process.on("uncaughtException", console.error); // MEMAKSA TETAP HIDUP WALAU ERROR
const {
	default: makeWASocket,
	makeCacheableSignalKeyStore,
	useMultiFileAuthState,
	DisconnectReason,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
	downloadContentFromMessage,
	makeInMemoryStore,
	getContentType,
	jidDecode,
	getAggregateVotesInPollMessage,
	proto,
	delay
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const os = require('os')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const figlet = require("figlet");
const _ = require('lodash')
const util = require('util')
const {
	Boom
} = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const {
	imageToWebp,
	imageToWebp3,
	videoToWebp,
	writeExifImg,
	writeExifImgAV,
	writeExifVid
} = require('./lib/exif')
const {
	smsg,
	isUrl,
	generateMessageTag,
	getBuffer,
	getSizeMedia,
	fetchJson,
	await,
	sleep,
	syntaxFetch
} = require('./lib/myfunc')

let setting = JSON.parse(fs.readFileSync('./config.json'));
let session = `sessions`
let usePairingCode = true

const question = (text) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise((resolve) => {
		rl.question(text, resolve)
	})
};
//=================================================//
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db.data = {
	sticker: {},
	database: {},
	game: {},
	others: {},
	users: {},
	chats: {},
	rpg: {},
	settings: {},
	anonymous: {},
	...(global.db.data || {})
}

//=================================================//
const jadibot = async (vreden, m, from) => {
vreden.client = vreden.client ? vreden.client : {}
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState(`./database/jadibot/${m.sender.split("@")[0]}`)
	vreden.client[from] = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});
	if (!vreden.client[from].authState.creds.registered) {
	setTimeout(async () => {
		const code = await vreden.client[from].requestPairingCode(m.sender.split("@")[0])
		let teks = `*</> BOT SEMENTARA </>*

*Tutorial* :
1. copy code nya
2. klik settings WhatsApp
3. klik perangkat tertaut
4. klik kaitkan dgn nomor
5. masukin code bot nya

_expired dalam 20 detik_
`
let button = [{
	"name": "cta_copy",
	"buttonParamsJson": `{\"display_text\":\"Pairing Code\",\"id\":\"123456789\",\"copy_code\":\"${code}\"}`
}]
vreden.sendButtonText(m.chat, button, teks, "© Jadibot WhatsApp", m)
	}, 3000)
}
	//=================================================//
	const store = makeInMemoryStore({
		logger: pino().child({
			level: 'silent',
			stream: 'store'
		})
	})
	store.bind(vreden.client[from].ev)

	vreden.client[from].ev.on('messages.upsert', async chatUpdate => {
		try {
			mek = chatUpdate.messages[0]
			if (!mek.message) return
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key && mek.key.remoteJid === 'status@broadcast') return
			m = smsg(vreden.client[from], mek, store)
			require("./vreden")(vreden.client[from], m, chatUpdate, mek, store)
		} catch (err) {
			console.log(chalk.yellow.bold("[ ERROR ] vreden.js :\n") + chalk.redBright(util.format(err)))
		}
	})

	vreden.client[from].ev.on("connection.update", async (update) => {
		const {
			connection,
			lastDisconnect
		} = update;
		if (connection === "close") {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
			if (reason === DisconnectReason.badSession) {
				vreden.sendMessage(m.chat, { text: `Kesalahan Pada Sessions, Hapus Sessions Dan Coba Lagi...` })
				stopjadibot(vreden, m, from)
			} else if (reason === DisconnectReason.connectionClosed) {
				vreden.sendMessage(m.chat, { text: "Koneksi Ditutup, Menghubungkan Ulang...." })
				jadibot(vreden, m, from)
			} else if (reason === DisconnectReason.connectionLost) {
				vreden.sendMessage(m.chat, { text: "Koneksi Hilang dari Server, Menghubungkan Ulang..." })
				jadibot(vreden, m, from)
			} else if (reason === DisconnectReason.connectionReplaced) {
				vreden.sendMessage(m.chat, { text: "Sessions Terkoneksi Dengan Server Lain, Please Restart Bot." })
				stopjadibot(vreden, m, from)
			} else if (reason === DisconnectReason.loggedOut) {
				vreden.sendMessage(m.chat, { text: `Perangkat Keluar, Silakan Hapus Sesi Folder dan Pindai Lagi.` })
				stopjadibot(vreden, m, from)
			} else if (reason === DisconnectReason.restartRequired) {
				vreden.sendMessage(m.chat, { text: "Memuat Ulang Koneksi, Mulai Ulang..." })
				jadibot(vreden, m, from)
			} else if (reason === DisconnectReason.timedOut) {
				vreden.sendMessage(m.chat, { text: "Waktu Koneksi Habis, Menyambungkan Kembali..." })
				jadibot(vreden, m, from)
			} else {
				console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
				jadibot(vreden, m, from)
			}
		} else if (connection === "open") {
			vreden.sendMessage(m.chat, { text: `*Bot Clone Tersambung...*` })
			vreden.client[from].sendMessage("6287824695047@s.whatsapp.net", { text: `*⚡️[ Developer ] Bot Terhubung ⚡️*` })
			console.log('Connected...', update)
		}
	});

	vreden.client[from].ev.on('call', async (celled) => {
		let botNumber = await vreden.client[from].decodeJid(vreden.client[from].user.id)
		let koloi = setting.anticall
		if (!koloi) return
		console.log(celled)
		for (let kopel of celled) {
			if (kopel.isGroup == false) {
				if (kopel.status == "offer") {
					let nomer = await vreden.client[from].sendTextWithMentions(kopel.from, `*${vreden.client[from].user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
					vreden.client[from].sendContact(kopel.from, setting.ownerNumber.map(i => i.split("@")[0]), nomer)
					await sleep(8000)
					await vreden.client[from].updateBlockStatus(kopel.from, "block")
				}
			}
		}
	})

	vreden.client[from].ev.on('group-participants.update', async (anu) => {
		const {
			welcome
		} = require('./lib/welcome')
		const iswel = db.data.chats[anu.id].welcome
		const isLeft = db.data.chats[anu.id].goodbye
		welcome(iswel, isLeft, vreden.client[from], anu)
	})
	vreden.client[from].ev.on("message.delete", async (anu) => {
		const {
			aDelete
		} = require("./lib/welcome");
		aDelete(setting, vreden.client[from], anu)
	})

	vreden.client[from].ev.on('creds.update', saveCreds)

	// Setting
	vreden.client[from].decodeJid = (jid) => {
		if (!jid) return jid
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {}
			return decode.user && decode.server && decode.user + '@' + decode.server || jid
		} else return jid
	}

	vreden.client[from].ev.on('contacts.update', update => {
		for (let contact of update) {
			let id = vreden.client[from].decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = {
				id,
				name: contact.notify
			}
		}
	})

	vreden.client[from].getName = (jid, withoutContact = false) => {
		id = vreden.client[from].decodeJid(jid)
		withoutContact = vreden.client[from].withoutContact || withoutContact
		let v
		if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
			v = store.contacts[id] || {}
			if (!(v.name || v.subject)) v = vreden.client[from].groupMetadata(id) || {}
			resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
		})
		else v = id === '0@s.whatsapp.net' ? {
				id,
				name: 'WhatsApp'
			} : id === vreden.client[from].decodeJid(vreden.client[from].user.id) ?
			vreden.client[from].user :
			(store.contacts[id] || {})
		return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
	}

	vreden.client[from].sendContact = async (jid, kon, quoted = '', opts = {}) => {
		let list = []
		for (let i of kon) {
			list.push({
				displayName: await vreden.client[from].getName(i + '@s.whatsapp.net'),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await vreden.client[from].getName(i + '@s.whatsapp.net')}\nFN:${await vreden.client[from].getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:vredenofficiall@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://bit.ly/420u6GX\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
			})
		}
		vreden.client[from].sendMessage(jid, {
			contacts: {
				displayName: `${list.length} Kontak`,
				contacts: list
			},
			...opts
		}, {
			quoted
		})
	}

	vreden.client[from].setStatus = (status) => {
		vreden.client[from].query({
			tag: 'iq',
			attrs: {
				to: '@s.whatsapp.net',
				type: 'set',
				xmlns: 'status',
			},
			content: [{
				tag: 'status',
				attrs: {},
				content: Buffer.from(status, 'utf-8')
			}]
		})
		return status
	}

	const uploadFile = {
		upload: vreden.client[from].waUploadToServer
	};
	vreden.client[from].prefa = 'apasih'
	vreden.client[from].public = true
	vreden.client[from].serializeM = (m) => smsg(vreden.client[from], m, store)

	vreden.client[from].reSize = async (image, width, height) => {
		let jimp = require('jimp')
		var oyy = await jimp.read(image);
		var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
		return kiyomasa
	}

	vreden.client[from].sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
		let type = await vreden.client[from].getFile(path, true)
		let {
			res,
			data: file,
			filename: pathFile
		} = type
		if (res && res.status !== 200 || file.length <= 65536) {
			try {
				throw {
					json: JSON.parse(file.toString())
				}
			} catch (e) {
				if (e.json) throw e.json
			}
		}
		let opt = {
			filename
		}
		if (quoted) opt.quoted = quoted
		if (!type) options.asDocument = true
		let mtype = '',
			mimetype = type.mime,
			convert
		if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
		else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
		else if (/video/.test(type.mime)) mtype = 'video'
		else if (/audio/.test(type.mime))(
			convert = await toAudio(file, type.ext),
			file = convert.data,
			pathFile = convert.filename,
			mtype = 'audio',
			mimetype = 'audio/ogg; codecs=opus'
		)
		else mtype = 'document'
		if (options.asDocument) mtype = 'document'

		delete options.asSticker
		delete options.asLocation
		delete options.asVideo
		delete options.asDocument
		delete options.asImage

		let message = {
			...options,
			caption,
			ptt,
			[mtype]: {
				url: pathFile
			},
			mimetype,
			fileName: filename || pathFile.split('/').pop()
		}
		let m
		try {
			m = await vreden.client[from].sendMessage(jid, message, {
				...opt,
				...options
			})
		} catch (e) {
			//console.error(e)
			m = null
		} finally {
			if (!m) m = await vreden.client[from].sendMessage(jid, {
				...message,
				[mtype]: file
			}, {
				...opt,
				...options
			})
			file = null
			return m
		}
	}

	vreden.client[from].sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		let mime = '';
		let res = await axios.head(url)
		mime = res.headers['content-type']
		if (mime.split("/")[1] === "gif") {
			return vreden.client[from].sendMessage(jid, {
				video: await getBuffer(url),
				caption: caption,
				gifPlayback: true,
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		let type = mime.split("/")[0] + "Message"
		if (mime === "application/pdf") {
			return vreden.client[from].sendMessage(jid, {
				document: await getBuffer(url),
				mimetype: 'application/pdf',
				caption: caption,
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		if (mime.split("/")[0] === "image") {
			return vreden.client[from].sendMessage(jid, {
				image: await getBuffer(url),
				caption: caption,
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		if (mime.split("/")[0] === "video") {
			return vreden.client[from].sendMessage(jid, {
				video: await getBuffer(url),
				caption: caption,
				mimetype: 'video/mp4',
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		if (mime.split("/")[0] === "audio") {
			return vreden.client[from].sendMessage(jid, {
				audio: await getBuffer(url),
				caption: caption,
				mimetype: 'audio/mpeg',
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
	}

	vreden.client[from].sendTextWithMentions = async (jid, text, quoted, options = {}) => vreden.client[from].sendMessage(jid, {
		text: text,
		mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
		...options
	}, {
		quoted
	})
	
	function getTypeMessage(message) {
	const type = Object.keys(message)
	var restype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) || // Sometimes message in the front
		(type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) || // Sometimes message in midle if mtype length is greater than or equal to 3
		type[type.length - 1] || Object.keys(message)[0] // common case
	return restype
    }

	vreden.client[from].getFile = async (PATH, returnAsFilename) => {
		let res, filename
		let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
		if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}
		if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './sticker/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
		return {
			res,
			filename,
			...type,
			data
		}
	}

	vreden.client[from].sendStickerFromUrl = async (from, PATH, quoted, options = {}) => {
		let {
			writeExif
		} = require('./lib/sticker')
		let types = await vreden.client[from].getFile(PATH, true)
		let {
			filename,
			size,
			ext,
			mime,
			data
		} = types
		let type = '',
			mimetype = mime,
			pathFile = filename
		let media = {
			mimetype: mime,
			data
		}
		pathFile = await writeExif(media, {
			packname: options.packname ? options.packname : 'Vreden Bot',
			author: options.author ? options.author : '+6285727631507',
			categories: options.categories ? options.categories : []
		})
		await fs.promises.unlink(filename)
		await vreden.client[from].sendMessage(from, {
			sticker: {
				url: pathFile
			}
		}, {
			quoted
		})
		return fs.promises.unlink(pathFile)
	}

	vreden.client[from].imgToSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}
		await vreden.client[from].sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}

	vreden.client[from].vidToSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}
		await vreden.client[from].sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}

	vreden.client[from].sendImage = async (jid, path, caption = '', quoted = '', options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await vreden.client[from].sendMessage(jid, {
			image: buffer,
			caption: caption,
			...options
		}, {
			quoted
		})
	}
	
vreden.client[from].downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let isFile = message.mtype === "viewOnceMessageV2"
let mime = (isFile ? quoted.message[getContentType(quoted.message)] : quoted).mimetype || ''
let messageType = isFile ? (getContentType(quoted.message)).replace(/Message/gi, '') : message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(isFile ? quoted.message[getContentType(quoted.message)] : quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

vreden.client[from].downloadMediaMessage = async (message) => {
let quoted = message.msg ? message.msg : message
let isFile = message.mtype === "viewOnceMessageV2"
let mime = (isFile ? quoted.message[getContentType(quoted.message)] : quoted).mimetype || ''
let messageType = isFile ? (getContentType(quoted.message)).replace(/Message/gi, '') : message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(isFile ? quoted.message[getContentType(quoted.message)] : quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

return buffer
} 

	vreden.client[from].sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await vreden.client[from].sendMessage(jid, {
			audio: buffer,
			ptt: ptt,
			...options
		}, {
			quoted
		})
	}

	vreden.client[from].sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await vreden.client[from].sendMessage(jid, {
			video: buffer,
			caption: caption,
			gifPlayback: gif,
			...options
		}, {
			quoted
		})
	}

	vreden.client[from].sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		let types = await vreden.client[from].getFile(path, true)
		let {
			mime,
			ext,
			res,
			data,
			filename
		} = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try {
				throw {
					json: JSON.parse(file.toString())
				}
			} catch (e) {
				if (e.json) throw e.json
			}
		}
		let type = '',
			mimetype = mime,
			pathFile = filename
		if (options.asDocument) type = 'document'
		if (options.asSticker || /webp/.test(mime)) {
			let media = {
				mimetype: mime,
				data
			}
			pathFile = await writeExif(media, {
				packname: options.packname ? options.packname : global.packname,
				author: options.author ? options.author : global.author,
				categories: options.categories ? options.categories : []
			})
			await fs.promises.unlink(filename)
			type = 'sticker'
			mimetype = 'image/webp'
		} else if (/image/.test(mime)) type = 'image'
		else if (/video/.test(mime)) type = 'video'
		else if (/audio/.test(mime)) type = 'audio'
		else type = 'document'
		await vreden.client[from].sendMessage(jid, {
			[type]: {
				url: pathFile
			},
			caption,
			mimetype,
			fileName,
			...options
		}, {
			quoted,
			...options
		})
		return fs.promises.unlink(pathFile)
	}

	vreden.client[from].copyNForward = async (jid, message, forceForward = false, options = {}) => {
		let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

		let mtype = Object.keys(message.message)[0]
		let content = await generateForwardMessageContent(message, forceForward)
		let ctype = Object.keys(content)[0]
		let context = {}
		if (mtype != "conversation") context = message.message[mtype].contextInfo
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		}
		const waMessage = await generateWAMessageFromContent(jid, content, options ? {
			...content[ctype],
			...options,
			...(options.contextInfo ? {
				contextInfo: {
					...content[ctype].contextInfo,
					...options.contextInfo
				}
			} : {})
		} : {})
		await vreden.client[from].relayMessage(jid, waMessage.message, {
			messageId: waMessage.key.id
		})
		return waMessage
	}

	vreden.client[from].sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: vreden.client[from].ments(text),
			externalAdReply: {
			    showAdAttribution: true
			}
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					"messageContextInfo": {
						"deviceListMetadata": {},
						"deviceListMetadataVersion": 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						mentionedJid: vreden.client[from].ments(text),
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							subtitle: "Yahya Almuthahar",
							hasMediaAttachment: false
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		return vreden.client[from].relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
	}

	vreden.client[from].sendButtonImage = async (jid, image, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: vreden.client[from].ments(text),
			externalAdReply: {
			    showAdAttribution: true
			}
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		var imageMessage = await prepareWAMessageMedia({
				image: image,
			},
			uploadFile,
		);
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					"messageContextInfo": {
						"deviceListMetadata": {},
						"deviceListMetadataVersion": 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							subtitle: "Yahya Almuthahar",
							imageMessage: imageMessage.imageMessage,
							hasMediaAttachment: true
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		return vreden.client[from].relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
	}

	vreden.client[from].sendButtonVideo = async (jid, video, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: vreden.client[from].ments(text),
			externalAdReply: {
			    showAdAttribution: true,
			    thumbnailUrl: "https://pomf2.lain.la/f/khswyvwp.jpg",
			    title: "WhatsApp GPT"
			}
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		var videoMessage = await prepareWAMessageMedia({
				video: video,
			},
			uploadFile,
		);
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					"messageContextInfo": {
						"deviceListMetadata": {},
						"deviceListMetadataVersion": 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							subtitle: "Yahya Almuthahar",
							videoMessage: videoMessage.videoMessage,
							hasMediaAttachment: true
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		return vreden.client[from].relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
	}

	vreden.client[from].sendButtonDocument = async (jid, document = {}, buttons = [], text, footer, quoted = '', options = {
		contextInfo: {
			mentionedJid: vreden.client[from].ments(text),
			externalAdReply: {
			    showAdAttribution: true,
			    thumbnailUrl: "https://pomf2.lain.la/f/khswyvwp.jpg",
			    title: "WhatsApp GPT"
			}
		}
	}) => {
		let button = []
		for (let i = 0; i < buttons.length; i++) {
			button.push({
				"name": buttons[i].name,
				"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
			})
		}
		let msg = generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					"messageContextInfo": {
						"deviceListMetadata": {},
						"deviceListMetadataVersion": 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						...options,
						body: proto.Message.InteractiveMessage.Body.create({
							text: text
						}),
						footer: proto.Message.InteractiveMessage.Footer.create({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.create({
							title: "",
							subtitle: "Yahya Almuthahar",
							hasMediaAttachment: true,
							...(await prepareWAMessageMedia(document, {
								upload: vreden.client[from].waUploadToServer
							}))
						}),
						gifPlayback: true,
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							buttons: button,
						})
					})
				}
			}
		}, {
			quoted: quoted
		})

		await vreden.client[from].relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
	}


	vreden.client[from].sendText = (jid, text, quoted = '', options) => vreden.client[from].sendMessage(jid, {
		text: text,
		...options
	}, {
		quoted,
		...options
	})

	vreden.client[from].ments = (teks = '') => {
		return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
	};
	vreden.client[from].sendteks = async (chatId, text = '', quoted = '', opts = {}) => {
		return vreden.client[from].sendMessage(chatId, {
			text: text,
			mentions: await vreden.client[from].ments(text),
			...opts
		}, {
			quoted: quoted
		})
	};
	vreden.client[from].sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
		return vreden.client[from].sendMessage(jid, {
			poll: {
				name,
				values,
				selectableCount
			}
		})
	};

	vreden.client[from].cMod = (jid, copy, text = '', sender = vreden.client[from].user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
		if (isEphemeral) {
			mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
		}
		let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
		if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
		}
		if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === vreden.client[from].user.id

		return proto.WebMessageInfo.fromObject(copy)
	}
	vreden.client[from].serializeM = (m) => smsg(vreden.client[from], m, store)
	return vreden.client[from]
}
	
const stopjadibot = async (vreden, m, from) => {
if (!vreden.client[from]) return m.reply("*Tidak ada bot yang sedang terkoneksi*")
fs.rm(`./database/jadibot/${m.sender.split("@")[0]}`, { recursive: true, force: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  m.reply("Sessions berhasil dihapus")
});
delete vreden.client[from]
m.reply("*Bot Stopped*")
}

async function listjadibot(vreden, m) {
  let from = m.key.remoteJid
  let mentions = []
  let text = "List Jadi Bot :\n"
  for (let jadibot of Object.keys(vreden.client)) {
    mentions.push(jadibot)
    text += ` × ${jadibot}\n`
  }
  return vreden.sendMessage(from, { text: text.trim(), mentions, })
}

module.exports = { jadibot, stopjadibot, listjadibot }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})