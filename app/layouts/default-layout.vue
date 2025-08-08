<template>
  <nuxt-layout>
    <div class="default-layout max-w-full bg-gradient-to-b from-zinc-50 via-stone-50 to-white min-h-screen font-thin flex">
      <Header/>
      <!-- <div class="home-animate-bg z-50 h-screen w-full bg-gradient-to-b from-gray-100 to-white absolute"></div> -->
      <slot />
    </div>
  </nuxt-layout>
</template>

<script lang="ts" setup>
import Header from '~/components/MainComponents/Header/Header.vue';


</script>

<style>

</style>