export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const lang = query.lang || 'ru'

    const headerContent = {
        creatorName: lang === 'ru' ? 'Кирилл Кобыхнов' : 'Kirill Kobykhnov',
        bio: lang === 'ru' ? 'ОБО МНЕ': 'BIO',
        works: lang === 'ru' ? 'ПРОЕКТЫ': 'PROJECTS',
        whatiuse: lang === 'ru' ? 'МОЙ СТЕК': 'WHAT I USE',
        contactme: lang === 'ru' ? 'НАПИСАТЬ МНЕ': 'CONTACT ME'
    }

    return headerContent
})