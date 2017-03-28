import React from 'react';
import autobind from 'autobind-decorator';

import InputTask from '../../components/InputTask';

import './Task.css';

export default class Task extends React.Component {
    static propTypes = {
        completed: React.PropTypes.bool.isRequired,
        value: React.PropTypes.string.isRequired,
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

                {!!this.props.isOnEdit &&
                <InputTask id={this.props.id} value={this.props.value} onSubmit={this.handleSubmitEdit}/>}

                {!this.props.isOnEdit &&
                <span className="task__text" onClick={this.handleStartEdit}>
                    {this.props.value}
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