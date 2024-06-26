import React, { useEffect, useState } from "react";
import styles from "./experttabs.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import moment from "moment-timezone";
import { useTranslation } from "react-i18next";
import { API } from "../../api";

const ExpertTabs = ({ item }) => {
  const [Days, setDays] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
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

  const handleSlotChange = (event) => {
    setSelectedSlot(Number(event.target.value));
  };

  const handleBooking = async () => {
    if (selectedSlot) {
      const selectedMeeting = item.find(
        (meeting) => meeting.Id === selectedSlot
      );
      console.log(selectedMeeting.roomId);
      try {
        await API.post(`user/meeting/make-appointment`, {
          roomId: selectedMeeting.roomId,
        });
        alert("Booking successful!");
        setSelectedSlot(null);
        window.location.reload();
      } catch (error) {
        console.error("Error making appointment:", error);
        alert("Failed to book the meeting. Please try again.");
      }
    } else {
      alert("Please select a time slot.");
    }
  };

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
                <label
                  key={meeting.Id}
                  className={`${styles.time_slot} ${
                    selectedSlot === meeting.Id ? styles.selected_slot : ""
                  }`}
                >
                  <input
                    type="radio"
                    value={meeting.Id}
                    name="slot"
                    checked={selectedSlot === meeting.Id}
                    onChange={handleSlotChange}
                    className={styles.timeSlotInput}
                  />
                  <span className={styles.slot}>
                    {moment.tz(meeting.timeStart, "UTC+5").format("HH:mm")} -
                    {moment.tz(meeting.timeEnd, "UTC+5").format("HH:mm")}
                  </span>
                </label>
              ))}
          </div>
          <button
            onClick={handleBooking}
            className={styles.button_book}
            disabled={!selectedSlot}
          >
            {t("page_expert.button_forward")}
          </button>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ExpertTabs;
