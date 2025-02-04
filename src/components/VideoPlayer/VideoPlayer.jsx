import React, { useRef } from "react";
import "./VideoPlayer.css";
import video_player from "../../assets/video.mp4";

const VideoPlayer = ({ showVideo, setShowVideo }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setShowVideo(false);
    }
  };

  return (
    <div
      ref={player}
      className={`video-player ${!showVideo && "hide"}`}
      onClick={closePlayer}
    >
      <video src={video_player} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
