import React, {useContext, useEffect} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const { isAuth, login, logout } = useContext(AuthContext);

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
        {/*DE LOGIN BUTTON IS ALLEEN ZICHTBAAR ALS ISAUTH FALSE IS*/}
        { isAuth === false &&
        <button
          type="button"
          onClick={() => login()}
        >
          Log in
        </button>
        }
        <button
          type="button"
          onClick={() => logout()}
        >
          Registreren
        </button>
      </div>

    </nav>
  );
}

export default NavBar;