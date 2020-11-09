import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            song={song}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
