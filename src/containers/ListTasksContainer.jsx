import React from 'react';
import { connect } from 'react-redux';

import ListTasks from '../components/ListTasks.jsx';
import { toggleTask, editTask, deleteTask }from '../redux/actions/baseActions'

function mapStateToProps(state) {
    return {
        tasks: state.base
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onMarkCompleted: (id)=> dispatch(toggleTask(id)),
        onEdit: (id)=> dispatch(editTask(id)),
        onDelete: (id)=> dispatch(deleteTask(id)),
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ListTasksContainer extends React.Component {
    render() {
        return <ListTasks {...this.props}/>;
    }
}
