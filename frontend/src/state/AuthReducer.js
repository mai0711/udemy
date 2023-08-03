//2,
//reducer = 初期値のstateの状態を新しいstateの状態に更新する処理の内容

const AuthReducer = (state, action) => { //actionはAuthActions.jsで設定したaction
    switch(action.type) {  //actionのtypeに応じてどのstate状態にするか変える
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true, //isFetching = 情報を取得するのかどうか
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload, //AuthActions.jsで設定したLoginSuccessのPayload(user)
                isFetching: false,
                error: false,
            };
        case "LOGIN_ERROR":
            return {
                user: null,
                isFetching: true,
                error: true,
            };
        default:
            return state; //最終的な状態（新しい状態）を返す
    }
};

export default AuthReducer;