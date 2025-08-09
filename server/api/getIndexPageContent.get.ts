export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const lang = query.lang || 'ru'

    const indexPageContent = {
        creatorName: lang === 'ru' ? 'Кирилл Кобыхнов' : 'Kirill Kobykhnov',
        subTitle: lang === 'ru' ? 'Веб-разработчик ( Front-end / немного full-stack )' : 'Web-develop ( Front-end / a bit of full-stack )',
        mainTextFirstElement: lang === 'ru' ? 
        'Привет! Меня зовут Кирилл, я фронтенд-разработчик из Новосибирска.'
        :
        "Hi! My name is Kirill, and I'm a front-end developer based in Novosibirsk." ,

        mainTextSecondElement: lang === 'ru' ?
        "На этом сайте вы можете узнать о моём опыте, проектах, которые я разрабатываю или участвоваю в разработке, а также о технологиях, которые я использую."
        :
        "On this website, you can learn about my experience, the projects I've developed or contributed to, and the technologies I use.",

        mainTextEnding: lang === 'ru' ?
        "Наслаждайтесь!"
        :
        "Enjoy!",

        downloadBtn: lang === 'ru' ?
        "Посмотреть резюме"
        :
        "View CV"
    }

    return indexPageContent
})
