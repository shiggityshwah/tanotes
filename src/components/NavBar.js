import React, { Component } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Grid,
    Collapse,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Paper,
    Popper
} from "@material-ui/core";
import PropTypes from "prop-types";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import { Description, MenuOutlined } from "@material-ui/icons";
import "../containers/App.css";
import "typeface-pacifico";

function createStyled(styles, options) {
    function Styled(props) {
        const { children, ...other } = props;
        return children(other);
    }
    Styled.propTypes = {
        children: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
    };
    return withStyles(styles, options)(Styled);
}


const Styled = createStyled({
    AppBar: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
        fontSize: 70,
        fontFamily: "'Pacifico', cursive"
    },
    Popper: {
        zIndex: 5,
    },
    Paper: {
        width: "15rem",
        backgroundColor: "#212121",
    },
});

class NavBar extends Component {
    state = {
        open: false,
        anchorEl: null,
    };

    handleToggle = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,
        }));
    };

    handleClose = event => {
        this.setState({ open: false });
    };

    render() {
        const { open, anchorEl } = this.state;
        return (
            <MuiThemeProvider>
                <Styled>{({ classes }) => (
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
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <IconButton className={classes.IconButton} aria-label="Open drawer" onClick={this.handleToggle}>
                                            <MenuOutlined className={classes.Icon} />
                                        </IconButton>
                                        <Popper open={open} anchorEl={anchorEl} placement="bottom-end" className={classes.Popper} transition disablePortal >
                                            {({ TransitionProps, placement }) => (
                                                <Collapse {...TransitionProps} style={{transformOrigin: "right bottom" }} timeout={350}
                                                >
                                                    <Paper className={classes.Paper} >
                                                        <MenuList>
                                                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                                        </MenuList>
                                                    </Paper>
                                                </Collapse>
                                            )}
                                        </Popper>
                                    </ClickAwayListener>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                )}</Styled>

            </MuiThemeProvider>
        );
    }
}
export default NavBar;