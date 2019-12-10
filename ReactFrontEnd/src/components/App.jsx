import React from 'react';
import Home from './Home';
import SearchResult from './SearchResult';
import NewSearchForm from './NewSearchForm';
import ContributeControl from './ContributeControl';
import NewContributeForm from './NewContributeForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterList: []
        };
        this.handleAddingNewSummary = this.handleAddingNewSummary.bind(this);
    }

    handleAddingNewSummary(newSumm) {
        let temp= this.state.masterList.slice();
        temp.push(newSumm);
        this.setState({masterList: temp});
    }

    render(){
        return(
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contribute" render={() => <NewContributeForm onNewContribution={this.handleAddingNewSummary} />} />
                <Route path="/contributions" render={() => <ContributeControl contributeList={this.state.masterList} />} />
                <Route path="/newsearch" component={NewSearchForm} />
//              <Route path="/results" component={SearchResult} />
                </Switch>
            </div>
        );
    }
}


export default App;