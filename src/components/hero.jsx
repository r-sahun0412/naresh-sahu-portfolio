import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js library
import "../styles/hero.css";
import pp from "../images/pp.jpeg";
import { Box, Typography } from "@mui/material";
import ContactIcons from "./contactIcons";

const Hero = () => {
  // const [showText, setShowText] = useState(1);

  const el = useRef(null)

  useEffect(() => {
    // Set up Typed.js on component mount
    const options = new Typed(el.current,{
      strings: ["a Front-End Developer!", "a MERN Stack Developer!"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: ""
    });

    

    // Clear Typed.js on component unmount
    return () => {
      options.destroy();
    };
  }, []);

  return (
    <Box
      container
      spacing={2}
      mt={10}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        flexWrap: "wrap",
        textAlign:"center"
      }}
    >
      <Box
        sx={{
          mt: [0, 0, 20],
        }}
      >
        <Typography
          sx={{
            color: "gray",
            fontSize: 20,
          }}
        >
          Hello! 👋 I'm
        </Typography>

        <Typography
          sx={{
            fontSize: 50,
            display: "inline",
            fontFamily:"FingerPaint",
        color:"grey"
          }}
        >
          Naresh Sahu
        </Typography>

       <Box>
       <div ref={el}
          id="headline"
          sx={{
            display: "inline",
          }}
        ></div>
       </Box>
       <ContactIcons />
      </Box>

      <Box
        className="curtain"
        sx={{
          mt: 8,
        }}
      >
        <figure>
        <img src={pp}  alt="" width={400} height={400} />

        </figure>
      </Box>
    </Box>
  );
};

export default Hero;
