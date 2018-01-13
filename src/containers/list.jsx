import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class List extends Component{

    render(){
        return(
            <h1>This is list page!!!</h1>
        )
    }
}

export default withRouter(List);


