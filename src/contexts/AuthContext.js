import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthContentProvider({ children }) {
    const [authState, setAuthState] = useState({
        isLogin: false,
        token: '',
        userInfo: '',
    });
    const auth = {
        isLogin: authState.isLogin,
        login() {
            setAuthState({ ...authState, isLogin: true });
        },
        logout() {
            setAuthState({ ...authState, isLogin: false });
        },
        token: authState.token,
        setToken(token) {
            setAuthState({ ...authState, token });
        },
        userInfo: authState.userInfo,
        setUserInfo(userInfo) {
            setAuthState({ ...authState, userInfo });
        },
        setState(isLogin, token, userInfo) {
            setAuthState({
                isLogin,
                token,
                userInfo,
            });
        },
    };
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
