import React, { Component } from "react";
import "./App.css";
import NoteList from "../components/NoteList";
import NoteBox from "../components/NoteBox";
import NavBar from "../components/NavBar";
import Register from "../components/Register";
import Grid from "@material-ui/core/Grid";
import CheckBox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: yellow,
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
            signedIn: true,
        };

        this.timeoutId = null;
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onCreateNote = this.onCreateNote.bind(this);
        this.onClickTitle = this.onClickTitle.bind(this);
        this.saveToDatabase = this.saveToDatabase.bind(this);
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
        const title = event.target.id;
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
                <Grid
                    container
                    spacing={12}
                    alignItems="stretch"
                    style={{ backgroundColor: "#424242" }}
                >
                    <Grid item xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.signedIn === false ? (
                            <Register />
                        ) : (
                                <Grid container alignItems="stretch" spacing={12}>
                                    <Grid
                                        item
                                        alignItems="stretch"
                                        xs={0}
                                        sm={0}
                                        md={0}
                                        lg={1}
                                        xl={2}
                                    >
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={10}
                                        xl={8}
                                    >
                                        <NoteBox
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
                                    <Grid
                                        item
                                        alignItems="stretch"
                                        xs={0}
                                        sm={0}
                                        md={0}
                                        lg={1}
                                        xl={2}
                                    >
                                    </Grid>
                                </Grid>
                            )}
                    </Grid>
                    <Grid item xs={12}>
                        <div className="footer">
                            <Grid container spacing={16}>
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
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    Current Note:{" "}
                                    {
                                        this.state.noteTitles[
                                        this.state.currentNote
                                        ]
                                    }
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
