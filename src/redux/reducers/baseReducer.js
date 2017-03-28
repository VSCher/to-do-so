import * as acts from '../actions/baseActions';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

const localStorageName = 'todotasks';
const localData = loadFromLocalStorage(localStorageName);
const initialState = localData ? localData : [];

export default function (state, action) {
    const data = reducer(state, action);

    saveToLocalStorage(localStorageName, data);
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
                    id: action.id,
                    isOnEdit: false
                }
            ];

        case acts.TOGGLE_TASK :
            return state.map(task=> {
                if (task.id === action.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }

                }
                return task
            });

        case acts.EDIT_STARTED :
            return state.map(task=> {
                if (task.id === action.id) {
                    return {
                        ...task,
                        isOnEdit: true
                    }

                }
                return task
            });

        case acts.EDIT_DONE :
            return state.map(task=> {
                if (task.id === action.id) {
                    return {
                        ...task,
                        value: action.value,
                        isOnEdit: false,

                    }

                }
                return task
            });

        case acts.DELETE_TASK :
            return state.filter(item=> item.id != action.id);

        case acts.CLEAR_LOCAL :
            return [];

        default :
            return state;
    }
}

