import React from 'react';
import {Navigate} from 'react-router-dom';
import { UserMgr } from '../manager/UserMgr';
import { PATH } from '../../constances/GUIConstance';

function PublicRoute(params)
{
    let auth = UserMgr.isLogin();
    return(
        auth ? <Navigate to = {PATH.HOME} replace = {true} state = {{from: params.path}}/> : params.children
    );
}

export default PublicRoute;