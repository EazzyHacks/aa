
// Código Hecho Por Barboza
let handler = async (m, { conn }) => {
    // React con un emoji al mensaje
    await m.react('⭐');

    // Mensaje que se enviará
    const message = `
*Deseas Bot Perzonalizado O Pa Tu Grupo ¿? ⭐*
> 1 Grupo Permanente : *5 So*
> 2 Grupos Permanente : *7 So*
> 3 Grupos Permanente : *11 So*
> 4 Grupos Permanente : *16 So*

> Bot Perzonalizado : *35 So*

Grupo Wa : https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ
Canal / Notificaciones : https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m`;

    if (m.isGroup) {
        // URL de la imagen
        const imageUrl ='https://files.catbox.moe/5toexd.jpeg'; // Cambia esta URL por la de la imagen que deseas enviar

        // Envía la imagen con el mensaje
        await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
    }
}

handler.help = ['evoshop'];
handler.tags = ['main'];
handler.group = true;
handler.command = ['evoshop', 'evoshop'];

export default handler;
