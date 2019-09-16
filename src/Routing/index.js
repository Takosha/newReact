import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './../modules/App/App'
import About from './../modules/About/about'

const AppRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />

        </Router>
    )
}


export default AppRouter;