import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Grid
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { Description, MenuOutlined } from "@material-ui/icons";
import "../containers/App.css";
import "typeface-pacifico";

const useStyles = makeStyles({
    AppBar: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    },
    Grid: {
        padding: "1rem"
    },
    IconButton: {
        justify: "flex-end"
    },
    Icon: {
        fontSize: 100,
        color: "#fff",
    },
    IconButton: {
        fontSize: 100,
        color: "#fff",
        margin: "0 0 0 auto",
    },
    Typography: {
        fontSize: 50,
        fontFamily: "'Pacifico', cursive"
    }
});

export default function NavBar() {
    const classes = useStyles();
    return (
        <MuiThemeProvider>
            <AppBar className={classes.AppBar} position="static">
                <Toolbar>
                    <Grid
                        className={classes.Grid}
                        container
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs="auto">
                            <Description className={classes.Icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography className={classes.Typography}>
                                taNotes
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={4} sm={2} xs={0}></Grid>
                        <Grid item xs="auto">
                            <IconButton className={classes.IconButton} aria-label="Open drawer">
                                <MenuOutlined  className={classes.Icon} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
}
