import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // ASYNC AWAIT
    // REQUEST MET AXIOS
    // TRY CATCH BLOCK
    // WE MAKEN EEN POST REQUEST NAAR DE BACKEND
    // DE ACCESSTOKEN KOMT TERUG
    // DIE TOKEN GEVEN WE MEE AAN DE LOGIN VOOR DE CONTEXT

    async function handleSubmit(e)  {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
            email: "klaas@novi.nl",
            password: "123456"
        });
            console.log(response.data.accessToken);
            login(response.data.accessToken);

        } catch(e) {
            console.error(e)
        }



        // HIER KOMT DE CODE WAT JE MET DE SIGNIN GEGEVENS WILT DOEN
        // WANNEER JE EEN REQUEST WILT DOEN HEB JE AXIOS NODIG > NPM INSTALL AXIOS
        console.log('Username:', username);
        console.log('Password:', password);
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Om in te loggen, gebruik onderstaand formulier</p>

        {/*EEN FORM HEEFT ALTIJD SUBMIT BUTTON HANDLESUBMIT BUTTON NOOOOOOIIIIT ONCLICK*/}

      <form onSubmit={ handleSubmit }>
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

          <button type="submit">
              Inloggen
          </button>

      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;