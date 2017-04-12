import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/baseActions';
import Task from '../../components/Task';
import './ListTasksContainer.css';

function mapStateToProps(state) {
    return {
        tasks: state.base,
        abc: state.abc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleMark: (id)=> dispatch(actions.toggleMark(id)),
        onStartEdit: (id)=> dispatch(actions.editStarted(id)),
        onDelete: (id)=> dispatch(actions.deleteTask(id)),
        onSubmitEdit: (value, title, id)=> dispatch(actions.submitEdit(value, title, id)),
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ListTasksContainer extends React.Component {

    render() {
        let todoItems = this.props.tasks;

        if (this.props.abc) {
            todoItems = todoItems.slice(0).sort((a, b)=> {
                    let aValueLow = a.title.toLowerCase();
                    let bValueLow = b.title.toLowerCase();

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
                            title={item.title}
                            onToggleMark={this.props.onToggleMark}
                            onDelete={this.props.onDelete}
                            onSubmitEdit={this.props.onSubmitEdit}
                        />
                    );
                })}
            </div>
        );
    }
}