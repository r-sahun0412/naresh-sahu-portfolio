import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import "../styles/project.css";
import fakestore from "../images/portfolio/fakestore.png";
import moviesDB from "../images/portfolio/moviesDb.png";
import foodie from "../images/portfolio/foodies.png";
import digitalclock from "../images/portfolio/digitalclock.png";
import littleMoments from "../images/portfolio/littleMoments.png";
import dashboard from "../images/portfolio/dashboard1.png"
import { useState } from "react";

const Project = () => {
  const [getCardItem, setCardItem] = useState([
    {
      link: "https://store-ns0412.web.app/",
      title: "Ecommerce",
      techStack: "Tech Stack : React, Redux, Bootstrap, FakeStoreAPI",
      desc: "An eCommerce masterpiece crafted using the React.js framework, boasting complete responsiveness for an optimal shopping journey.",
      image: fakestore,
      repoLink: "https://github.com/r-sahun0412/fakestore",
    },
    {
      link: "https://nsmoviesdb-b6444.web.app/",
      title: "MoviesDB",
      techStack: "Tech Stack : HTML, CSS, React",
      desc: " MoviesDB is a React-based web app that fetches data from the OMDb API, allowing users to search for and view movie details.",
      image: moviesDB,
      repoLink: "https://github.com/r-sahun0412/moviesdb",
    },
    {
      link: "https://foodie-black-three.vercel.app/",
      title: "Foodie",
      techStack: "Tech Stack : HTML, CSS, JavaScript",
      desc: " Foodie restaurant web app is an online application designed to cater to food enthusiasts, providing them with various features related to restaurants and dining experiences.",
      image: foodie,
      repoLink: "https://github.com/r-sahun0412/Foodie",
    },
    {
      link: "https://little-moments-5686f.web.app/",
      title: "Little-Moments",
      techStack: "Tech Stack : React Js, Material UI",
      desc: "LITTLE-MOMENTS is a React and Material-UI single-page UI that invites users on a virtual journey to explore unique places. And it showcases the beauty of different locations and encourages users to savor the little moments that travel brings.",
      image: littleMoments,
      repoLink: "https://github.com/sahun0412/little_Moments",
    },
    {
      link: "https://dashboard-fitpeo-29436.web.app/",
      title: "ReactDashboard",
      techStack: "Tech Stack : React Js, Material UI,ReCharts",
      desc: "The React dashboard, powered by Recharts, 📊 offers a visually compelling data representation with various graph types, including pie charts, providing users with insightful data visualization for informed decision-making and analysis.",
      image: dashboard,
      repoLink: "https://github.com/r-sahun0412/dashboard",
    },
    {
      link: "https://ns-digitalneonwatch.netlify.app/",
      title: "Digital Clock",
      techStack: "Tech Stack : React Js, Material UI",
      desc: "This Neon Digital Clock combines both functionality and an eye-catching design, making it a perfect fit for a modern web application or digital dashboard.",
      image: digitalclock,
      repoLink: "https://github.com/r-sahun0412/digitalWatch25",
    }
  ]);

  return (
    <Box container spacing={2} pt={15} id="project">
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "FingerPaint",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Projects
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        mt={4}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {getCardItem.map((card, index) => (
          <Grid item xs={10.5} md={5.5} lg={5.5} key={index}>
            <Card
              style={{
                width: "100%",
                height: "600px",
                padding: "2px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                className="card-img"
                component="img"
                sx={{
                  height: 400,
                  objectFit: "fill",
                }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{
                    fontFamily: "normal",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                  component="div"
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                  sx={{ fontFamily: "normal" }}
                >
                  {card.techStack}
                </Typography>
                <Typography
                  mt={2}
                  variant="body2"
                  color="text.secondary"
                  fontFamily="normal"
                >
                  {card.desc}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  "& .MuiButton-root": {
                    margin: "0 10px",
                    fontSize: "1.8rem",
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              >
                <Button
                  href={card.repoLink}
                  className="bi bi-github"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Button>
                <Button
                  href={card.link}
                  className="bi bi-eye-fill"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://github.com/r-sahun0412?tab=repositories"
          target="_blank"
        >
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default Project;
