import React from "react";
import styles from "./coursecontent.module.css";

const CourseContent = ({ lessons }) => {
  console.log("jfkdlsa");
  console.log(lessons);

  if (!lessons || !lessons.lesson_name) {
    return (
      <div className={styles.lesson_choose_container}>
        <p className={styles.lesson_choose_text}>
          Курсқа қош келдіңіз! Курсты бастау үшін бөлім ішінен сабақ таңдаңыз
        </p>
      </div>
    ); // Render a loading state or a placeholder if lessons are not available
  }

  const { lesson_name, lesson_type, lesson_content, video_path } = lessons;

  return (
    <div>
      <div>
        <h1 className={styles.lesson_name}>{lesson_name}</h1>
      </div>
      <div>
        {lesson_type === "vid" ? (
          <video className={styles.lesson_video} controls>
            <source src={video_path} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : lesson_type === "article" ? (
          <div>
            {lesson_content.map((paragraph, index) => (
              <p key={index}>{paragraph.paragraph}</p>
            ))}
          </div>
        ) : (
          <p>Unknown Lesson Type</p>
        )}
      </div>
    </div>
  );
};

export default CourseContent;

// {/* <div>
//         {lesson_name ? (
//           // If lesson_name exists, render it:
//           <h1>{lesson_name}</h1>
//         ) : (
//           // If lesson_name is null or empty, render the default message:
//           <h1>Сабақ таңдаңыз</h1>
//         )}
//       </div> */}
//       {/* <div>
//         {lesson_type === "vid" ? (
//           <p>Video Lesson Content</p>
//         ) : lesson_type === "article" ? (
//           <div>
//             {lesson_content.map((paragraph, index) => (
//               <p key={index}>{paragraph.paragraph}</p>
//             ))}
//           </div>
//         ) : (
//           <p>Unknown Lesson Type</p>
//         )}
//       </div> */}
