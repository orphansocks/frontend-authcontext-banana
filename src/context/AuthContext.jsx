import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import profile from "../pages/Profile";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid";
import {set} from "react-hook-form";

// HIERMEE MAAK JE DE CONTEXT AAN
// IN DIT GEVAL DE AUTHENTICATION CONTEXT
// JE WILT IMMERS OP ELKE PAGINA INGELOGD ZIJN

export const AuthContext = createContext({});


// DIT IS DE FUNCTIONPROVIDER WAAR JE DATA AAN MEE KAN GEVEN
// IN DIT GEVAL DE STATE AUTHENTICATION CONTEXT, STAAT DEFAULT OP FALSE - NIET GEAUTHENTICEERD
// LET OP: WANNEER JE DE PAGINA VERVERST BEN JE ALLE STATE DATA WEER KWIJT!!
// DUS GEBRUIK OOK USE-EFFECT VOOR HET MOUNTING EFFECT!!

function AuthContextProvider({ children }) {

    // DIT IS HET HELE DEFAULT AUTHENTICATIE-DATA-OBJECT IN DE STATE IN DE CONTEXT
    // IS AUTH DEFAULT UITGELOGD
    // USERGEGEVENS DATA-OBJECT NIET AANWEZIG NULL
    // STATUS VAN INFORMATIE OPHALEN IS PENDING

    const [auth, setAuth] = useState( {
        isAuth: false,
        user: null,
        status: 'pending',
    });

    // EN DE USEEFFECT VOOR HET MOUNTING EFFECT MET DE LEGE DEPENDANCY ARRAY
    // IS ER EEN TOKEN?
    // IS DIE TOKEN NOG GELDIG (HELPER FUNCTIE)
    // ZO JA: VRAAG GEGEVENS VD GEBRUIKER WEER OP EN ZET IN DE STATE
    // ZO NEE: DE STATE BLIJFT LEEG

    useEffect(() => {

       const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {

            void login(token); // ZET HIER VOID VOOR ALS JE KRINGELS KRIJGT VOOR THEN

        } else {

            setAuth({
                isAuth: false,
                user: null,
                status: 'done',

                })
        }

    }, []);


    const navigate = useNavigate();


    // ISAUTH IS DE VARIABELE UIT DE STATE
    // NAVIGATE IS DE VARIABELE VAN DE FUNCTIE DIE JE AANROEPT MET USENAVIGATE
    // LOGIN & LOGOUT LOOPT VIA DE CONTEXT
    // REGISTREREN BLIJFT HIER BUITEN!!

    async function login(token) {

        // DE ACCESTOKEN KOMT BINNEN EN MOET IN DE LOCAL STORAGE WORDEN GEPLAATST VAN DE CONTEXT
        // DE JUISTE USERINFO MOET IN DE STATE GEPLAATST WORDEN
        // NPM INSTALL JWT-DECODE VOOR PACKAGE DECODEREN PW

        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.sub);

        // PROBEER DE INFORMATIE VAN DE USER OP TE HALEN
        // WANNEER INFO > SLA DAN OP (SETAUTH) IN DE STATE IN DE CONTEXT
        // WANNEER DAT NIET LUKT CATCH(E) < LOG DAN MAAR WEER UIT

        try {
            const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }

            });
            console.log(response)

            // SETAUTH IS EEEN DATA-OBJECT {} MET DAARIN OOK EEN USER_OBJECT {}

            setAuth( {
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: 'done',
            });

        } catch(e) {

            logout();

        }


        console.log('gebruiker is ingelogd');
        navigate('/profile');
    }

    const logout = () => {
        console.log('gebruiker is uitgelogd');
        // HET AUTHENTICATIE DATA-OBJECT MET IN DIT GEVAL GEEN USER : NULL MEER
        setAuth ( {
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    // HET DATA OBJECT VOOR WEL OF NIET INGELOGD ZIJN
    // MET DE FUNCTIES DIE ERVOOR ZORGEN DAT AUTH TRUE OF FALSE IS
    // DEZE WAARDES KOMEN UIT DE STATE
    // OP HET AUTH_DATA_OBJECT WIL JE DE ISAUTH UITLEZEN

    const contextData = {

        login: login,
        logout: logout,
        isAuth: auth.isAuth,
    }

    // JE GEEFT (PROVIDE) DE DATA UIT HET DATAOBJECT MEE AAN DE CONTEXT PROVIDER
    // DE CONSUMER OP DE PAGINA'S KAN DIE DATA GEBRUIKEN/ CONSUMEREN
    // DE CHILDREN WORDEN GELADEN ALS STATUS DONE IS, GEEF ANDERS MAAR 'DATA IS LOADING' AAN

    return (
        <AuthContext.Provider value={ contextData }>
            { auth.status === 'done' ? children : <p>Loading ...</p> }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;