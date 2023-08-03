//5, dispatch(actionを呼ぶ)

import axios from "axios";

export const loginCall = async (user, dispatch) => {
    dispatch({ type: "LOGIN_START" }); //loginCallを呼んだらすぐにLOGIN_STARTという通知をとばす
    try{
        const response = await axios.post("auth/login", user); //auth.jsで作ったログインAPI, userはemailとpasswordの情報
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data }); //successしたと通知
    }catch(err){
        dispatch({ type: "LOGIN_ERROR", payload: err });
    }
};

