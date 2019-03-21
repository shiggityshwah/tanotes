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
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Face, Fingerprint, PermIdentity, Error } from "@material-ui/icons";
import greatWave from '../greatwave.PNG'

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
        padding: "5rem",
        borderRadius: "10px",
        background: "rgba(21, 21, 21,.8)",
        zIndex: 5,
        width: "25rem",
        margin: "30px auto",

    }
});

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
        fetch("http://127.0.0.1:3000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                passConfirm: this.state.passConfirm
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadNewUser(user);
                    this.props.onRouteChange("home");
                }
            });
    };

    render() {
        const { passWarn } = this.state;
        return (
            <Styled>
                {({ classes }) => (
                    <Paper className={classes.Paper}>
                        <Grid
                            container
                            spacing={8}
                            alignItems="center"
                            className={classes.Gri}
                            style={{ textAlign: "center" }}
                        >
                            <Grid item xs={12}>
                            <img src={greatWave} alt="great wave"  style={{position:"relative", top:"-5rem", filter: "drop-shadow(0 0 .2rem #fff)" }}   />

                            </Grid>
                            <Grid
                                item
                                xs={12}
                                className={classes.Typography}
                                style={{ textAlign: "center" }}
                            >
                                <Typography variant="title">
                                    Register A New User
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={8}
                            alignItems="flex-end"
                            className={classes.Typography}
                            style={{ padding: "20px" }}
                        >
                            <Grid item>
                                <Face
                                    className={classes.Typography}
                                    style={{ color: "#FFF3E0" }}
                                />
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
                            className={classes.Typography}
                            style={{ padding: "20px" }}
                        >
                            <Grid item>
                                <Face
                                    className={classes.Typography}
                                    style={{ color: "#FFF3E0" }}
                                />
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
                            className={classes.Typography}
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
                            className={classes.Typography}
                            style={{ padding: "20px" }}
                        >
                            <Grid item>
                                <Fingerprint
                                    className={classes.Typography}
                                    style={{ color: "#FFF3E0" }}
                                />
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
                                    <Error
                                        className={classes.Typography}
                                        style={{ color: "#ff1744" }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Passwords do not match.
                                    </Typography>
                                </Grid>
                            </Grid>
                        ) : (
                            <div
                                className={classes.Typography}
                                style={{ padding: "10px" }}
                            />
                        )}
                        <Grid
                            container
                            spacing={8}
                            alignItems="flex-end"
                            className={classes.Typography}
                            style={{ padding: "0px 20px 20px 20px" }}
                        >
                            <Grid item>
                                <Fingerprint
                                    className={classes.Typography}
                                    style={{ color: "#FFF3E0" }}
                                />
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
                            className={classes.Typography}
                            style={{
                                padding: "5px 10px",
                                marginTop: "10px"
                            }}
                        >
                            <Button
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.Typography}
                                style={{ textTransform: "none" }}
                                onClick={this.onSubmitRegister}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Paper>
                )}
            </Styled>
        );
    }
}

Register.propTypes = {
    theme: PropTypes.object.isRequired
};

export default withTheme()(Register);
