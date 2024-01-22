import React from 'react';

function FormInputLabel({ inputType, inputName, inputLabel, inputId, validationRules, register, errors }) {

return (

    <>
      <label htmlFor={inputId}>
          {inputLabel}
        <input
            type={inputType}
            id={inputId}
            {...register(inputName, validationRules)}
        />
          {errors[inputName] && <p>{errors[inputName].message}</p>}
      </label>

    </>
);
}

export default FormInputLabel;