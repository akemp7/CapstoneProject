import React from 'react';
import Home from './Home';
import NewSearchControl from './NewSearchControl';
import NewSearchForm from './NewSearchForm';
import Contribute from './Contribute';
import { Swith, Route } from 'react-router-dom';

function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contribute" component={Contribute} />
                <Route path="/search" component={NewSearchForm} />
                <Route path="/mysearch" component={NewSearchControl} />
            </Switch>
        </div>
    )
}

export default App;