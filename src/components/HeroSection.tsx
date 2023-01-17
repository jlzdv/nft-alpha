import React from "react";
import Typed from "react-typed";

function HeroSection() {
  return (
    <div id="home" className={styles.container}>
      <h1 className="text-8xl xs:text-6xl text-slate-200 sm:text-7xl md:text-8xl font-bold mb-5">
        NFT ALPHA
      </h1>
      <div className="flex flex-row w-full justify-center text-4xl font-extrabold text-slate-400">
        <div>Work in</div>
        <div>
          <Typed
            className="text-blue-600 ml-2"
            strings={["progress..."]}
            typeSpeed={120}
            backSpeed={110}
            loop
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container:
    "snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full",
};

export default HeroSection;
