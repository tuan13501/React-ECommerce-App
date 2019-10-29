import React from 'react'
import './FormInput.styles.scss'

const FormInput = ({handleChange, label, isPassword, ...inputProps}) => {
  return (
    <div className="group">
      <input className={`${isPassword ? 'password-field' : ''} form-input`} onChange={handleChange} {...inputProps}></input>
      {
        label 
        ? <label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
        :null
      }
      {/* {isPassword ? <span>true</span> : <span>false</span>} */}
    </div>
  )
}

export default FormInput