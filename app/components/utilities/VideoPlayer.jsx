"use client";
import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleVIdeoButton = () => {
    setIsOpen((prev) => !prev);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className=" fixed bottom-2 right-2">
        <button
          onClick={handleVIdeoButton}
          className="bg-color-secondary text-color-primary float-right px-3 mb-1"
        >
          x
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={handleVIdeoButton}
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-xl hover:accent-color-primary transition-all text-color-dark shadow-xl"
      >
        Tonton trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
}
