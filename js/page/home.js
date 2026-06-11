// ==================== 1. STAGES ====================
const stagesContainer = document.getElementById('stages');
const stagesData = getTranslation('stages') || [];

stagesData.forEach(stage => {
    const [titleText, descText] = stage;

    const h = document.createElement('h2');
    h.textContent = titleText;

    const div = document.createElement('div');
    div.className = 'inline';

    const p = document.createElement('p');
    p.className = 'prcessDescr';
    p.textContent = descText;

    const btn = document.createElement('button');
    btn.className = 'showStageDesk';
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0379 20.3815L7.25991 12.7125C6.86291 12.3205 6.86291 11.6805 7.25991 11.2885L15.0379 3.6185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    
    const toggleActive = () => {
        h.classList.toggle('active');
        p.classList.toggle('active');
        btn.classList.toggle('active');
    };

    h.addEventListener('click', toggleActive);
    btn.addEventListener('click', toggleActive);

    div.appendChild(h);
    div.appendChild(btn);
    stagesContainer.appendChild(div);
    stagesContainer.appendChild(p);
});


// ==================== 2. WORKS ====================
const worksContainer = document.getElementById('works');
const works = {
    saturn: { link: 'https://saturn-info.github.io' },
    eeditor: { link: 'https://eeditor-ws.vercel.app' },
    gelt: { link: 'https://geltgolem.github.io' },
    nwf: { link: 'https://nwf-info.github.io' },
    eent: { link: 'https://ee-apps.github.io/home' },
};

Object.keys(works).forEach(workKey => {
    const data = works[workKey];
    
    // Получаем переведенные данные для конкретного проекта
    const name = getTranslation('works', workKey, 'name') || workKey;
    const typeText = getTranslation('works', workKey, 'type') || '';
    const descText = getTranslation('works', workKey, 'desc') || '';

    const div = document.createElement('a');
    div.href = data.link;
    div.className = 'workContainer';

    const img = document.createElement('img');
    img.src = `examples/${workKey}/screenshoot.png`;
    div.appendChild(img);

    const texts = document.createElement('div');
    texts.className = 'workInfo';
    div.appendChild(texts);

    const headerDiv = document.createElement('div');
    headerDiv.className = 'workHeader';
    texts.appendChild(headerDiv);

    const title = document.createElement('h2');
    title.textContent = name;
    headerDiv.appendChild(title);

    const type = document.createElement('p');
    type.textContent = typeText;
    headerDiv.appendChild(type);

    const desc = document.createElement('p');
    desc.className = 'workDescription';
    desc.textContent = descText;
    texts.appendChild(desc);

    worksContainer.appendChild(div);
});


// ==================== 3. STACK ====================
const stackContainer = document.getElementById('abtTechs');
const stack = {
    frontend: ['html', 'js', 'css', 'tauri'],
    backend: ['node', 'sql'],
    tools: ['git', 'github', 'figma'],
};

Object.keys(stack).forEach(kind => {
    const data = stack[kind];

    const head = document.createElement('div');
    head.className = 'inline';

    const h = document.createElement('h3');
    // Перевод названия категории (frontend -> Фронтенд / Tools -> Інструменти)
    h.textContent = getTranslation('stack', kind) || kind;

    const btn = document.createElement('button');
    btn.className = 'showTechDesk';
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0379 20.3815L7.25991 12.7125C6.86291 12.3205 6.86291 11.6805 7.25991 11.2885L15.0379 3.6185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

    head.appendChild(h);
    head.appendChild(btn);

    const category = document.createElement('div');
    category.className = 'stackCategory';

    stackContainer.appendChild(head);
    stackContainer.appendChild(category);
    
    const toggleStack = () => {
        h.classList.toggle('active');
        category.classList.toggle('active');
        btn.classList.toggle('active');
    };
    h.addEventListener('click', toggleStack);
    btn.addEventListener('click', toggleStack);

    data.forEach(el => {
        const tech = document.createElement('div');
        tech.className = 'tech';

        const img = document.createElement('img');
        img.src = `./img/tech/${el}.svg`;

        const p = document.createElement('p');
        p.textContent = el;

        tech.appendChild(img);
        tech.appendChild(p);

        category.appendChild(tech);
    });
});


// ==================== 4. FAQ ====================
const faqContainer = document.getElementById('faqQuestions');
const faqCategories = ['price', 'time', 'technical', 'work', 'support'];

faqCategories.forEach(category => {
    const faqData = getTranslation('faqContent', category);
    if (!faqData) return;

    const catEl = document.createElement('div');
    catEl.className = 'faqCategory';

    const catContainer = document.createElement('div');
    catContainer.className = 'faqCategoryContainer';
    catEl.appendChild(catContainer);
    
    const catH = document.createElement('h2');
    catH.className = 'faqCategoryName';
    catH.textContent = getTranslation('faq', category) || category;

    const btn = document.createElement('button');
    btn.className = 'showStageDesk';
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0379 20.3815L7.25991 12.7125C6.86291 12.3205 6.86291 11.6805 7.25991 11.2885L15.0379 3.6185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    catH.appendChild(btn);

    catH.addEventListener('click', () => {
        catH.classList.toggle('active');
        catEl.classList.toggle('active');
    });

    Object.entries(faqData).forEach(([que, answ]) => {
        // Пропускаем вопросы с пустыми ответами
        if (!answ) return; 

        const queDiv = document.createElement('div');
        queDiv.className = 'question';

        const queQue = document.createElement('p');
        queQue.className = 'questionHeader';
        queQue.textContent = que;

        const qBtn = document.createElement('button');
        qBtn.className = 'showStageDesk';
        qBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0379 20.3815L7.25991 12.7125C6.86291 12.3205 6.86291 11.6805 7.25991 11.2885L15.0379 3.6185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        queQue.appendChild(qBtn);

        const queAnsw = document.createElement('p');
        queAnsw.className = 'questionAnswer';
        queAnsw.textContent = answ;
        
        queDiv.addEventListener('click', () => {
            queDiv.classList.toggle('active');
        });

        queDiv.appendChild(queQue);
        queDiv.appendChild(queAnsw);
        catContainer.appendChild(queDiv);
    });

    faqContainer.appendChild(catH);
    faqContainer.appendChild(catEl);
});


// ==================== 5. FORM ====================
document.getElementById('formSendBtn').addEventListener('click', () => {
    writeMessageInDiscord(`
        Name: ${document.getElementById('formName').value}
        Contact: ${document.getElementById('formContact').value}\n
        Content: ${document.getElementById('formDescr').value}
    `);
});