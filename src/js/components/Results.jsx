// src/js/components/Results.jsx

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { uvIndex: state.uvIndex, uvAlert: state.uvAlert, submitting: state.submitting, error: state.error, city: state.city, usState: state.usState };
};

const connectedResults = ({ uvIndex, uvAlert, submitting, error, city, usState }) => (
    <Fragment>
        <div>
            <p>Location: {city} {usState}</p>
            <p>UV INDEX: {uvIndex}</p>
            <p>UV ALERT: {uvAlert}</p>
        </div>
        {submitting && <div>Submitting...</div>}
        {error && <div>{error}</div>}
    </Fragment>
)

const Results = connect(mapStateToProps)(connectedResults);

export default Results;