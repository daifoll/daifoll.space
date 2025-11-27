<template>
  <section
    v-if="showContent"
    class="w-8/12 mx-auto py-16 px-5"
  >
    <header class="mb-16 space-y-4 max-w-3xl">
      <p
        ref="pageLabelRef"
        class="text-sm uppercase tracking-[0.4em] text-indigo-400 opacity-0"
      >
        toolkit
      </p>
      <h1
        ref="pageTitleRef"
        class="text-5xl font-semibold text-slate-800 opacity-0"
      >
        {{ data?.title }}
      </h1>
      <p
        ref="pageSubtitleRef"
        class="text-xl text-slate-500 opacity-0"
      >
        {{ data?.subtitle }}
      </p>
    </header>

    <div class="space-y-12">
      <article
        v-for="(section, sectionIndex) in data?.sections || []"
        :key="`${section.title}-${sectionIndex}`"
        :ref="registerSectionRef(sectionIndex)"
        class="opacity-0 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm"
      >
        <div class="flex flex-col gap-2 border-b border-slate-100 pb-6">
          <div class="flex items-center gap-4">
            <span class="text-4xl">{{ section.icon }}</span>
            <h2 class="text-3xl font-semibold text-slate-800">
              {{ section.title }}
            </h2>
          </div>
          <p class="text-base text-slate-500">
            {{ section.description }}
          </p>
        </div>

        <ul class="mt-6 grid gap-5 md:grid-cols-2">
          <li
            v-for="(item, itemIndex) in section.items"
            :key="`${item.title}-${itemIndex}`"
            :ref="registerCardRef(sectionIndex, itemIndex)"
            class="opacity-0 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-lg font-semibold text-slate-800">
                  {{ item.title }}
                </p>
                <p
                  v-if="item.description"
                  class="mt-2 text-sm text-slate-500"
                >
                  {{ item.description }}
                </p>
              </div>
              <span
                v-if="item.meta"
                class="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-500"
              >
                {{ item.meta }}
              </span>
            </div>
            <div
              v-if="item.tags?.length"
              class="mt-4 flex flex-wrap gap-2"
            >
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-500"
              >
                {{ tag }}
              </span>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { animate } from 'animejs';
import { nextTick, onMounted, watch } from 'vue';

type WhatIUseItem = {
  title: string
  description?: string
  meta?: string
  tags?: string[]
}

type WhatIUseSection = {
  icon: string
  title: string
  description: string
  items: WhatIUseItem[]
}

type WhatIUseContent = {
  title: string
  subtitle: string
  sections: WhatIUseSection[]
}

const store = usePreferencesStore()
const isTurnAnimation = computed(() => store.turnAnimations)

const { data, pending } = useFetch<WhatIUseContent>('/api/getWhatIUsePageContent', {
  server: false,
  query: computed(() => ({ lang: store.currentLang }))
})

const showContent = ref(false)
const pageLabelRef = ref<HTMLElement>()
const pageTitleRef = ref<HTMLElement>()
const pageSubtitleRef = ref<HTMLElement>()
const sectionRefs = ref<Record<number, HTMLElement>>({})
const cardRefs = ref<Record<string, HTMLElement>>({})

const resetRefs = () => {
  sectionRefs.value = {}
  cardRefs.value = {}
}

const registerSectionRef = (index: number) => (el: Element | null) => {
  if (el) {
    sectionRefs.value[index] = el as HTMLElement
  }
}

const registerCardRef = (sectionIndex: number, cardIndex: number) => (el: Element | null) => {
  if (el) {
    cardRefs.value[`${sectionIndex}-${cardIndex}`] = el as HTMLElement
  }
}

const animateFadeUp = (element: HTMLElement, delay: number) => {
  animate(element, {
    opacity: [{ from: '0', to: '1' }],
    translateY: [{ from: '16px', to: '0px' }],
    delay,
    duration: 500,
    ease: 'outQuad'
  })
}

const revealWithoutAnimation = () => {
  const elements: (HTMLElement | undefined)[] = [
    pageLabelRef.value,
    pageTitleRef.value,
    pageSubtitleRef.value,
    ...Object.values(sectionRefs.value),
    ...Object.values(cardRefs.value)
  ]

  elements.forEach((el) => {
    if (el) {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }
  })
}

const startAnimations = () => {
  if (isTurnAnimation.value) return

  if (pageLabelRef.value) animateFadeUp(pageLabelRef.value, 50)
  if (pageTitleRef.value) animateFadeUp(pageTitleRef.value, 150)
  if (pageSubtitleRef.value) animateFadeUp(pageSubtitleRef.value, 250)

  Object.entries(sectionRefs.value)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .forEach(([, element], index) => {
      animateFadeUp(element, 350 + index * 120)
    })

  Object.entries(cardRefs.value)
    .sort((a, b) => {
      const [aSection, aCard] = a[0].split('-').map(Number)
      const [bSection, bCard] = b[0].split('-').map(Number)
      if (aSection === bSection) {
        return aCard - bCard
      }
      return aSection - bSection
    })
    .forEach(([, element], index) => {
      animateFadeUp(element, 500 + index * 60)
    })
}

onMounted(() => {
  watch(() => pending.value, (newPending) => {
    if (!newPending && data.value && !isTurnAnimation.value) {
      showContent.value = true
      resetRefs()
      nextTick(() => {
        setTimeout(startAnimations, 100)
      })
    } else if (!newPending && data.value && isTurnAnimation.value) {
      showContent.value = true
      resetRefs()
      nextTick(() => {
        setTimeout(revealWithoutAnimation, 0)
      })
    } else {
      showContent.value = false
    }
  }, { immediate: true })
})
</script>

<style>

</style>