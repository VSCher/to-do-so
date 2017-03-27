import React from 'react';
import Task from '../Task/Task.jsx';

import './ListTasks.css';

export default class ListTasks extends React.Component {

    render() {
        let todoItems = this.props.tasks;
        if (this.props.abc) {
            todoItems = todoItems.slice(0).sort((a, b)=> {
                    if (a.value > b.value) return 1;
                    if (a.value < b.value) return -1;
                }
            );
        }

        return (
            <div className="list-tasks">
                {todoItems.map(item=> {
                    return (
                        <Task
                            key={item.id}
                            completed={item.completed}
                            id={item.id}
                            value={item.value}
                            isOnEdit={item.isOnEdit}
                            onMark={this.props.onMark}
                            onEdit={this.props.onEdit}
                            onDelete={this.props.onDelete}
                        />
                    );
                })}
            </div>
        );
    }
}