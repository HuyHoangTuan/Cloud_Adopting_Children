import { LOGIN_STATE } from "../../constances/UserConstance";
import { UserModel } from "../models/UserModel";

export const UserMgr = function(){
    let userModel = UserModel;

    const updateUserModel = (data, isLogin = true) => {
        if(isLogin === true)
        {
            userModel.setData(data);
        }
        else
        {
            userModel.resetData();
        }
    }

    const isLogin = () =>{
        let loginState = sessionStorage.getItem('login_state');

        if(loginState != null && loginState != LOGIN_STATE.SUCCESS)
        {
            if(loginState == LOGIN_STATE.SUCCESS) return true;
            else return false;
        }

        return userModel.getId().length > 0;
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