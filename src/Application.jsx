import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import * as actions from './redux/actions/baseActions'

import FormControl  from 'react-bootstrap/lib/FormControl';

function mapStateToProps(state) {
    return {
        value: state.base.value
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
        return (
            <div>
                <div>Echo {this.props.value} </div>
                <div onClick={this.handleClick}>Refresh</div>
                <FormControl
                    type="number"
                    value={this.props.value}
                    placeholder="Enter the number"
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }

    @autobind
    handleClick() {
        this.props.dispatch(actions.baseActions('test'));
    }

    @autobind
    handleInputChange(event) {
        let numberValue = parseInt(event.target.value);
        this.props.dispatch(actions.changeInput(numberValue));
    }
}
