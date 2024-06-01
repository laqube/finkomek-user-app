import React, { useState, useEffect } from "react";
import styles from "./userpage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
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
  const [user, setUser] = useState({
    Id: null,
    email: null,
    password: null,
    fname: null,
    lname: null,
  });
  // const dispatch = useDispatch();

  // THIS WILL BE NEEDED AFTERWARDS
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  // };

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
              <MenuItem> Жеке парақша</MenuItem>
              <MenuItem> Менің курстарым </MenuItem>
              <MenuItem> Кесте </MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <div className={styles.page_column_tabs}>
          <UserDashboard item={user} />
          <UserCourses />
          <UserCalendar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
