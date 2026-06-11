// const lang = 'uk'; // 'en', 'uk'



const userLang = (navigator.language || navigator.userLanguage).toLowerCase();

let lang = 'en';

if (userLang.startsWith('ru') || userLang.startsWith('be') || userLang.startsWith('kz') || userLang.startsWith('uz')) {
    lang = 'ru';
} else if (userLang.startsWith('uk') || userLang.startsWith('ua')) {
    lang = 'uk';
} else if (userLang.startsWith('en')) {
    lang = 'en'
}



const translations = {
    ru: {
        nav: {
            title: 'Велес Семёнов',
            home: 'Главная',
            contacts: 'Контакты',
            works: 'Недавние работы',
            reviews: 'Отзывы',
            about: 'Обо мне',
            faq: 'ЧаВо'
        },
        hero: {
            title: 'Разработка веб-сайтов и приложений',
            subtitleDesktop: 'Создаю сайты, веб-приложения и Telegram Mini Apps для бизнеса и личных проектов.',
            subtitleMobile: 'Современные сайты и веб-приложения.',
            discuss: 'Обсудить',
            plusPrice: '✓ От 50$',
            plusTime: '✓ От 3 дней',
            plusHosting: '✓ Помогу с хостингом',
            plusSupport: '✓ Поддержка после запуска'
        },
        sections: {
            services: 'Услуги',
            works: 'Недавние работы',
            process: 'Как проходит работа',
            about: 'Обо мне',
            tech: 'Технологии',
            faq: 'ЧаВо',
            reviews: 'Отзывы',
            contacts: 'Контакты'
        },
        services: {
            vcard: {
                title: 'Сайт-визитка',
                li1: 'до 5 страниц',
                li2: 'адаптивный дизайн',
                li3: 'форма обратной связи',
                price: 'от 50$',
                btn: 'Заказать',
                desc: 'Небольшой сайт для представления компании, организации или специалиста в интернете. Подходит для размещения информации об услугах, контактных данных, примеров работ и другой важной информации.'
            },
            landing: {
                title: 'Лендинг',
                li1: 'одна страница',
                li2: 'анимации',
                li3: 'форма обратной связи',
                price: 'от 50$',
                btn: 'Заказать',
                desc: 'Одностраничный сайт, предназначенный для продвижения конкретной услуги, продукта или мероприятия. Помогает привлекать клиентов и увеличивать количество заявок.'
            },
            multipage: {
                title: 'Многостраничный сайт',
                li1: 'индивидуальная структура',
                li2: 'неограниченное количество страниц',
                li3: 'удобная навигация',
                price: 'от 100$',
                btn: 'Заказать',
                desc: 'Полноценный корпоративный сайт с несколькими разделами и удобной структурой. Подходит для компаний, образовательных проектов, организаций и интернет-каталогов.'
            },
            webapp: {
                title: 'Веб-приложение',
                li1: 'личный кабинет',
                li2: 'авторизация',
                li3: 'взаимодействие с API',
                li4: 'работа с базой данных',
                li5: 'масштабируемая архитектура',
                price: 'от 200$',
                btn: 'Заказать',
                desc: 'Разработка сложных веб-систем с личными кабинетами, базами данных и бизнес-логикой. Подходит для CRM-систем, внутренних корпоративных сервисов, панелей управления, сервисов бронирования и других проектов.'
            },
            tma: {
                title: 'Telegram Mini App',
                li1: 'адаптация под интерфейс Telegram',
                li2: 'авторизация через Telegram',
                li3: 'публикация и настройка приложения',
                price: 'от 150$',
                btn: 'Заказать',
                desc: 'Разработка мини-приложений для Telegram, которые работают прямо внутри мессенджера без установки дополнительных программ. Подходит для сервисов, интернет-магазинов, систем бронирования, личных кабинетов и внутренних корпоративных инструментов.'
            },
            redesign: {
                title: 'Редизайн сайта',
                li1: 'обновление дизайна страниц',
                li2: 'улучшение навигации и пользовательского опыта',
                li3: 'повышение читаемости и привлекательности сайта',
                price: 'от 150$',
                btn: 'Заказать',
                desc: 'Обновление внешнего вида и структуры существующего сайта с сохранением или улучшением его функциональности. Помогает сделать сайт современнее, удобнее для пользователей и эффективнее для решения бизнес-задач.'
            }
        },
        about: {
            text: 'Меня зовут Велес Семёнов, я веб-разработчик.<br><br>Помогаю создавать удобные и современные цифровые продукты: от простых лендингов и сайтов-визиток до более сложных веб-сервисов.<br><br>Особое внимание уделяю удобству интерфейсов, производительности и поддерживаемости проектов.<br><br>Помимо разработки отдельных проектов, развиваю собственную дизайн-систему Harno UI для создания более удобных и последовательных интерфейсов.'
        },
        contacts: {
            titleLeft: 'Связаться со мной',
            subtitleLeft: 'Выберите удобный способ связи - отвечаю быстро.',
            cat1: 'Мессенджеры',
            cat2: 'Email',
            cat3: 'Другое',
            githubSub: 'Портфолио кода',
            titleRight: 'Написать сообщение',
            namePlaceholder: 'Ваше имя',
            contactPlaceholder: 'Telegram / Email',
            descrPlaceholder: 'Опишите проект...',
            sendBtn: 'Отправить'
        },
        // === ДАННЫЕ ДЛЯ ДИНАМИЧЕСКИХ СКРИПТОВ HOME.JS ===
        stages: [
            ['Обсуждение проекта', 'Уточняем цели, задачи и пожелания к будущему сайту. Определяем необходимый функционал, сроки и примерный бюджет проекта.'],
            ['Оценка и планирование', 'Формирую предложение по проекту, согласовываем структуру сайта, объём работ и этапы реализации.'],
            ['Начало работы', 'После согласования деталей вносится предоплата 50%, после чего начинается работа над проектом.'],
            ['Разработка', 'Создаю дизайн и реализую необходимый функционал. На протяжении работы предоставляю промежуточные результаты для ознакомления.'],
            ['Демонстрация результата', 'Показываю готовый проект и предоставляю доступ для проверки основных функций и содержимого.'],
            ['Корректировки и завершение', 'Вношу согласованные правки, после чего производится окончательный расчёт и передача проекта.']
        ],
        works: {
            saturn: { name: 'Saturn - Universal Server', type: 'website', desc: 'Многостраничный сайт с каталогом мероприятий, системой достижений и адаптивным интерфейсом.' },
            eeditor: { name: 'EEditor WS', type: 'webapp', desc: 'Веб-приложение со сложной логикой, локальным хранением данных и продвинутым интерфейсом редактирования.' },
            gelt: { name: 'GeltGolem - learn programming', type: 'landing', desc: 'Лендинг приложения для изучения языков программирования.' },
            nwf: { name: 'NWF Multiplayer Server', type: 'website', desc: 'Сайт игрового сообщества.' },
            eent: { name: 'New Tab Extension', type: 'browser extension', desc: 'Расширение для Edge/Mozilla заменяющее страницу новой вкладки.' }
        },
        stack: {
            frontend: 'frontend',
            backend: 'backend',
            tools: 'tools'
        },
        // === FAQ (Старая структура, которую ожидает home.js) ===
        faq: {
            price: 'Стоимость и оплата',
            time: 'Время',
            technical: 'Технические вопросы',
            work: 'Процесс работы',
            support: 'Поддержка'
        },
        faqContent: {
            price: {
                'Сколько стоит разработка сайта?': 'Минимальная цена - 50 долларов. В зависимости от объёма и сложности работы, количества и размера правок она может быть выше.',
                'Что входит в стоимость?': 'Разработка самого сайта, включая дизайн интерфейса и адаптивность под мобильные устройства, размещение на бесплатном хостинге или помощь с размещением на платном, поддержка в течении одного года.',
                'Есть ли предоплата?': 'Да, есть, и составляет около половины от цены и вносится после показа первоначального наброска. В случае заказа минимального сайта (до 100$), возможна работа без предоплаты.',
                'Можно ли изменить требования после начала работы?': '',
                'Какие доступны способы оплаты?': 'Перевод на карту Visa, либо наличкой в долларах, рублях или леях. Если данные способы недоступны для вас, готов обсудить альтернативы.'
            },
            time: {
                'Сколько времени занимает разработка?': 'Сайт-визитка или лендинг обычно занимает от нескольких дней до двух недель. Многостраничный сайт - от двух недель. Сложные веб-приложения и Telegram Mini Apps могут занимать месяц и более в зависимости от функциональности.',
                'Можно ли сделать быстрее?': 'В некоторых случаях - да. Стоимость срочной разработки обсуждается отдельно.'
            },
            technical: {
                'Нужно ли самостоятельно покупать домен и хостинг?': 'Могу сделать на бесплатном хостинге и поддомене, но в таком случае ссылка будет вида "https://НазваниеСайта.vercel.app/". Если брать платных хостинг и/или домен - помогу выбрать и настроить.',
                'Можно ли доработать существующий сайт?': 'В большинстве случаев - да. Зависит от того, какие были использованы технологии при его разработке.',
                'Будет ли работать сайт на телефонах?': 'Да. Я создаю такой интерфейс, который адаптируется под телефоны, благодаря чему сайт удобно использовать как на компьютерах так и на телефонах.',
                'Можно ли добавить новые функции после запуска?': 'В течении первого года - небольшие доработки бесплатно; крупные доработки - за некоторую плату в зависимости от объёма и сложности.'
            },
            work: {
                'Как проходит работа над проектом?': '',
                'Что потребуется от меня?': 'Для начала потребуется кратко описать идею проекта и ваши пожелания. Если у вас уже есть тексты, логотип, фотографии или примеры понравившихся сайтов - это поможет ускорить работу, но не является обязательным.',
                'Как происходит общение во время работы?': 'Любым удобным для Вас способом из перечисленных: Telegram, Discord, WhatsApp, Instagram, Viber, электронная почта.',
                'Что делать, если я не разбираюсь в сайтах?': 'Это не проблема. Достаточно рассказать о своём проекте, а с выбором подходящего решения и в технических вопросах я помогу определиться.',
                'У меня пока нет текстов и фотографий. Можно ли начать работу?': 'Да. Наличие готовых материалов желательно, но не обязательно. Они могут быть добавлены позже, а основные части сайта (структуру и главное содержание) я могу сделать без них.',
                'Используются ли готовые шаблоны?': 'Нет. Но я использую небольшие не видные пользователю наработки из других своих проектов для ускорения разработки.'
            },
            support: {
                'Можно ли исправить ошибки после сдачи проекта?': 'Да, в течении года исправляю бесплатно.',
                'Предоставляется ли поддержка после запуска?': 'Да, в течении первого года после сдачи сайта небольшие изменения и исправления ошибок бесплатны.'
            }
        }
    },
    en: {
        nav: {
            title: 'Veles Semenov',
            home: 'Home',
            contacts: 'Contacts',
            works: 'Recent works',
            reviews: 'Reviews',
            about: 'About me',
            faq: 'FAQ'
        },
        hero: {
            title: 'Web & App Development',
            subtitleDesktop: 'I create websites, web applications and Telegram Mini Apps for business and personal projects.',
            subtitleMobile: 'Modern websites and web applications.',
            discuss: 'Discuss',
            plusPrice: '✓ From $150',
            plusTime: '✓ From 3 days',
            plusHosting: '✓ Hosting setup assistance',
            plusSupport: '✓ Post-launch support'
        },
        sections: {
            services: 'Services',
            works: 'Recent works',
            process: 'Work process',
            about: 'About me',
            tech: 'Technologies',
            faq: 'FAQ',
            reviews: 'Reviews',
            contacts: 'Contacts'
        },
        services: {
            vcard: {
                title: 'Business Card Website',
                li1: 'up to 5 pages',
                li2: 'responsive design',
                li3: 'feedback form',
                price: 'from $150',
                btn: 'Order',
                desc: 'A small website to represent a company, organization, or specialist online. Perfect for placing info about services, contact data, work examples, and other essential information.'
            },
            landing: {
                title: 'Landing Page',
                li1: 'single page website',
                li2: 'smooth animations',
                li3: 'feedback form',
                price: 'from $180',
                btn: 'Order',
                desc: 'A one-page website designed to promote a specific service, product, or event. It helps to attract customers and increase conversion rates.'
            },
            multipage: {
                title: 'Multi-page Website',
                li1: 'custom structure',
                li2: 'unlimited pages',
                li3: 'intuitive navigation',
                price: 'from $400',
                btn: 'Order',
                desc: 'A complete corporate website with multiple sections and user-friendly structure. Suitable for companies, educational platforms, organizations, and web catalogs.'
            },
            webapp: {
                title: 'Web Application',
                li1: 'personal dashboard',
                li2: 'user authentication',
                li3: 'API integrations',
                li4: 'database management',
                li5: 'scalable architecture',
                price: 'from $800',
                btn: 'Order',
                desc: 'Development of complex web systems with dashboards, databases, and custom business logic. Suitable for CRM systems, internal services, admin panels, and booking platforms.'
            },
            tma: {
                title: 'Telegram Mini App',
                li1: 'tailored for Telegram UI',
                li2: 'auth via Telegram',
                li3: 'app deployment & setup',
                price: 'from $500',
                btn: 'Order',
                desc: 'Development of mini-applications for Telegram that run directly inside the messenger without installing any extra software. Great for e-shops, booking services, and internal tools.'
            },
            redesign: {
                title: 'Website Redesign',
                li1: 'ui/ux look update',
                li2: 'navigation and user experience improvements',
                li3: 'increased readability and site attractiveness',
                price: 'from $400',
                btn: 'Order',
                desc: 'Updating the layout and structure of an existing website while maintaining or improving its features. Makes your project modern, more user-friendly, and effective.'
            }
        },
        about: {
            text: 'My name is Veles Semenov, I am a web developer.<br><br>I help build user-friendly and modern digital products: from simple landing pages and business card sites to more complex web services.<br><br>I pay special attention to interface usability, performance, and maintainability of projects.<br><br>In addition to client work, I am developing my own design system, Harno UI, to create consistent and efficient interfaces.'
        },
        contacts: {
            titleLeft: 'Get in Touch',
            subtitleLeft: 'Choose a convenient way to connect - I reply fast.',
            cat1: 'Messengers',
            cat2: 'Email',
            cat3: 'Other',
            githubSub: 'Code portfolio',
            titleRight: 'Send a Message',
            namePlaceholder: 'Your name',
            contactPlaceholder: 'Telegram / Email',
            descrPlaceholder: 'Describe your project...',
            sendBtn: 'Send'
        },
        stages: [
            ['Project Discussion', 'Clarifying goals, tasks, and wishes for the future site. Defining necessary functionality, deadlines, and approximate budget.'],
            ['Estimation & Planning', 'Forming a project proposal, agreeing on site structure, scope of work, and implementation stages.'],
            ['Getting Started', 'After agreeing on details, a 50% prepayment is made, and work on the project begins.'],
            ['Development', 'Creating design and implementing necessary functionality. Throughout the work, I provide intermediate results for review.'],
            ['Result Demonstration', 'Showing the finished project and providing access to check main functions and content.'],
            ['Adjustments & Completion', 'Making agreed corrections, after which the final calculation is made and the project is handed over.']
        ],
        works: {
            saturn: { name: 'Saturn - Universal Server', type: 'website', desc: 'Multi-page site with event catalog, achievement system and adaptive interface.' },
            eeditor: { name: 'EEditor WS', type: 'webapp', desc: 'Web application with complex logic, local data storage and advanced editing interface.' },
            gelt: { name: 'GeltGolem - learn programming', type: 'landing', desc: 'Landing page for a programming language learning app.' },
            nwf: { name: 'NWF Multiplayer Server', type: 'website', desc: 'Gaming community website.' },
            eent: { name: 'New Tab Extension', type: 'browser extension', desc: 'Extension for Edge/Mozilla replacing the new tab page.' }
        },
        stack: {
            frontend: 'frontend',
            backend: 'backend',
            tools: 'tools'
        },
        faq: {
            price: 'Cost & Payment',
            time: 'Timeline',
            technical: 'Technical Questions',
            work: 'Work Process',
            support: 'Support'
        },
        faqContent: {
            price: {
                'How much does website development cost?': 'Minimum price is $150. Depending on the volume and complexity of the work, the number and size of revisions, it may be higher.',
                'What is included in the cost?': 'Development of the site itself, including interface design and mobile adaptability, placement on free hosting or help with paid hosting, support for one year.',
                'Is there a prepayment?': 'Yes, there is, and it amounts to about half of the price and is made after showing the initial draft. In case of ordering a minimal site (up to $100), work without prepayment is possible.',
                'Can requirements be changed after work starts?': '',
                'What payment methods are available?': 'Transfer to Visa card. If this way isnt available for you, we can discuss other ways.'
            },
            time: {
                'How long does development take?': 'A business card site or landing page usually takes from a few days to two weeks. A multi-page site - from two weeks. Complex web applications and Telegram Mini Apps can take a month or more depending on functionality.',
                'Can it be done faster?': 'In some cases - yes. The cost of urgent development is discussed separately.'
            },
            technical: {
                'Do I need to buy domain and hosting myself?': 'I can do it on free hosting and subdomain, but in that case the link will look like "https://SiteName.vercel.app/". If taking paid hosting and/or domain - I will help choose and configure.',
                'Can an existing site be improved?': 'In most cases - yes. Depends on what technologies were used in its development.',
                'Will the site work on phones?': 'Yes. I create an interface that adapts to phones, thanks to which the site is convenient to use on both computers and phones.',
                'Can new functions be added after launch?': 'During the first year - small improvements are free; large improvements - for a fee depending on volume and complexity.'
            },
            work: {
                'How does the project work proceed?': '',
                'What will be required from me?': 'To begin with, you will need to briefly describe the project idea and your wishes. If you already have texts, logo, photos or examples of sites you like - this will help speed up the work, but is not mandatory.',
                'How does communication happen during work?': 'In any way convenient for you from the listed ones: Telegram, Discord, WhatsApp, Instagram, Viber, email.',
                'What if I don\'t understand websites?': 'It\'s not a problem. It is enough to tell about your project, and I will help you decide on the right solution and technical issues.',
                'I don\'t have texts and photos yet. Can we start working?': 'Yes. Having ready materials is desirable, but not necessary. They can be added later, and I can make the main parts of the site (structure and main content) without them.',
                'Are ready-made templates used?': 'No. But I use small invisible to the user developments from my other projects to speed up development.'
            },
            support: {
                'Can errors be fixed after project delivery?': 'Yes, within a year I fix them for free.',
                'Is support provided after launch?': 'Yes, during the first year after handing over the site, small changes and bug fixes are free.'
            }
        }
    },
    uk: {
        nav: {
            title: 'Велес Семёнов',
            home: 'Головна',
            contacts: 'Контакти',
            works: 'Нещодавні роботи',
            reviews: 'Відгуки',
            about: 'Про мене',
            faq: 'ЧаВо'
        },
        hero: {
            title: 'Розробка веб-сайтів та додатків',
            subtitleDesktop: 'Створюю сайти, веб-додатки та Telegram Mini Apps для бізнесу та особистих проектів.',
            subtitleMobile: 'Сучасні сайти та веб-додатки.',
            discuss: 'Обговорити',
            plusPrice: '✓ Від $100',
            plusTime: '✓ Від 3 днів',
            plusHosting: '✓ Допоможу з хостингом',
            plusSupport: '✓ Підтримка після запуску'
        },
        sections: {
            services: 'Послуги',
            works: 'Нещодавні роботи',
            process: 'Як проходить робота',
            about: 'Про мене',
            tech: 'Технології',
            faq: 'ЧаВо',
            reviews: 'Відгуки',
            contacts: 'Контакти'
        },
        services: {
            vcard: {
                title: 'Сайт-візитка',
                li1: 'до 5 сторінок',
                li2: 'адаптивний дизайн',
                li3: 'форма зворотного зв\'язку',
                price: 'від $100',
                btn: 'Замовити',
                desc: 'Невеликий сайт для представлення компанії, організації або спеціаліста в інтернеті. Підходить для розміщення інформації про послуги, контактних даних, прикладів робіт та іншої важливої інформації.'
            },
            landing: {
                title: 'Лендінг',
                li1: 'одна сторінка',
                li2: 'анімації',
                li3: 'форма зворотного зв\'язку',
                price: 'від $120',
                btn: 'Замовити',
                desc: 'Односторінковий сайт, призначений для просування конкретної послуги, продукту або заходу. Допомагає залучати клієнтів та збільшувати кількість заявок.'
            },
            multipage: {
                title: 'Багатосторінковий сайт',
                li1: 'індивідуальна структура',
                li2: 'необмежена кількість сторінок',
                li3: 'зручна навігація',
                price: 'від $300',
                btn: 'Замовити',
                desc: 'Повноцінний корпоративний сайт із кількома розділами та зручною структурою. Підходить для компаній, освітніх проектів, організацій та інтернет-каталогів.'
            },
            webapp: {
                title: 'Веб-додаток',
                li1: 'особистий кабінет',
                li2: 'авторизація',
                li3: 'взаємодія з API',
                li4: 'робота з базою даних',
                li5: 'масштабована архітектура',
                price: 'від $600',
                btn: 'Замовити',
                desc: 'Розробка складних веб-систем з особистими кабінетами, базами даних та бізнес-логікою. Підходить для CRM-систем, внутрішніх корпоративних сервісів, панелей управління, сервісів бронювання тощо.'
            },
            tma: {
                title: 'Telegram Mini App',
                li1: 'адаптація під інтерфейс Telegram',
                li2: 'авторизація через Telegram',
                li3: 'публікація та налаштування додатка',
                price: 'від $350',
                btn: 'Замовити',
                desc: 'Розробка міні-додатків для Telegram, які працюють прямо всередині месенджера без встановлення додаткових програм. Підходить для сервісів, інтернет-магазинів, систем бронювання та особистих кабінетів.'
            },
            redesign: {
                title: 'Редизайн сайту',
                li1: 'оновлення дизайну сторінок',
                li2: 'покращення навігації та користувацького досвіду',
                li3: 'підвищення читабельності та привабливості сайту',
                price: 'від $300',
                btn: 'Замовити',
                desc: 'Оновлення зовнішнього вигляду та структури існуючого сайту із збереженням або покращенням його функціональності. Допомагає зробити сайт сучаснішим та ефективнішим.'
            }
        },
        about: {
            text: 'Мене звати Велес Семьонов, я веб-розробник.<br><br>Допомагаю створювати зручні та сучасні цифрові продукти: від простих лендінгів та сайтів-візиток до складніших веб-сервісів.<br><br>Особливу увагу приділяю зручності інтерфейсів, продуктивності та підтримуваності проектів.<br><br>Крім розробки окремих проектів, розвиваю власну дизайн-систему Harno UI для створення більш зручних та послідовних інтерфейсів.'
        },
        contacts: {
            titleLeft: 'Зв\'язатися зі мною',
            subtitleLeft: 'Оберіть зручний спосіб зв\'язку - відповідаю швидко.',
            cat1: 'Месенджери',
            cat2: 'Email',
            cat3: 'Інше',
            githubSub: 'Портфоліо коду',
            titleRight: 'Написати повідомлення',
            namePlaceholder: 'Ваше ім\'я',
            contactPlaceholder: 'Telegram / Email',
            descrPlaceholder: 'Опишіть проект...',
            sendBtn: 'Відправити'
        },
        stages: [
            ['Обговорення проекту', 'Уточнюємо цілі, задачі та побажання до майбутнього сайту. Визначаємо необхідний функціонал, терміни та приблизний бюджет проекту.'],
            ['Оцінка та планування', 'Формую пропозицію по проекту, погоджуємо структуру сайту, обсяг робіт та етапи реалізації.'],
            ['Початок роботи', 'Після погодження деталей вноситься передоплата 50%, після чого починається робота над проектом.'],
            ['Розробка', 'Створюю дизайн та реалізую необхідний функціонал. Протягом роботи надаю проміжні результати для ознайомлення.'],
            ['Демонстрація результату', 'Показую готовий проект та надаю доступ для перевірки основних функцій та вмісту.'],
            ['Корективи та завершення', 'Вношу погоджені правки, після чого проводиться остаточний розрахунок та передача проекту.']
        ],
        works: {
            saturn: { name: 'Saturn - Universal Server', type: 'website', desc: 'Багатосторінковий сайт з каталогом заходів, системою досягнень та адаптивним інтерфейсом.' },
            eeditor: { name: 'EEditor WS', type: 'webapp', desc: 'Веб-додаток зі складною логікою, локальним зберіганням даних та просунутим інтерфейсом редагування.' },
            gelt: { name: 'GeltGolem - learn programming', type: 'landing', desc: 'Лендінг додатка для вивчення мов програмування.' },
            nwf: { name: 'NWF Multiplayer Server', type: 'website', desc: 'Сайт ігрової спільноти.' },
            eent: { name: 'New Tab Extension', type: 'browser extension', desc: 'Розширення для Edge/Mozilla, що замінює сторінку нової вкладки.' }
        },
        stack: {
            frontend: 'frontend',
            backend: 'backend',
            tools: 'tools'
        },
        faq: {
            price: 'Вартість та оплата',
            time: 'Час',
            technical: 'Технічні питання',
            work: 'Процес роботи',
            support: 'Підтримка'
        },
        faqContent: {
            price: {
                'Скільки коштує розробка сайту?': 'Мінімальна ціна - 100 доларів. Залежно від обсягу та складності роботи, кількості та розміру правок вона може бути вищою.',
                'Що входить у вартість?': 'Розробка самого сайту, включаючи дизайн інтерфейсу та адаптивність під мобільні пристрої, розміщення на безкоштовному хостингу або допомога з розміщенням на платному, підтримка протягом одного року.',
                'Чи є передоплата?': 'Так, є, і становить близько половини від ціни та вноситься після показу початкового начерку. У разі замовлення мінімального сайту (до 100$), можлива робота без передоплати.',
                'Чи можна змінити вимоги після початку роботи?': '',
                'Які доступні способи оплати?': 'Переказ на карту Visa. Якщо це неможливо для вас, готовий обговорити інші шляхи.'
            },
            time: {
                'Скільки часу займає розробка?': 'Сайт-візитка або лендінг зазвичай займає від кількох днів до двох тижнів. Багатосторінковий сайт - від двох тижнів. Складні веб-додатки та Telegram Mini Apps можуть займати місяць і більше залежно від функціональності.',
                'Чи можна зробити швидше?': 'У деяких випадках - так. Вартість термінової розробки обговорюється окремо.'
            },
            technical: {
                'Чи потрібно самостійно купувати домен та хостинг?': 'Можу зробити на безкоштовному хостингу та піддомені, але в такому разі посилання буде виду "https://НазваСайту.vercel.app/". Якщо брати платний хостинг та/або домен - допоможу обрати та налаштувати.',
                'Чи можна доопрацювати існуючий сайт?': 'У більшості випадків - так. Залежить від того, які були використані технології при його розробці.',
                'Чи буде працювати сайт на телефонах?': 'Так. Я створюю такий інтерфейс, який адаптується під телефони, завдяки чому сайт зручно використовувати як на комп\'ютерах, так і на телефонах.',
                'Чи можна додати нові функції після запуску?': 'Протягом першого року - невеликі доопрацювання безкоштовно; великі доопрацювання - за певну плату залежно від обсягу та складності.'
            },
            work: {
                'Як проходить робота над проектом?': '',
                'Що знадобиться від мене?': 'Для початку потрібно коротко описати ідею проекту та ваші побажання. Якщо у вас вже є тексти, логотип, фотографії або приклади вподобаних сайтів - це допоможе прискорити роботу, але не є обов\'язковим.',
                'Як відбувається спілкування під час роботи?': 'Будь-яким зручним для Вас способом із перелічених: Telegram, Discord, WhatsApp, Instagram, Viber, електронна пошта.',
                'Що робити, якщо я не розбираюся в сайтах?': 'Це не проблема. Достатньо розповісти про свій проект, а з вибором відповідного рішення та в технічних питаннях я допоможу визначитися.',
                'У мене поки немає текстів та фотографій. Чи можна почати роботу?': 'Так. Наявність готових матеріалів бажана, але не обов\'язкова. Вони можуть бути додані пізніше, а основні частини сайту (структуру та головний зміст) я можу зробити без них.',
                'Чи використовуються готові шаблони?': 'Ні. Але я використовую невеликі непомічні користувачеві напрацювання з інших своїх проектів для прискорення розробки.'
            },
            support: {
                'Чи можна виправити помилки після здачі проекту?': 'Так, протягом року виправляю безкоштовно.',
                'Чи надається підтримка після запуску?': 'Так, протягом першого року після здачі сайту невеликі зміни та виправлення помилок безкоштовні.'
            }
        }
    }
};

const getTranslation = (...keys) => {
    return keys.reduce((acc, key) => acc?.[key], translations?.[lang]) ?? '---';
};

function translateStaticHTML() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const rawKey = el.getAttribute('data-i18n');
        let targetAttribute = 'textContent'; 
        let keyString = rawKey;

        if (rawKey.includes(':')) {
            const parts = rawKey.split(':');
            targetAttribute = parts[0]; 
            keyString = parts[1];       
        }

        const keys = keyString.split('.');
        const translation = getTranslation(...keys);

        if (translation && translation !== '---') {
            if (targetAttribute === 'textContent') {
                el.textContent = translation;
            } else if (targetAttribute === 'html') {
                el.innerHTML = translation;
            } else {
                el.setAttribute(targetAttribute, translation);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    translateStaticHTML();
})