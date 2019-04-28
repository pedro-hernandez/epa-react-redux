// src/js/components/Form.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterZIP, getLocation } from '../actions/index';
import { thisExpression } from '@babel/types';

function mapDispatchToProps(dispatch) {
    return {
        enterZIP: string => dispatch(enterZIP(string)),
        getLocation: string => dispatch(getLocation(string)),
    };
}

const mapStateToProps = state => {
    return { zip: state.zip };
};

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            zip: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { zip } = this.state;
        this.props.enterZIP(zip);
        this.props.getLocation(zip);
    }

    render() {
        const { zip } = this.state;
        return (
            <form className="zip-form" onSubmit={this.handleSubmit}>
                <label htmlFor="string">Enter ZIP Code:</label>
                <input
                    className="zip-input"
                    type="string"
                    id="zip"
                    value={zip}
                    onChange={this.handleChange}
                />
                <div>
                    <button className="zip-button" type="submit">
                        Get UV Index
                    </button>
                </div>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;