const lang = 'ru'



const stagesContainer = document.getElementById('stages')
const stages = [
    {
        ru: [
            "1. Обсуждение проекта",
            "Уточняем цели, задачи и пожелания к будущему сайту. Определяем необходимый функционал, сроки и примерный бюджет проекта."
        ]
    },
    {
        ru: [
            "2. Оценка и планирование",
            "Формирую предложение по проекту, согласовываем структуру сайта, объём работ и этапы реализации."
        ]
    },
    {
        ru: [
            "3. Предоплата",
            "После согласования деталей вносится предоплата 50%, после чего начинается работа над проектом."
        ]
    },
    {
        ru: [
            "4. Разработка",
            "Создаю дизайн и реализую необходимый функционал. На протяжении работы предоставляю промежуточные результаты для ознакомления."
        ]
    },
    {
        ru: [
            "5. Демонстрация результата",
            "Показываю готовый проект и предоставляю доступ для проверки основных функций и содержимого."
        ]
    },
    {
        ru: [
            "6. Корректировки и завершение",
            "Вношу согласованные правки, после чего производится окончательный расчёт и передача проекта."
        ]
    },
]

stages.forEach(stage => {
    const h = document.createElement('h2')
    h.textContent = stage[lang][0]

    const div = document.createElement('div')
    div.className = 'inline'

    const p = document.createElement('p')
    p.className = 'prcessDescr'
    p.textContent = stage[lang][1]
    const btn = document.createElement('button')
    btn.className = 'showStageDesk'
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0379 20.3815L7.25991 12.7125C6.86291 12.3205 6.86291 11.6805 7.25991 11.2885L15.0379 3.6185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    
    h.addEventListener('click', () => {
        h.classList.toggle('active')
        p.classList.toggle('active')
        btn.classList.toggle('active')
    })
    btn.addEventListener('click', () => {
        h.classList.toggle('active')
        p.classList.toggle('active')
        btn.classList.toggle('active')
    })

    div.appendChild(h)
    div.appendChild(btn)
    stagesContainer.appendChild(div)
    stagesContainer.appendChild(p)
})



const worksContainer = document.getElementById('works')
const works = {
    saturn: {
        name: 'Saturn - Universal Server',
        link: 'https://saturn-info.github.io',
        type: 'website',
    },
    eeditor: {
        name: 'EEditor WS',
        link: 'https://eeditor-ws.vercel.app',
        type: 'webapp',
    },
    gelt: {
        name: 'GeltGolem - learn programming',
        link: 'https://geltgolem.github.io',
        type: 'landing',
    },
    nwf: {
        name: 'NWF Multiplayer Server',
        link: 'https://nwf-info.github.io',
        type: 'website',
    },
    eeapps: {
        name: 'EE Apps',
        link: 'https://ee-apps.github.io',
        type: 'website',
    },
}

Object.keys(works).forEach(work => {
    const data = works[work]



    const div = document.createElement('a')
    div.href = data.link
    div.className = 'workContainer'

    const img = document.createElement('img')
    img.src = `examples/${work}/screenshoot.png`
    div.appendChild(img)

    const texts = document.createElement('div')
    texts.className = 'workInfo'
    div.appendChild(texts)

    const title = document.createElement('h2')
    title.textContent = data.name
    texts.appendChild(title)

    const type = document.createElement('p')
    type.textContent = data.type
    texts.appendChild(type)



    worksContainer.appendChild(div)
})