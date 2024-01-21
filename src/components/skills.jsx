import html from "../images/html.png";
import css from "../images/css.png";
import js from '../images/js.png';
import react from '../images/react.png';
import redux from "../images/redux.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import git from "../images/git.png";
import bs from "../images/bs.png";
import { Box, Grid, Typography } from "@mui/material";
import "../styles/skills.css";




const Skills = () => {
 
  return (
  
     <Box container spacing={2}  textAlign="center">
      <Typography variant="h3" sx={{
        fontFamily:"FingerPaint",
      }}>Skills</Typography>

      <Grid container   mt={2} p={2}>
       
        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={html} alt="" />
          <span>HTML</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={css} alt="" />
          <span>CSS</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={js} alt="" />
          <span>JavaScript</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={react} alt="" />
          <span>React</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={redux} alt="" />
          <span>Redux</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={mongo} alt="" />
          <span>MongoDB</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={node} alt="" />
          <span>Node JS</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={git} alt="" />
          <span>Git</span>
        </Grid>

        <Grid item xs={6} md={6} lg={4} className="grid-item">
          <img src={bs} alt="" />
          <span>Bootstrap</span>
        </Grid>
      </Grid>
    </Box>
   
  );
};

export default Skills;
