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
        <div class="
            main-header__lang-block 
            relative 
            lang-block 
            flex 
            items-center 
            justify-between 
            w-20 
            rounded-xl 
            mt-4 
            h-max 
            bg-indigo-100
            ">
            <span class="main-header__lang-block--indicator absolute w-10 h-full bg-indigo-300 rounded-xl z-10"></span>
            <button class="lang-block--eng flex z-20 text-white text-xl self-start w-10 p-1 font-semibold justify-center rounded-xl items-center cursor-pointer" @click="handleChangeLang">eng</button>
            <button class="lang-block--rus flex z-20 text-white text-xl self-start w-10 p-1 font-semibold justify-center rounded-xl items-center cursor-pointer" @click="handleChangeLang">ru</button>
        </div>
        <div class="main-header-row w-full navigation-block flex mt-20">
            <nav class="main-header__navigation navigation">
                <ul class="flex flex-col">
                    <li class="navigation__bio w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/bio">{{ data?.bio }}</NuxtLink></li>
                    <li class="mt-8 navigation__works w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/works">{{ data?.works }}</NuxtLink></li>
                    <li class="mt-8 navigation__whatiuse w-max text-4xl border-b-2 border-transparent hover:border-black"><NuxtLink to="/whatiuse">{{ data?.whatiuse }}</NuxtLink></li>
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
    server: false,
    query: computed(() => ({ lang: store.currentLang }))
}
)

let initialized = false
let toggle = false

const handleChangeLang = () => {
    initialized = true
    usePreferencesStore().toChangeLang(currentLang.value === 'eng'? 'ru' : 'eng')
}

watch(() => pending.value, () => {

    if(!pending.value && initialized) {
        console.log('toggle', toggle)
        if(toggle) {
            animate('.main-header__lang-block--indicator', {
                right: {to: '40px'},
                ease: 'out',
                duration: 100
            })
        } else {
            animate('.main-header__lang-block--indicator', {
                right: {to: '0'},
                ease: 'in',
                duration: 100
            })
        }

        toggle = !toggle

        animate('.creator-block', {
            opacity: [{
                from: '0', to: '1'
            }],

            delay: 0,
            ease: 'inQuad',
            duration: 500
        })

        animate('.navigation__bio', {
            opacity: [{
                from: '0', to: '1'
            }],

            delay: 100,
            ease: 'inCirc',
            duration: 500
        })

        animate('.navigation__works', {
            opacity: [{
                from: '0', to: '1'
            }],

            delay: 200,
            ease: 'inCirc',
            duration: 500
        })

        animate('.navigation__whatiuse', {
            opacity: [{
                from: '0', to: '1'
            }],

            delay: 300,
            ease: 'inCirc',
            duration: 500
        })

        animate('.navigation__source', {
            opacity: [{
                from: '0', to: '1'
            }],

            delay: 400,
            ease: 'inCirc',
            duration: 500
        })
    }

    console.log('pending: ', pending.value)
})

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
})
</script>

<style>
/* @import "tailwindcss"; */
</style>