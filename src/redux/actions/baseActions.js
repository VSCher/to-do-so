export const BASE_ACTION = 'BASE_ACTION';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export function baseActions(message) {
    return {
        type: BASE_ACTION,
        message
    };
}

export function changeInput(value) {
    return {
        type: CHANGE_INPUT,
        value
    };
}