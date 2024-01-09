export default defineEventHandler((event: any) => {
  const { chapterSlug, lessonSlug } = event.context.params;

  return `Lesson "${lessonSlug}" from chapter "${chapterSlug}"`;
});
