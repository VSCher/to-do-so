import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { addTask } from '../redux/actions/baseActions';

import FormControl from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';

@connect()
export default class AddTask extends React.Component {
    constructor() {
        super();
        this.state = { value: '' };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Task:
                        <input value={this.state.value} onChange={this.handleChange} type="text"/>
                    </label>
                    <input type="submit" value="Submit"/>
                    <div>{this.state.value} </div>
                </form>
            </div>
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value) {
            this.props.dispatch(addTask(this.state.value));
            this.setState({ value: '' });
        }
    }

    @autobind
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
}