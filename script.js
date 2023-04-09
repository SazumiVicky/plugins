let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn }) => { 
let stiker = await sticker(null, global.API(`https://telegra.ph/file/77dee8345386afd5f05ad.png`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.help = ['script']
handler.tags = ['main', 'tools']
handler.command = /^(script|source|sc)$/i
handler.limit = true
handler.premium = true

module.exports = handler