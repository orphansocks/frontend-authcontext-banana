import React, {useContext, useEffect} from 'react';
import logo from '../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import signIn from "../pages/SignIn";

function NavBar() {
  const { isAuth, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // GEBRUIK USEEFECCT ALLEEN EVEN OM HET EFFECT TE ZIEN VAN DE ISAUTH
  useEffect(() => {
    console.log(isAuth)
  }, [isAuth]);

  // DE BUTTONS USEN/ CONSUMEREN DE LOGIN & LOGOUT CONTEXT VIA USECONTEXT
  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        {/*DEZE TEKST IS ALLEEN ZICHTBAAR WANNEER JE INGELOGD BENT*/}
        { isAuth === true &&
        <p>Je bent nu ingelogd</p>
        }
      </div>

      <div>
        {/*DE LOGIN BUTTON IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
        { isAuth === false &&
        <button
          type="button"
          onClick={() => navigate('/signin')}
        >
            Log in
        </button>
        }
        {/*DE LOGOUT BUTTON IS ALLEEN ZICHTBAAR ALS ISAUTH TRUE IS*/}
        { isAuth === true &&
        <button
            type="button"
            onClick={() => logout()}
        >
          Log out
        </button>
        }
          {/*DE REGISTREER BUTTON IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
          {/*DE REGISTREER BUTTON FUNGEERT DIRECT OM TE NAVIGEREN, JE HOEFT HIER GEEN FUNCTIE
           UIT DE CONTEXT AAN TE ROEPEN ZOALS BIJ LOGIN/LOGOUT*/}
          { isAuth === false &&
        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
          }
      </div>

    </nav>
  );
}

export default NavBar;