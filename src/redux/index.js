
import { createStore } from 'redux'
import { LOGIN, OPEN_MODAL, CLOSE_MODAL } from './actions'



const initialState = {
    user: {},
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            }

        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
            }


        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
            }
        default:
            return state;
    }


}

const store = createStore(reducer);

export default store;
