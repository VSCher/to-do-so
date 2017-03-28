import React from 'react';
import autobind from 'autobind-decorator';

import './InputTask.css';

export default class InputTask extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        text: React.PropTypes.string,
        onSubmit: React.PropTypes.func.isRequired,
    };

    constructor() {
        super();

        this.state = {
            title: '',
            text: ''
        };

    }


    componentDidMount() {
        this.setState({
            title: this.props.title || '',
            text: this.props.text || ''
        });
    }

    render() {
        return (
            <div className="input-task">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} onChange={this.handleChangeTitle} type="text"/>
                    <input value={this.state.text} onChange={this.handleChangeText} type="text"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.title) {
            this.props.onSubmit(this.state, this.props.id);
            this.setState({
                title: '',
                text: ''
            });
        }
    }

    @autobind
    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    @autobind
    handleChangeText(event) {
        this.setState({ text: event.target.value });
    }
}