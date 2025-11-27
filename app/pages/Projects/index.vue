<template>
  <section
    v-if="showContent"
    class="w-8/12 mx-auto py-16 px-5"
  >

  <div ref="bioTitle" class="bio-title opacity-0 text-5xl self-start border-b-2 w-full border-slate-200 font-medium text-slate-500">{{ data?.title }}</div>
  <h3 ref="bioSubtitle" class="opacity-0 mb-20 mt-5 text-2xl">{{ data?.subtitle }}</h3>
  
  <div class="projects columns-1 md:columns-2 xl:columns-2">
    <!-- Карточка проекта -->
    <article
      v-for="(project, index) in data?.projects"
      :key="index"
      :ref="el => { if (el) projectRefs[index] = el as HTMLElement }"
      class="relative w-full h-fit flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm mb-6
             transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80 opacity-0"
    >
      <!-- Лента NDA -->
      <div v-if="project.nda" class="absolute top-4 -right-12 w-40 text-center bg-red-500 text-white text-sm font-bold py-1 rotate-45 shadow-md">
        NDA
      </div>

      <header class="flex items-start gap-4">
        <div
          class="h-14 w-14 shrink-0 grid place-content-center rounded-xl bg-indigo-50 text-3xl
                 dark:bg-indigo-500/15"
          aria-hidden="true"
        >
          {{ project.icon }}
        </div>
        <div>
          <h3 class="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-100">
            {{ project.title }}
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {{ project.subtitle }}
          </p>
        </div>
      </header>

      <p v-if="project.description1" class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ project.description1 }}
      </p>

      <p v-if="project.description2" class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ project.description2 }}
      </p>

      <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li v-for="(feature, fIndex) in project.features" :key="fIndex" class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>{{ feature.text }}</span>
        </li>
      </ul>

      <footer class="mt-5 flex flex-wrap items-center gap-2">
        <span
          v-for="(tech, tIndex) in project.stack"
          :key="tIndex"
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >{{ tech }}</span>
        
        <a v-if="project.link" :href="project.link" target="_blank" class="rounded-md bg-indigo-400  px-3 py-1 text-lg font-medium text-white
                 dark:bg-indigo-500/20 dark:text-indigo-300 select-none cursor-pointer ml-auto">{{ project.linkText }}</a>
      
      </footer>
    </article>
  </div>

  </section>
</template>


<script lang="ts" setup>
import { animate } from 'animejs';

const store = usePreferencesStore()
const isTurnAnimation = computed(() => store.turnAnimations)
const showContent = ref(false)

const { data, error, pending } = useFetch('/api/getProjectsPageContent', 
{ 
    server: false,
    query: computed(() => ({ lang: store.currentLang }))
}
)

// Refs for animations
const bioTitle = ref<HTMLElement>()
const bioSubtitle = ref<HTMLElement>()
const projectRefs = ref<(HTMLElement | Element)[]>([])

const animateElement = (element: HTMLElement | Element, delay: number) => {
  animate(element, {
    opacity: [{
      from: '0', to: '1'
    }],
    delay,
    ease: 'inQuart',
    duration: 500
  })
}

const startAnimations = () => {
  if (isTurnAnimation.value) return

  if (bioTitle.value) animateElement(bioTitle.value, 100)
  if (bioSubtitle.value) animateElement(bioSubtitle.value, 200)

  projectRefs.value.forEach((el, index) => {
    if (el) animateElement(el, 300 + (index * 100))
  })
}

onMounted(() => {
  watch(() => pending.value, (newPending) => {
    // showContent.value = false
    if (!newPending && data.value && !isTurnAnimation.value) {
      showContent.value = true
      nextTick(() => {
        setTimeout(startAnimations, 100)
      })
    } else if (!newPending && data.value && isTurnAnimation.value) {
      showContent.value = true
      if (bioTitle.value) bioTitle.value.style.opacity = '1'
      if (bioSubtitle.value) bioSubtitle.value.style.opacity = '1'
      projectRefs.value.forEach(el => (el as HTMLElement).style.opacity = '1')
    } else {
      showContent.value = false
    }
  }, { immediate: true })
})
</script>

<style>

</style>