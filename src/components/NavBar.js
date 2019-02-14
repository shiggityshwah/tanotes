import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Description } from "@material-ui/icons";
import "../containers/App.css";
import "typeface-pacifico";

const NavBar = () => {
    return (
        <MuiThemeProvider>
            <AppBar position="static" style={{ backgroundColor: "#9C27B0" }}>
                <Toolbar style={{ padding: "30px" }}>
                    <Description style={{ fontSize: 100, color: "#fff" }} />
                    <Typography
                        variant="h2"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        taNotes
                    </Typography>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

export default NavBar;
