let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230404_140556.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 089678063142
┃Pulsa: 085236226786
┃Gopay: Belum Tersedia 
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/sazumi
┃Trakteer: Belum Tersedia 
┃Socialbuzz: Belum Tersedia
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler