import React from 'react';
import { connect } from 'react-redux';

import ListTasks from '../components/ListTasks/ListTasks.jsx';
import { toggleTask, editStarted, editTask, deleteTask }from '../redux/actions/baseActions'

function mapStateToProps(state) {
    return {
        tasks: state.base,
        abc: state.abc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onMark: (id)=> dispatch(toggleTask(id)),
        onEdit: (id)=> dispatch(editStarted(id)),
        onDelete: (id)=> dispatch(deleteTask(id)),
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ListTasksContainer extends React.Component {
    render() {
        return <ListTasks {...this.props}/>;
    }
}
