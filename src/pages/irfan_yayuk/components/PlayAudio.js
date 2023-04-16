import audiofile from '../assets/music/sound.mp3'
const audio = new Audio(audiofile);

const PlayAudio = () => {
    
    audio.volume = 0.5;
    audio.loop = true;
    return audio;
};

export default PlayAudio;
  