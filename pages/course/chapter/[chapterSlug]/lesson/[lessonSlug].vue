<template>
  <h2>Lesson</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis
    voluptatum nostrum. Pariatur eaque tenetur asperiores aliquam odit repellat
    deserunt perspiciatis temporibus sunt molestiae? Animi totam doloremque
    saepe sed odit?
  </p>
  <h3>{{ chapter.title }}</h3>
  <h4>{{ lesson.title }}</h4>
</template>

<script setup>
const course = useCourse();

const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>
