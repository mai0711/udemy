//3,
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"

//stateの初期値の状態
const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

//stateの初期値の状態をどのコンポーネントからもいつでもアクセスできるように(context)
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    //AuthReducer = 初期値のstateの状態を新しいstateの状態に更新する処理の内容(AuthReducer.js)
    //initialState = 初期値のstateの内容
    //state = 新しいstateの内容(現在の状態)(AuthActions.js)ログイン始めたか、成功したか、エラーか
    //dispatch = どのactionを実行したかの通知
    return(
        <AuthContext.Provider
        value={{ //value = 何を渡すか(どの情報を共有するか)
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
        >
            {/* AuthContext.Providerで囲まれたもの(children)はvalueの値を使える */}
            {children}
        </AuthContext.Provider>
    )
};

//4, index.jsでAuthContextProviderをインポートして使えるように
//childrenはindex.jsの<APP/>

//5, login.jsxの中身を変える
