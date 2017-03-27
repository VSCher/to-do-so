import { SORT_ABC } from '../actions/sortActions';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

const localStorageName = 'todosort';
const localData = loadFromLocalStorage(localStorageName);
const initialState = localData ? localData : false;

export default function (state, action) {
    const data = reducer(state, action);

    saveToLocalStorage(localStorageName, data);
    return data;
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case SORT_ABC :
            return !state;


        default :
            return state;
    }
}

