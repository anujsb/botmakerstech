import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div id="video" className="flex items-center justify-center">
      {/* <div className="md:w-[1130px] lg:w-[1130px] sm:w-[375px] md:h-[600px] lg:h-[600px] sm:h-[600px] rounded-xl mt-10 z-50">
        <iframe
        //   src="https://www.loom.com/embed/b9ec564cd4d04a6d985c077088794fe6?sid=b6dbae93-f413-4b83-b684-c353fd11ace4"
          src="https://www.loom.com/embed/22fcb3b2c68244919053dc94df28dfa7?sid=df0f2a4e-90c7-479d-91c4-5b80dabacd1e"
          frameBorder="0"
          className="w-full h-full rounded-xl"
        ></iframe>
      </div> */}
      <video width="900" height="1000" autoPlay loop muted className="border border-accent rounded-xl shadow-lg shadow-accent">
        <source src="https://botmakerstech.in/wp-content/uploads/2024/09/video1-.webm" type="video/mp4" />
        {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;