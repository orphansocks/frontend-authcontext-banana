import React from 'react';
import {useForm} from "react-hook-form";

function SignUp() {

    // DE METHODE DIE JE ALTIJD NODIG HEBT IS REGISTER
    // & HANDLESUBMIT VOOR DE SUBMIT/VERSTUUR BUTTON

    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Wanneer je nog geen account hebt, registreer je hier or whatever</p>

            <form onSubmit={handleSubmit(onFormSubmit)}>

                {/* RETURNT HET FORMULIER */}
                {/* DE METHODE ONSUBMIT GELDT VOOR HET HELE FORMULIER */}
                {/* HET FORMULIER BESTAAT UIT VERSCHILLENDE INPUTLABELS */}
                {/* NAME HOEFT NIET APART VERMELDE TE WORDEN< DAT DOET REGISTER!*/}

                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        id="username-field"
                        {...register("username", {
                            required: "username is required",
                            minLength: {
                                value: 6,
                                message: 'Je gebruikersnaam met tenminste 6 karakters bevatten'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Je gebruikersnaam mag max. 20 karakters lang zijn'
                            },
                        })}
                    />
                    {errors.username && <p>errors.username.message</p>}
                </div>

                <div>
                    <label>E-mailadres:</label>
                    <input
                        type="text"
                        id="email-field"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "dit emailadres is ongeldig"
                            }
                        })}
                    />
                    {errors.email && <p>errors.email.message</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="text"
                        id="password-field"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Je password moet tenmiste 8 karakters bevatten'
                            },
                            // PER VALIDATIEREGEL VOOR WACHTWOORD KAN JE NIEUWE RULE TOEVOEGEN
                        })}
                    />
                    {errors.password && <p>errors.password.message</p>}

                </div>


                <button type="submit">
                    Versturen
                </button>

            </form>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;