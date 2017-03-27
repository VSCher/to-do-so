import React from 'react';
import { connect } from 'react-redux';

import InputTask from '../components/InputTask/InputTask.jsx';
import { editTask }from '../redux/actions/baseActions'

function mapStateToProps(state) {
    return {
        tasks: state.base,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (value, id)=> dispatch(editTask(value, id)),
    }
}


@connect(mapStateToProps, mapDispatchToProps)
export default class EditTaskContainer extends React.Component {
    render() {
        return <InputTask {...this.props} />;
    }
}
