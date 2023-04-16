import { Button, CircularProgress, FormControl, Grid, InputLabel, Link, Menu, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logging } from "../../../utils/Logging";

const GUIParentSignUp = () =>{
    let nameRef = useRef();
    let [gender, setGender] = useState(0);
    let phoneNumberRef=  useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let retypePasswordRef = useRef();
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleClick = (event) =>{
        event.preventDefault();
        let data = {
            parent_name: nameRef.current.value,
            gender: gender,
            phone_number: phoneNumberRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,

        }
        Logging.info('Send Parent Sign Up:', JSON.stringify(data));
        setLoading(true);
        axios.post('https://kjfets4supnvvnyuppjxyvvld40ggfag.lambda-url.us-east-1.on.aws', data).then((response) => {
            setLoading(false);
            navigate('/authentication/login');
        }).catch((error) => {
            setLoading(false);
            navigate('/authentication/register_parents');
        });
    }

    return(
        <React.Fragment>
            {loading ? 
                <Paper
                elevation={0} 
                sx={{ 
                    padding: '16px', 
                    width: '400px', 
                    margin: '0 auto' 
                }}
                >
                    <Grid
                            container
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{height:'200px'}}
                        >
                            <CircularProgress
                                color="button" 
                            />
                        </Grid>
                </Paper>
            :
                        <Paper
                        elevation={0} 
                        sx={{ 
                            padding: '16px', 
                            width: '400px', 
                            margin: '0 auto' 
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Parent Register
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        variant="outlined"
                                        inputRef={nameRef}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="gender">Gender</InputLabel>
                                        <Select label="Gender" id="gender" name="gender" value ={gender} onChange={(event) => {
                                            setGender(event.target.value);
                                        }}>
                                            <MenuItem value="0">Male</MenuItem>
                                            <MenuItem value="1">Female</MenuItem>
                                            <MenuItem value="2">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        variant="outlined"
                                        inputRef={phoneNumberRef}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        variant="outlined"
                                        inputRef={emailRef}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        type="password"
                                        variant="outlined"
                                        inputRef={passwordRef}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Retype Password"
                                        name="retypePassword"
                                        type="password"
                                        variant="outlined"
                                        inputRef={retypePasswordRef}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        color="button"
                                        variant="contained"
                                        type="submit"
                                        onClick={handleClick}
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        <Typography variant="body2" align="center">
                            Already have an account?{' '}
                            <Link href="/authentication/login" color="primary">
                                Sign in
                            </Link>
                        </Typography>
                    </Paper>}
        </React.Fragment>
        
    )
}

export default GUIParentSignUp;