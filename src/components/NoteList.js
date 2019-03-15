import React from "react";
import {
    ListItem,
    Grid,
    List,
    Button,
    Paper,
    Typography
} from "@material-ui/core";
import "../containers/App.css";
import "typeface-pacifico";
import "typeface-ropa-sans";

const NoteList = ({ noteTitles, createNote, clickTitle }) => {
    const noteComponent = noteTitles.map((user, i) => {
        return (
            <Button
                fullWidth
                id={i}
                variant="contained"
                color="primary"
                onClick={clickTitle}
                style={{
                    borderRadius: "1.25rem",
                    margin: ".5rem 0",
                    minHeight: "2.5rem",
                    padding: ".5rem",
                    background: "rgba(40, 40, 40, 0.7)"
                }}
            >
                <Typography
                    style={{
                        fontSize: "1rem",
                        fontFamily: "'Ropa Sans', sans-serif"
                    }}
                >
                    {noteTitles[i]}
                </Typography>
            </Button>
        );
    });
    return (
        <Paper
            style={{
                position: "relative",
                margin: "30px",
                borderRadius: "10px",
                background: "rgba(20,20,20,0.5)",
                zIndex: 3
            }}
        >
            <Grid alignItems="stretch" justify="center" container>
                <Grid
                    item
                    xs={10}
                    style={{
                        margin: ".5rem",
                        padding: "1rem 0 0 0",
                        position: "relative",
                        textAlign: "center",
                        zIndex: 6
                    }}
                >
                    {noteComponent}

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{
                            margin: "1rem 0",
                            minHeight: "1.5rem",
                            padding: ".5rem",
                            background: "rgba(40, 40, 40,.6)",
                            border: "solid 2px #16B2AA",
                            borderRadius: 100
                        }}
                        onClick={createNote}
                    >
                        + create new note
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};
export default NoteList;
