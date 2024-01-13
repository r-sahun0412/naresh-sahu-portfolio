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

  
  import fakestore from "../images/portfolio/fakestore.png";
  import moviesDB from "../images/portfolio/moviesDb.png";
  import foodie from "../images/portfolio/foodies.png";
  import littleMoments from "../images/portfolio/littleMoments.png";
  import { useState } from "react";
  
  const Project = () => {

    const [getCardItem, setCardItem] = useState([
        {
            link: "https://store-ns0412.web.app/",
            title: "Ecommerce",
            techStack: "Tech Stack : React, Redux, Bootstrap, FakeStoreAPI",
            desc: "An eCommerce masterpiece crafted using the React.js framework, boasting complete responsiveness for an optimal shopping journey.",
            image: fakestore,
            repoLink:""
        },
        {
            link: "https://nsmoviesdb-b6444.web.app/",
            title: "MoviesDB",
            techStack: "Tech Stack : HTML, CSS, React",
            desc: " MoviesDB is a React-based web app that fetches data from the OMDb API, allowing users to search for and view movie details.",
            image: moviesDB,
            repoLink:"https://github.com/sahun0412/moviesdb"
        },
        
        
        // {
        //     link: "https://sahun0412.github.io/DigitalBhem/hotel.html",
        //     title: "Hotel",
        //     techStack: "Tech Stack : HTML, CSS, JavaScript",
        //     desc: "Hotel Registration Form is a web-based form that allows users to book hotel rooms by providing their relevant information and preferences.",
        //     image: hotel,
        // },
        {
            link: "https://sahun0412.github.io/Foodies/",
            title: "Foodie",
            techStack: "Tech Stack : HTML, CSS, JavaScript",
            desc: " Foodie restaurant web app is an online application designed to cater to food enthusiasts, providing them with various features related to restaurants and dining experiences.",
            image: foodie,
            repoLink:"https://github.com/sahun0412/Foodies"
        },

        {
            link: "https://little-moments-5686f.web.app/",
            title: "Little-Moments",
            techStack: "Tech Stack : React Js, Material UI",
            desc: "LITTLE-MOMENTS is a React and Material-UI single-page UI that invites users on a virtual journey to explore unique places.And it showcases the beauty of different locations and encourages users to savor the little moments that travel brings.",
            image: littleMoments,
            repoLink:"https://github.com/sahun0412/little_Moments"
        }
    ])

    return (
      <Box container spacing={2} mt={4}>
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
  
        <Grid container spacing={2} mt={4} justifyContent="center" alignItems="center" textAlign="center">
          
        {getCardItem.map((card, index) => (
          <Grid item xs={10.5} md={5.5} lg={5.5} key={index}>
            <Card sx={{ maxWidth: 558}}>
              <CardMedia sx={{ height: 240 }} image={card.image} title={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.techStack}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  "& .MuiButton-root": {
                    margin: "0 10px", // Add margin between buttons
                    fontSize: "1.8rem",
                    color:"black",
                    fontWeight:"bold" // Set button font size
                  },
                }}>
              <Button  href={card.repoLink} className="bi bi-github" target="_blank" rel="noopener noreferrer">
                  
                  </Button>
  
                  <Button  href={card.link} className="bi bi-eye-fill" target="_blank" rel="noopener noreferrer">
                    
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
  
        
        </Grid>
      </Box>
    );
  };
  
  export default Project;
  