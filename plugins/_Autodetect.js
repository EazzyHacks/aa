import chalk from 'chalk'
import fetch from 'node-fetch'
import ws from 'ws'
let WAMessageStubType = (await import('@whiskeysockets/baileys')).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync} from 'fs'
import path from 'path'

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata}) {
    if (!m.messageStubType ||!m.isGroup) return

    const fkontak = {
        key: {
            participants: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "AlienMenu"
},
        message: {
            locationMessage: {
                name: "【 𝐄𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐁𝐨𝐭 】",
                jpegThumbnail: await (await fetch('https://files.catbox.moe/hrey02.png')).buffer(),
                vcard:
                    "BEGIN:VCARD\n" +
                    "VERSION:3.0\n" +
                    "N:;Sasuke;;;\n" +
                    "FN:Sasuke Bot\n" +
                    "ORG:Barboza Developers\n" +
                    "TITLE:\n" +
                    "item1.TEL;waid=51936994155:+51 936 994 155\n" +
                    "item1.X-ABLabel:Alien\n" +
                    "X-WA-BIZ-DESCRIPTION:🛸 Llamado grupal universal con estilo.\n" +
                    "X-WA-BIZ-NAME:Evolution\n" +
                    "END:VCARD"
}
},
        participant: "0@s.whatsapp.net"
}

    let chat = global.db.data.chats[m.chat]
    let usuario = `@${m.sender.split`@`[0]}`
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://files.catbox.moe/xr2m6u.jpg'

    let nombre = `✨ ${usuario} *ha cambiado el nombre del grupo* ✨\n\n> 📝 *Nuevo nombre:* _${m.messageStubParameters[0]}_`
    let foto = `📸 *¡Nueva foto de grupo!* 📸\n\n> 💫 Acción realizada por: ${usuario}`
    let edit = `⚙️ ${usuario} ha ajustado la configuración del grupo.\n\n> 🔒 Ahora *${m.messageStubParameters[0] == 'on'? 'solo los administradores': 'todos'}* pueden configurar el grupo.`
    let newlink = `🔗 *¡El enlace del grupo ha sido restablecido!* 🔗\n\n> 💫 Acción realizada por: ${usuario}`
    let status = `🗣️ El grupo ha sido *${m.messageStubParameters[0] == 'on'? 'cerrado': 'abierto'}* por ${usuario}!\n\n> 💬 Ahora *${m.messageStubParameters[0] == 'on'? 'solo los administradores': 'todos'}* pueden enviar mensajes.`
    let admingp = `🤖 𝐄𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐀𝐯𝐢𝐬𝐨 🤖\n\n 🗣️ 𝐍𝐮𝐞𝐯𝐨 𝐀𝐝𝐦𝐢𝐧 : @${m.messageStubParameters[0].split`@`[0]}\n🫶🏼 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐀 : ${usuario}\n\n> 𝐒𝐢 𝐃𝐞𝐬𝐞𝐚𝐬 𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐄𝐥 𝐁𝐨𝐭 𝐄𝐬𝐜𝐫𝐢𝐛𝐞 .𝐬𝐡𝐨𝐩𝐞𝐯𝐨 👑`
    let noadmingp = `🤖 𝐄𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐀𝐯𝐢𝐬𝐨 🤖\n\n 🗣️ 𝐀𝐝𝐦𝐢𝐧 𝐌𝐞𝐧𝐨𝐬 : @${m.messageStubParameters[0].split`@`[0]}\n☠️ 𝐅𝐮𝐞 𝐐𝐮𝐢𝐭𝐚𝐝𝐨 𝐏𝐨𝐫 :  ${usuario}\n\n> 𝐒𝐢 𝐃𝐞𝐬𝐞𝐚𝐬 𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐄𝐥 𝐁𝐨𝐭 𝐄𝐬𝐜𝐫𝐢𝐛𝐞 .𝐬𝐡𝐨𝐩𝐞𝐯𝐨 👑`

    if (chat.detect && m.messageStubType == 21) {
        await this.sendMessage(m.chat, { text: nombre, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType == 22) {
        await this.sendMessage(m.chat, { image: { url: pp}, caption: foto, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType == 23) {
        await this.sendMessage(m.chat, { text: newlink, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType == 25) {
        await this.sendMessage(m.chat, { text: edit, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType == 26) {
        await this.sendMessage(m.chat, { text: status, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType == 29) {
        await this.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]}, { quoted: fkontak})
} else {
        console.log({
            messageStubType: m.messageStubType,
            messageStubParameters: m.messageStubParameters,
            type: WAMessageStubType[m.messageStubType],
})
}
}

export default handler
