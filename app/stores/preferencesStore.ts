import { defineStore } from 'pinia'
import { ref } from 'vue'

type Lang = 'ru' | 'eng'

export const usePreferencesStore = defineStore('usePreferencesStore', () => {
    const currentLang = ref<Lang>('eng')
    const turnAnimations = ref(false)

    const toChangeLang = (lang: Lang) => {
        currentLang.value = lang
    }

    const toTurnAnimations = (status: boolean) => {
        turnAnimations.value = status
    }

    return {
        currentLang,
        turnAnimations,
        toChangeLang,
        toTurnAnimations
    }
})