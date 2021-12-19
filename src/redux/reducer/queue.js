const initQueue = {
    inProgress: [],
    past: [],
};

export const queueReducer = (state = initQueue, action) => {
    if (action.type === 'SET_IN_PROGRESS') {
        return {
            ...state,
            inProgress: action.value,
        };
    }
    if (action.type === 'SET_PAST') {
        return {
            ...state,
            past: action.value,
        };
    }

    return state;
};
