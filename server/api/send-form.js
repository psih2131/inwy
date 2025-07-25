export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const token = '8321852959:AAFEi9grq413l_y1KfbN7nUVQnm0ZWZzsC0'
    const chatId = '-4984588140'



    const text = `
📨 Новая заявка с сайта:

👤 Имя: ${body.name}
📧 Email: ${body.email}
📱 Телефон: ${body.phone}



url страницы заявки: ${body.currentUrl}
Где была нажата кнопка: ${body.currentPlase}
  `.trim()

    const res = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        body: {
            chat_id: chatId,
            text,
        },
    })

    return res
})