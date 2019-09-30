import { createStore } from 'redux'
import { LOGIN, OPEN_MODAL, CLOSE_MODAL, ADD_PET } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'



const initialState = {
    user: {},
    pet: {},
    isModalOpen: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            }

        case ADD_PET:
            return {
                ...state,
                pet: action.payload,
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

const store = createStore(reducer, composeWithDevTools());

export default store;
