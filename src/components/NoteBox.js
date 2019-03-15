import React, { Component } from "react";
import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
    InputBase,
    InputLabel
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import "../containers/App.css";
import "typeface-pacifico";
import "typeface-roboto";
import "typeface-ropa-sans";
import endlessClouds from "../endlessClouds.svg";

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
            Paper: {
                position: "relative",
                margin: "30px",
                padding: "6px 20px 10px 20px",
                borderRadius: "10px",
                background: "rgba(21, 21, 21,.6)",
                zIndex: 5
            },
            Note: {
                margin: "3rem 0 0 0"
            },
            Button: {
                textTransform: "none",
                margin: "50px",
                background: "rgba(40, 40, 40,.6)",
                border: "solid 2px #16B2AA",
                borderRadius: 100
                
            },
            titleBox: {
                padding: "3.3rem 0 0 0"
            },
            cssLabel: {
                fontFamily: "'Ropa Sans', sans-serif",
                fontStyle: "italic",
                color: "#fff",
                fontSize: "5rem",
                "&$cssFocused": {
                    fontFamily: "'Ropa Sans', sans-serif",

                    color: "#FE6B8B"
                }
            },
            cssFocused: {},
            cssUnderline: {
                "&:after": {
                    borderBottomColor: purple[900]
                }
            },
            cssOutlinedInput: {
                "&$cssFocused $notchedOutline": {
                    borderColor: purple[500],
                    fontFamily: "'Roboto', cursive",
                    "&:after": {
                        borderBottomColor: "#80bdff",
                        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
                    }
                }
            },
            Typography: {
                fontFamily: "'Ropa Sans', sans-serif",
                fontSize: "2rem",
                filter: "drop-shadow(.1rem .1rem .01rem #bf360c)"
            }
        });
class NoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            currentNoteTitle,
            currentNoteText,
            titleChange,
            textChange,
            theme
        } = this.props;

        

        return (
            <Styled>
                {({ classes }) => (
                    
                        <Grid
                            spacing={0}
                            container
                            justify="flex-end"
                            alignItems="center"
                            className={classes.GridContainer}
                        >
                            <Grid item xs={12} className={classes.GridItem}><Paper className={classes.Paper}>
                                <TextField
                                    fullWidth
                                    className={classes.titleBox}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused
                                        }
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                        }
                                    }}
                                    label="Title:"
                                    id="custom-css-outlined-input"
                                    onChange={titleChange}
                                    value={currentNoteTitle}
                                />
                            
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={10}
                                            className={classes.titleBox}
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused
                                                }
                                            }}
                                            InputProps={{
                                                classes: {
                                                    root: classes.cssOutlinedInput,
                                                    focused: classes.cssFocused,
                                                }
                                            }}
                                            label="Note:"
                                            id="custom-css-outlined-input"
                                            onChange={textChange}
                                            value={currentNoteText}
                                        />
                                   </Paper>

                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.Button}
                                >
                                    <Typography className={classes.Typography} >SAVE NOTE</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    
                )}
            </Styled>
        );
    }
}

NoteBox.propTypes = {
    theme: PropTypes.object.isRequired
};

export default withTheme()(NoteBox);
