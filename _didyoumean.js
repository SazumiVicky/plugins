let didyoumean = require('didyoumean')

let handler = m => m

handler.before = function (m, { match, usedPrefix, text, args }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
	 if (mean) this.sendButton(m.chat, `Apakah kamu mencari *${usedPrefix + mean}*?\n`, wm, 'https://i.pinimg.com/564x/c4/19/f9/c419f9d904a533a5433cfef081bfbc09.jpg', [['BENAR', usedPrefix + mean], ['TIDAK', usedPrefix + 'kontol']], m)
	}
  }

module.exports = handler