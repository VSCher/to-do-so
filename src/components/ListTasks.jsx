import React from 'react';
import Task from './Task/Task.jsx';

export default class ListTasks extends React.Component {

    render() {
        let todoItems = this.props.tasks.map(item=> {
            return (
                <Task
                    key={item.id}
                    completed={item.completed}
                    itemValue={item.value}
                    onMark={()=> this.props.onMarkCompleted(item.id)}
                    onEdit={()=> this.props.onEdit(item.id)}
                    onDelete={()=> this.props.onDelete(item.id)}
                />
            );
        });

        return (
            <div>
                {todoItems}
            </div>
        );
    }

}