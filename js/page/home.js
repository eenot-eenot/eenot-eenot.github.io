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
            "3. Начало работы",
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
        desc: 'Многостраничный сайт с каталогом мероприятий, системой достижений и адаптивным интерфейсом.',
    },
    eeditor: {
        name: 'EEditor WS',
        link: 'https://eeditor-ws.vercel.app',
        type: 'webapp',
        desc: 'Веб-приложение со сложной логикой, локальным хранением данных и продвинутым интерфейсом редактирования.',
    },
    gelt: {
        name: 'GeltGolem - learn programming',
        link: 'https://geltgolem.github.io',
        type: 'landing',
        desc: 'Лендинг приложения для изучения языков программирования.',
    },
    nwf: {
        name: 'NWF Multiplayer Server',
        link: 'https://nwf-info.github.io',
        type: 'website',
        desc: 'Сайт игрового сообщества.',
    },
    eeapps: {
        name: 'EE Apps',
        link: 'https://ee-apps.github.io',
        type: 'website',
        desc: 'Каталог веб-приложений.',
    },
    eent: {
        name: 'New Tab Extension',
        link: 'https://ee-apps.github.io/home',
        type: 'browser extension',
        desc: 'Расширение для Edge/Mozilla заменяющее страницу новой вкладки.',
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


    const headerDiv = document.createElement('div')
    headerDiv.className = 'workHeader'
    texts.appendChild(headerDiv)

    const title = document.createElement('h2')
    title.textContent = data.name
    headerDiv.appendChild(title)

    const type = document.createElement('p')
    type.textContent = data.type
    headerDiv.appendChild(type)


    const desc = document.createElement('p')
    desc.className = 'workDescription'
    desc.textContent = data.desc
    texts.appendChild(desc)




    worksContainer.appendChild(div)
})



const stackContainer = document.getElementById('abtTechs')
const stack = {
    frontend: [
        'html',
        'js',
        'css',
        'tauri',
    ],
    backend: [
        'node',
        'sql',
    ],
    tools: [
        'git',
        'github',
        'figma',
    ],
}

Object.keys(stack).forEach(kind => {
    const data = stack[kind]

    const head = document.createElement('div')
    head.className = 'inline'

    const h = document.createElement('h3')
    h.textContent = kind

    const btn = document.createElement('button')
    btn.className = 'showTechDesk'
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0379 20.3815L7.25991 12.7125C6.86291 12.3205 6.86291 11.6805 7.25991 11.2885L15.0379 3.6185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'

    head.appendChild(h)
    head.appendChild(btn)

    const category = document.createElement('div')
    category.className = 'stackCategory'

    stackContainer.appendChild(head)
    stackContainer.appendChild(category)
    
    h.addEventListener('click', () => {
        h.classList.toggle('active')
        category.classList.toggle('active')
        btn.classList.toggle('active')
    })
    btn.addEventListener('click', () => {
        h.classList.toggle('active')
        category.classList.toggle('active')
        btn.classList.toggle('active')
    })

    data.forEach(el => {
        const tech = document.createElement('div')
        tech.className = 'tech'

        const img = document.createElement('img')
        img.src = `./img/tech/${el}.svg`

        const p = document.createElement('p')
        p.textContent = el

        tech.appendChild(img)
        tech.appendChild(p)

        category.appendChild(tech)
    })
})