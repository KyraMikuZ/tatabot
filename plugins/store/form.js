import fs from 'fs'

const path = './media/produk.json'

export const run = {
   usage: ['form'],
   category: 'store',
   async: async (m, {
      client,
      setting,
      Utils
   }) => {
      try {
         if (!fs.existsSync(path)) {
            return m.reply('Database tidak ditemukan!')
         }

         let db = JSON.parse(fs.readFileSync(path))

         if (!db.form || !db.form.text) {
            return m.reply('Form belum diset! Gunakan command setform')
         }

         // inject tanggal otomatis
         let formText = db.form.text.replace(
            /{tanggal}/gi,
            new Date().toLocaleDateString('id-ID')
         )

         const buttons = [{
            name: 'cta_copy',
            buttonParamsJson: JSON.stringify({
               display_text: '📋 Copy Form',
               copy_code: formText
            })
         }]

         client.sendIAMessage(m.chat, buttons, m, {
            header: '📝 *FORMULIR ORDER*',
            content: `Halo @${m.sender.replace(/@.+/g, '')}\n\nSilakan copy form di bawah:\n\n${formText}`,
            v2: true,
            footer: global.footer || '© WhatsApp Bot',
            media: Utils.isUrl(setting.cover)
               ? setting.cover
               : Buffer.from(setting.cover, 'base64')
         })

      } catch (e) {
         client.reply(m.chat, `❌ Error: ${e.message}`, m)
      }
   },
   error: false
}