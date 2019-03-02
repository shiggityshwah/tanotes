import React, { Component } from "react";
import {
    Typography,
    IconButton,
    Collapse,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Paper,
    Popper,
    Divider
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { MenuOutlined, ArrowDropDown, FiberNew } from "@material-ui/icons";
import endlessClouds from "../endlessClouds.svg";
import polkaDots from "../polkaDots.svg";
import pencil from "../pencil.svg";
import curtain from "../curtain.svg";
import bankNote from "../bankNote.svg";
import greatwave from "../greatwave.PNG";

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
    IconButton: {
        height: "6rem",
        width: "6rem",
        //backgroundColor: "#FF8E53",
        backgroundImage: `url(${endlessClouds})`,
        "&:hover": {
        }
    },
    MenuIcon: {
        position:"relative",
        bottom: "1rem",
        zIndex: 2,
        fontSize: 100,
        filter: "drop-shadow(.1rem .1rem .01rem #bf360c)"
    },
    Popper: {
        zIndex: 5
    },
    Paper: {
        zIndex: 6,
        width: "15rem",
        backgroundColor: "#212121"
    },
    Divider: {
        height: ".1rem"
    }
});

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            subMenuOpen: false,
            anchorEl: null,
            subAnchorEl: null
        };
    }

    handleMenuToggle = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            menuOpen: !state.menuOpen
        }));
    };

    handleSubMenuToggle = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            subAnchorEl: currentTarget,
            subMenuOpen: !state.subMenuOpen
        }));
    };

    handleMenuClose = event => {
        const { currentTarget } = event;
        console.log(currentTarget);
        this.setState({ menuOpen: false, subMenuOpen: false });
    };

    render() {
        const { subMenuOpen, menuOpen, anchorEl, subAnchorEl } = this.state;
        return (
            <Styled>
                {({ classes }) => (
                    <div>
                        
                        <IconButton
                        className={classes.IconButton}
                            value="open"
                            aria-label="Open drawer"
                            onClick={this.handleMenuToggle}
                        >
                           <img src={pencil} className={classes.MenuIcon}
                            alt="menuIcon" />
                        </IconButton>

                        <Popper
                            open={menuOpen}
                            anchorEl={anchorEl}
                            placement="bottom-end"
                            className={classes.Popper}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <ClickAwayListener
                                    onClickAway={this.handleMenuClose}
                                >
                                    <Collapse
                                        {...TransitionProps}
                                        timeout={250}
                                    >
                                        <Paper className={classes.Paper}>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={
                                                        this.handleMenuClose
                                                    }
                                                >
                                                    New Note
                                                </MenuItem>
                                                <Divider
                                                    className={classes.Divider}
                                                />
                                                <MenuItem
                                                    onClick={
                                                        this.handleMenuClose
                                                    }
                                                >
                                                    Open Note
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={
                                                        this.handleSubMenuToggle
                                                    }
                                                >
                                                    Recent Notes
                                                </MenuItem>
                                                <Popper
                                                    open={subMenuOpen}
                                                    anchorEl={subAnchorEl}
                                                    placement="left-start"
                                                    className={classes.Popper}
                                                    transition
                                                    disablePortal
                                                >
                                                    {({
                                                        TransitionProps,
                                                        placement
                                                    }) => (
                                                        <Paper
                                                            square
                                                            className={
                                                                classes.Paper
                                                            }
                                                        >
                                                            <MenuItem
                                                                onClick={
                                                                    this
                                                                        .handleMenuClose
                                                                }
                                                            >
                                                                recent note 1
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    this
                                                                        .handleMenuClose
                                                                }
                                                            >
                                                                recent note 2
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    this
                                                                        .handleMenuClose
                                                                }
                                                            >
                                                                recent note 3
                                                            </MenuItem>
                                                        </Paper>
                                                    )}
                                                </Popper>
                                                <Divider
                                                    className={classes.Divider}
                                                />
                                                <MenuItem
                                                    onClick={
                                                        this.handleMenuClose
                                                    }
                                                >
                                                    My Account
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={
                                                        this.handleMenuClose
                                                    }
                                                >
                                                    Logout
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Collapse>
                                </ClickAwayListener>
                            )}
                        </Popper>
                    </div>
                )}
            </Styled>
        );
    }
}

export default Menu;
