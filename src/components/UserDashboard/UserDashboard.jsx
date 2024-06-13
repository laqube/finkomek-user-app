import React, { useEffect, useState } from "react";
import styles from "./userdashboard.module.css";
import { useTranslation } from "react-i18next";
import CourseCatalogueCard from "../CourseCatalogueCard/CourseCatalogueCard";
const apiKey = import.meta.env.VITE_API_KEY;
import { API } from "../../api";
import BookingCard from "../BookingCard/BookingCard";

const UserDashboard = ({ item }) => {
  const { t } = useTranslation("translation");
  const { fname } = item;
  const [courses, setCourses] = useState([]);
  const [Bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get(`${apiKey}/user/get-courses`)
      .then((response) => {
        const courseData = response.data.course || [];
        setCourses(courseData);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setCourses([]);
      });
  }, []);
  useEffect(() => {
    async function fetchBookings() {
      const response = await API.get("/user/get-meets");
      setBookings(response.data);
    }
    fetchBookings();
  }, []);

  return (
    <div className={styles.dash_container}>
      <div className={styles.dashb_henlo}>
        <img
          className={styles.dashb_henlo_pic}
          src="/assets/dashboard_guy.svg"
          alt="guy"
        />
        <h1 className={styles.dashb_henlo_message}>
          {t("page_home.dashboard_content.Hello")}
          {fname}! {t("page_home.dashboard_content.Sup")}
        </h1>
      </div>

      {Bookings && (
        <div className={styles.section}>
          <h1 className={styles.section_heading}>Жуырдағы кездесулер</h1>
          <div className={styles.ucal}>
            <div className={styles.ucal_container}>
              {Bookings.slice(0, 3).map((booking) => (
                <BookingCard item={booking} key={booking.roomId} />
              ))}
            </div>
          </div>
        </div>
      )}

      {courses.length > 0 && (
        <div className={styles.section}>
          <h1 className={styles.section_heading}>Соңғы алынған курс</h1>
          <div className={styles.ucourse_row}>
            <div className={styles.ucourse_card} key={courses[0].id}>
              <CourseCatalogueCard item={courses[0]} key={courses[0].id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
