import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';

import SignUpSchema from "./SignUpSchema";

export default function SignUp() {

  const [validData, setValidData] = useState({
    username: '',
    // email: '',
    password: ''
  })
  const [errors, setErrors] = useState( {
    username: '',
    // email: '',
    password: '',
    // acceptedTerms: ''
    })
  const [disabled, setDisabled] = useState(false)

  const history = useHistory();

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

        axios
            .post('http://spencer-how-to.herokuapp.com/createnewuser', validData)
            .then((res) => {
                console.log('Signup Request', res);
                localStorage.setItem('token', res.data.access_token);
                console.log(res.data.access_token)
                history.push('/');
            })
            .catch((err) => console.log('Error for Request', err));
                setValidData({
                    userName:'',
                    // email:'',
                    password:''
                })
    }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up!</h1>
      <br />
      <label>
        UserName:
    </label>
      <input
        name='username'
        type='text'
        onChange={formState}
        required />
      {/* <label>
        Email:
        </label>
      <input
        name="email"
        type="text"
        onChange={formState}
        required /> */}
      <label>
        Password:
        </label>
      <input
        name="password"
        type="text"
        onChange={formState}
        required />
      <br />
      {/* <input
        name="acceptedTerms"
        type="checkbox"
        onChange={formState} /> */}
      <span> I accept the terms of service </span>
      <button disabled={disabled}>Sign Up</button>
      <Link to = "/login">
        <h6>Already have an account? Login here.</h6>
      </Link>
    </form>
  );
}