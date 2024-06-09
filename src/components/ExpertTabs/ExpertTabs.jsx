import React, { useEffect, useState } from "react";
import styles from "./experttabs.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const ExpertTabs = ({ item }) => {
  const [Days, setDays] = useState([]); // Days will be unique dates
  const [selectedSlot, setSelectedSlot] = useState(null);
  const { t } = useTranslation("translation");

  // Extract unique days and slots within each day
  useEffect(() => {
    const daysMap = new Map();
    item.forEach((meeting) => {
      const day = moment(meeting.timeStart).format("YYYY-MM-DD"); // Extract date
      if (!daysMap.has(day)) {
        daysMap.set(day, []); // Create empty slot list for new day
      }
      daysMap.get(day).push(meeting); // Add meeting to the day's slot list
    });

    // Sort slots within each day by startTime
    daysMap.forEach((slots) => {
      slots.sort((a, b) => moment(a.timeStart) - moment(b.timeStart));
    });

    setDays(Array.from(daysMap.keys())); // Update the Days state
  }, [item]); // Run this effect whenever the `item` prop changes

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      alert("Booking successful!"); // Replace with actual booking logic
      // Reset selected slot after booking
      setSelectedSlot(null);
    } else {
      alert("Please select a time slot.");
    }
  };

  return (
    <Tabs>
      <TabList>
        {Days.map((day) => (
          <Tab key={day}>{moment(day).format("DD.MM")}</Tab> // Format day
        ))}
      </TabList>

      {Days.map((day) => (
        <TabPanel key={day}>
          <div onChange={handleSlotChange} className={styles.panel_container}>
            {item
              .filter(
                (meeting) =>
                  moment(meeting.timeStart).format("YYYY-MM-DD") === day
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
                    className={styles.timeSlotInput}
                  />
                  <span className={styles.slot}>
                    {moment(meeting.timeStart).format("HH:mm")} -{" "}
                    {moment(meeting.timeEnd).format("HH:mm")}
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
