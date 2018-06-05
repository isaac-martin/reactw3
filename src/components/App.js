import React, {Component} from 'react';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flex-l justify-end">
          {/* Featured Mix */}
          <FeaturedMix />
          <div className="w-50-l relative z-1">
            <Header />
            {/* Routed page*/}
          </div>
          <iframe
            className="player db fixed bottom-0 z-5"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}

export default App;
