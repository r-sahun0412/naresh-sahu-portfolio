import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, Typography } from "@mui/material";
import ContactIcons from "./contactIcons";
import gif from "../images/gif.gif";
import "../styles/hero.css";


const Hero = () => {
  const el = useRef(null);
  
  useEffect(() => {
    const options = new Typed(el.current, {
      strings: ["a Front-End Developer!", "a MERN Stack Developer!"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "",
    });

    return () => {
      options.destroy();
    };
  }, []);

  

  return (
    <Box
      id="hero"
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        flexWrap: "wrap",
        textAlign: "center",
        mt: [15, 10, 10],
      }}
    >
      
        <Box>
          <Box
            sx={{
              mt: [0, 20, 20],
            }}
          >
            <Typography
              sx={{
                color: "gray",
                fontSize: 20,
                fontFamily: "raleway-normal",
                fontWeight: "200px",
              }}
            >
              Hello! 👋 I'm
            </Typography>

            <Typography
              sx={{
                fontSize: 50,
                display: "inline",
                fontFamily: "FingerPaint",
                color: "black",
              }}
            >
              Naresh Sahu
            </Typography>

            <Box>
              <div
                ref={el}
                id="headline"
                style={{
                  display: "inline",
                  fontFamily: "normal",
                  color: "#002fa7",
                  fontSize: "20px",
                }}
              ></div>
            </Box>

            <ContactIcons />
          </Box>
        </Box>
      

      <Box className="curtain" mt={8}>
        <img src={gif} alt="profile" width={400} height={400} />
      </Box>
    </Box>
  );
};

export default Hero;
