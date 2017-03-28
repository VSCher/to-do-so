export const ADD_TASK = 'ADD_TASK';
export const CLEAR_LOCAL = 'CLEAR_LOCAL';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_STARTED = 'EDIT_STARTED';
export const EDIT_DONE = 'EDIT_DONE';
export const DELETE_TASK = 'DELETE_TASK';

let taskID = parseInt(Math.random().toString(36).substr(2, 5), 36);

export function addTask(value) {
    return {
        type: ADD_TASK,
        id: taskID++,
        value
    };
}
export function clearLocal() {
    return {
        type: CLEAR_LOCAL,
    };
}

export function toggleMark(id) {
    return {
        type: TOGGLE_TASK,
        id
    };
}

export function editStarted(id) {
    return {
        type: EDIT_STARTED,
        id
    };
}


export function editDone(value, id) {
    return {
        type: EDIT_DONE,
        value,
        id,
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id
    };
}