export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const lang = typeof query.lang === 'string' ? query.lang : 'ru'
    const isRu = lang === 'ru'

    const whatIUseContent = {
        title: isRu ? 'Что я использую' : 'What I Use',
        subtitle: isRu
            ? 'Мой ежедневный стек, инструменты для дизайна и разработки, а также железо'
            : 'Daily stack, product tools, and the hardware that keeps everything running',
        sections: [
            {
                icon: '⚡',
                title: isRu ? 'Основной стек' : 'Core stack',
                description: isRu
                    ? 'Те технологии, на которых я строю продукты каждый день'
                    : 'Technologies I rely on to ship production-ready apps',
                items: [
                    {
                        title: 'Vue 3 + Nuxt 3',
                        description: isRu
                            ? 'Комбинация для быстрых SPA/SSR-проектов с гибким Composition API'
                            : 'My go-to setup for fast SPA/SSR builds with the Composition API',
                        tags: ['Composition API', 'SSR', 'Islands']
                    },
                    {
                        title: 'TypeScript',
                        description: isRu
                            ? 'Гарантирует предсказуемость и ускоряет ревью на любых проектах'
                            : 'Adds predictability and keeps reviews quick on every project',
                        tags: ['strict', 'DX']
                    },
                    {
                        title: 'Tailwind CSS',
                        description: isRu
                            ? 'Чёткий дизайн-системный подход без лишней рутины'
                            : 'Utility-first styling that keeps design systems consistent',
                        tags: ['utility-first', 'design-system']
                    },
                    {
                        title: 'Vite',
                        description: isRu
                            ? 'Мгновенный dev-server и понятный билд даже для больших репозиториев'
                            : 'Instant dev server and transparent builds even for large repos',
                        tags: ['HMR', 'build']
                    },
                    {
                        title: 'Git (GitHub / GitLab)',
                        description: isRu
                            ? 'Флоу через PR/MR, жёсткие code review и автопроверки'
                            : 'PR/MR driven flow with strict reviews and automation',
                        tags: ['PR flow', 'CI']
                    }
                ]
            },
            {
                icon: '🛠️',
                title: isRu ? 'Рабочий процесс' : 'Workflow tools',
                description: isRu
                    ? 'Инструменты, с которыми веду дизайн, документацию и тесты'
                    : 'Utility kit for design handoff, docs, and manual/API testing',
                items: [
                    {
                        title: 'VS Code',
                        description: isRu
                            ? 'ESLint, Prettier, Volar и кастомные сниппеты под каждый проект'
                            : 'ESLint, Prettier, Volar plus custom snippets per project',
                        tags: ['ESLint', 'Prettier', 'Volar']
                    },
                    {
                        title: 'Figma',
                        description: isRu
                            ? 'Совместная работа с дизайнерами и ревью макетов'
                            : 'Shared space with designers for quick reviews',
                        tags: ['components', 'handoff']
                    },
                    {
                        title: 'Postman / Insomnia',
                        description: isRu
                            ? 'Проверка API, автогенерация коллекций и тест-кейсов'
                            : 'API verification plus generated collections and cases',
                        tags: ['API', 'tests']
                    },
                    {
                        title: 'Notion',
                        description: isRu
                            ? 'Трекинг задач, roadmap и личные заметки по архитектуре'
                            : 'Task tracking, roadmap notes, and architecture drafts',
                        tags: ['docs', 'roadmap']
                    }
                ]
            },
            {
                icon: '💻',
                title: isRu ? 'Железо' : 'Hardware',
                description: isRu
                    ? 'Стационарная рабочая конфигурация'
                    : 'Primary desk setup',
                items: [
                    {
                        title: 'MacBook Pro 13" M1 (2020)',
                        description: isRu
                            ? 'Основная машина для разработки'
                            : 'Main machine for development',
                        meta: '16GB / 512GB'
                    },
                    {
                        title: 'Keychron K2',
                        description: isRu
                            ? 'Горячая замена свитчей и компактная раскладка'
                            : 'Hot-swappable switches with a compact layout',
                        tags: ['Gateron Brown']
                    },
                    {
                        title: 'Logitech MX Master 3',
                        description: isRu
                            ? 'Вертикальное колесо упрощает работу с макетами и код-ревью'
                            : 'Side wheel speeds up design reviews and code diffing',
                        tags: ['MagSpeed']
                    },
                    {
                        title: '27" 2K Monitor',
                        description: isRu
                            ? 'Деление экрана на code/design + devtools'
                            : 'Splits between code/design and devtools',
                        tags: ['2K', '99% sRGB']
                    }
                ]
            },
            {
                icon: '📱',
                title: isRu ? 'Тестовые устройства' : 'Testing devices',
                description: isRu
                    ? 'Минимальный набор для ручного QA и responsive-проверок'
                    : 'Baseline devices for QA and responsive checks',
                items: [
                    {
                        title: 'iPhone 13',
                        description: isRu
                            ? 'iOS 18 beta + Safari/Chrome'
                            : 'iOS 18 beta with Safari/Chrome',
                        meta: 'iOS 18'
                    },
                    {
                        title: 'Samsung Galaxy A52',
                        description: isRu
                            ? 'Android 14, проверка WebView и Chrome'
                            : 'Android 14 for WebView and Chrome testing',
                        meta: 'Android 14'
                    }
                ]
            }
        ]
    }

    return whatIUseContent
})



