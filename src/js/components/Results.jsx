// src/js/components/Results.jsx

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { uvIndex: state.uvIndex, uvAlert: state.uvAlert, submitting: state.submitting, error: state.error, city: state.city, usState: state.usState };
};

const connectedResults = ({ uvIndex, uvAlert, submitting, error, city, usState }) => (
    <Fragment>
        <div className="results">
            <div className="results-label">Location:</div>
            <div className="result">{city} {usState}</div>
            <div className="results-label">UV INDEX:</div>
            <div className="result">{uvIndex}</div>
            <div className="results-label">UV ALERT:</div>
            <div className="result">{uvAlert}</div>
        </div>
        {submitting && <div>Submitting...</div>}
        {error && <div>{error}</div>}
    </Fragment>
)

const Results = connect(mapStateToProps)(connectedResults);

export default Results;