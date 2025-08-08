<template>
  <div class="main-header w-full max-w-sm bg-white text-gray-900 shadow">
    <div class="main-header__wrapper p-10 w-full mx-1/2 mx-auto flex flex-col">
        <div class="main-header-row creator-block w-full flex border-b-2 border-">
            <!--картинка -->
            <NuxtLink to="/" class="flex flex-col">
                <span class="creator-name text-4xl">Kirill Kobykhnov</span>
                <!-- <span class="text-sm">daifoll</span> -->
            </NuxtLink>
        </div>
        <div class="main-header-row w-full navigation-block flex">
            <nav class="main-header__navigation navigation">
                <ul class="flex flex-col">
                    <li class="mt-40 navigation__bio w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/bio">BIO</NuxtLink></li>
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