import React from 'react';
import Voting from './components/Voting';

// For now, we're going to hard code these values.
const pair = ['David', 'Denise'];

React.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);
