import React, {createContext, useState} from "react";

// HIERMEE MAAK JE DE CONTEXT AAN
export const AuthContext = createContext({});


//DIT IS DE FUNCTIONPROVIDER WAAR JE DATA AAN MEE KAN GEVEN
// IN DIT GEVAL DE AUTHENTICATION CONTEXT, DEFAULT OP FALSE - NIET GEAUTHENTICEERD
function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true);
        console.log('is ingelogd')
    }

    const logout = () => {
        setIsAuth(false);
        console.log('is uitgelogd')
    }

// HET DATA OBJECT VOOR WEL OF NIET INGELOGD ZIJN
    // MET DE FUNCTIES DIE ERVOOR ZORGEN DAT AUTH TRUE OF FALSE IS
    const data = {
        username: 'username',
        password: 'password',
        login: login,
        logout: logout,
        isAuth: isAuth,
    }

    // JE GEEFT (PROVIDE) DE DATA UIT HET DATAOBJECT MEE AAN DE CONTEXT PROVIDER
    return (
        <AuthContext.Provider value={ data }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;