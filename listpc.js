let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://i.pinimg.com/564x/05/98/bf/0598bfe852f9fb27fed4913fb90e5ca8.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${'@' + jid.replace(/@.+/, '')}\n\n`
return conn.sendButton(m.chat, htki + ' *CHAT PRIVATE* ' + htka + '\n' + bottime, '*Total:* ' + niorg.length + '\n\n' + txt.trim(), m, [['Sewa Bot', '.sewa'],['Groups List', '.groups']], m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

module.exports = handler