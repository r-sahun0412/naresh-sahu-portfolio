import { Box} from "@mui/material";


const ContactIcons = () => {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "20px",
      }}
    >
      <a href="mailto:sahun0499@gmail.com" target="_blank" rel="noreferrer">
        <i
          className="bi bi-envelope"
          style={{
            fontSize: "50px",
            width: "50px",
            height: "50px",

            color: "#c71610",
          }}
        ></i>
      </a>

      <a href="https://github.com/sahun0412" target="_blank" rel="noreferrer">
        <i
          className="bi bi-github"
          style={{ fontSize: "50px", color: "black", aspectRatio: "3/2" }}
        ></i>
      </a>

      <a
        href="http://www.linkedin.com/in/naresh-sahu- 82443b1b2"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="bi bi-linkedin"
          style={{ fontSize: "50px", color: "#0077b5", aspectRatio: "3/2" }}
        ></i>
      </a>

      
    </Box>
  );
};

export default ContactIcons;
