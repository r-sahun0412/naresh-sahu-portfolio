import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Button,
} from "@mui/material";

import logo from "../images/logo.png";
import  {useState} from "react";

import menu from "../images/menu.png";

import { Link } from "react-scroll";



const NavBar = () => {
  
  
  const [getOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!getOpen);
  };

  // --------------------------------->Menu Items<----------------------------------------------
  
  
  const menuItems = [
    { text: "Home", to: "hero" },
    { text: "About", to: "about" },
    { text: "Projects", to: "project" },
    { text: "Contact", to: "contact" },
    
  ];

  // ------------------------>Resume Link TO Open In New Window<---------------------------------
  
  
  const openResumeInNewTab = () => {
    window.open("https://drive.google.com/file/d/1K8rWPkLWTJTzkggSJ-XL5bBTAip-FPwB/view", "_blank");
  };

  return (

    // ---------------------------------->Main Container---------------------------------

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
                     style: { color: "#173673", fontSize: "40px", textAlign: "center", fontFamily: "normal" },
                   }}
                 />
               </Link>
             
             </ListItem>
              ))}
            </List>
            <Box mx={2}>
      <Button variant="contained" color="primary" sx={{fontSize:"30px", fontFamily:"normal"}} onClick={openResumeInNewTab}>
        Resume
      </Button>
    </Box>
          </Drawer>
        </Hidden>

        <Toolbar>
        <Link to="hero" lgUp variant="h6" boxShadow={4}>
            <img width={250} src={logo} alt="" />
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <Hidden mdUp>
              <IconButton edge="end" color="#173673" onClick={toggleDrawer}>
                <img src={menu} alt="menu-button" height={50} />
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
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: { color: "#173673", fontSize: "20px",fontWeight:"bold", textAlign: "center", fontFamily: "normal" },
                    }}
                  />
                </Link>
               
              </ListItem>
              ))}
               
            </List>
            <Box justifyContent="center" alignContent="center" textAlign="center">
      <Button variant="contained" color="primary" onClick={openResumeInNewTab}>
        Resume
      </Button>
    </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;