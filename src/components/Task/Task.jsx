import React from 'react';
import autobind from 'autobind-decorator';

import InputTask from '../../components/InputTask';

import './Task.css';

export default class Task extends React.Component {
    static propTypes = {
        completed: React.PropTypes.bool.isRequired,
        id: React.PropTypes.number.isRequired,
        isOnEdit: React.PropTypes.bool.isRequired,
        onToggleMark: React.PropTypes.func.isRequired,
        onStartEdit: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    };

    render() {
        let taskClass = `task task__${this.props.completed ? "completed" : "uncompleted"}`;

        return (
            <div className={taskClass}>
                <button className="task__mark" onClick={this.handleToggleMark}>mark</button>
                <button className="task__delete" onClick={this.handleDelete}>delete</button>
                <button className="task__edit" onClick={this.handleStartEdit}>edit</button>

                {this.props.isOnEdit &&
                <InputTask
                    id={this.props.id}
                    title={this.props.value.title}
                    text={this.props.value.text}
                    onSubmit={this.handleSubmitEdit}
                />}

                {!this.props.isOnEdit &&
                <div className="task__info">
                    <div className="task__title">{this.props.value.title}</div>
                    <div className="task__text">{this.props.value.text}</div>
                </div>}


            </div>
        );
    }


    @autobind
    handleToggleMark() {
        this.props.onToggleMark(this.props.id);
    }

    @autobind
    handleStartEdit() {
        this.props.onStartEdit(this.props.id);
    }

    @autobind
    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    @autobind
    handleSubmitEdit(value, id) {
        this.props.onSubmitEdit(value, id);
    }


}