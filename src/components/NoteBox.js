import React from "react";
import { Paper, Grid, TextField, Button, Typography } from "@material-ui/core";
import "../containers/App.css";
import "typeface-pacifico";

const NoteBox = ({
    currentNoteTitle,
    currentNoteText,
    titleChange,
    textChange
}) => {
    return (
        <Grid
            container
            justify="flex-end"
            alignItems="center"
            style={{ padding: "50px" }}
        >
            <Grid item xs={12}>
                <Grid container alignItems="center">
                    <Grid item>
                        <Typography
                            variant="h2"
                            style={{ fontFamily: "'Pacifico', cursive" }}
                        >
                            Title:
                        </Typography>
                    </Grid>
                    <Grid item md={true} sm={12} xs={12}>
                        <Paper
                            style={{
                                margin: "30px",
                                padding: "6px 20px 10px 20px",
                                backgroundColor: "#212121"
                            }}
                        >
                            <TextField
                                fullWidth
                                id="title"
                                value={currentNoteTitle}
                                onChange={titleChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container alignItems="flexStart">
                    <Grid item>
                        <Typography
                            variant="h2"
                            style={{ fontFamily: "'Pacifico', cursive" }}
                        >
                            Note:
                        </Typography>
                    </Grid>
                    <Grid item md={true} sm={12} xs={12}>
                        <Paper
                            style={{
                                margin: "30px",
                                padding: "6px 20px 10px 20px",
                                backgroundColor: "#212121"
                            }}
                        >
                            <TextField
                                fullWidth
                                id="text"
                                multiline
                                rows="4"
                                defaultValue="Default Value"
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
                    variant="raised"
                    color="primary"
                    style={{ textTransform: "none", margin: "0px 50px" }}
                >
                    SAVE NOTE
                </Button>
            </Grid>
        </Grid>
    );
};
export default NoteBox;
