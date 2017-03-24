import * as acts from '../actions/baseActions';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

const localData = loadFromLocalStorage('todoso');
const initialState = localData ? localData : { base: [] };

function onEdit(state, { id }) {//ToDo Filter it
    console.log(state, 'onEdit');
    return state;
}

export default function (state, action) {
    const data = reducer(state, action);

    console.log(data, 'reducer data');
    saveToLocalStorage('todoso', data);
    return data;
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case acts.ADD_TASK :
            return [
                ...state,
                {
                    completed: false,
                    value: action.value,
                    id: action.id
                }
            ];

        case acts.TOGGLE_TASK :
            console.log(state, 'onToggle');
            return state.map(task=> {
                if (task.id === action.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }

                }
                return task
            });

        case acts.EDIT_TASK :
            return onEdit(state, action);

        case acts.DELETE_TASK :
            return state.filter(item=> item.id != action.id);

        case acts.CLEAR_LOCAL :
            return [];

        default :
            return state;
    }
}

