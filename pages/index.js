import React, { useState, useEffect } from "react";

import Image from "next/image";

import BackgroundImage from "./lain.gif";
import ProtonImage from "../public/proton.png"

import Blur from 'react-css-blur';


function TextReveal({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval)
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <div className="title">{displayedText}</div>;
}

class App extends React.Component {
  state = {
    blurOn: false
  }

  blurOn = (blurOn) => {
    this.setState({ blurOn })
  }

  render() {
    return (
     <div className="bigContainer">

      <div className="wallpaper">
        <Blur radius={ '5px' } transition="400ms">
          <Image
          src={BackgroundImage}
          alt="Background"
          fill={true}
          sizes="100vw" // This helps Next.js optimize the image
          style={{
            userSelect: "none",
            opacity: "0", // Not working :c
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          priority
        />

        </Blur>

        <div className="container">
          <TextReveal text="smutekk"/>

          <button>
            <Image
              src={ProtonImage}
              alt="Proton Mail"
              
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </button>
          
        </div>

      </div>
    </div> 
    )
  }
}

export default App;
