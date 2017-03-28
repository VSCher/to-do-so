import React from 'react';
import autobind from 'autobind-decorator';

import './InputTask.css';

export default class InputTask extends React.Component {
    static propTypes = {
        value: React.PropTypes.string,
        title: React.PropTypes.string,
        onSubmit: React.PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.state = {
            value: '',
            title: ''
        };
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || '',
            title: this.props.title || '',
        });
    }

    render() {
        return (
            <div className="input-task">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-task__title">
                        <input value={this.state.title}
                               onChange={this.handleChangeTitle}
                               type="text"
                               placeholder="title"
                        />
                    </div>
                    <div className="input-task__description">
                        <input
                            value={this.state.value}
                            onChange={this.handleChangeValue}
                            type="text"
                            placeholder="description"
                        />
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.title) {
            this.props.onSubmit(
                this.state.value,
                this.state.title,
                this.props.id
            );

            this.setState({
                value: this.props.value || '',
                title: this.props.value || '',
            });
        }
    }

    @autobind
    handleChangeValue(event) {
        this.setState({ value: event.target.value });
    }

    @autobind
    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
}