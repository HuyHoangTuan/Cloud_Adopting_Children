import React from 'react';
import {Navigate} from 'react-router-dom';
import { UserMgr } from '../manager/UserMgr';
import { PATH } from '../../constances/GUIConstance';

function PrivateRoute(params)
{
    let auth = UserMgr.isLogin();
    return(
        auth ? params.children: <Navigate to = {PATH.AUTHENTICATION} replace = {true} state = {{from: params.path}}/>
    );
}

export default PrivateRoute;