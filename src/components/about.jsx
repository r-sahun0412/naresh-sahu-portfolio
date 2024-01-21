import { Box, Typography } from "@mui/material";
import Skills from "./skills";
import { motion } from "framer-motion";
const About = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  
  return (
    <Box
      container
      spacing={2}
      pt={10}
      id="about"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: { 
          xs: "wrap", 
          md: "nowrap" },
      }}
    >
      <motion.div  initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}>

      <Box m={2}
      p={2}  
      textAlign="center">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "FingerPaint",
          }}
        >
          ABOUT ME
        </Typography>
        <Box mt={4} textAlign="auto">
          <Typography
            mt={2}
            sx={{
              fontFamily: "normal",
            }}
          >
            ⚡ I’m an aspiring and determined Full Stack Web Developer, curious
            to explore different industry-standard tech stacks and environments.
          </Typography>
          <Typography
            mt={2}
            sx={{
              fontFamily: "normal",
            }}
          >
            ⚡ I build websites using HTML, CSS, JavaScript, React.js and other
            libraries.
          </Typography>
          <Typography
            mt={2}
            sx={{
              fontFamily: "normal",
            }}
          >
            ⚡I am a passionate person who pursues my dreams, who works hard and
            constantly works on improving myself seeking to achieve the best
            version of myself.
          </Typography>
          <Typography
            mt={2}
            sx={{
              fontFamily: "normal",
            }}
          >
            ⚡ I'm excited to collaborate with your team to bring your vision to
            life!
          </Typography>
        </Box>
      </Box>
      </motion.div>

      <Box mt={4} sx={{ xs: { flexWrap: "wrap" } }}>
        <Skills />
      </Box>
    </Box>
  );
};

export default About;
