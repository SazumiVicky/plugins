let fetch = require('node-fetch')

let handler = async (m, { conn,  text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Query\nContoh: ${usedPrefix + command} spotify`
	let api = await fetch(`https://api.zahwazein.xyz/webzone/moddroid?query=${text}&apikey=e6acac24b9`)
	let res = await api.json()
	let hasil = `Nama: ${res.result.name}\nDeskripsi: ${res.result.desc}\n\nLink: ${res.result.link}`
	let thumb = `${res.result.img}`
	await conn.sendButton(m.chat, hasil, wm, thumb, [['Download', `.mediafire ${text}`]], m)
}
handler.help = ['moddroid'].map(v => v + ' <query>')
handler.tags = ['downloader', 'internet']

handler.command = /^moddroid$/i
handler.premium = false

module.exports = handler