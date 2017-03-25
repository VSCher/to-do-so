import React from 'react';
import autobind from 'autobind-decorator';

import './Task.css';

export default class Task extends React.Component {
    static propTypes = {
        completed: React.PropTypes.bool.isRequired,
        itemValue: React.PropTypes.string.isRequired,
        onMark: React.PropTypes.func.isRequired,
        onEdit: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="task">
                <span className="task__mark" onClick={this.handleMarkCompleted}>Mark</span>
                <span className="task__delete" onClick={this.handleDelete}>Delete</span>
                <span className={this.props.completed ? "task__completed" : "task__uncompleted"}
                      onClick={this.handleEdit}>
                    {this.props.itemValue}
                </span>
            </div>
        );
    }

    @autobind
    handleMarkCompleted(event) {
        this.props.onMark(event);
    }

    @autobind
    handleEdit(event) {
        this.props.onEdit(event);
    }

    @autobind
    handleDelete(event) {
        this.props.onDelete(event);
    }

}