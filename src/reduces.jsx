import React, {Component} from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Logon from './containers/logon.jsx';
import List from './containers/list.jsx';

class Reduces extends Component {
    render(){
        return(
            <Router history={this.props.browserHistory}>
                <div>
                    <Route exact path={"/"} component={Logon}/>
                    <Route exact path={"/list"} component={List}/>
                </div>
            </Router>
        )
    }
}

export default Reduces;