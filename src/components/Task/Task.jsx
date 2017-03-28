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
        let markButtonText = this.props.completed ? "unmark" : "mark";

        return (
            <div className={taskClass}>

                {!this.state.isOnEdit &&
                <div>
                    <button className="task__mark" onClick={this.handleToggleMark}>{markButtonText}</button>
                    <button className="task__delete" onClick={this.handleDelete}>delete</button>
                    <button className="task__edit" onClick={this.handleStartEdit}>edit</button>
                </div>
                }
                <div className="task__container">
                    {this.state.isOnEdit &&
                    <InputTask
                        id={this.props.id}
                        title={this.props.title}
                        value={this.props.value}
                        onSubmit={this.handleSubmitEdit}
                    />}

                    {!this.state.isOnEdit &&
                    <div className="task__text">
                        <div className="task__title">
                            {this.props.title}
                        </div>
                        <div className="task__description">
                            {this.props.value}
                        </div>
                    </div>
                    }
                </div>

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