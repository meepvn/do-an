import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthContentProvider({ children }) {
    const [authState, setAuthState] = useState({
        isLogin: false,
        token: '',
        userInfo: '',
    });
    return (
        <authContext.Provider value={{ auth: authState, setAuth: setAuthState }}>
            {children}
        </authContext.Provider>
    );
}
