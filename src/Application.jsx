import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { clearLocal } from './redux/actions/baseActions';
import { sortAbc } from './redux/actions/sortActions';

import AddTask from './containers/AddTaskContainer.jsx';
import ListTasksContainer from './containers/ListTasksContainer.jsx';

import Button  from 'react-bootstrap/lib/Button';

function mapStateToProps(state) {
    return {
        tasks: state.base,
        abc: state.abc
    }
}

@connect(mapStateToProps)
export default class Application extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClearClick}>Clear Task List</Button>
                <Button onClick={this.handleSortClick}>Toggle Abc sort</Button>
                <ListTasksContainer/>
                <AddTask/>
            </div>
        );
    }

    @autobind
    handleClearClick() {
        this.props.dispatch(clearLocal());
    }

    @autobind
    handleSortClick() {
        this.props.dispatch(sortAbc());
    }
}
