import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { clearLocal, toggleTask } from './redux/actions/baseActions';

import AddTask from './containers/AddTask.jsx';
import ListTasksContainer from './containers/ListTasksContainer.jsx';

import Button  from 'react-bootstrap/lib/Button';

function mapStateToProps(state) {
    return {
        tasks: state.base
    }
}


function mapDispatchToProps() {
    return {}
}

@connect(mapStateToProps)
export default class Application extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log(this.props.tasks, 'app');
        return (
            <div>
                <ListTasksContainer/>
                <AddTask/>
                <Button onClick={this.handleClick}>ClearStore</Button>
            </div>
        );
    }

    @autobind
    handleClick() {
        this.props.dispatch(clearLocal());
    }
}
