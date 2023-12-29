<template>
  <div class="flex gap-4 justify-between mb-5 items-start">
    <div class="prose">
      <h1>
        <span class="font-medium"> Course: </span>
        <span class="font-bold">Nuxt router</span>
      </h1>
    </div>
    <UserCard />
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
                :class="{
                  'text-blue-400': lesson.path === $route.fullPath,
                  'text-gray-400': lesson.path !== $route.fullPath,
                }"
                :to="lesson.path"
                >{{ lesson.title }}</NuxtLink
              >
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <div class="prose p-6 rounded bg-white w-full max-w-full">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>Oh no, something went wrong with the lesson.</p>
          <pre>{{ error }}</pre>
          <button
            class="px-4 py-2 text-white bg-gray-500 font-bold hover:cursor-pointer rounded"
            @click="resetError(error)"
          >
            Reset
          </button>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script setup>
const { chapters } = useCourse();
const resetError = (error) => {
  error.value = null;
};
</script>
