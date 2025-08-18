<template>
  <div class="bio-page w-8/12 mx-auto py-14 px-5">
    <div class="bio-page-wrapper flex flex-col">
      <div class="bio-title text-5xl self-start border-b-2 w-full border-slate-200 font-medium text-slate-500">MY JOURNEY</div>
      <h3 class="mb-20 mt-5 text-2xl">From the beginning to now</h3>

      <div class="bio-content relative">
        <!-- Единая сплошная вертикальная линия от первого до последнего кружка -->
        <div class="absolute left-[52px] w-0.5 bg-indigo-200 z-0" 
             style="top: 52px; height: calc(100% - 52px - 5rem);"></div>
        <div @click="() => toggleDescription(0)" class="bio-content-block  flex gap-8 items-start hover:bg-indigo-300 hover:rounded-lg hover:cursor-pointer hover:text-white p-5 group select-none relative z-10">
          <span class="relative bg-indigo-200 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center
             group-hover:bg-white">
            <span class="text-2xl">🍼</span>
          </span>
          <div class="bio-content-block-row">
            <span class="bio-content-block-year font-medium text-5xl text-slate-500 group-hover:text-white">1998</span>
            <div class="bio-content-block-description text-3xl max-w-[700px] mt-5 font-normal">
              Born in Altai Krai.
            </div>
            <div class="bio-content-block-description--full overflow-hidden text-2xl transition-all duration-300 ease-in-out" 
                 :class="{ 'h-0 opacity-0': !expandedBlocks[0], 'h-auto opacity-100 mt-3': expandedBlocks[0] }"
                 ref="bioContentBlock0">
              Born in the beautiful Altai Krai region of Russia. The beginning of a journey that would lead to a passion for technology and programming.
            </div>
          </div>
        </div>
        <div @click="() => toggleDescription(1)" class="bio-content-block  flex gap-8 items-start mt-10 hover:bg-indigo-300 hover:rounded-lg hover:cursor-pointer hover:text-white p-5 group select-none relative z-10">
          <span class="relative bg-indigo-200 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center
             group-hover:bg-white">
            <span class="text-2xl">🎓</span>
          </span>
          <div class="bio-content-block-row">
            <span class="bio-content-block-year font-medium text-5xl text-slate-500 group-hover:text-white">2015 — 2019</span>
            <div class="bio-content-block-description text-3xl max-w-[700px] mt-5 font-normal">
              Graduaded form "Altai Industrial and Economic College"— Major: Information Security of Automated Systems
            </div>
            <div class="bio-content-block-description--full overflow-hidden text-2xl  transition-all duration-300 ease-in-out" 
                 :class="{ 'h-0 opacity-0': !expandedBlocks[1], 'h-auto opacity-100 mt-3': expandedBlocks[1] }"
                 ref="bioContentBlock1">
              Studied programming fundamentals, computer systems, and cybersecurity. Learned C++, JavaScript, and worked with various operating systems. This period laid the foundation for my technical expertise.
            </div>
          </div>
        </div>
        <div @click="() => toggleDescription(2)" class="bio-content-block  flex gap-8 items-start mt-10 hover:bg-indigo-300 hover:rounded-lg hover:cursor-pointer hover:text-white p-5 group select-none relative z-10">
          <span class="relative bg-indigo-200 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center
             group-hover:bg-white">
            <span class="text-2xl">👨‍💻</span>
          </span>
          <div class="bio-content-block-row">
            <span class="bio-content-block-year font-medium text-5xl text-slate-500 group-hover:text-white">2023 — 2024</span>
            <div class="bio-content-block-description text-3xl max-w-[700px] mt-5 font-normal">
              Junior Full-stack Developer — "Everyteka"
            </div>
            <div class="bio-content-block-description--full overflow-hidden text-2xl  transition-all duration-300 ease-in-out" 
                 :class="{ 'h-0 opacity-0': !expandedBlocks[2], 'h-auto opacity-100 mt-3': expandedBlocks[2] }"
                 ref="bioContentBlock2">
              My first professional programming role. Primarily focused on frontend development while also contributing to various project solutions. Worked with diverse technologies and gained valuable real-world experience.
            </div>
          </div>
        </div>
        <div @click="() => toggleDescription(3)" class="bio-content-block  flex gap-8 items-start mt-10 hover:bg-indigo-300 hover:rounded-lg hover:cursor-pointer hover:text-white p-5 group select-none relative z-10">
          <span class="relative bg-indigo-200 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center
             group-hover:bg-white">
            <span class="text-2xl">🚀</span>
          </span>
          <div class="bio-content-block-row">
            <span class="bio-content-block-year font-medium text-5xl text-slate-500 group-hover:text-white">2024 — present</span>
            <div class="bio-content-block-description text-3xl max-w-[700px] mt-5 font-normal">
              Front-end Developer — "Bayte Transit"
            </div>
            <div class="bio-content-block-description--full overflow-hidden text-2xl  transition-all duration-300 ease-in-out" 
                 :class="{ 'h-0 opacity-0': !expandedBlocks[3], 'h-auto opacity-100 mt-3': expandedBlocks[3] }"
                 ref="bioContentBlock3">
              Specialized as a frontend developer at a major logistics company. Led development of two key projects: a comprehensive Personal Cabinet system and the company's official website.
            </div>
          </div>
        </div>
        <div @click="() => toggleDescription(4)" class="bio-content-block  flex gap-8 items-start mt-10 hover:bg-indigo-300 hover:rounded-lg hover:cursor-pointer hover:text-white p-5 group select-none relative z-10">
          <span class="relative bg-indigo-200 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center
             group-hover:bg-white">
            <span class="text-2xl">💼</span>
          </span>
          <div class="bio-content-block-row">
            <span class="bio-content-block-year font-medium text-5xl text-slate-500 group-hover:text-white">2025 — present</span>
            <div class="bio-content-block-description text-3xl max-w-[700px] mt-5 font-normal">
              Freelance project
            </div>
            <div class="bio-content-block-description--full overflow-hidden text-2xl  transition-all duration-300 ease-in-out" 
                 :class="{ 'h-0 opacity-0': !expandedBlocks[4], 'h-auto opacity-100 mt-3': expandedBlocks[4] }"
                 ref="bioContentBlock4">
              Currently developing a Telegram web-app project. Focusing on creating innovative solutions and expanding expertise in modern web application development for messaging platforms.
            </div>
          </div>
        </div>
      </div>

      <div class="beyond-code-content mt-20">
        <div class="bio-title text-5xl self-start border-b-2 w-full border-slate-200 font-medium text-slate-500">BEYOND CODE</div>
        <h3 class="mb-20 mt-5 text-2xl">What I love outside of coding</h3>

        <div class="beyond-code-item flex gap-6 items-center mb-8">
          <span class="text-4xl">📖</span>
          <div class="beyond-code-text">
            <span class="text-3xl font-normal text-slate-700">Reading — Sci-Fi, biographies, science, fiction</span>
          </div>
        </div>
        
        <div class="beyond-code-item flex gap-6 items-center mb-8">
          <span class="text-4xl">🎧</span>
          <div class="beyond-code-text">
            <span class="text-3xl font-normal text-slate-700">Music — Pop-punk, rap</span>
          </div>
        </div>
        
        <div class="beyond-code-item flex gap-6 items-center mb-8">
          <span class="text-4xl">🐈</span>
          <div class="beyond-code-text">
            <span class="text-3xl font-normal text-slate-700">Animals — all of them</span>
          </div>
        </div>

        <div class="beyond-code-item flex gap-6 items-center mb-8">
          <span class="text-4xl">🍿</span>
          <div class="beyond-code-text">
            <span class="text-3xl font-normal text-slate-700">Series: sci-fi, mystery, drama</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const expandedBlocks = ref<boolean[]>([false, false, false, false, false])

const toggleDescription = (index: number) => {
  expandedBlocks.value[index] = !expandedBlocks.value[index]
}
</script>

<style>

</style>