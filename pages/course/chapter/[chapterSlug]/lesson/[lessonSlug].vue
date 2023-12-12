<template>
  <div>
    <p class="mt-0 mb-1 uppercase text-gray-400 font-bold">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 items-center mt-2 mb-8">
      <a
        class="font-normal text-md text-gray-400"
        v-if="lesson.sourceUrl"
        :href="lesson.sourceUrl"
        target="_blank"
        >Download source code</a
      >
      <a
        class="font-normal text-md text-gray-400"
        v-if="lesson.downloadUrl"
        :href="lesson.downloadUrl"
        target="_blank"
        >Download video</a
      >
    </div>
    <VideoPlayer class="rounded" :videoId="lesson.videoId" />
    <p>{{ lesson.text }}</p>
  </div>
</template>

<script setup>
/**
 * Custom composable to fetch course data
 * @returns {object} - course data
 */
const course = useCourse();

const route = useRoute();

/**
 * Finds the chapter in the course based on the chapter slug passed through the route
 * @returns {object} - chapter data
 */
const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

/**
 * Finds the lesson in the chapter based on the lesson slug passed through the route
 * @returns {object} - lesson data
 */
const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>
