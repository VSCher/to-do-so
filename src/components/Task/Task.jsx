import React from 'react';
import autobind from 'autobind-decorator';

import EditTaskContainer from '../../containers/EditTaskContainer.jsx';

import './Task.css';

export default class Task extends React.Component {
    static propTypes = {
        completed: React.PropTypes.bool.isRequired,
        value: React.PropTypes.string.isRequired,
        isOnEdit: React.PropTypes.bool.isRequired,
        onMark: React.PropTypes.func.isRequired,
        onEdit: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired,
    };

    render() {

        let taskClass = this.props.completed ? "task__completed" : "task__uncompleted";
        return (
            <div className={taskClass}>
                <span className="task__mark" onClick={this.handleMark}>[mark]</span>
                <span className="task__delete" onClick={this.handleDelete}>[delete]</span>

                {!!this.props.isOnEdit &&
                <EditTaskContainer id={this.props.id} value={this.props.value}/>}

                {!this.props.isOnEdit &&
                <span className="task__text" onClick={this.handleEdit}>
                    {this.props.value}
                </span>}


            </div>
        );
    }


    @autobind
    handleMark() {
        this.props.onMark(this.props.id);
    }

    @autobind
    handleEdit() {
        this.props.onEdit(this.props.id);

    }

    @autobind
    handleDelete() {
        this.props.onDelete(this.props.id);
    }

}