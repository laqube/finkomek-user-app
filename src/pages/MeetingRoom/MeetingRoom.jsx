import React, { useState, useEffect, useRef } from "react";
import styles from "./meetingroom.module.css";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";
import { useParams } from "react-router";

const apiKey = import.meta.env.VITE_API_KEY;

const MeetingRoom = () => {
  let { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const socketRef = useRef(null);

  // WebSocket connection setup goes here
  useEffect(() => {
    socketRef.current = new WebSocket(`${apiKey}/chat/ws/${roomId}`);

    socketRef.current.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socketRef.current.onmessage = (event) => {
      console.log(event.data);
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    return () => {
      socketRef.current.close();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = {
        username: "Abo lox",
        message: messageInput,
      };
      socketRef.current.send(JSON.stringify(message));
      setMessageInput("");
    }
  };

  return (
    <div className={styles.page_wrapper}>
      <ExpertNavigation />
      <div className={styles.page_container}>
        <div className={styles.room_container}>
          <div className={styles.room_row1}>
            <h1 className={styles.row1_heading}>Консультацияға қосылыңыз</h1>
            <button className={styles.row1_button}>Басты бетке оралу</button>
          </div>
          <div className={styles.room_row2}>
            <div className={styles.row2_call_column}>
              <div className={styles.row2_videos}>
                <span>
                  <p>Local Stream</p>
                  <video
                    className={styles.video}
                    id="webcamVideo"
                    autoplay
                    playsinline
                  ></video>
                </span>
                <span>
                  <p>Remote Stream</p>
                  <video
                    className={styles.video}
                    id="remoteVideo"
                    autoplay
                    playsinline
                  ></video>
                </span>
              </div>
              <div className={styles.buttons_row}>
                <button id="webcamButton" className={styles.button}>
                  <img
                    alt="cam"
                    src="/assets/camera_button.svg"
                    className={styles.buttonimg}
                  />
                </button>
                <button id="callButton" className={styles.button}>
                  <img
                    alt="call"
                    src="/assets/call_button.svg"
                    className={styles.buttonimg}
                  />
                </button>
                {/* <input id="callInput" /> */}
                <button id="answerButton" className={styles.button}>
                  <img
                    alt="answer"
                    src="/assets/answer_button.svg"
                    className={styles.buttonimg}
                  />
                </button>
                <button id="hangupButton" className={styles.button}>
                  <img
                    alt="hangup"
                    src="/assets/hangup_button.svg"
                    className={styles.buttonimg}
                  />
                </button>
              </div>
            </div>
            <div className={styles.row2_chat_column}>
              <div className={styles.chat_box}>
                <div className={styles.chat_heading}>
                  <p className={styles.chat_heading_text}>Чат</p>
                </div>
                <div className={styles.chat_body}>
                  {messages.map((message, index) => (
                    <div key={index} className="message">
                      {message.username}
                      {message.message}
                    </div>
                  ))}
                </div>
                <div className={styles.chat_input_row}>
                  <input
                    className={styles.chat_input}
                    type="text"
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button className={styles.chat_button} onClick={sendMessage}>
                    <img src="/assets/send_icon.svg" alt="send" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
