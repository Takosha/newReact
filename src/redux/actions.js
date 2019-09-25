export const LOGIN = 'LOGIN';
export const ADD_PET = 'ADD_PET'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'


export const onLogin = (user) => {
    return {
        type: LOGIN,
        payload: user,
    }
}
export const onAdd = (pet) => {
    return {
        type: ADD_PET,
        payload: pet,
    }
}

export const openModal = () => {
    return {
        type: OPEN_MODAL,
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
}