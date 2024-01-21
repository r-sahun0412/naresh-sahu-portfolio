import React, { useRef } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinkedIn, LocationOn, Mail } from "@mui/icons-material";
import "../styles/skills.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <Grid container 
    justifyContent="center" 
    alignItems="center" 
    pt={15} >
      <Typography
        variant="h3"
        id="contact"
        sx={{
          fontFamily: "FingerPaint",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        Contact Me
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign=""
        mt={8}
      >
        <Grid items 
        xs={10} 
        md={5} 
        lg={6} 
        p={2}>
          <Typography variant="h3" 
          fontFamily="italic">
            Let's connect
          </Typography>
          <Typography variant="body1" 
          fontFamily="normal">
            Have cool idea for new project? Want to build a cool website? Don't
            hesitate to contact me.
          </Typography>

          <Grid item 
          xs={12} 
          md={6} 
          lg={6} 
          className="grid-item">
            <LocationOn className="contact-icon" 
            color="red" />
            <span>Chandrapur, Maharashtra, India</span>
          </Grid>
          <Grid item 
          xs={12} 
          md={6} 
          lg={6} 
          className="grid-item">
            <LinkedIn className="contact-icon" />
            <span>
              <a href="https://www.linkedin.com/in/naresh-sahu-82443b1b2/" 
              style={{
                textDecoration:"none",
                color:"grey"
                }}>
                Naresh Sahu
              </a>
            </span>
          </Grid>
          <Grid item 
          xs={12} 
          md={6} 
          lg={6} 
          className="grid-item">
            <Mail className="contact-icon" />
            <span>
              <a href="mailto:sahun0499@gmail.com" 
              style={{
                textDecoration:"none",
                color:"grey"
                }}>sahun@0412</a>
            </span>
          </Grid>
        </Grid>

        <Grid items xs={10} md={5} lg={5}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Name"
              type="text"
              name="user_name"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              name="user_email"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Subject"
              type="text"
              name="subject"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Send
            </Button>
          </form>
          <ToastContainer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
