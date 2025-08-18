export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const lang = query.lang || 'ru'

    const bioPageContent = {
        myJourneyTitle: lang === 'ru' ? 'МОЙ ПУТЬ' : 'MY JOURNEY',
        myJourneySubtitle: lang === 'ru' ? 'С самого начала до настоящего времени' : 'From the beginning to now',
        beyondCodeTitle: lang === 'ru' ? 'ПОМИМО КОДА' : 'BEYOND CODE',
        beyondCodeSubtitle: lang === 'ru' ? 'Что мне нравится помимо программирования' : 'What I love outside of coding',
        
        // Timeline items
        timeline: [
            {
                year: '1998',
                emoji: '🍼',
                titleEn: 'Born in Altai Krai',
                titleRu: 'Родился в Алтайском крае',
                descriptionEn: 'Born in Altai Krai, Russia. The beginning of a journey that later led to a passion for technology and programming.',
                descriptionRu: 'Родился в Алтайском крае, Россия. Здесь начался мой путь, который позже привёл к интересу к технологиям и программированию.'
            },
            {
                year: '2015 — 2019',
                emoji: '🎓',
                titleEn: 'Graduated from "Altai Industrial and Economic College" — Major: Information Security of Automated Systems',
                titleRu: 'Окончил "Алтайский промышленно-экономический колледж" — Специальность: Информационная безопасность автоматизированных систем',
                descriptionEn: 'Studied programming fundamentals, computer systems, and cybersecurity. Worked with C++, Pascal, JavaScript, and various operating systems. This period laid the foundation for my technical expertise.',
                descriptionRu: 'Изучал основы программирования, компьютерные системы и кибербезопасность. Работал с C++, Pascal, JavaScript и различными операционными системами. Этот период заложил основу моих технических знаний.'
            },
            {
                year: '2023 — 2024',
                emoji: '👨‍💻',
                titleEn: 'Junior Full-stack Developer — "Everyteka"',
                titleRu: 'Junior Full-stack разработчик — "Everyteka"',
                descriptionEn: 'My first professional programming role. Mainly focused on frontend development, while also contributing to system-level solutions. Worked with diverse technologies and gained valuable practical experience.',
                descriptionRu: 'Моя первая профессиональная роль в разработке. Основной фокус — фронтенд, но также участвовал в решении задач на уровне всей системы. Работал с разными технологиями и получил важный практический опыт.'
            },
            {
                year: '2024 — present',
                emoji: '🚀',
                titleEn: 'Front-end Developer — "Bayte Transit"',
                titleRu: 'Front-end разработчик — "Bayte Transit"',
                descriptionEn: 'Frontend developer at a major logistics company. Took part in developing two key projects: a Personal Cabinet system and the official company website. Responsible for architecture, new features, and interface improvements.',
                descriptionRu: 'Фронтенд-разработчик в крупной логистической компании. Участвую в разработке двух ключевых проектов: Личный кабинет и официальный сайт компании. Отвечаю за архитектуру, новые фичи и развитие интерфейсов.'
            },
            {
                year: '2025 — present',
                emoji: '💼',
                titleEn: 'Freelance project',
                titleRu: 'Фриланс-проект',
                descriptionEn: 'Currently developing a Telegram web-app. Focused on user-friendly experience and modern solutions: from subscription management to micro-interactions and adaptive design.',
                descriptionRu: 'Разрабатываю web-app для Telegram. Сосредоточен на удобстве пользователя и современных решениях: от работы с подписками до микровзаимодействий и адаптивного интерфейса.'
            }
        ],

        // Beyond code items
        beyondCode: [
            {
                emoji: '📖',
                textEn: 'Reading — sci-fi, biographies, science, fiction',
                textRu: 'Чтение — научная фантастика, биографии, наука, художественная литература'
            },
            {
                emoji: '🎧',
                textEn: 'Music — pop-punk, rap',
                textRu: 'Музыка — поп-панк, рэп'
            },
            {
                emoji: '🐈',
                textEn: 'Animals — all of them',
                textRu: 'Животные — люблю всех без исключения'
            },
            {
                emoji: '🍿',
                textEn: 'Series — sci-fi, mystery, drama',
                textRu: 'Сериалы — научная фантастика, мистика, драма'
            }
        ]
    }

    return bioPageContent
})
