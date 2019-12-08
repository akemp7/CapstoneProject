import React from 'react';
import Home from './Home';
import NewSearchControl from './NewSearchControl';
import NewSearchForm from './NewSearchForm';
import Contribute from './Contribute';
import { Switch, Route } from 'react-router-dom';

function App(){
    return(
        <div>

            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default App;