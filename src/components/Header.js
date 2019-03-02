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
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
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
                                <Grid item lg={6} md={4} sm={2} xs={false} />
                                <Grid item xs="auto">
                                    <Menu/>
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
