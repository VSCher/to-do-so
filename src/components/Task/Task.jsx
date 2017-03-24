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
            <div>
                <span className={this.props.completed ? "completed" : " uncompleted"}
                      onClick={this.handleEdit}>
                    {this.props.itemValue}
                </span>
                <span onClick={this.handleMarkCompleted}> Mark</span>
                <span onClick={this.handleDelete}> Delete</span>
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