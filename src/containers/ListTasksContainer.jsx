import React from 'react';
import { connect } from 'react-redux';

import ListTasks from '../components/ListTasks/ListTasks.jsx';
import { toggleMark, editStarted, editDone, deleteTask }from '../redux/actions/baseActions'

function mapStateToProps(state) {
    return {
        tasks: state.base,
        abc: state.abc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleMark: (id)=> dispatch(toggleMark(id)),
        onStartEdit: (id)=> dispatch(editStarted(id)),
        onDelete: (id)=> dispatch(deleteTask(id)),
        onSubmitEdit: (value, id)=> dispatch(editDone(value, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);