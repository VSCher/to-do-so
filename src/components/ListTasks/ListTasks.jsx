import React from 'react';
import Task from '../Task';

import './ListTasks.css';

export default class ListTasks extends React.Component {

    render() {
        let todoItems = this.props.tasks;

        if (this.props.abc) {
            todoItems = todoItems.slice(0).sort((a, b)=> {
                    let aValueLow = a.value.toLowerCase();
                    let bValueLow = b.value.toLowerCase();

                    if (aValueLow > bValueLow) return 1;
                    if (aValueLow < bValueLow) return -1;
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
                            onToggleMark={this.props.onToggleMark}
                            onStartEdit={this.props.onStartEdit}
                            onDelete={this.props.onDelete}
                            onSubmitEdit={this.props.onSubmitEdit}
                        />
                    );
                })}
            </div>
        );
    }
}