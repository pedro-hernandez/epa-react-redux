// src/js/components/Results.jsx

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { uvIndex: state.uvIndex, uvAlert: state.uvAlert, submitting: state.submitting, error: state.error };
};

const connectedResults = ({ uvIndex, uvAlert, submitting, error }) => (
    <Fragment>
        <div>
            <p>UV INDEX: {uvIndex}</p>
            <p>UV ALERT: {uvAlert}</p>
        </div>
        {/* {submitting ? <div>`...submitting`</div> : null} */}
        {submitting && <div>Submitting...</div>}
        {error && <div>{error}</div>}
    </Fragment>
)

const Results = connect(mapStateToProps)(connectedResults);

export default Results;