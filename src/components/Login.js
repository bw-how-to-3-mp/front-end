import React, { useState, useEffect } from 'react';
import LoginSchema from "./LoginSchema";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

export default function Login() {

    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
        acceptedTerms: ''
    })
    const [error, setError] = useState( {
        userName: '',
        email: '',
        password: '',
        acceptedTerms: ''
    })

const [disable, setDisable] = useState(false)
  // Event to handle form changes
    const form = e => {
      const name1 = e.target.name;
      const value1 = e.target.value;
      Yup
      .reach(LoginSchema, name1)
      .validate(value1)
      .then(valid => {
          setError({
              ...error,
              [name1]: ''
          })
      })
      .catch(err => {
          setError({
              [name1]: err.error[0]
          })
      })
      setData({
          ...data, [name1]: value1
      })
  }
  useEffect(() => {
      LoginSchema.isValid(data).then(valid => {
          setDisable(!valid)
      })
  },[data])
  const handleSubmit1 = (event) => {
     event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit1}>
        <h1>Log in</h1>
        <br />
        <label>
            UserName:
        </label>
        <input
            name='userName'
            type='userName'
            onChange={form}
            required />
        <label>
            Password:
        </label>
        <input
            name="password"
            type="password"
            onChange={form}
            required />
        <br />
        <button disabled={disable}>Login</button>
        <Link to = "/SignUp" >
            <h6>Don't have an account? Sign up here.</h6>
        </Link>
    </form>
  );
}