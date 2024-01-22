import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // HIER KOMT DE CODE WAT JE MET DE SIGNIN GEGEVENS WILT DOEN
        console.log('Username:', username);
        console.log('Password:', password);
    };

  return (
    <>
      <h1>Inloggen</h1>
      <p>Om in te loggen, gebruik onderstaand formulier</p>

      <form>
          {/*
          HIER KOMEN DE INVOERVELDEN <LABEL>
          ZIJN VAN EEN TYPE
          EN HEBBEN EEN WAARDE
          EN DOEN IETS ONCHANGE */}

          <label>
              Username
              <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
          </label>

          <label>
              Password
              <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </label>

          {/*
        EVEN KIJKEN WELKE VAN DE 2 BUTTONS IK MOET HEBBEN
          */}

        <button
            type="button"
            onClick={() => login()}
        >
            Inloggen
        </button>

          <button type="button"
                  onClick={handleSignIn}
          >
              Inloggen
          </button>

      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;