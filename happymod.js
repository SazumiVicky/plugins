let fetch = require('node-fetch')

let handler = async (m, { conn,  text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Query!\nContoh: ${usedPrefix + command} spotify`
	let dann = await fetch(`https://api.zahwazein.xyz/webzone/happymod?query=${text}&apikey=e6acac24b9`)
	let res = await dann.json()
    const hasil = res.result.map((v, i) => `${v.icon}\n${v.name}\n${v.link}\n`).join('\n')
	await conn.sendButton(m.chat, hasil, wm, 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/510e37bebbf7a780e7ade93a66f268ff.jpg', [['Download', `.google mod ${text}`]], m)
}
handler.help = ['happymod']
handler.tags = ['downloader', 'internet']

handler.command = /^happymod$/i
handler.premium = false

module.exports = handler

/*
  * Dann Official
  * Instagram: @dannalwaysalone
*/