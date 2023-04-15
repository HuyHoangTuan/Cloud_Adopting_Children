import { LOGIN_STATE } from "../../constances/UserConstance";
import { UserModel } from "../models/UserModel";

export const UserMgr = function(){
    let userModel = UserModel;

    const updateUserModel = (data, isLogin = true) => {
        if(isLogin === true)
        {
            userModel.setJsonData(data);
            sessionStorage.setItem('login_state', JSON.stringify(data));
            // userModel.setData(data);
        }
        else
        {
            userModel.setJsonData("");
            sessionStorage.setItem('login_state', "");
            // userModel.resetData();
        }
    }

    const isLogin = () =>{
        let loginState = sessionStorage.getItem('login_state');
        // console.log(JSON.stringify(userModel.getJsonData()));
        if(loginState != null)
        {
            if(loginState.length > 0)
            {
                UserMgr.updateUserModel(JSON.parse(loginState));
                return true;
            }
            else return false;
        }

        return JSON.stringify(userModel.getJsonData()).length > 2;
    }

    const getUserModel = () => {
        return userModel;
    }

    return {
        updateUserModel,
        isLogin,
        getUserModel
    }
}();