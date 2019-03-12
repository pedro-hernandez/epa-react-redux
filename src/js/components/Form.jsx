// src/js/components/Form.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterZIP } from '../actions/index';
import { thisExpression } from '@babel/types';

function mapDispatchToProps(dispatch) {
    return {
        enterZIP: number => dispatch(enterZIP(number))
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
            [e.target.id]: parseInt(e.target.value)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { zip } = this.state;
        this.props.enterZIP(zip);
    }

    render() {
        const { zip } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="number">Enter ZIP</label>
                <input
                    type="number"
                    id="zip"
                    min="0"
                    value={zip}
                    onChange={this.handleChange}
                />
                <div>
                    <button type="submit">
                        Get UV Index
                    </button>
                </div>

            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;