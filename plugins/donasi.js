let handler = async m => m.reply(`
╭─「 Donasi • Pulsa,Dana,Ovo,Gopay」
│ •  [082388332165]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler