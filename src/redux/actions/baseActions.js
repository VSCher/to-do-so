export const ADD_TASK = 'ADD_TASK';
export const CLEAR_LOCAL = 'CLEAR_LOCAL';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SUBMIT_EDIT = 'SUBMIT_EDIT';
export const DELETE_TASK = 'DELETE_TASK';

let taskID = parseInt(Math.random().toString(36).substr(2, 5), 36);

export function addTask(value, title) {
    return {
        type: ADD_TASK,
        id: taskID++,
        value,
        title
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

export function submitEdit(value, title, id) {
    return {
        type: SUBMIT_EDIT,
        value,
        title,
        id,
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id
    };
}