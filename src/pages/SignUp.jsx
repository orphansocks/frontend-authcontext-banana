import React from 'react';
import { Link } from 'react-router-dom';
import FormInputLabel from "../components/FormInputLabel";
import {useForm} from "react-hook-form";

function SignUp() {

    // DE METHODE DIE JE ALTIJD NODIG HEBT IS REGISTER
    // & HANDLESUBMIT VOOR DE SUBMIT/VERSTUUR BUTTON
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
    }


  return (
    <>
      <h1>Registreren</h1>
      <p>Wanneer je nog geen account hebt, registreer je hier or whatever</p>

    <form onSubmit={ handleSubmit(handleFormSubmit) }>
        {/* RETURNT HET FORMULIER */ }
    {/* DE METHODE ONSUBMIT GELDT VOOR HET HELE FORMULIER */}
    {/* HET FORMULIER BESTAAT UIT VERSCHILLENDE INPUTLABELS */}

    <FormInputLabel
        inputType="text"
        inputName="username"
        inputId="username-field"
        inputLabel="Username:"
        validationRules={{
            required: {
                value: true,
                minLength: 6,
                message: 'Dit veld is verplicht',
            }
        }}
        register={register}
        errors={errors}
    />
        <FormInputLabel
            inputType="text"
            inputName="email"
            inputId="email-field"
            inputLabel="E-mailadres:"
            validationRules={{
                required: {
                    value: true,
                    minLength: 6,
                    message: 'Dit veld is verplicht',
                }
            }}
            register={register}
            errors={errors}
        />

        <FormInputLabel
            inputType="text"
            inputName="password"
            inputId="password-field"
            inputLabel="Password:"
            validationRules={{
                required: {
                    value: true,
                    minLength: 8,
                    message: 'Dit veld is verplicht',
                }
            }}
            register={register}
            errors={errors}
        />

    <button type="submit" >
        Versturen
    </button>

</form>

      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;