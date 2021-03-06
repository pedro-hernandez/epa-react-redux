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
            {city && <div className="result">{city}, {usState}</div>}
            <div className="results-label">UV INDEX:</div>
            {uvIndex != null && <div className="result">{uvIndex}</div>}
            <div className="results-label">UV ALERT:</div>
            {uvAlert != null && <div className="result">{uvAlert}</div>}
        </div>
        {submitting && <div className="results results-label">Submitting...</div>}
        {error && <div className="results results-label error">{error}</div>}
    </Fragment>
)

const Results = connect(mapStateToProps)(connectedResults);

export default Results;