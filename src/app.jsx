import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Router, Redirect, IndexRoute, hashHistory} from 'react-router';


import Header from './commont/header.jsx';
import Footer from './commont/footer.jsx';
import Logon from './containers/logon.jsx';


class Title extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Logon/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Title />, document.querySelector('#app'));

