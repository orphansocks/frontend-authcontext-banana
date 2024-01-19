import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import profile from "../pages/Profile";

// HIERMEE MAAK JE DE CONTEXT AAN
// IN DIT GEVAL DE AUTHENTICATION CONTEXT
// JE WILT IMMERS OP ELKE PAGINA INGELOGD ZIJN
export const AuthContext = createContext({});


// DIT IS DE FUNCTIONPROVIDER WAAR JE DATA AAN MEE KAN GEVEN
// IN DIT GEVAL DE AUTHENTICATION CONTEXT, STAAT DEFAULT OP FALSE - NIET GEAUTHENTICEERD
function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();


    // ISAUTH IS DE VARIABELE UIT DE STATE
    // NAVIGATE IS DE VARIABELE VAN DE FUNCTIE DIE JE AANROEPT MET USENAVIGATE
    const login = () => {
        setIsAuth(true);
        console.log('gebruiker is ingelogd');
        navigate('/profile');
    }

    const logout = () => {
        setIsAuth(false);
        console.log('gebruiker is uitgelogd');
        navigate('/');
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
    // DE CONSUMER OP DE PAGINA'S KAN DE PROVIDER GEBRUIKEN
    return (
        <AuthContext.Provider value={ data }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;