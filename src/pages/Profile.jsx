import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <h1>Profielpagina</h1>
        <p>Deze pagina zie je alleen wanneer je bent ingelogd.</p>
        <p>Deze pagina is namelijk super geheim</p>
      <section>
        <h2>Gegevens</h2>
        <p><strong>Gebruikersnaam:</strong> hardcoded-test</p>
        <p><strong>Email:</strong> hardcoded@test.com</p>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;