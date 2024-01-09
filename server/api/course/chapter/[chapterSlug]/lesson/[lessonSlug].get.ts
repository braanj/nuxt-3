import type { Chapter, Lesson, Course, LessonWithPAth } from "~/types/course";
import course from "~/server/courseData";

course as Course;

export default defineEventHandler((event: any): LessonWithPAth => {
  const { chapterSlug, lessonSlug } = event.context.params;

  const chapter: Maybe<Chapter> = course.chapters.find(
    (chapter: Chapter) => chapter.slug === chapterSlug
  );

  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: "Chapter not found!",
    });
  }

  const lesson: Maybe<Lesson> = chapter.lessons.find(
    (lesson: Lesson) => lesson.slug === lessonSlug
  );

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: "Lesson not found!",
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  };
});
