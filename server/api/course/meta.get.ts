import type { Chapter, Course, Lesson } from "~/types/course";
import course from "~/server/courseData";

course as Course;

type outlineBase = {
  title: string;
  slug: string;
  number: number;
};

type outlineLesson = outlineBase & {
  path: string;
};

type outlineChapter = outlineBase & {
  lessons: outlineLesson[];
};

type outlineCourse = {
  title: string;
  chapters: outlineChapter[];
};

export default defineEventHandler((event): outlineCourse => {
  const outline: outlineChapter[] = course.chapters.reduce(
    (prev: outlineChapter[], next: Chapter) => {
      const lessons: outlineLesson[] = next.lessons.map((lesson: Lesson) => ({
        title: lesson.title,
        slug: lesson.slug,
        number: lesson.number,
        path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
      }));

      const chapter: outlineChapter = {
        title: next.title,
        slug: next.slug,
        number: next.number,
        lessons: lessons,
      };

      return [...prev, chapter];
    },
    []
  );

  return {
    title: course.title,
    chapters: outline,
  };
});
