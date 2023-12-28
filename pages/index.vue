<template>
  <NuxtLink
    class="py-2 px-4 rounded bg-blue-400 font-bold text-white"
    :to="lesson.path"
    >Go to first lesson</NuxtLink
  >
</template>

<script setup>
const lesson = useFirstLesson();
</script>
