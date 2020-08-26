import React from 'react';

import useForm from '../hooks/useForm';

const SearchBar = props => {

    const iSearchValue = { searchInput:'' };

    const [ value, handleChanges ] = useForm(iSearchValue);

    const searchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={searchSubmit}>
            <input
            type='text'
            name='searchInput'
            value={value.searchInput}
            onChange={handleChanges}
            placeholder=''      // maybe randomize possible seach inputs for funsies
            />
        </form>
    )
};

export default SearchBar;