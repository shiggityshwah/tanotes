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

        const Styled = createStyled({
            GridContainer: {
                padding: "1rem",
                backgroundColor: "#212121"
            },
            Typography: {
                fontFamily: "'Pacifico', cursive"
            },
            Paper: {
                margin: "30px",
                padding: "6px 20px 10px 20px",
                backgroundColor: "#212121"
            },
            Note: {
                margin: "3rem 0 0 0"
            },
            Button: {
                textTransform: "none",
                margin: "0px 50px",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
            },
            bootstrapInput: {
                borderRadius: 4,
                position: "relative",
                border: "1px solid #ced4da",
                fontSize: 16,
                width: "auto",
                padding: "10px 12px",
                zIndex: 2,
                backgroundColor: "#616161",
                transition: theme.transitions.create([
                    "border-color",
                    "box-shadow"
                ]),

                fontFamily: "'Roboto', cursive",
                "&:focus": {
                    borderRadius: 4,
                    borderColor: purple[500],
                    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
                }
            },
            titleBox: {
                padding: "3.3rem 0 0 0",
            },
            cssLabel: {
                fontFamily: "'Pacifico', cursive",
                fontSize: "5rem",
                "&$cssFocused": {
                    fontFamily: "'Pacifico', cursive",
                    color:  "#FE6B8B"
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
            notchedOutline: {}
        });

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
                        <Grid item xs={12}>
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
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                                label="Title:"
                                id="custom-css-outlined-input"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container alignItems="flex-start">
                                <Grid item>
                                    <Typography
                                        variant="h2"
                                        className={[
                                            classes.Typography,
                                            classes.Note
                                        ].join(" ")}
                                    >
                                        Note:
                                    </Typography>
                                </Grid>
                                <Grid item md={true} sm={12} xs={12}>
                                    <Paper className={classes.Paper}>
                                        <TextField
                                            fullWidth
                                            id="text"
                                            multiline
                                            rows="4"
                                            margin="normal"
                                            variant="outlined"
                                            value={currentNoteText}
                                            onChange={textChange}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.Button}
                            >
                                <Typography>SAVE NOTE</Typography>
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
