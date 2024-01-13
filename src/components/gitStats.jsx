import React from 'react';
import { Grid, Typography } from '@mui/material';

const GitHubStats = () => {
  const username = 'sahun0412';

  return (
    <Grid textAlign="center" justifyContent="center" alignItems="center">
      <Typography variant="h3" m={4}  sx={{
              fontFamily: "FingerPaint",
              textAlign: "center",
              fontWeight: "500",
            }}>
        Github Contribution
      </Typography>
      <Grid container spacing={1} textAlign="center" justifyContent="center" alignItems="center">
      <Grid item xs={11} md={6} lg={6}>
          <div className="project">
            <p align="center">
              <img
                align="center"
                width="100%"
                
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
                alt={username}
              />
            </p>
          </div>
        </Grid>
        <Grid item xs={11} md={5.5} lg={5.5}>
          <div className="project">
            <p align="center">
              <img
                align="center"
                width="100%"
                
                src={`https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true&locale=en&theme=tokyonight`}
                alt={username}
              />
            </p>
          </div>
        </Grid>
        <Grid item xs={11} md={6} lg={6}>
          <div className="project" data-aos="flip-up" data-aos-duration="1000">
            <p align="center">
              <img
                align="center"
                width="100%"
                
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&show_icons=true&locale=en&theme=tokyonight`}
                alt={username}
              />
            </p>
          </div>
        </Grid>
        
        
      </Grid>
    </Grid>
  );
};

export default GitHubStats;
