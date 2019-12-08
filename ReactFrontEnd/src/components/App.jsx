import React from 'react';
import Home from './Home';
import SearchResult from './SearchResult';
import NewSearchForm from './NewSearchForm';
import Contribute from './Contribute';
import { Switch, Route } from 'react-router-dom';

function App(){
    return(
        <div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contribute" component={Contribute} />
                <Route path="/newsearch" component={NewSearchForm} />
                <Route path="/results" component={SearchResult} />
            </Switch>
        </div>
    );
}

export default App;