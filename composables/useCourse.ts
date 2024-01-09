import type { Chapter, Lesson, Course, LessonWithPAth } from "~/types/course";
import course from "./courseData";

export const useCourse = (): Course => {
  const chapters: Chapter[] = course.chapters.map((chapter: Chapter) => {
    const lessons: LessonWithPAth[] = chapter.lessons.map((lesson: Lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));

    return {
      ...chapter,
      lessons,
    };
  });

  return {
    ...course,
    chapters,
  };
};
