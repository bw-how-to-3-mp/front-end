import React from 'react';
import { connect } from 'react-redux';
import { addHack } from '../actions/actions';

import useForm from '../hooks/useForm';

const CreateForm = props => {

    const iCreateValues = {
        title: '',
        body: ''
    };

    const [ userHack, handleChanges ] = useForm(iCreateValues);

    const createSubmit = (e) => {
        e.preventDefault();
        props.addHack(userHack)
    };

    return (
        <form onSubmit={createSubmit}>
            <input
            type='text'
            name='title'
            value={userHack.title}
            onChange={handleChanges}
            placeholder='Life Hack Title'
            />
            <input
            type='text'
            name='body'
            value={userHack.body}
            onChange={handleChanges}
            placeholder='Enter Steps Here'
            />
            <button type='submit'>Post</button>
        </form>
    )
};

export default connect(null, { addHack })(CreateForm);