// src/js/components/App.jsx

import React from 'react';
import Form from './Form.jsx';
import Results from './Results.jsx';

const App = () => (
    <div>
        <h1>EPA UV Index Finder</h1>
        <Form />
        <Results />
    </div>
)

export default App;