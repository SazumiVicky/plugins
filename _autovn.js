let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.autoVn) {
    let sim = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
    let res = await sim.json()
        let tts = `https://hadi-api.herokuapp.com/api/tts?language=id&text=${res.success}`
        conn.sendMessage(m.chat, { audio: { url: tts }, mimetype: 'audio/mp4' })
    }
}

module.exports = handler