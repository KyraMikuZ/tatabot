// file: netflix.js

export const run = {
   usage: ['netflix'],
   category: 'store',
   async: async (m, {
      client,
      isPrefix,
      command,
      Utils
   }) => {
      try {
         // Teks caption dengan daftar paket Netflix (tanpa JSON)
         const caption = `
*───『 NETFLIX PREMIUM 』───*
╭━━━━━━━━━━━━━━━━━━━━━╮
│  🎬 *LAYANAN PREMIUM NETFLIX*
│  Akses tayangan favorit Anda
│  Tanpa iklan & kualitas terbaik!
╰━━━━━━━━━━━━━━━━━━━━━╯

┌─────────────────────┐
│ 🎬 *Paket Basic*
├─────────────────────┤
│ 💰 Harga    : Rp 65.000
│ ⏱️ Durasi    : 1 Bulan
│ 📱 Device    : 1 Layar (SD)
│ ✨ Fitur     : Resolusi 480p
└─────────────────────┘

┌─────────────────────┐
│ 🎥 *Paket Standard*
├─────────────────────┤
│ 💰 Harga    : Rp 120.000
│ ⏱️ Durasi    : 1 Bulan
│ 📱 Device    : 2 Layar (HD)
│ ✨ Fitur     : Resolusi 1080p
└─────────────────────┘

┌─────────────────────┐
│ 🌟 *Paket Premium*
├─────────────────────┤
│ 💰 Harga    : Rp 165.000
│ ⏱️ Durasi    : 1 Bulan
│ 📱 Device    : 4 Layar (UHD)
│ ✨ Fitur     : 4K + HDR + Audio Spasial
└─────────────────────┘

┌─────────────────────┐
│ 👑 *Paket Premium + 3 Bulan*
├─────────────────────┤
│ 💰 Harga    : Rp 450.000
│ ⏱️ Durasi    : 3 Bulan
│ 📱 Device    : 4 Layar (UHD)
│ ✨ Fitur     : Hemat Rp 45.000
└─────────────────────┘

┌─────────────────────┐
│ 💎 *Paket Premium + 12 Bulan*
├─────────────────────┤
│ 💰 Harga    : Rp 1.650.000
│ ⏱️ Durasi    : 12 Bulan
│ 📱 Device    : 4 Layar (UHD)
│ ✨ Fitur     : Hemat Rp 330.000 + Bonus 1 Bulan
└─────────────────────┘

╭━━━━━━━━━━━━━━━━━━━━━╮
│  📌 *CARA ORDER:*
│  Ketik: ${isPrefix}order netflix [paket]
│  Contoh: ${isPrefix}order netflix premium
│
│  💬 *INFO LEBIH LANJUT:*
│  Ketik ${isPrefix}infonetflix
╰━━━━━━━━━━━━━━━━━━━━━╯

© ${new Date().getFullYear()} Netflix Premium Store
        `

         // URL gambar Netflix (ganti dengan gambar yang Anda inginkan)
         const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWpKgcs6RA7ZyaE8CFlFd103DaSgyb9Xelw&s'
         
         // Kirim gambar + caption
         await client.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: Utils.Styles ? Utils.Styles(caption) : caption,
            contextInfo: {
               forwardingScore: 999,
               isForwarded: true,
               forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363304428318297@newsletter',
                  newsletterName: 'Netflix Premium Store',
                  serverMessageId: 1
               }
            }
         }, { quoted: m })

      } catch (e) {
         console.error(e)
         client.reply(m.chat, `❌ Error: ${e.message}`, m)
      }
   },
   error: false
}