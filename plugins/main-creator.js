async function handler(m, { conn }) {
    let numcreador = '51936994155';
    let ownerJid = numcreador + '@s.whatsapp.net';

    let name = await conn.getName(ownerJid) || 'Owner';
    let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Creador de bots de WhatsApp';
    let empresa = '';

    let caption = `
✨ *Información del Dueño:* ✨

*👤 Nombre:* ${name}
*📞 Número:* wa.me/${numcreador}
*📝 Descripción:* ${about}
*🏢 Empresa:* ${empresa}
*📧 Email:* yallico2024@gmail.com
*📸 Instagram:* https://www.instagram.com/evolution.hack
`;

    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
