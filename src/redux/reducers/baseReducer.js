import { BASE_ACTION, CHANGE_INPUT } from '../actions/baseActions';

const initialState = { value: 0 };

function onBaseChanage(state, { message }) {

    return {
        value: state.value + 1,
        message
    }
}

function onChangeInput(state, { value }) {
    return {
        ...state,
        value
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case BASE_ACTION :
            return onBaseChanage(state, action);

        case CHANGE_INPUT :
            return onChangeInput(state, action);
        default :
            return state;
    }
}

