import React, { useState, useEffect } from "react";
import styles from "./userpage.module.css";
import { useTranslation } from "react-i18next";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { API } from "../../api";
import UserCard from "../../components/UserCard/UserCard";
import UserTabs from "../../components/UserTabs/UserTabs";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import UserDashboard from "../../components/UserDashboard/UserDashboard";
import UserCourses from "../../components/UserCourses/UserCourses";
import UserCalendar from "../../components/UserCalendar/UserCalendar";

const UserPage = () => {
  const { t } = useTranslation("translation");
  const [user, setUser] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await API.get("/user");
        setUser(response.data.user);
      } catch (error) {
        console.error("Қате орнады", error.response.data);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.page_column}>
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "white",
              },
            }}
          >
            <Menu>
              <MenuItem
                active={activeTab === "dashboard"}
                onClick={() => setActiveTab("dashboard")}
              >
                {t("page_home.user_dashboard")}
              </MenuItem>
              <MenuItem
                active={activeTab === "courses"}
                onClick={() => setActiveTab("courses")}
              >
                {t("page_home.user_courses")}
              </MenuItem>
              <MenuItem
                active={activeTab === "meets"}
                onClick={() => setActiveTab("meets")}
              >
                {t("page_home.user_meets")}
              </MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <div className={styles.page_column_tabs}>
          {activeTab === "dashboard" && <UserDashboard item={user} />}
          {activeTab === "courses" && <UserCourses item={user} />}
          {activeTab === "meets" && <UserCalendar item={user} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
