import TelegramBot from 'node-telegram-bot-api'

const token = '7615840087:AAFNSJFnxsSgRRFTbI1Ur9QBD81mwh3S7IM'

const webSocketUrl = 'https://hasket510.github.io/tg-mini-app/'
const weatherUrl = 'https://hasket510.github.io/tg-mini-app/weather'
const infiniteScrollUrl =
	'https://hasket510.github.io/tg-mini-app/infiniteScroll'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async msg => {
	const chatId = msg.chat.id
	const text = msg.text

	if (text === '/start') {
		await bot.setChatTheme(chatId, 'light')

		await bot.sendMessage(chatId, 'Welcome!', {
			reply_markup: {
				keyboard: [
					[{ text: 'Websocket', web_app: { url: webSocketUrl } }],
					[{ text: 'Weather', web_app: { url: weatherUrl } }],
					[{ text: 'InfiniteScroll', web_app: { url: infiniteScrollUrl } }],
				],
			},
		})
	}
})
