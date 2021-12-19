
const initStateRegister = {
    name: '',
    email: '',
    password: '',
}

export const registerReducer = (state = initStateRegister, action) => {
    if (action.type === 'SET_REGISTER') {
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
        }
    }
    return state
}

const initphoto = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
}

export const photoReducer = (state = initphoto, action) => {
    if (action.type === 'SET_PHOTO') {
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name,
        }
    }
    if (action.type === 'SET_UPLOAD_PHOTO') {
        return {
            ...state,
            isUploadPhoto: action.value,
        }
    }

    return state;
}