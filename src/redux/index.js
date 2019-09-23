
import { createStore } from 'redux'
import { LOGIN } from './actions'



const initialState = {
    user: {},
};


const App = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}

const store = createStore(App);

export default store;
