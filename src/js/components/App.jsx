// src/js/components/App.jsx

import React from 'react';
import Form from './Form.jsx';
import Results from './Results.jsx';
import "../../css/style.css";

const App = () => (
    <div className="container">
        <div className="card-header">
        <h1 className="h1">EPA UV Index Finder</h1>
        </div>
        <div className="card-content">
        <Form />
        <Results />
        </div>
    </div>
)

export default App;