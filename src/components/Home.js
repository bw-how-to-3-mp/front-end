import React from 'react';

import SearchBar from './Search';
import CreateForm from './CreateForm';
import HackList from './HackList';

const Home = props => {

    return (
        <div>
            <h1>
                How To...
            </h1>
            <SearchBar />
            <h1>
                Post New Hack
            </h1>
            <CreateForm />
            {/* <HackList /> */}
        </div>
    )
};

export default Home;