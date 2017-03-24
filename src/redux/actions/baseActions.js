export const ADD_TASK = 'ADD_TASK';
export const CLEAR_LOCAL = 'CLEAR_LOCAL';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
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

export function toggleTask(id) {
    return {
        type: TOGGLE_TASK,
        id
    };
}

export function editTask(id) {
    return {
        type: EDIT_TASK,
        id
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id
    };
}