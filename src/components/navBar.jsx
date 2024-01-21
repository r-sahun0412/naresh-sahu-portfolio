import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";

import menu from "../images/menu.png";
import { Link } from "react-scroll";
const NavBar = () => {
  const [getOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!getOpen);
  };

  const menuItems = [
    { text: "Home", to: "hero" },
    { text: "About", to: "about" },
    { text: "Projects", to: "project" },
    { text: "Contact", to: "contact" },
  ];

  return (
    <Box style={{
      color: "black",
    }}>
      <AppBar
        position="fixed"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fb7260",
          color: "black",
        }}
      >
        <Hidden mdUp>
          <Drawer
            anchor="right"
            open={getOpen}
            onClose={toggleDrawer}
            PaperProps={{ style: { width: 250, backgroundColor: "grey" } }}
          >
            <List style={{
              color: "black"
            }}>
              {menuItems.map((item, index) => (
               <ListItem button key={index}>
               <Link to={item.to} 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500}
               onClick={toggleDrawer} 
               style={{textDecoration:"none" }}>
                 <ListItemText
                   primary={item.text}
                   primaryTypographyProps={{
                     style: { color: "black", fontSize: "40px", textAlign: "center", fontFamily: "normal" },
                   }}
                 />
               </Link>
             </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>

        <Toolbar>
          <Typography lgUp variant="h6" boxShadow={4}>
            Naresh Sahu
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <Hidden mdUp>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <img src={menu} alt="" height={50} />
              </IconButton>
            </Hidden>
          </div>

          <Hidden smDown mdDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
                backgroundColor: "#fb7260",
                color: "black",
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem button key={index}>
                <Link to={item.to} 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500} 
                onClick={toggleDrawer} 
                style={{textDecoration:"none" }}
                smooth>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: { color: "black", fontSize: "20px", textAlign: "center", fontFamily: "normal" },
                    }}
                  />
                </Link>
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
