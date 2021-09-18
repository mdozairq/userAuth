import React from 'react'
import './Input.css'

const Input = ({name, label, value, type, handleChange}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <input name={name} value={value}  type={type} onChange={handleChange} required="true"/>
        </div>
    )
}

export default Input
