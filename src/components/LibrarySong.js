import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  audioRef,
  setCurrentSong,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add Active State
    const newSongs = songs.map((selectedSong) => {
      if (selectedSong.id === song.id) {
        return {
          ...selectedSong,
          active: true,
        };
      } else {
        return {
          ...selectedSong,
          active: false,
        };
      }
    });

    setSongs(newSongs);
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
