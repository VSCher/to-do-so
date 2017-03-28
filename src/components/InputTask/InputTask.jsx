import React from 'react';
import autobind from 'autobind-decorator';

import './InputTask.css';

export default class InputTask extends React.Component {
    static propTypes = {
        value: React.PropTypes.string.isRequired,
        onSubmit: React.PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.state = { value: '' };
    }

    componentDidMount() {
        this.setState({ value: this.props.value });
    }

    render() {
        return (
            <div className="input-task">
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