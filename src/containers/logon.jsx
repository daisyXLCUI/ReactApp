import React, {Component} from 'react';
import { withRouter ,browserHistory as history } from 'react-router-dom';
import Header from '../commont/header.jsx';
import Footer from '../commont/footer.jsx';
import '../style/logon.css';

class Logon extends Component{
    constructor(props) {
        super(props);
    }

    onClickHandle(){
        const path = '/list';
        this.props.history.replace(path);
    }

    render(){
        return(
            <div>
                <Header/>
                <h1>这是登录页面</h1>
                <button onClick={this.onClickHandle.bind(this)}>Logon</button>
                <Footer/>
            </div>

        )
    }
}

export default withRouter(Logon);


