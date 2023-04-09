let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Byee👋, Ayaka Ai akan keluar dari group', m.chat) 
        await conn.delay(1000)
        await conn.groupLeave(group)
        }
handler.help = ['gc', 'group']
handler.tags = ['group']
handler.command = /^leavegroup|out|leavegc$/i

handler.owner = true

module.exports = handler