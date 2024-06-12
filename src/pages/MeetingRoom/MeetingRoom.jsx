import React, { useState, useEffect, useRef } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import styles from "./meetingroom.module.css";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";
import { useParams } from "react-router";
import { API } from "../../api";

const apiKey = import.meta.env.VITE_API_KEY;
const agoraToken = import.meta.env.VITE_AGORA_KEY;

const appId = "1e3ab4257f214ba3a0d88545a38a8895";
const token = agoraToken;
const channel = "diploma";

const MeetingRoom = () => {
  let { roomId, role } = useParams();
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const socketRef = useRef(null);

  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteTracks, setRemoteTracks] = useState([]);
  const client = useRef(null);

  const [isCallActive, setIsCallActive] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const fetchUserData = async () => {
    try {
      let response;
      if (role === "2968903924") {
        response = await API.get(`/user`);
        setSender(`${response.data.user.fname} ${response.data.user.lname}`);
      } else if (role === "0373095710") {
        response = await API.get(`/expert/get`);
        setSender(
          `${response.data.expert.firstName} ${response.data.expert.lastName}`
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  // Initialize Agora connection and video/audio streams when call button is clicked
  const startCall = async () => {
    client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    client.current.on("user-published", async (user, mediaType) => {
      await client.current.subscribe(user, mediaType);
      if (mediaType === "video" || mediaType === "audio") {
        const remoteTrack = user[`${mediaType}Track`];
        setRemoteTracks((prevTracks) => [...prevTracks, remoteTrack]);
        remoteTrack.play(mediaType === "video" ? "remote_stream" : undefined);
      }
    });

    client.current.on("user-unpublished", (user, mediaType) => {
      const trackId = user.uid;
      setRemoteTracks((prevTracks) =>
        prevTracks.filter((track) => track.getUserId() !== trackId)
      );
    });

    await client.current.join(appId, channel, token, null);

    const localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    const localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    setLocalVideoTrack(localVideoTrack);
    setLocalAudioTrack(localAudioTrack);
    localVideoTrack.play("local_stream");
    await client.current.publish([localVideoTrack, localAudioTrack]);

    setIsCallActive(true);
  };

  const endCall = async () => {
    localVideoTrack?.close();
    localAudioTrack?.close();
    remoteTracks.forEach((track) => track.stop());
    client.current?.leave();
    setIsCallActive(false);
    setRemoteTracks([]);
  };

  const toggleCamera = async () => {
    if (isCameraOn) {
      await localVideoTrack.setEnabled(false);
    } else {
      await localVideoTrack.setEnabled(true);
    }
    setIsCameraOn(!isCameraOn);
  };

  const toggleMic = async () => {
    if (isMicOn) {
      await localAudioTrack.setEnabled(false);
    } else {
      await localAudioTrack.setEnabled(true);
    }
    setIsMicOn(!isMicOn);
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
                  <div id="local_stream" className={styles.video}></div>
                </span>
                <span>
                  <p>Remote Stream</p>
                  <div id="remote_stream" className={styles.video}></div>
                </span>
              </div>
              <div className={styles.buttons_row}>
                {!isCallActive && (
                  <button
                    id="callButton"
                    className={styles.button}
                    onClick={startCall}
                  >
                    <img
                      alt="call"
                      src="/assets/call_button.svg"
                      className={styles.buttonimg}
                    />
                  </button>
                )}
                {isCallActive && (
                  <>
                    <button
                      id="webcamButton"
                      className={styles.button}
                      onClick={toggleCamera}
                    >
                      <img
                        alt="cam"
                        src={
                          isCameraOn
                            ? "/assets/camera_button.svg"
                            : "/assets/camera_off_button.svg"
                        }
                        className={styles.buttonimg}
                      />
                    </button>
                    <button
                      id="micButton"
                      className={styles.button}
                      onClick={toggleMic}
                    >
                      <img
                        alt="mic"
                        src={
                          isMicOn
                            ? "/assets/mic_button.svg"
                            : "/assets/mic_off_button.svg"
                        }
                        className={styles.buttonimg}
                      />
                    </button>
                    <button
                      id="hangupButton"
                      className={styles.button}
                      onClick={endCall}
                    >
                      <img
                        alt="hangup"
                        src="/assets/hangup_button.svg"
                        className={styles.buttonimg}
                      />
                    </button>
                  </>
                )}
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
                    onKeyDown={handleKeyPress}
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
