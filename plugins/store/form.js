import fs from 'fs'

export const run = {
   usage: ['form'],
   category: 'store',
   async: async (m, {
      client,
      isPrefix,
      command,
      setting,
      Utils
   }) => {
      try {
         // Teks formulir yang akan di-copy
         const formText = `📋 *FORM ORDER*

Tanggal Order: ${new Date().toLocaleDateString('id-ID')}
Nama / Username: 
Nama APK: 
Jenis Plan: 
Durasi: 
Device (merek & lokasi): 
Nomor WA / Email: 
Resell / Pribadi: 
Done Subc : @yanamiku.shop`

         // Button copy menggunakan cta_copy
         const buttons = [{
            name: 'cta_copy',
            buttonParamsJson: JSON.stringify({
               display_text: '📋 Copy Form',
               copy_code: formText
            })
         }]

         // Kirim pesan dengan button copy
         client.sendIAMessage(m.chat, buttons, m, {
            header: '📝 *FORMULIR ORDER*',
            content: `Halo @${m.sender.replace(/@.+/g, '')},\n\nSilakan klik tombol di bawah untuk menyalin formulir order.\n\nSetelah menyalin, isi formulir tersebut dan kirimkan kembali ke sini.\n\n${formText}`,
            v2: true,
            footer: global.footer || '© WhatsApp Bot',
            media: Utils.isUrl(setting.cover) ? setting.cover : Buffer.from(setting.cover, 'base64')
         })

      } catch (e) {
         client.reply(m.chat, `❌ Error: ${e.message}`, m)
      }
   },
   error: false
}