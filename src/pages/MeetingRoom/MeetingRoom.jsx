import React, { useState, useEffect, useRef } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import styles from "./meetingroom.module.css";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";
import { useParams } from "react-router";
import { API } from "../../api";

const apiKey = import.meta.env.VITE_API_KEY;

const appId = "1e3ab4257f214ba3a0d88545a38a8895";
const token =
  "007eJxTYPBTuHLT6NlW1to45r9PVnxzMbydci7Co33FvJ27Vv3aOHGDAoNhqnFikomRqXmakaFJUqJxokGKhYWpiWmisUWihYWl6V+RjLSGQEYG8wvRLIwMEAjiszOkZBbk5OcmMjAAAGg2Irw=";
const channel = "diploma";

const MeetingRoom = () => {
  let { roomId, role } = useParams();
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const socketRef = useRef(null);

  const [localTrack, setLocalTrack] = useState(null);
  const [remoteTrack, setRemoteTrack] = useState(null);
  const client = useRef(null);

  //set username based on the role

  const fetchUserData = async () => {
    try {
      let response;
      if (role === "2968903924") {
        response = await API.get(`/user`);
        setSender(
          `${response.data.user.fname} ${" "} ${response.data.user.lname}`
        );
      } else if (role === "0373095710") {
        response = await API.get(`/expert/get`);

        setSender(
          `${response.data.expert.firstName} ${" "} ${
            response.data.expert.lastName
          }`
        );
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // WebSocket connection setup
  useEffect(() => {
    fetchUserData();

    socketRef.current = new WebSocket(`${apiKey}/chat/ws/${roomId}`);

    socketRef.current.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socketRef.current.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    return () => {
      socketRef.current.close();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = { username: sender, message: messageInput };
      socketRef.current.send(JSON.stringify(message));
      setMessageInput("");
    }
  };

  // Agora conneciton setup
  // useEffect(() => {
  //   const initAgora = async () => {
  //     client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

  //     client.current.on("user-published", async (user, mediaType) => {
  //       await client.current.subscribe(user, mediaType);
  //       if (mediaType === "video") {
  //         const remoteTrack = user.videoTrack;
  //         setRemoteTrack(remoteTrack);
  //         remoteTrack.play("remote_stream");
  //       }
  //     });

  //     client.current.on("user-unpublished", (user) => {
  //       setRemoteTrack(null);
  //     });

  //     await client.current.join(appId, channel, token, null);
  //     const localTrack = await AgoraRTC.createCameraVideoTrack();
  //     setLocalTrack(localTrack);
  //     localTrack.play("local_stream");
  //     await client.current.publish([localTrack]);
  //   };

  //   initAgora();

  //   return () => {
  //     localTrack?.close();
  //     client.current?.leave();
  //   };
  // }, []);

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
                  <div id="local_stream" className={styles.video}></div>
                </span>
                <span>
                  <p>Remote Stream</p>
                  <div id="remote_stream" className={styles.video}></div>
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
                    <div key={index} className={styles.message}>
                      <p className={styles.chat_sender}>{message.username}</p>
                      <p className={styles.chat_message}>{message.message}</p>
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
