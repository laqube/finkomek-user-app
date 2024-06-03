export function findLessonByName(lessonsData, lessonName) {
  console.log("Starting search for lesson:", lessonName);
  console.log("Lessons Data:", lessonsData);

  for (let moduleIndex = 0; moduleIndex < lessonsData.length; moduleIndex++) {
    const module = lessonsData[moduleIndex];
    console.log(`Current module at index ${moduleIndex}:`, module);

    if (!Array.isArray(module.lessons)) {
      console.log(
        `Module at index ${moduleIndex} does not contain an array of lessons:`,
        module.lessons
      );
      continue;
    }

    for (
      let lessonIndex = 0;
      lessonIndex < module.lessons.length;
      lessonIndex++
    ) {
      const lesson = module.lessons[lessonIndex];
      console.log(
        `Current lesson at index ${lessonIndex} of module ${moduleIndex}:`,
        lesson
      );

      if (lesson.lesson_name.includes(lessonName)) {
        console.log("Found lesson:", lesson);
        return lesson; // Found the lesson, return it
      }
    }
  }

  console.log("Lesson not found");
  return null; // Lesson not found
}
