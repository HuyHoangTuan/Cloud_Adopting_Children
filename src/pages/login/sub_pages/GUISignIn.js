import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef } from "react"
import { ToastContainer, toast } from "react-toastify";
import { Logging } from "../../../utils/Logging";
import { UserMgr } from "../../../main/manager/UserMgr";
import { Navigate, useNavigate } from "react-router-dom";

const GUISignIn = () => {

    let emailRef = useRef();
    let passwordRef = useRef();

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = {
            email:  emailRef.current.value,
            password: passwordRef.current.value
        }

        Logging.info('Send Login: ',JSON.stringify(data));

        axios.post('/login',data).then((res) => {
            alert('Logged In!');
            UserMgr.updateUserModel(res.data, true);
            navigate('/');
        }).catch((err) => {
            alert('Error!');
            // UserMgr.updateUserModel({test: 'test1', test2: 'test3'}, true);
            // navigate('/');
        })
    }
    return (
        <React.Fragment>
            <Paper
                sx={{
                    padding: '24px',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h6"
                    color = "#00adb5"
                >
                    Sign In
                </Typography>
                <form
                    style={{
                        marginTop: '24px'
                    }}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        id = "email"
                        label = "Email"
                        variant="outlined"
                        margin = "normal"
                        fullWidth
                        inputRef={emailRef}
                    />
                    <TextField
                        id ="password"
                        label = "Password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="password"
                        inputRef={passwordRef}
                    />
                    <Button
                        variant="contained"
                        color="button"
                        fullWidth
                        sx={{
                            marginTop: '16px'
                        }}
                        type="submit"
                    >
                        Sign In
                    </Button>
                </form>
                <Typography
                    variant="body2"
                    sx={{
                        marginTop: '16px'
                    }}
                >
                    No account?{' '}
                    <Link href="/authentication" color="primary">
                        Register here
                    </Link>
                </Typography>
            </Paper>
            <ToastContainer/>
        </React.Fragment>
        
    )
}

export default GUISignIn;