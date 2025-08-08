import { defineStore } from 'pinia'
import { ref } from 'vue'

type Lang = 'ru' | 'eng'

export const usePreferencesStore = defineStore('usePreferencesStore', () => {
    const currentLang = ref<Lang>('ru')

    const toChangeLang = (lang: Lang) => {
        currentLang.value = lang
    }

    return {
        currentLang,
        toChangeLang
    }
})