import React from 'react';
import autobind from 'autobind-decorator';

import './InputTask.css';

export default class InputTask extends React.Component {

    constructor() {
        super();
        this.state = { value: '' };
    }

    componentWillMount() {
        this.state = { value: this.props.value };
    }

    render() {
        return (
            <div className="add-task">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={this.handleChange} type="text"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value) {
            this.props.onSubmit(this.state.value, this.props.id);
            this.setState({ value: this.props.value });
        }
    }

    @autobind
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
}