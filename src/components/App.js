import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';
import Show from './Show';
import About from './About';
import Archive from './Archive';
import Player from './Player';

import mixesData from '../data/mixes';
import actions from '../store/actions';

class App extends Component {
    fetchMixes = async () => {
        const {addMix} = this.props;

        mixesData.map(async id => {
            try {
                const response = await fetch(`https://api.mixcloud.com/${id}`);
                const data = await response.json();
                addMix(data);
            } catch (error) {
                console.log(error);
            }
        });
    };

    componentDidMount() {
        this.fetchMixes();
    }

    render() {
        const [firstMix = {}] = this.props.mixes;
        return (
            <Router>
                <div>
                    <div className="flex-l justify-end">
                        {/* Featured Mix */}
                        <FeaturedMix {...this.state} {...this.actions} {...firstMix} id={firstMix.key} />
                        <div className="w-50-l relative z-1">
                            <Header />
                            {/* Routed page*/}
                            {/* Passing state and actions down so we can use them*/}
                            <Route exact path="/" component={Home} />
                            <Route path="/archive" component={Archive} />
                            <Route path="/about" component={About} />
                            <Route path="/show/:slug" component={Show} />
                        </div>
                    </div>
                    <Player />
                </div>
            </Router>
        );
    }
}

export default connect(
    state => state,
    actions
)(App);
