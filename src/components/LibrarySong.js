import React from "react";

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
    if (isPlaying) {
      // wait till audio loads
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
