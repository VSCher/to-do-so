import React from 'react';
import autobind from 'autobind-decorator';

import InputTask from '../../components/InputTask';

import './Task.css';

export default class Task extends React.Component {
    static propTypes = {
        completed: React.PropTypes.bool.isRequired,
        value: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired,
        onToggleMark: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    };

    constructor() {
        super();

        this.state = {
            isOnEdit: false
        }
    }

    render() {
        let taskClass = `task task__${this.props.completed ? "completed" : "uncompleted"}`;

        return (
            <div className={taskClass}>
                <button className="task__mark" onClick={this.handleToggleMark}>mark</button>
                <button className="task__delete" onClick={this.handleDelete}>delete</button>
                <button className="task__edit" onClick={this.handleStartEdit}>edit</button>

                {this.state.isOnEdit &&
                <InputTask
                    id={this.props.id}
                    value={this.props.value}
                    title={this.props.title}
                    onSubmit={this.handleSubmitEdit}
                />}

                {!this.state.isOnEdit &&
                <span className="task__text">
                    {this.props.title}
                </span>}


            </div>
        );
    }


    @autobind
    handleToggleMark() {
        this.props.onToggleMark(this.props.id);
    }

    @autobind
    handleStartEdit() {
        this.setState({
            isOnEdit: true
        });
    }

    @autobind
    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    @autobind
    handleSubmitEdit(value, title, id) {
        this.props.onSubmitEdit(value, title, id);
        this.setState({
            isOnEdit: false
        });
    }


}