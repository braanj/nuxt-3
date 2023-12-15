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
      <div class="prose p-6 rounded bg-white w-[25%]">
        <h2>Chapters</h2>
        <ul class="list-none pl-0">
          <li v-for="(chapter, index) in chapters" :key="chapter.slug">
            <h3>{{ chapter.title }}</h3>
            <ol class="list-decimal">
              <li v-for="(lesson, index) in chapter.lessons" :key="lesson.slug">
                <NuxtLink
                  class="no-underline"
                  :href="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
                  >{{ lesson.title }}</NuxtLink
                >
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <div class="prose p-6 rounded bg-white w-full max-w-full">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
const { chapters } = useCourse();
</script>
