const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');


const token = '7818601616:AAEXkZi0rNL8IGxheghMq8UX9PCUPtyE858';


const channelId = -1002397816296;


const bot = new TelegramBot(token, { polling: true });


async function sendMessageWithImageAndButton() {
    try {
        const imageUrl = 'https://bmw.scene7.com/is/image/BMW/g60_ice_home-teaser_ext_top-view-driving_titan-bronze?wid=3000&hei=3000';

        const caption = 'Это пример сообщения с изображением и кнопкой!';

        const keyboard = {
            inline_keyboard: [
                [{ text: 'Нажми меня!', url: 'https://example.com' }]
            ]
        };

        const response = await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, {
            chat_id: channelId,
            photo: imageUrl,
            caption: caption,
            reply_markup: JSON.stringify(keyboard)
        });

        console.log('Сообщение отправлено:', response.data);
    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
    }
}

sendMessageWithImageAndButton();