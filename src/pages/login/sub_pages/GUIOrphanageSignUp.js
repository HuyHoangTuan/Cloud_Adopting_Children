import { Button, CircularProgress, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, {useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logging } from "../../../utils/Logging";

const GUIOrphanageSignUp = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [image, setImage] = useState(null);
    let [loading, setLoading] = useState(false);
    let [sendData, setSendData] = useState({});

    let orphanageNameRef = useRef();
    let ownerNameRef = useRef();
    let emailRef = useRef();
    let passwordRef= useRef();
    let retypePasswordRef = useRef();
    let orphanageAddressRef = useRef();

    let navigate = useNavigate();

    const handleNext = (event) => {
        event.preventDefault();
        let data = Object.assign({}, sendData);
        switch(pageNumber)
        {
            case 1:
                Object.assign(data, {
                    orphanage_name: orphanageNameRef.current.value,
                    owner_name: ownerNameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                });
                break;
            case 2:
                Object.assign(data, {
                    address: orphanageAddressRef.current.value
                });
                break;
        }
        setSendData(data);
        setPageNumber(pageNumber + 1);
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleNext(event);
        let data = Object.assign({}, sendData);
        setLoading(true);

        Logging.info('Send Orphanage Sign Up: ',JSON.stringify(data));
        axios.post('https://ypkmwgi4m3le4hyvelpmdanasu0kgeck.lambda-url.us-east-1.on.aws', data).then((response) => {
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        })
    }

    const getPage = () => {
        switch (pageNumber)
        {
            case 1:
            default:
                return(
                    <Paper 
                        elevation={0} 
                        sx={{ 
                            padding: '16px', 
                            width: '400px', 
                            margin: '0 auto' 
                        }}
                    >
                        <Typography variant="h6" gutterBottom color="#00adb5">
                            Orphanage Register
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ width: '20%', height: '10px', background: '#00adb5' }}></div>
                            <div style={{ width: '20%', height: '10px', background: 'gray', marginLeft: '5%'}}></div>
                            <div style={{ width: '20%', height: '10px', background: 'gray', marginLeft: '5%' }}></div>
                            <div style={{ width: '20%', height: '10px', background: 'gray', marginLeft: '5%' }}></div>
                        </div>
                        <form>
                            <TextField
                                id="orphanageName"
                                label="Orphanage Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                inputRef={orphanageNameRef}
                            />
                            <TextField
                                id="ownerName"
                                label="Owner Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                inputRef={ownerNameRef}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                inputRef={emailRef}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                inputRef={passwordRef}
                            />
                            <TextField
                                id="retypePassword"
                                label="Retype Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                inputRef={retypePasswordRef}
                            />
                            <Button
                                variant="contained"
                                color="button"
                                fullWidth
                                sx={{ marginTop: '16px' }}
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        </form>
                        <Typography variant="body2" align="center" sx={{ marginTop: '16px' }}>
                            Already have an account?{' '}
                            <Link href="/authentication/login" color="primary">
                                Sign in
                            </Link>
                        </Typography>
                    </Paper>
                );
                break;

            case 2:
                return(
                    <Paper 
                        elevation={0} 
                        sx={{ padding: '16px', width: '400px', margin: '0 auto' }}>
                        <Typography variant="h6" gutterBottom color="#00adb5">
                            Orphanage Register
                        </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div style={{ width: '25%', height: '10px', background: '#00adb5' }}></div>
                                <div style={{ width: '20%', height: '10px', background: '#00adb5', marginLeft:'5%' }}></div>
                                <div style={{ width: '20%', height: '10px', background: 'gray', marginLeft:'5%' }}></div>
                                <div style={{ width: '20%', height: '10px', background: 'gray', marginLeft:'5%' }}></div>
                            </div>
                        <form>
                            <TextField
                                id="orphanageAddress"
                                label="Orphanage Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                inputRef={orphanageAddressRef}
                            />
                        </form>
                        <Button
                            variant="contained"
                            fullWidth
                            style={{ marginTop: '16px' }}
                            onClick={handleNext}
                            color ="button"
                        >
                            Next
                        </Button>
                  </Paper>
                )
                break;

            case 3:
                return(
                    <Paper elevation={0} style={{ padding: '16px', width: '400px', margin: '0 auto' }}>
                        <Typography variant="h6" gutterBottom>
                            Orphanage Register
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ width: '25%', height: '10px', background: '#00adb5'}}></div>
                            <div style={{ width: '25%', height: '10px', background: '#00adb5' , marginLeft:'5%'}}></div>
                            <div style={{ width: '25%', height: '10px', background: '#00adb5' , marginLeft:'5%'}}></div>
                            <div style={{ width: '25%', height: '10px', background: 'gray' , marginLeft:'5%'}}></div>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ width: '100%', marginBottom: '16px' }}
                            />
                            {image && <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />}
                            <Button
                                variant="contained"
                                color="button"
                                fullWidth
                                style={{ marginTop: '16px' }}
                                onClick={handleSubmit} // Call the upload function when the "Next" button is clicked
                            >
                                Submit
                            </Button>
                        </form>
                    </Paper>
                )
                break;

            case 4:
                return(
                    <Paper
                        elevation={0}
                        sx={{ padding: '16px', width: '400px', margin: '0 auto', alignItems:'center', justifyContent:'center' }}
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
                )
                break;
        }

        return [];
    }

    useEffect(() => {
        // console.log(pageNumber+" -- "+loading);
        if(pageNumber == 4 && loading === false)
        {
            navigate('/authentication/login');
        }
    }, [loading]);
    return(
        <React.Fragment>
            {getPage()}
        </React.Fragment>
    )
}

export default GUIOrphanageSignUp;