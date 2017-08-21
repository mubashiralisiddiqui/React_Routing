import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Books, BookDescription, History, Login, Header } from '../../components'


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <Header/> */}
                    <Route  path="/" component={Header} />
                    <Route exact path="/" component={Login} />         
                    <Route path="/books" component={Books} />
                    <Route path="/bookDiscription/:id" component={BookDescription} />

                </div>
            </Router>
        )
    }
}

