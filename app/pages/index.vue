<template>
    <div class="main-page w-8/12 mx-auto py-20 px-10">
      <div v-if="showContent" class="main-page-wrapper flex justify-between gap-5">
        <div class="main-page__about-me about-me basis-2/3 flex flex-col">
          <h1 ref="titleEl" class="about-me__title opacity-0 text-4xl font-bold text-gray-800">{{ data?.creatorName }}</h1>
          <h2 ref="subtitleEl" class="about-me__subtitle opacity-0 text-2xl font-medium text-gray-500">{{ data?.subTitle }}</h2>
          <p class="about-me__small-bio mt-20 text-xl font-normal text-gray-600">
            <span ref="firstTextEl" class="about-me__text-first-element opacity-0 flex">{{ data?.mainTextFirstElement }}</span>
            <br/>
            <span ref="secondTextEl" class="about-me__text-second-element opacity-0 flex mt-0.5">{{ data?.mainTextSecondElement }}</span> 
            <br/>
            <span ref="endingTextEl" class="about-me__text-ending opacity-0 flex mt-0.5">{{ data?.mainTextEnding }}</span>
          </p>
          <div class="about-me__button-block mt-20">
            <a ref="guthubLink" href="https://github.com/daifoll" target="_blank" class="opacity-0 bg-indigo-300 text-xl p-3 rounded-md border-2 border-indigo-300 font-semibold text-white hover:bg-white hover:text-gray-900 select-none cursor-pointer"><font-awesome icon="fa-brands fa-github" />daifoll</a>
            <a ref="resumeBtnEl" class="about-me__resume-btn opacity-0 bg-indigo-300 text-xl p-3 rounded-md border-2 border-indigo-300 font-semibold ml-3 text-white hover:bg-white hover:text-gray-900 select-none cursor-pointer">{{ data?.downloadBtn }}</a>
          </div>
        </div>
        <div class="about-me__image w-20 basis-1/3 h-120 mt-10 rounded-lg overflow-hidden">
          <img ref="creatorAvatar" class="object-cover object-center" style="transform: translateX(-100vh);" src="@/assets/kirill-avatar.jpg" alt="Kirill Kobykhnov avatar"/>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { animate } from 'animejs';

const store = usePreferencesStore()
const isTurnAnimation = computed(() => store.turnAnimations)

const { data, error, pending } = useFetch('/api/getIndexPageContent', 
{ 
    server: false,
    query: computed(() => ({ lang: store.currentLang }))
}
)

const titleEl = ref<HTMLElement>()
const subtitleEl = ref<HTMLElement>()
const firstTextEl = ref<HTMLElement>()
const secondTextEl = ref<HTMLElement>()
const endingTextEl = ref<HTMLElement>()
const guthubLink = ref<HTMLElement>()
const resumeBtnEl = ref<HTMLElement>()
const creatorAvatar = ref<HTMLElement>()


const animationElements = computed(() => [
  { ref: titleEl, delay: 100 },
  { ref: subtitleEl, delay: 200 },
  { ref: firstTextEl, delay: 300 },
  { ref: secondTextEl, delay: 400 },
  { ref: endingTextEl, delay: 500 },
  { ref: guthubLink, delay: 600 },
  { ref: resumeBtnEl, delay: 700 }
])

const animateElement = (element: HTMLElement, delay: number) => {
  animate(element, {
    opacity: [{
      from: '0', to: '1'
    }],
    delay,
    ease: 'inQuad',
    duration: 500
  })
}

const showContent = ref(false)

const startAnimations = () => {
  animationElements.value.forEach(({ ref, delay }) => {
    if (ref.value) {
      animateElement(ref.value, delay)
    }
  })
}

onMounted(() => {
  watch(() => pending.value, (newPending) => {
    if (!newPending && data.value && !isTurnAnimation.value) {
      showContent.value = true
      nextTick(() => {
        setTimeout(startAnimations, 100)

        if (creatorAvatar.value) {
          animate(creatorAvatar.value, {
            x: {from: '100vh', to: '0'},
            ease: 'inOutCubic',
            duration: 800
          })
        }
      })
    } else {
      
      showContent.value = false
    }
  }, { immediate: true })
})

</script>

<style>

</style>