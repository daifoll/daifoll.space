<template>
  <section
    class="w-8/12 mx-auto py-16 px-5"
  >

  <div ref="bioTitle" class="bio-title text-5xl self-start border-b-2 w-full border-slate-200 font-medium text-slate-500">Проекты</div>
  <h3 ref="bioSubtitle" class="mb-20 mt-5 text-2xl">Разработанные коммерческие проекты</h3>
  
  <div class="projects columns-1 md:columns-2 xl:columns-2">
    <!-- Карточка проекта -->
    <article
      class="relative w-full h-fit flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm mb-6
             transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80"
    >
      <header class="flex items-start gap-4">
        <div
          class="h-14 w-14 shrink-0 grid place-content-center rounded-xl bg-indigo-50 text-3xl
                 dark:bg-indigo-500/15"
          aria-hidden="true"
        >
          🌁
        </div>
        <div>
          <h3 class="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-100">
            Cайт компании
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Официальный сайт логистической компании.
          </p>
        </div>
      </header>

      <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Проект представлят собой сайт компании, предоставляющий информацию о самой компании, акциях, новинках и многое другое.
      </p>

      <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Также на главной странице можно сделать быстрый расчет грузоперевозки и перейти в Личный кабинет для дальнейшего оформления заявки.
      </p>

      <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Быстрый расчёт стоимости перевозки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Страница с новостями компании</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Страница с акциями компании</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Предоставление всех необходимых документов клиенту</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Онлайн-общение с техподдержкой</span>
        </li>
      </ul>

      <footer class="mt-5 flex flex-wrap items-center gap-2">
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >Nuxt.js</span>
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >TypeScript</span>
        
        <a href="https://sibtrans.ru" target="_blank" class="rounded-md bg-indigo-400  px-3 py-1 text-lg font-medium text-white
                 dark:bg-indigo-500/20 dark:text-indigo-300 select-none cursor-pointer ml-auto">ОТКРЫТЬ</a>
      
      </footer>
    </article>

    <!-- Карточка проекта -->
    <article
      class="relative w-full h-fit flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm mb-6
             transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80"
    >

      <header class="flex items-start gap-4">
        <div
          class="h-14 w-14 shrink-0 grid place-content-center rounded-xl bg-indigo-50 text-3xl
                 dark:bg-indigo-500/15"
          aria-hidden="true"
        >
          📖
        </div>
        <div>
          <h3 class="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-100">
            Palitra CMS
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Платформа для создания высокопроизводительных новостных сайтов
          </p>
        </div>
      </header>

      <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Интерфейс для расчёта стоимости перевозок, оформления заявок и общения с поддержкой.
      </p>

      <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Расчёт стоимости перевозки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Выбор дополнительных услуг</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Оформление и отправка заявки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>История заказов с подробной информацией</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Онлайн-общение с техподдержкой</span>
        </li>
      </ul>

      <footer class="mt-5 flex flex-wrap items-center gap-2">
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >Vue.js</span>
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >TypeScript</span>

        <a href="https://palitracms.ru" target="_blank" class="rounded-md bg-indigo-400  px-3 py-1 text-lg font-medium text-white
                 dark:bg-indigo-500/20 dark:text-indigo-300 select-none cursor-pointer ml-auto">ОТКРЫТЬ</a>
      </footer>
    </article>

    <!-- Карточка проекта -->
    <article
      class="relative w-full h-fit flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm mb-6
             transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80"
    >
      <!-- Лента -->
      <div class="absolute top-4 -right-12 w-40 text-center bg-red-500 text-white text-sm font-bold py-1 rotate-45 shadow-md">
        NDA
      </div>

      <header class="flex items-start gap-4">
        <div
          class="h-14 w-14 shrink-0 grid place-content-center rounded-xl bg-indigo-50 text-3xl
                 dark:bg-indigo-500/15"
          aria-hidden="true"
        >
          🚚
        </div>
        <div>
          <h3 class="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-100">
            Личный кабинет
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Личный кабинет клиента логистической компании.
          </p>
        </div>
      </header>

      <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Интерфейс для расчёта стоимости перевозок, оформления заявок и общения с поддержкой.
      </p>

      <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Расчёт стоимости перевозки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Выбор дополнительных услуг</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Оформление и отправка заявки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>История заказов с подробной информацией</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Онлайн-общение с техподдержкой</span>
        </li>
      </ul>

      <footer class="mt-5 flex flex-wrap items-center gap-2">
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >Vue.js</span>
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >TypeScript</span>
      </footer>
    </article>

    <!-- Карточка проекта -->
    <article
      class="relative w-full h-fit flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm mb-6
             transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80"
    >
      <header class="flex items-start gap-4">
        <div
          class="h-14 w-14 shrink-0 grid place-content-center rounded-xl bg-indigo-50 text-3xl
                 dark:bg-indigo-500/15"
          aria-hidden="true"
        >
          📲
        </div>
      <!-- Лента -->
      <div class="absolute top-4 -right-12 w-40 text-center bg-red-500 text-white text-sm font-bold py-1 rotate-45 shadow-md">
        NDA
      </div>
        <div>
          <h3 class="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-100">
            Web-app Telegram
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Фриланс проект
          </p>
        </div>
      </header>

      <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Проект представляет собой удобный интерфейс личного кабинета клиента сервиса.
      </p>

      <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Покупка подписки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Продление подписки</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Получение помощи в поддержке</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Получение всей необходимой информации о клиенте</span>
        </li>
        <li class="flex gap-2">
          <span class="text-indigo-500">✓</span>
          <span>Инструкции по установке ПО сервиса</span>
        </li>
      </ul>

      <footer class="mt-5 flex flex-wrap items-center gap-2">
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >Vue.js</span>
        <span
          class="rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                 dark:bg-indigo-500/20 dark:text-indigo-300"
        >TypeScript</span>
      </footer>
    </article>
  </div>

  </section>
</template>


<script lang="ts" setup>

</script>

<style>

</style>