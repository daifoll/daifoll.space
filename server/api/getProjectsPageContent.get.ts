export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const lang = query.lang || 'ru'

    const projectsPageContent = {
        title: lang === 'ru' ? 'Проекты' : 'Projects',
        subtitle: lang === 'ru' ? 'Разработанные коммерческие проекты' : 'Developed commercial projects',
        projects: [
            {
                icon: '🌁',
                title: lang === 'ru' ? 'Cайт компании' : 'Company website',
                subtitle: lang === 'ru' ? 'Официальный сайт логистической компании' : 'Official website of a logistics company',
                description1: lang === 'ru' ? 'Проект представлят собой сайт компании, предоставляющий информацию о самой компании, акциях, новинках и многое другое.' : 'The project is a company website that provides information about the company itself, promotions, new products, and much more.',
                description2: lang === 'ru' ? 'Также на главной странице можно сделать быстрый расчет грузоперевозки и перейти в Личный кабинет для дальнейшего оформления заявки.' : 'Also on the main page, you can make a quick calculation of cargo transportation and go to your Personal Account for further registration of the application.',
                features: [
                    { text: lang === 'ru' ? 'Быстрый расчёт стоимости перевозки' : 'Quick calculation of transportation costs' },
                    { text: lang === 'ru' ? 'Страница с новостями компании' : 'Page with company news' },
                    { text: lang === 'ru' ? 'Страница с акциями компании' : 'Page with company promotions' },
                    { text: lang === 'ru' ? 'Предоставление всех необходимых документов клиенту' : 'Providing all necessary documents to the client' },
                    { text: lang === 'ru' ? 'Онлайн-общение с техподдержкой' : 'Online communication with technical support' }
                ],
                stack: ['Nuxt.js', 'TypeScript'],
                link: 'https://sibtrans.ru',
                linkText: lang === 'ru' ? 'ОТКРЫТЬ' : 'OPEN',
                nda: false
            },
            {
                icon: '📖',
                title: 'Palitra CMS',
                subtitle: lang === 'ru' ? 'Платформа для создания высокопроизводительных новостных сайтов' : 'A platform for creating high-performance news sites',
                description1: lang === 'ru' ? 'Платформа для создания полноценных новостных сайтов с поддержкой мощного markdown-редактора' : 'A platform for creating full-fledged news sites with support for a powerful markdown editor',
                description2: '',
                features: [
                    { text: lang === 'ru' ? 'Создание статьи' : 'Creating an article' },
                    { text: lang === 'ru' ? 'Кастомизация итогового сайта - шрифты, фон, дополнительные элементы' : 'Customization of the final site - fonts, background, additional elements' },
                    { text: lang === 'ru' ? 'Оформление и отправка заявки' : 'Registration and submission of an application' },
                    { text: lang === 'ru' ? 'Превью итогового' : 'Final preview' },
                    { text: lang === 'ru' ? 'Онлайн-общение с техподдержкой' : 'Online communication with technical support' }
                ],
                stack: ['Vue.js', 'TypeScript'],
                link: 'https://palitracms.ru',
                linkText: lang === 'ru' ? 'ОТКРЫТЬ' : 'OPEN',
                nda: false
            },
            {
                icon: '🚚',
                title: lang === 'ru' ? 'Личный кабинет' : 'Personal Account',
                subtitle: lang === 'ru' ? 'Личный кабинет клиента логистической компании' : 'Client’s personal account in a logistics company',
                description1: lang === 'ru' ? 'Интерфейс для расчёта стоимости перевозок, оформления заявок и общения с поддержкой.' : 'Interface for calculating shipping costs, creating orders, and communicating with support.',
                description2: '',
                features: [
                    { text: lang === 'ru' ? 'Расчёт стоимости перевозки' : 'Calculation of transportation costs' },
                    { text: lang === 'ru' ? 'Выбор дополнительных услуг' : 'Selection of additional services' },
                    { text: lang === 'ru' ? 'Оформление и отправка заявки' : 'Registration and submission of an application' },
                    { text: lang === 'ru' ? 'История заказов с подробной информацией' : 'Order history with detailed information' },
                    { text: lang === 'ru' ? 'Онлайн-общение с техподдержкой' : 'Online communication with technical support' }
                ],
                stack: ['Vue.js', 'TypeScript'],
                link: '',
                linkText: lang === 'ru' ? 'ОТКРЫТЬ' : 'OPEN',
                nda: true
            },
            {
                icon: '📲',
                title: 'Web-app Telegram',
                subtitle: lang === 'ru' ? 'Фриланс проект' : 'Freelance project',
                description1: lang === 'ru' ? 'Проект представляет собой удобный интерфейс личного кабинета клиента сервиса.' : 'The project is a convenient interface for the client’s personal account of the service.',
                description2: '',
                features: [
                    { text: lang === 'ru' ? 'Покупка подписки' : 'Subscription purchase' },
                    { text: lang === 'ru' ? 'Продление подписки' : 'Subscription renewal' },
                    { text: lang === 'ru' ? 'Получение помощи в поддержке' : 'Getting help in support' },
                    { text: lang === 'ru' ? 'Получение всей необходимой информации о клиенте' : 'Getting all the necessary information about the client' },
                    { text: lang === 'ru' ? 'Инструкции по установке ПО сервиса' : 'Instructions for installing the service’s software' }
                ],
                stack: ['Vue.js', 'TypeScript'],
                link: '',
                linkText: lang === 'ru' ? 'ОТКРЫТЬ' : 'OPEN',
                nda: true
            }
        ]
    }

    return projectsPageContent
})
