<template>
    <div class="main-page w-8/12 mx-auto py-20 px-10">
      <div class="main-page-wrapper flex justify-between gap-5">
        <div class="main-page__about-me about-me basis-2/3 flex flex-col">
          <h1 class="about-me__title text-4xl font-bold text-gray-800">Kirill Kobykhnov</h1>
          <h2 class="about-me__subtitle text-2xl font-medium text-gray-500">Web-develop ( Front-end / a bit of full-stack )</h2>
          <p class="about-me__small-bio mt-20 text-xl font-normal text-gray-600">
            <span class="flex">Hi! My name is Kirill, and I'm a front-end developer based in Novosibirsk.</span>
            <br/>
            <span class="flex mt-0.5">On this website, you can learn about my experience, the projects I've developed or contributed to, and the technologies I use.</span> 
            <br/>
            <span class="flex mt-0.5">Enjoy!</span>
          </p>
          <div class="about-me__button-block mt-20">
            <a href="https://github.com/daifoll" target="_blank" class="bg-indigo-300 text-xl p-3 rounded-md border-2 border-indigo-300 font-semibold text-white hover:bg-white hover:text-gray-900 select-none cursor-pointer"><font-awesome icon="fa-brands fa-github" />daifoll</a>
            <a class="bg-indigo-300 text-xl p-3 rounded-md border-2 border-indigo-300 font-semibold ml-3 text-white hover:bg-white hover:text-gray-900 select-none cursor-pointer">DOWNLOAD CV</a>
          </div>
        </div>
        <div class="about-me__image w-20 basis-1/3 h-120 mt-10 rounded-lg overflow-hidden">
          <img class="object-cover object-center" src="@/assets/kirill-avatar.jpg" alt="Kirill Kobykhnov avatar"/>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style>

</style>