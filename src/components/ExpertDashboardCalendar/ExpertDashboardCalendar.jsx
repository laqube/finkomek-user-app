import React, { useState, useEffect } from "react";
import styles from "./expertdashboardcalendar.module.css";
import { API } from "../../api";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import moment from "moment-timezone";
import EdashCard from "../EdashCard/EdashCard";

const ExpertDashboardCalendar = ({ item }) => {
  const [Days, setDays] = useState([]);
  const { t } = useTranslation("translation");

  useEffect(() => {
    const timezone = "UTC+5";
    const daysMap = new Map();
    item.forEach((meeting) => {
      const day = moment.tz(meeting.timeStart, timezone).format("YYYY-MM-DD");
      if (!daysMap.has(day)) {
        daysMap.set(day, []);
      }
      daysMap.get(day).push(meeting);
    });

    daysMap.forEach((slots) => {
      slots.sort(
        (a, b) =>
          moment.tz(a.timeStart, timezone) - moment.tz(b.timeStart, timezone)
      );
    });

    setDays(Array.from(daysMap.keys()));
  }, [item]);

  return (
    <Tabs>
      <TabList>
        {Days.map((day) => (
          <Tab key={day}>{moment(day).format("DD.MM")}</Tab>
        ))}
      </TabList>
      {Days.map((day) => (
        <TabPanel key={day}>
          <div className={styles.panel_container}>
            {item
              .filter(
                (meeting) =>
                  moment.tz(meeting.timeStart, "UTC+5").format("YYYY-MM-DD") ===
                  day
              )
              .map((meeting) => (
                <EdashCard item={meeting} key={meeting.roomId} />
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ExpertDashboardCalendar;
