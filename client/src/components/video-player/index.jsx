import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Slider } from "../ui/slider";
import {
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "../ui/button";

function VideoPlayer({ width = "100%", height = "100%", url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsTimeOutRef = useRef(null);

  //    play and pause video handle function
  function handlePlayAndPause() {
    setIsPlaying(!isPlaying);
  }

  //   handle volume change function

  // handle progress function
  // this function match the video time with the slider
  function handleProgress(progress) {
    if (!seeking) {
      setPlayed(progress.played);
    }
  }

  //   handle rewind
  function handleRewind() {
    playerRef.current?.seekTo(playerRef.current?.getCurrentTime() - 5);
  }

  //   handle forward
  function handleForward() {
    playerRef.current?.seekTo(playerRef.current?.getCurrentTime() + 5);
  }

  //   handle toggle mute
  function handleToggleMute() {
    setMuted(!muted);
  }

  //   handle seek change
  function handleSeekChange(newValue) {
    //this function take the position value of the slider and set to the played
    setPlayed(newValue[0]);

    setSeeking(true);
  }

  // handle seek mouse up
  function handeSeekMouseUp() {
    // when i remove the mouse from the slider it make seek false and mathch the played value with the player video
    setSeeking(false);
    playerRef.current?.seekTo(played);
  }

  //   handle volume change
  function handleVolumeChange(newValue) {
    setVolume(newValue[0]);
  }
  return (
    // this is player container
    <div
      ref={playerContainerRef}
      className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out 
        ${isFullScreen ? "w-screen h-screen" : null}
        `}
      style={{ width, height }}
    >
      {/* this is the video player */}
      <ReactPlayer
        ref={playerRef}
        width={"100%"}
        height={"100%"}
        url={url}
        playing={isPlaying}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
      />

      {/* here come the control of the video player  */}
      {/* on hover make the state of the show control to true so it is visible */}
      {showControls ? (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 transition-opacity duration:300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* this is the slider of video duration */}
          <Slider
            value={[played * 100]}
            max={100}
            step={0.1}
            onValueChange={(value) => {
              handleSeekChange([value[0] / 100]);
            }}
            onValueCommit={handeSeekMouseUp}
            className="w-full mb-4"
          />

          {/* here come the remaining control like rewind and forward and volume */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* play and pause */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayAndPause}
                className="text-white bg-transparent hover:text-white hover:bg-gray-700"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              {/* rewind */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRewind}
                className="text-white bg-transparent hover:text-white hover:bg-gray-700"
              >
                <RotateCcw className="h-6 w-6" />
              </Button>
              {/* forward */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleForward}
                className="text-white bg-transparent hover:text-white hover:bg-gray-700"
              >
                <RotateCw className="h-6 w-6" />
              </Button>
              {/* mute */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleToggleMute}
                className="text-white bg-transparent hover:text-white hover:bg-gray-700"
              >
                {muted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </Button>
              {/* here come the volume slider */}
              <Slider
                value={[volume * 100]}
                max={100}
                step={1}
                onValueChange={(value) => handleVolumeChange([value[0] / 100])}
                className="w-24"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default VideoPlayer;
