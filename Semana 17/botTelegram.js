const { Telegraf } = require("Telegraf");
const bot = new Telegraf("5355039047:AAHkWjBlpHd9uOGgyvio0qUy0PIxsnXy_S0");

bot.start((ctx) => {
    ctx.reply(`Hola, buen día ${(ctx.from.first_name)}`);
});

//comando personalizado
bot.command(["saludar", "saludo", "comando"], (ctx) => {
    ctx.reply("Comando personalizado");
});

bot.on('sticker', (ctx) => {
    ctx.reply("Has enviado un sticker :)");
})

//iniciar el bot
bot.launch();