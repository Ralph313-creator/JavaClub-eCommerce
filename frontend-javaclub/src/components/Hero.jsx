import {useState, useEffect, useRef} from 'react';
import SocialIcon from './SocialIcon';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [curIndex, setCurIndex] = useState(0);

  // ! Won't loop video slider
  // TODO: Find solution (work on image but not on video source)
  const slides = [
    {url: 'assets/vid1.mp4'},
    {url: 'assets/vid2.mp4'},
    {url: 'assets/vid3.mp4'},
    {url: 'assets/vid4.mp4'},
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurIndex((curIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [curIndex, slides.length]);

  // * Video handler
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlay(true);
  };
  const handlePause = () => {
    videoRef.current.pause();
    setIsPlay(false);
  };

  return (
    <div className="relative mb-8">
      <video
        ref={videoRef}
        className="w-full h-[18rem] md:h-[25rem] lg:h-[40rem] 2xl:h-[55rem] object-fill"
        muted
        loop
        autoPlay
      >
        <source src={slides[curIndex].url} type="video/mp4" />
      </video>

      <SocialIcon />
      {/* Hero Button */}
      <div
        className=" absolute bottom-8 right-8"
        onClick={() => setIsPlay(!isPlay)}
      >
        <div
          className={`video-btn ${!isPlay ? 'video-btn-on' : 'video-btn-off'}`}
          onClick={!isPlay ? handlePause : handlePlay}
        >
          <span>ON</span>
          <span>OFf</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
