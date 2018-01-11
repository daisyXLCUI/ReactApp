import React ,{ Component }from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter';

class TodoApp extends Component{
    render(){
        return(
            <div>
                <Todos/>
                <Filter/>
            </div>
        );
    }
}

export default TodoApp;