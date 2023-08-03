// 1,
export const LoginStart = (user) => ({ //userは今の状態
    type: "LOGIN_START", //type = actionの名前
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, //userの状態を返す
});

export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error, //errorを返す
});