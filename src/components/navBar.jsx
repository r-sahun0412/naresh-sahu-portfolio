import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Hidden} from '@mui/material';
// import {ReactComponent as Menu} from "../images/svg/menu.svg"; 
import menu from "../images/menu.png"
const NavBar = () => {
  const [getOpen, setOpen] = useState(false);

 

  const toggleDrawer = () => {
    setOpen(!getOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <Box>
      <AppBar position="fixed" style={{ display: "flex", justifyContent: "space-between", backgroundColor:"#fb7260", color:"black"}}>
        <Hidden mdUp>
          {/* Set the width of the drawer as per your requirement */}
          <Drawer anchor="right" open={getOpen} onClose={toggleDrawer} PaperProps={{ style: { width: 250 } }}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>

        <Toolbar>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <img src={menu} alt="" height={50}/>
            </IconButton>
          </Hidden>

          <Typography variant="h6" boxShadow={4} padding={1}>Naresh Sahu</Typography>

          <Hidden smDown>
            <List component="nav" aria-labelledby="main navigation" style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' ,backfroundColor:"#fb7260" , color:"black" }}>
              {menuItems.map((item, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
