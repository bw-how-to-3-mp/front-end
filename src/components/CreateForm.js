import React from 'react';
import { connect } from 'react-redux';
import { addHack } from '../actions/actions';

import useForm from '../hooks/useForm';

const CreateForm = props => {

    const iCreateValues = {
        name:'',
        hackName:'',
        description:'',
        steps:''
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
            name='name'
            value={userHack.name}
            onChange={handleChanges}
            placeholder='Name'
            />
            <input
            type='text'
            name='hackName'
            value={userHack.hackName}
            onChange={handleChanges}
            placeholder='Hack Name'
            />
            <input
            type='text'
            name='description'
            value={userHack.description}
            onChange={handleChanges}
            placeholder='Description'
            />
            <input
            type='text'
            name='steps'
            value={userHack.steps}
            onChange={handleChanges}
            placeholder='Steps'
            />
            <button type='submit'>Post</button>
        </form>
    )
};

export default connect(null, { addHack })(CreateForm);