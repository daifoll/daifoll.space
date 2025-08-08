<template>
  <div class="main-header w-full max-w-sm bg-white text-gray-900 shadow">
    <div class="main-header__wrapper p-10 w-full mx-1/2 mx-auto flex flex-col">
        <div class="main-header-row creator-block w-full flex border-b-2 border-">
            <!--картинка -->
            <NuxtLink to="/" class="flex flex-col">
                <span class="creator-name text-4xl">{{ data?.creatorName}}</span>
                <!-- <span class="text-sm">daifoll</span> -->
            </NuxtLink>
        </div>
        <button class="flex bg-indigo-200 text-slate-50 text-xl self-start p-5 rounded-xl mt-4 items-center ml-2 cursor-pointer" @click="usePreferencesStore().toChangeLang(currentLang === 'eng'? 'ru' : 'eng')">{{ currentLang }}</button>
        <div class="main-header-row w-full navigation-block flex mt-20">
            <nav class="main-header__navigation navigation">
                <ul class="flex flex-col">
                    <li class="navigation__bio w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/bio">BIO</NuxtLink></li>
                    <li class="mt-8 navigation__works w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/works">WORKS</NuxtLink></li>
                    <li class="mt-8 navigation__whatiuse w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/whatiuse">WHAT I USE</NuxtLink></li>
                    <li class="mt-8 navigation__source w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="https://github.com/daifoll/daifoll.space" target="_blank">SOURCE</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <div class="main-header-row">

        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { animate, text, stagger } from 'animejs';

const store = usePreferencesStore()

const currentLang = computed(() => store.currentLang)

const { data, error, pending } = useFetch('/api/getHeaderContent', 
{ 
    server: true,
    query: computed(() => ({ lang: store.currentLang }))
}
)

// const currentLang = usePrefe

onMounted(() => {
//    const {words} = text.split('.creator-name', {words: true, chars: false})

animate('.main-header', {
    // x: [
    //     {
    //         from: '-100vh', to: '0',
    //     }
    // ],
    width: [{
         from: '0', to: '24rem',
    }],
    ease: 'inOutCubic',
    duration: 1000
})


// animate('.main-header-row', {
//     opacity: [{
//         from: '0', to: '1'
//     }],

//     delay: 1100,
//     ease: 'inQuad',
//     duration: 500
// })

animate('.creator-block', {
    opacity: [{
        from: '0', to: '1'
    }],

    delay: 1100,
    ease: 'inQuad',
    duration: 500
})

animate('.navigation__bio', {
    opacity: [{
        from: '0', to: '1'
    }],

    delay: 1300,
    ease: 'inCirc',
    duration: 500
})

animate('.navigation__works', {
    opacity: [{
        from: '0', to: '1'
    }],

    delay: 1400,
    ease: 'inCirc',
    duration: 500
})

animate('.navigation__whatiuse', {
    opacity: [{
        from: '0', to: '1'
    }],

    delay: 1500,
    ease: 'inCirc',
    duration: 500
})

animate('.navigation__source', {
    opacity: [{
        from: '0', to: '1'
    }],

    delay: 1600,
    ease: 'inCirc',
    duration: 500
})
    // animate(words, {
    // // Property keyframes
    // y: [
    //     { to: '-1rem', ease: 'outExpo', duration: 500 },
    //     { to: 0, ease: 'inSine', duration: 500 }
    // ],
    // ease: 'inExpo',
    // loopDelay: 1000,
    // loop: true
    // });
})
</script>

<style>
/* @import "tailwindcss"; */
</style>