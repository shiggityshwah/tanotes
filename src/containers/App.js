import React, { Component } from "react";
import "./App.css";
import NoteList from "../components/NoteList";
import NoteBox from "../components/NoteBox";
import Header from "../components/Header";
import Register from "../components/Register";
import Grid from "@material-ui/core/Grid";
import CheckBox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Background from "../images/headerbg.jpg";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: blueGrey,
        secondary: {
            main: "#f44336"
        }
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentNoteTitle: "my note",
            currentNoteText: "hi, this is my note",
            isSaved: false,
            currentNote: 0,
            noteTitles: ["test1", "test2"],
            noteTexts: ["test1", "test2"],
            signedIn: true
        };

        this.timeoutId = null;
    }
    /*
  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(db => {
        if (db.noteTexts) {
            console.log(db.noteTexts)
        }
      })
      .catch('');
  }
 */
    onTitleChange = event => {
        const newTitles = this.state.noteTitles.slice();
        newTitles[this.state.currentNote] = event.target.value;
        this.setState({ noteTitles: newTitles });
        this.saveToDatabase();
    };

    onTextChange = event => {
        const newTexts = this.state.noteTexts.slice();
        newTexts[this.state.currentNote] = event.target.value;
        this.setState({ noteTexts: newTexts });
        this.saveToDatabase();
    };

    onCreateNote = () => {
        const newNote = this.state.noteTitles.length;
        const newTitles = [...this.state.noteTitles, ""];
        const newTexts = [...this.state.noteTexts, ""];
        this.setState({ noteTitles: newTitles });
        this.setState({ noteTexts: newTexts });
        this.setState({ currentNote: newNote });
    };

    onClickTitle = event => {
        const title = event.currentTarget.id;
        console.log(event.currentTarget);
        this.setState({ currentNote: title });
    };

    saveToDatabase() {
        this.setState({ isSaved: false });
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
            this.setState({ isSaved: true });
        }, 3000);
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div
                    style={{
                        position: "absolute",
                        backgroundImage: `url(${Background})`,
                        backgroundPosition: "50%",
                        backgroundSize: "cover",
                        zIndex: 0,
                        display: "flex",
                        width: "100%",
                        height: "250px",
                        pointerEvents:"none"
                    }}
                />
                <div
                    style={{
                        background:
                            "linear-gradient(180deg,rgba(11, 11, 19,.8),#0b0b13)",
                        position: "absolute",
                        width: "100%",
                        zIndex: 0,
                        height: "250px",
                        pointerEvents:"none"
                    }}
                />

                <Grid
                    container
                    spacing={0}
                    position="relative"
                    alignItems="stretch"
                    style={{
                        backgroundColor: "#0b0b13"
                    }}
                >
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.signedIn === false ? (
                            <Register />
                        ) : (
                            <Grid container justify="center" spacing={0}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={9}
                                    xl={8}
                                >
                                    <NoteBox
                                        style={{ zIndex: 3 }}
                                        currentNoteTitle={
                                            this.state.noteTitles[
                                                this.state.currentNote
                                            ]
                                        }
                                        currentNoteText={
                                            this.state.noteTexts[
                                                this.state.currentNote
                                            ]
                                        }
                                        titleChange={this.onTitleChange}
                                        textChange={this.onTextChange}
                                    />
                                </Grid>
                                <Grid  item xs={3}>
                                    <NoteList
                                        noteTitles={this.state.noteTitles}
                                        createNote={this.onCreateNote}
                                        clickTitle={this.onClickTitle}
                                    />
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid style={{ width: "100%" }} container spacing={16}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item>Saved:</Grid>
                                    <Grid item>
                                        {this.state.isSaved ? (
                                            <CheckBox
                                                style={{ fontSize: 40 }}
                                            />
                                        ) : (
                                            <CheckBoxOutlineBlank
                                                style={{ fontSize: 40 }}
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                Current Note:{" "}
                                {this.state.noteTitles[this.state.currentNote]}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
