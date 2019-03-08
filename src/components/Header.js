import React, { Component } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Description } from "@material-ui/icons";
import "../containers/App.css";
import Menu from "./Menu";
import "typeface-pacifico";

function createStyled(styles, options) {
    function Styled(props) {
        const { children, ...other } = props;
        return children(other);
    }
    Styled.propTypes = {
        children: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired
    };
    return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
    AppBar: {
        background: "rgba(0,0,0,0)"
    },
    Grid: {
        padding: "1rem"
    },
    Icon: {
        fontSize: 100,
        color: "#fff",
        filter: "drop-shadow(.1rem .1rem .01rem #bf360c)"
    },
    Typography: {
        fontSize: 70,
        fontFamily: "'Pacifico', cursive",
        filter: "drop-shadow(.1rem .1rem .01rem #bf360c)"
    },
});

class Header extends Component {

    render() {
       
        return (
            <Styled>
                {({ classes }) => (
                    <AppBar color="default" elevation={4} className={classes.AppBar} position="sticky">
                        <Toolbar>
                            <Grid
                                className={classes.Grid}
                                container
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs="auto">
                                    <Menu/>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography className={classes.Typography}>
                                        taNotes
                                    </Typography>
                                </Grid>
                                <Grid item lg={6} md={4} sm={2} xs={false}> </Grid>
                                <Grid item xs="auto">
                                    
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                )}
            </Styled>
        );
    }
}
export default Header;
