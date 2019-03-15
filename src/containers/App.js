import React, { Component } from "react";
import NoteList from "../components/NoteList";
import NoteBox from "../components/NoteBox";
import Header from "../components/Header";
import Register from "../components/Register";
import Grid from "@material-ui/core/Grid";
import CheckBox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
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

const initialState = {
    isSaved: false,
    currentNote: 0,
    route: "home",
    isSignedIn: true,
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
    titles: [""],
    texts: [""]
};

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
        this.timeoutId = null;
    };

    loadNewUser = data => {
        this.setState({
            id: data.id,
            name: data.first_name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        });
    };

    onNoteSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        fetch(process.env.HOST + process.env.PORT + "/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: this.state.user.id,
                title: this.state.titles[this.state.currentNote],
                texts: this.state.texts[this.state.currentNote]
            })
        })
            .then(response => response.json())
            .then(count => {
                this.setState(
                    Object.assign(this.state.user, {
                        entries: count
                    })
                );
            })
            .catch(err => console.log(err));
    };

    onTitleChange = event => {
        const newTitles = this.state.titles.slice();
        newTitles[this.state.currentNote] = event.target.value;
        this.setState({
            titles: newTitles
        });
        this.saveToDatabase();
    };

    onTextChange = event => {
        const newTexts = this.state.texts.slice();
        newTexts[this.state.currentNote] = event.target.value;
        this.setState({ 
            texts: newTexts 
        });
        this.saveToDatabase();
    };

    onCreateNote = () => {
        const newNote = this.state.titles.length;
        const newTitles = [...this.state.titles, ""];
        const newTexts = [...this.state.texts, ""];
        this.setState({ titles: newTitles });
        this.setState({ texts: newTexts });
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
    };

    onRouteChange = route => {
        if (route === "signout") {
            this.setState(initialState);
        } else if (route === "home") {
            this.setState({ isSignedIn: true });
        }
        this.setState({ route: route });
    };

    render() {
        const { route } = this.state;
        return (
            <div className="App">
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
                            pointerEvents: "none"
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
                            pointerEvents: "none"
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
                        {route === "noteMaker" ? (
                            <React.Fragment>
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
                                            this.state.titles[
                                                this.state.currentNote
                                            ]
                                        }
                                        currentNoteText={
                                            this.state.texts[
                                                this.state.currentNote
                                            ]
                                        }
                                        titleChange={this.onTitleChange}
                                        textChange={this.onTextChange}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <NoteList
                                        noteTitles={
                                            this.state.titles
                                        }
                                        createNote={this.onCreateNote}
                                        clickTitle={this.onClickTitle}
                                    />
                                </Grid>
                            </React.Fragment>
                        ) : route === "signin" ? (
                            <React.Fragment>
                                <Grid item xs={12}>
                                    <Register
                                        loadNewUser={this.loadNewUser}
                                        onRouteChange={this.onRouteChange}
                                    />
                                </Grid>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {" "}
                                <Grid item xs={12}>
                                    <Register
                                        loadNewUser={this.loadNewUser}
                                        onRouteChange={this.onRouteChange}
                                    />
                                </Grid>
                            </React.Fragment>
                        )}
                    </Grid>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
