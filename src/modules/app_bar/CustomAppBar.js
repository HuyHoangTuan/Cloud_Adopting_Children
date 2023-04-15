import React, { useEffect, useRef, useState } from "react";
import { AppBar, Avatar, Box, Button, Container, Divider, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Logo from "../logo/Logo";
import { PAGE, USER_OPTION } from "../../constances/GUIConstance";
import { useNavigate } from "react-router";

const pages = PAGE.PARENT;
const options = USER_OPTION;
const CustomAppBar = () => {

    const [anchorEOptions, setAnchorEOptions] = useState(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const handleClickAvatar = (event) => {
        setAnchorEOptions(event.currentTarget);
    }
    
    const handleCloseOptions = () => {
        setAnchorEOptions(null);
    }

    const handleClickOption = (option) => {
        console.log(option);
        handleCloseOptions();
    }

    useEffect(() => {
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            handleCloseOptions();
        };

        if(anchorEOptions != null)
        {
            setTimeout(() => {
                window.addEventListener('click', handleClickOutside);
            })
        }
        return () => {
            if(anchorEOptions != null )
                window.removeEventListener('click', handleClickOutside);
        }
    }, [anchorEOptions])

    return (
        <AppBar
            position = "static"
            color = "background"
            elevation={0}
        >
            <Container 
                maxWidth = "xl"
            >
                <Toolbar disableGutters>
                    <Logo/>
                    <Box 
                        sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
                    >
                        {
                            pages.map((page) =>{
                                return(
                                    <Button
                                        key = {page.text}
                                        sx = {{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.text}
                                    </Button>
                                )
                            })
                        }
                    </Box>
                    <Divider orientation="vertical" flexItem sx = {{borderWidth: 3, mx: 1, my: 2}}/>
                    <Button
                        onClick={handleClickAvatar}
                        sx = {{my: 2, color: 'white', display: 'flex', alignItems: 'center'}}
                    >
                        <Avatar
                            variant = "square"
                        >
                        </Avatar>
                        <Typography
                            sx = {{ml: 1}}
                        >
                            hth
                        </Typography>
                        <Menu
                            anchorEl = {anchorEOptions}
                            open = {Boolean(anchorEOptions)}
                            onClose = {handleCloseOptions}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            ref = {menuRef}
                            sx = {{mt: '48px'}}
                        >
                            {
                                options.map((option) => {
                                    return(
                                        <MenuItem
                                            key = {option}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleClickOption(option.replaceAll(' ','').toLowerCase());
                                            }}
                                        >
                                            <Typography
                                                textAlign = "center"
                                            >
                                                {option}
                                            </Typography>
                                        </MenuItem>
                                    )
                                })
                            }
                        </Menu>
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default CustomAppBar;