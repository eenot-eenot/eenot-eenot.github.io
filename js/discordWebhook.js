const webhook = 'https://discord.com/api/webhooks/1514365530356846592/1L7nSgckth7dE6Mnqi4UH3q0YKj_U10pgkLf9YEc9MTj4-85jj5zHYu8lRHKHTbJ7gzW'

async function writeMessageInDiscord(inputText) {

    const formData = new FormData();
    const payload = {
        url: webhook,
        username: 'Orders Notifer',
        avatar_url: 'https://eenot-eenot.github.io/img/icon.svg',
        content: `<@794675642037567498> \n${inputText}`
    };

    formData.append('payload_json', JSON.stringify(payload));

    try {
        const response = await fetch(payload.url, {
            method: 'POST',
            body: formData
        });
        console.log(`${payload.username}: Статус ${response.status}`);
    } catch (error) {
        console.error(`${payload.username}: Ошибка:`, error);
    }
}