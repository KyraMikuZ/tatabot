import fs from 'node:fs'

const path = './media/produk.json'

export const run = {
   usage: ['delproduk'],
   use: 'command',
   category: 'owner',
   async: async (m, { text }) => {
      try {
         if (!text) {
            return m.reply('Masukkan nama produk!\nContoh: delproduk netflix')
         }

         let cmd = text.trim().toLowerCase()

         // cek file database
         if (!fs.existsSync(path)) {
            return m.reply('Database produk tidak ditemukan!')
         }

         let db = JSON.parse(fs.readFileSync(path))

         // cek apakah produk ada
         if (!db[cmd]) {
            return m.reply(`Produk "${cmd}" tidak ditemukan!`)
         }

         // hapus produk
         delete db[cmd]

         fs.writeFileSync(path, JSON.stringify(db, null, 2))

         m.reply(`✅ Produk "${cmd}" berhasil dihapus!`)

      } catch (e) {
         m.reply(String(e))
      }
   },
   error: false,
   owner: true
}