import fs from 'node:fs'

const path = './media/produk.json'

export const run = {
   usage: ['setform'],
   use: 'text',
   category: 'owner',
   async: async (m, { text }) => {
      try {
         if (!text) {
            return m.reply('Masukkan isi form!\nContoh:\nsetform Nama:\\nProduk:\\nDurasi:')
         }

         // pastikan file ada
         if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify({}, null, 2))
         }

         let db = JSON.parse(fs.readFileSync(path))

         // simpan form
         db.form = {
            text: text
         }

         fs.writeFileSync(path, JSON.stringify(db, null, 2))

         m.reply('✅ Form berhasil diupdate!')

      } catch (e) {
         m.reply(String(e))
      }
   },
   error: false,
   owner: true,
}