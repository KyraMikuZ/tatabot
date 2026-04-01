import fs from 'node:fs'

const path = './media/produk.json'

export const run = {
   usage: ['addproduk'],
   use: 'command|message',
   category: 'owner',
   async: async (m, { text, client }) => {
      try {
         if (!text || !text.includes('|')) {
            return m.reply('Format salah!\nContoh: addproduk netflix|Hello World!')
         }

         let [cmd, message] = text.split('|').map(v => v.trim().toLowerCase())

         if (!cmd || !message) {
            return m.reply('Command dan message tidak boleh kosong!')
         }

         // cek file
         if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify({}, null, 2))
         }

         let db = JSON.parse(fs.readFileSync(path))

         // simpan
         db[cmd] = {
            message: message
         }

         fs.writeFileSync(path, JSON.stringify(db, null, 2))

         m.reply(`✅ Produk berhasil ditambahkan\nCommand: ${cmd}\nMessage: ${message}`)

      } catch (e) {
         m.reply(String(e))
      }
   },
   error: false,
   owner: true
}