import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../redux/actions/baseActions';

import InputTask from '../components/InputTask/InputTask.jsx';

function mapStateToProps(state) {
    return {
        tasks: state.base,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (value)=> dispatch(addTask(value)),

    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AddTaskContainer extends React.Component {
    render() {
        return <InputTask {...this.props} value=""/>;
    }
}
