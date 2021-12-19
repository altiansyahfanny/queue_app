const initHome = {
    service: [],
};

export const homeReducer = (state = initHome, action) => {
    if (action.type === 'SET_SERVICE') {
        return {
            ...state,
            service: action.value,
        };
    }

    return state;
};
