import React, { useState, useEffect } from 'react';
import SignUpSchema from "./SignUpSchema";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

export default function SignUp() {

  const [validData, setValidData] = useState({
    userName: '',
    email: '',
    password: '',
    acceptedTerms: ''
  })
    const [errors, setErrors] = useState( {
    userName: '',
        email: '',
        password: '',
        acceptedTerms: ''
    })
    const [disabled, setDisabled] = useState(false)

    const formState = e => {
      const name = e.target.name;
      const value = e.target.value;
      Yup
      .reach(SignUpSchema, name)
      .validate(value)
      .then(valid => {
          setErrors({
              ...errors,
              [name]: ''
          })
      })
      .catch(err => {
          setErrors({
              [name]: err.errors[0]
          })
      })
      setValidData({
          ...validData, [name]: value
      })
    }
    useEffect(() => {
        SignUpSchema.isValid(validData).then(valid => {
            setDisabled(!valid)
        })
    },[validData])
    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up!</h1>
      <br />
      <label>
        UserName:
    </label>
      <input
        name='userName'
        type='userName'
        onChange={formState}
        required />
      <label>
        Email:
        </label>
      <input
        name="email"
        type="email"
        onChange={formState}
        required />
      <label>
        Password:
        </label>
      <input
        name="password"
        type="password"
        onChange={formState}
        required />
      <br />
      <input
        name="acceptedTerms"
        type="checkbox"
        onChange={formState} />
      <span> I accept the terms of service </span>
      <button disabled={disabled}>Sign Up</button>
      <Link to = "/login">
        <h6>Already have an account? Login here.</h6>
      </Link>
    </form>
  );
}