import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    let grupos = "*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad* ⭐\n\n" +
                 "1- Ventas Online\n" +
                 "*✰* https://chat.whatsapp.com/" +
                 "*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*\n\n" +
                 "➠ Enlace anulado? entre aquí! \n\n" +
                 "⭐ Canal :\n" +
                 "*✰*https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m" +
                 "> By Evolution";

    // Asegúrate de definir 'imagen2' correctamente antes de usarlo
    let imagen2 = 'https://files.catbox.moe/hrey02.png';

    // Define los emojis que quieres usar
    let emojis = '🍁';

    await conn.sendFile(m.chat, imagen2, "ian.jpg", grupos, m, null, rcanal);
    await m.react(emojis);
}

handler.help = ['grupos'];
handler.tags = ['main'];
handler.command = ['grupos', 'iangrupos', 'gruposian'];

export default handler;
