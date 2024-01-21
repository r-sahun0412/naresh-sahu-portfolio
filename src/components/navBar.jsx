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
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [getOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!getOpen);
  };

  const openResumeInNewWindow = () => {
    
    window.open("https://drive.google.com/file/d/1K8rWPkLWTJTzkggSJ-XL5bBTAip-FPwB/view");
  };

  const menuItems = [
    { text: "Home", to: "hero" },
    { text: "About", to: "about" },
    { text: "Projects", to: "project" },
    { text: "Contact", to: "contact" },
    { text: "Resume", onClick: openResumeInNewWindow },  
  ];

  return (
    <Box style={{ color: "black" }}>
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
            <List style={{ color: "black" }}>
              {menuItems.map((item, index) => (
                <ListItem button key={index} onClick={item.onClick || toggleDrawer}>
                  {/* Use item.onClick or toggleDrawer based on whether an onClick handler is provided */}
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: { color: "black", fontSize: "40px", textAlign: "center", fontFamily: "normal" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>

        <Toolbar>
          <Link to="hero" lgUp variant="h6" boxShadow={4}>
            <img width={250} src={logo} alt="" />
          </Link>
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
                <ListItem button key={index} onClick={item.onClick}>
                 
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: { color: "black", fontSize: "20px", textAlign: "center", fontFamily: "normal" },
                    }}
                  />
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
