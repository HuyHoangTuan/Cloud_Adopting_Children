import {Grid} from "@mui/material";
import React from "react";
import {useParams } from "react-router-dom";
import GUIIntro from "./sub_pages/GUIIntro";
import GUISignIn from "./sub_pages/GUISignIn";
import GUIOrphanageSignUp from "./sub_pages/GUIOrphanageSignUp";
import GUIParentSignUp from "./sub_pages/GUIParentSignUp";


const GUILogin = () => {
    let params = useParams();
    // console.log(params);
    return (
        <Grid 
            container 
            justifyContent={"center"}
            spacing ={0}
            sx={{
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid
                item
                sx={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                <img
                    height = '100%'
                    src ="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/happy-boy-with-painted-hands-1296x728-header.jpg?w=1155&h=1528"
                />
            </Grid>
            <Grid
                item
                sx = {{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                {
                    params['*'].replaceAll('/', '') == '' ? <GUIIntro/> : params['*'].replaceAll('/', '') == 'login' ? <GUISignIn/> : (params['*'].replaceAll('/', '') == 'register_orphanage') ? <GUIOrphanageSignUp/> : (params['*'].replaceAll('/', '') == 'register_parents') ? <GUIParentSignUp/> : <GUIIntro/>
                }
            </Grid>             
        </Grid>
    );
}

export default GUILogin;
