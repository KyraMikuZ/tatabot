import fs from 'node:fs'

const path = './media/produk.json'

let listCommand = []

// load command dari database
if (fs.existsSync(path)) {
   let db = JSON.parse(fs.readFileSync(path))
   listCommand = Object.keys(db)
}

export const run = {
   usage: listCommand.length ? listCommand : ['produk'],
   category: 'produk',
   async: async (m, { command }) => {
      try {
         if (!fs.existsSync(path)) return

         let db = JSON.parse(fs.readFileSync(path))

         if (!db[command]) return

         let res = db[command].message

         m.reply(res)

      } catch (e) {
         m.reply(String(e))
      }
   },
   error: false
}