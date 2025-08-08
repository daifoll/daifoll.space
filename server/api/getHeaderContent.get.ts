export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const lang = query.lang || 'rus'

    const headerContent = {
        creatorName: lang === 'ru' ? 'Кирилл Кобыхнов' : 'Kirill Kobykhnov',
        bio: lang === 'ru' ? 'ОБО МНЕ': 'BIO',
        works: lang === 'ru' ? 'ПРОЕКТЫ': 'WORKS',
        whatiuse: lang === 'ru' ? 'МОЙ СТЕК': 'WHAT I USE'
    }

    return headerContent
})