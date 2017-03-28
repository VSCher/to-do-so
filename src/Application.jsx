import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import * as acts from './redux/actions/baseActions';
import * as sortActs from './redux/actions/sortActions';

import InputTask from './components/InputTask';
import ListTasksContainer from './containers/ListTasksContainer';

function mapStateToProps(state) {
    return {
        tasks: state.base,
        abc: state.abc
    }
}

@connect(mapStateToProps)
export default class Application extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear Task List</button>
                <button onClick={this.handleSort}>Toggle Abc sort</button>
                <ListTasksContainer/>
                <InputTask onSubmit={this.handleAddTask}/>
            </div>
        );
    }

    @autobind
    handleSort() {
        this.props.dispatch(sortActs.sortAbc());
    }

    @autobind
    handleClear() {
        this.props.dispatch(acts.clearLocal());
    }

    @autobind
    handleAddTask(value, title) {
        this.props.dispatch(acts.addTask(value, title));
    }

}
