export const playAudio = (isPlaying, audioRef) => {
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
