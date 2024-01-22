import { Grid, Typography } from "@mui/material"
import ContactIcons from "./contactIcons";

const Footer = () => {
    return(
        <Grid container spacing={2} mt={4}  style={{  backgroundColor:"#173673", color:"black", maxHeight:'200px'}}>
            <Grid items xs={12} p={2}  justifyContent="center" alignItems="center" textAlign="center"
            >
                <Typography variant='body1' color="grey">Made with ❤️ by
Naresh Sahu</Typography>

            </Grid>
            <Grid items spacing={2} xs={12} justifyContent="space-around"
            alignItems="center"
            textAlign="center">
            <ContactIcons />
            </Grid>
        </Grid>
    )
}

export default Footer;