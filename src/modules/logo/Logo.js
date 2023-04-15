import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Logo = () => {
    
    let navigate = useNavigate()
    const handleClickLogo = (event) => {
        navigate(
            '/',
            {
                state: {
                    from: '/'
                }
            }
        );
    }
    return(
        <React.Fragment>
            <Button
                key = {"logo"}
                onClick = {handleClickLogo}
                sx = {{ my: 2, color: 'white', display: 'block' }}
            >
                LOGO
            </Button>
        </React.Fragment>
    )
}

export default Logo;