import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux'
import App from './../modules/App/App'
import About from './../modules/About/about'

console.log(store)


const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
            </Router>
        </Provider>
    )
}


export default AppRouter;