import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from "yup";

import LoginSchema from "./LoginSchema";
import axios from 'axios';

export default function Login() {

    const [data, setData] = useState({
        username: '',
        // email: '',
        password: ''
        // acceptedTerms: ''
    })
    const [error, setError] = useState( {
        username: '',
        // email: '',
        password: ''
        // acceptedTerms: ''
    })

    const history1 = useHistory();


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
        console.log(data)

        axios
            .post('http://spencer-how-to.herokuapp.com/login', data)
            .then((res) => {
                console.log('Login Request', res);
                localStorage.setItem('token', res.data.access_token);
                history1.push('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit1}>
            <h1>Log in</h1>
            <br />
            <label>
                UserName:
            </label>
            <input
                name='username'
                type='text'
                onChange={form}
                required />
            <label>
                Password:
            </label>
            <input
                name="password"
                type="text"
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