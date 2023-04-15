import { Button, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const GUIIntro = () => {
    let navigate = useNavigate();
    return(
        <Paper
            elevation = {0}
            square
            sx ={{
                top: '50%',
                transform: 'translate(0%, 30%)',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}
        >
            <Typography
                variant="h6"
                align="center"
            >
                Who are you?
            </Typography>
            <div
                style={{
                    marginTop: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    variant="contained"
                    color ="button"
                    sx ={{
                        width: '145px',
                        height: '50px',
                        mx: 1
                    }}
                    onClick={(event) => {
                        event.preventDefault();
                        navigate('/authentication/register_orphanage')
                    }}
                >
                    Orphanagens
                </Button>
                <Button
                    variant="contained"
                    color ="button"
                    sx ={{
                        width: '145px',
                        height: '50px',
                        mx: 1
                    }}
                    onClick={(event) => {
                        event.preventDefault();
                        navigate('/authentication/register_parents')
                    }}
                >
                    Parents
                </Button>
            </div>
            <Typography
                variant="body2"
                sx={{
                    marginTop: '390px',
                    textAlign: 'center'
                }}
            >
                Already a user?{' '}
                <Link href="/authentication/login" color="primary">
                Login
                </Link>
            </Typography>
        </Paper>
    )
}

export default GUIIntro;
