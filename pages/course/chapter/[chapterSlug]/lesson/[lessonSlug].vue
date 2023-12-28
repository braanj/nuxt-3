<template>
  <div>
    <p class="mt-0 mb-1 uppercase text-gray-400 font-bold">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 items-center mt-2 mb-8">
      <NuxtLink
        class="font-normal text-md text-gray-400"
        v-if="lesson.sourceUrl"
        :href="lesson.sourceUrl"
        target="_blank"
        >Download source code</NuxtLink
      >
      <NuxtLink
        class="font-normal text-md text-gray-400"
        v-if="lesson.downloadUrl"
        :href="lesson.downloadUrl"
        target="_blank"
        >Download video</NuxtLink
      >
    </div>
    <VideoPlayer class="rounded" :videoId="lesson.videoId" />
    <p>{{ lesson.text }}</p>
    <LessonCompleteButton
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    />
  </div>
</template>

<script setup>
/**
 * Custom composable to fetch course data
 * @returns {object} - course data
 */
const course = useCourse();

const route = useRoute();

definePageMeta({
  validate: ({ params }) => {
    const course = useCourse();

    const chapter = course.chapters.find(
      (chapter) => chapter.slug === params.chapterSlug
    );

    if (!chapter) {
      throw createError({
        statusCode: "404",
        message: "Chapter not found!",
      });
    }

    const lesson = chapter.lessons.find(
      (lesson) => lesson.slug === params.lessonSlug
    );

    if (!lesson) {
      throw createError({
        statusCode: "404",
        message: "Lesson not found!",
      });
    }

    return true;
  },
});

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

/**
 * Creates the page' title
 * @return {string} - page title
 */
const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
});

/**
 * Nuxt Built-in composable that sets the page's SEO metadata
 */
useHead({
  title,
});

/**
 * Initialize the course progress state using local storage
 * @returns {Array} - Empty array
 */
const progress = useLocalStorage("progress", []);

/**
 * Checks the lesson state (complete or uncomplete)
 * @returns {Boolean} - lesson state
 */
const isLessonComplete = computed(() => {
  // If the chapter isn't in the state, the lesson isn't complete
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }
  // If the lesson isn't in the state, it isn't complete
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  // The lesson is complete
  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

/**
 * Toggles the state of the lesson
 */
const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
</script>
