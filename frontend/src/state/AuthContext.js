//3,
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer"

//stateの初期値の状態
const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id: "64c22eac2659c42446f4036d",
    //     username: "mai",
    //     email: "mai@gmail.com",
    //     password: "222222",
    //     profilePicture: "https://assets.website-files.com/619e8d2e8bd4838a9340a810/647c106477f8934b266ba39c_profile-picture-og.webp",
    //     coverPicture: "",
    //     followers: [],
    //     followings: ["64c21350df0ba6d69be1e1ef"],
    //     isAdmin: false,
    // },
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

    //store current user data in localStorage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]);


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
