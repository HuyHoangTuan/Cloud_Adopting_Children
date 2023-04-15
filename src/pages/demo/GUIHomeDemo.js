import React, { useEffect, useState } from "react";
import { UserMgr } from "../../main/manager/UserMgr";
import { Paper, Typography } from "@mui/material";

const GUIHomeDemo = () =>{
    
    let [data, setData] = useState([]);
    const fetchData = () => {
        let output = [];
        for(let key in UserMgr.getUserModel().getJsonData())
        {
            output.push(
                {
                    key,
                    value: UserMgr.getUserModel().getJsonData()[key]
                }
            );
        }
        setData(output);
    }
    // fetchData();
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {

    }, [data]);
    return(
        <React.Fragment>
            <Paper
                elevation={3}
                sx = {
                    {
                        width: '50vw',
                        height: '100vh',
                        textAlign: 'center',
                        margin: '0 auto',
                        justifyContent:'center',
                        alignItems:'center'
                    }
                }
            >
                {
                    data.map((element) => {
                        return(
                            <Typography
                                key ={element.key}
                                variant="h5"
                            >
                                {`${element.key}: ${element.value}`}
                            </Typography>
                        )
                    })
                }
            </Paper>
            
        </React.Fragment>
    )
}

export default GUIHomeDemo;