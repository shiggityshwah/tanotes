import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { Face, Fingerprint, PermIdentity } from '@material-ui/icons'

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { firstName, lastName, email, password } = this.state;
        return (
            <Grid container justify="center" style={{ width:'600px', margin: '30px auto' }}>
                <Paper style={{ width:'inherit', backgroundColor:'#616161', padding: '100px'}}>
                    <Grid container spacing={8} alignItems="center" style={{ textAlign:"center" }}>
                        <Grid item  xs={12}    >
                            <PermIdentity style={{ fontSize: 200, color: "#fff" }} />
                        </Grid>
                        <Grid item  xs={12} style={{ textAlign:"center" }}   >
                            <Typography variant="title">
                                Register A New User
                            </Typography>
                        </Grid>
                    </Grid>
                   
                    <Grid container spacing={8} alignItems="flex-end" style={{ padding: '20px' }}>
                        <Grid item>
                            <Face style={{ color: "#FFF3E0" }}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                id="firstName" 
                                label="First Name" 
                                type="text"
                                fullWidth
                                autoFocus
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end" style={{ padding: '20px' }}>
                        <Grid item>
                            <Face style={{ color: "#FFF3E0" }}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                id="lastName" 
                                label="Last Name" 
                                type="text"
                                fullWidth
                                autoFocus
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end" style={{ padding: '20px' }}>
                        <Grid item>
                            <Face style={{ color: "#FFF3E0" }}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                id="email" 
                                label="Email Address" 
                                type="email"
                                fullWidth
                                autoFocus
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end" style={{ padding: '20px' }}>
                        <Grid item>
                            <Fingerprint style={{ color: "#FFF3E0" }}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end" style={{ padding: '20px' }}>
                        <Grid item>
                            <Fingerprint style={{ color: "#FFF3E0" }}/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                id="passConfirm"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox color="primary" />
                            } label="Remember me" />
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
                    </Grid>
                    <Grid container justify="center" style={{ padding: '5px 10px', marginTop: '10px' }} >
                        <Button 
                            fullWidth
                            variant="raised" 
                            color="primary" 
                            style={{ textTransform: "none"}}
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