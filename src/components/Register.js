import React, { Component } from "react";
import {
    Paper,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Typography
} from "@material-ui/core";
import { Face, Fingerprint, PermIdentity, Error } from "@material-ui/icons";

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passConfirm: "",
            passWarn: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitRegister = this.onSubmitRegister.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        if (name === "passConfirm" && value !== this.state.password) {
            this.setState({
                passWarn: true
            });
        } else if (name === "passConfirm" && value === this.state.password) {
            this.setState({
                passWarn: false
            });
        }
        this.setState({
            [name]: value
        });
    }

    onSubmitRegister = () => {
        fetch("localhost:3000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange("home");
                }
            });
    };

    render() {
        const { passWarn } = this.state;
        return (
            <Grid
                container
                justify="center"
                style={{ width: "600px", margin: "30px auto" }}
            >
                <Paper
                    style={{
                        width: "inherit",
                        backgroundColor: "#616161",
                        padding: "100px"
                    }}
                >
                    <Grid
                        container
                        spacing={8}
                        alignItems="center"
                        style={{ textAlign: "center" }}
                    >
                        <Grid item xs={12}>
                            <PermIdentity
                                style={{ fontSize: 200, color: "#fff" }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <Typography variant="title">
                                Register A New User
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        spacing={8}
                        alignItems="flex-end"
                        style={{ padding: "20px" }}
                    >
                        <Grid item>
                            <Face style={{ color: "#FFF3E0" }} />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                type="text"
                                onChange={this.handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={8}
                        alignItems="flex-end"
                        style={{ padding: "20px" }}
                    >
                        <Grid item>
                            <Face style={{ color: "#FFF3E0" }} />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                type="text"
                                onChange={this.handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={8}
                        alignItems="flex-end"
                        style={{ padding: "20px" }}
                    >
                        <Grid item>
                            <Face style={{ color: "#FFF3E0" }} />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="email"
                                label="Email Address"
                                type="email"
                                onChange={this.handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={8}
                        alignItems="flex-end"
                        style={{ padding: "20px" }}
                    >
                        <Grid item>
                            <Fingerprint style={{ color: "#FFF3E0" }} />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                onChange={this.handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    {passWarn ? (
                        <Grid
                            container
                            spacing={8}
                            alignItems="center"
                            justify="center"
                        >
                            <Grid item>
                                <Error style={{ color: "#ff1744" }} />
                            </Grid>
                            <Grid item>
                                <Typography>Passwords do not match.</Typography>
                            </Grid>
                        </Grid>
                    ) : (
                        <div style={{ padding: "10px" }} />
                    )}
                    <Grid
                        container
                        spacing={8}
                        alignItems="flex-end"
                        style={{ padding: "0px 20px 20px 20px" }}
                    >
                        <Grid item>
                            <Fingerprint style={{ color: "#FFF3E0" }} />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="passConfirm"
                                label="Confirm Password"
                                type="password"
                                onChange={this.handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    {/* <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                disableFocusRipple
                                disableRipple
                                style={{ textTransform: "none" }}
                                variant="text"
                                color="primary"
                            >
                                Forgot Password ?
                            </Button>
                        </Grid>
                    </Grid> */}
                    <Grid
                        container
                        justify="center"
                        style={{ padding: "5px 10px", marginTop: "10px" }}
                    >
                        <Button
                            fullWidth
                            variant="raised"
                            color="primary"
                            style={{ textTransform: "none" }}
                            onClick={this.onSubmitRegister}
                        >
                            Register
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default Register;
