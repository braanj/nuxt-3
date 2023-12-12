<template>
  <div
    class="flex flex-col items-center p-6 pt-10 w-full h-full min-h-screen max-w-[1200px] mx-auto"
  >
    <div class="prose mb-10">
      <h1>
        <span class="font-medium"> Course: </span>
        <span class="font-bold">Nuxt router</span>
      </h1>
    </div>

    <div class="flex flex-grow gap-6 h-full w-full">
      <div class="prose p-6 rounded bg-slate-200 w-[25%]">
        <h2>Chapters</h2>
      </div>
      <div class="prose p-6 rounded bg-slate-200 w-full">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
