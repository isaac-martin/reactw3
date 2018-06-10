/* global Mixcloud */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';
import mixesData from '../data/mixes';

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: '',
      mixIds: mixesData,
      mix: null,
      mixes: []
    };
  }

  ///wonkysensitive/2018-mixtape-24/

  fetchMixes = async () => {
    const {mixIds} = this.state;
    mixIds.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com/${id}`);
        const data = await response.json();
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data]
        }));
      } catch (error) {
        console.log(error);
      }
    });
  };

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;

    this.widget.events.pause.on(() =>
      this.setState({
        playing: false
      })
    );

    this.widget.events.play.on(() =>
      this.setState({
        playing: true
      })
    );
  };

  componentDidMount() {
    this.mountAudio();
    this.fetchMixes();
  }

  actions = {
    togglePlay: () => {
      console.log('toggleplay');
      this.widget.togglePlay();
    },

    playMix: mixName => {
      const {currentMix} = this.state;
      if (mixName === currentMix) {
        return this.widget.togglePlay();
      }
      this.setState({
        currentMix: mixName
      });
      this.widget.load(mixName, true);
    }
  };
  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            {/* Featured Mix */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />
              {/* Routed page*/}
              {/* Passing state and actions down so we can use them*/}
              <Route exact path="/" component={() => <Home {...this.state} {...this.actions} />} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
            <iframe
              className="player db fixed bottom-0 z-5"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
              frameBorder="0"
              ref={player => (this.player = player)}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
