<template>
  <div v-if="showContent" class="bio-page w-8/12 mx-auto py-14 px-5">
    <div class="bio-page-wrapper flex flex-col">
      <div ref="bioTitle" class="bio-title opacity-0 text-5xl self-start border-b-2 w-full border-slate-200 font-medium text-slate-500">{{ data?.myJourneyTitle }}</div>
      <h3 ref="bioSubtitle" class="opacity-0 mb-20 mt-5 text-2xl">{{ data?.myJourneySubtitle }}</h3>

      <div class="bio-content relative">
        <!-- Единая сплошная вертикальная линия от первого до последнего кружка -->
        <div ref="timelineLine" class="absolute left-[52px] w-0.5 bg-indigo-200 z-0 opacity-0" 
             style="top: 52px; height: calc(100% - 52px - 5rem);"></div>
        
        <div 
          v-for="(item, index) in data?.timeline" 
          :key="index"
          @click="() => toggleDescription(index)" 
          :ref="el => { if (el) timelineRefs[index] = el as HTMLElement }"
          class="bio-content-block opacity-0 flex gap-8 items-start hover:bg-indigo-300 hover:rounded-lg hover:cursor-pointer hover:text-white p-5 group select-none relative z-10"
          :class="{ 'mt-10': index > 0 }"
        >
          <span class="relative bg-indigo-200 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center group-hover:bg-white">
            <span class="text-2xl">{{ item.emoji }}</span>
          </span>
          <div class="bio-content-block-row">
            <span class="bio-content-block-year font-medium text-5xl text-slate-500 group-hover:text-white">{{ item.year }}</span>
            <div class="bio-content-block-description text-3xl max-w-[700px] mt-5 font-normal group-hover:text-white">
              {{ currentLang === 'ru' ? item.titleRu : item.titleEn }}
            </div>
            <div class="bio-content-block-description--full overflow-hidden text-2xl group-hover:text-white" 
                 style="transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;"
                 :class="{ 'h-0 opacity-0': !expandedBlocks[index], 'h-auto opacity-100 mt-3': expandedBlocks[index] }"
                 :ref="`bioContentBlock${index}`">
              {{ currentLang === 'ru' ? item.descriptionRu : item.descriptionEn }}
            </div>
          </div>
        </div>
      </div>

      <div class="beyond-code-content mt-20">
        <div ref="beyondCodeTitle" class="bio-title opacity-0 text-5xl self-start border-b-2 w-full border-slate-200 font-medium text-slate-500">{{ data?.beyondCodeTitle }}</div>
        <h3 ref="beyondCodeSubtitle" class="opacity-0 mb-20 mt-5 text-2xl">{{ data?.beyondCodeSubtitle }}</h3>

        <div 
          v-for="(item, index) in data?.beyondCode" 
          :key="index"
          :ref="el => { if (el) beyondCodeRefs[index] = el as HTMLElement }"
          class="beyond-code-item opacity-0 flex gap-6 items-center mb-8"
        >
          <span class="text-4xl">{{ item.emoji }}</span>
          <div class="beyond-code-text">
            <span class="text-3xl font-normal text-slate-700">{{ currentLang === 'ru' ? item.textRu : item.textEn }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { animate } from 'animejs';

const store = usePreferencesStore()
const currentLang = computed(() => store.currentLang)
const isTurnAnimation = computed(() => store.turnAnimations)

const { data, error, pending } = useFetch('/api/getBioPageContent', 
{ 
    server: false,
    query: computed(() => ({ lang: store.currentLang }))
}
)

const expandedBlocks = ref<boolean[]>([false, false, false, false, false])
const showContent = ref(false)

// Refs for animations
const bioTitle = ref<HTMLElement>()
const bioSubtitle = ref<HTMLElement>()
const timelineLine = ref<HTMLElement>()
const beyondCodeTitle = ref<HTMLElement>()
const beyondCodeSubtitle = ref<HTMLElement>()
const timelineRefs = ref<(HTMLElement | Element)[]>([])
const beyondCodeRefs = ref<(HTMLElement | Element)[]>([])

const toggleDescription = (index: number) => {
  expandedBlocks.value[index] = !expandedBlocks.value[index]
}

const animateElement = (element: HTMLElement | Element, delay: number) => {
  animate(element, {
    opacity: [{
      from: '0', to: '1'
    }],
    delay,
    ease: 'inQuad',
    duration: 500
  })
}

const startAnimations = () => {
  if (isTurnAnimation.value) return

  // Animate main titles
  if (bioTitle.value) animateElement(bioTitle.value, 100)
  if (bioSubtitle.value) animateElement(bioSubtitle.value, 200)

  // Animate timeline items
  timelineRefs.value.forEach((el, index) => {
    if (el) animateElement(el, 300 + (index * 100))
  })

  // Animate timeline line after all timeline items (calculate delay based on timeline length)
  const timelineDelay = 300 + ((data.value?.timeline?.length || 0) * 100)
  if (timelineLine.value) animateElement(timelineLine.value, timelineDelay)

  // Animate beyond code section after timeline line
  const beyondCodeStartDelay = timelineDelay + 200
  if (beyondCodeTitle.value) animateElement(beyondCodeTitle.value, beyondCodeStartDelay)
  if (beyondCodeSubtitle.value) animateElement(beyondCodeSubtitle.value, beyondCodeStartDelay + 100)

  // Animate beyond code items
  beyondCodeRefs.value.forEach((el, index) => {
    if (el) animateElement(el, beyondCodeStartDelay + 200 + (index * 100))
  })
}

onMounted(() => {
  watch(() => pending.value, (newPending) => {
    if (!newPending && data.value && !isTurnAnimation.value) {
      showContent.value = true
      nextTick(() => {
        setTimeout(startAnimations, 100)
      })
    } else if (!newPending && data.value && isTurnAnimation.value) {
      showContent.value = true
    } else {
      showContent.value = false
    }
  }, { immediate: true })
})
</script>

<style>

</style>