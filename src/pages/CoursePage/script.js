export function findLessonByName(lessonsData, lessonName) {
  console.log(lessonsData);
  for (const module of lessonsData) {
    for (const lesson of module.lessons) {
      if (lesson.lesson_name === lessonName) {
        return lesson; // Found the lesson, return it
      }
    }
  }
  return null; // Lesson not found
}
