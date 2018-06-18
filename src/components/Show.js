import React, {Component} from 'react';
import {connect} from 'react-redux';

import differenceInDays from 'date-fns/difference_in_days';
import Stat from './Stat';

import actions from '../store/actions';

class Show extends Component {
  componentDidMount() {
    const {setFeaturedMix, id} = this.props;
    setFeaturedMix(id);
    // when we moutn we want to set the current mix in our
  }

  componentWillUnmount() {
    const {setFeaturedMix} = this.props;
    setFeaturedMix(false);
  }
  render() {
    const {tags, description, play_count, created_time, audio_length} = this.props;
    return (
      <div className="p3 ph4-l pad-bottom">
        <div className="measure center lh-copy">
          <Tags tags={tags} />
          <p>{description}</p>

          <Stat statName="Plays" statNumber={play_count} statWord="Times" />

          <Stat
            statName="Uploaded"
            statNumber={differenceInDays(new Date(), created_time)}
            statWord="days ago"
          />
          <Stat statName="Lasting for" statNumber={audio_length / 60} statWord="Minutes" />
        </div>
      </div>
    );
  }
}

const Tag = ({name, url}) => (
  <div className="mr2 mb2 o-70">
    <a
      href={url}
      target="_blank"
      className="block f6 link blue b ba bw1 b--blue br2 pv1 ph2 lh-title"
    >
      {name}
    </a>
  </div>
);
const Tags = ({tags = []}) => (
  <div className="tag flex flex-wrap">{tags.map(tag => <Tag {...tag} />)}</div>
);

//this is a selector it grabs a certain
// piece of data from our state
const getMix = (mixes, slug) => {
  const [mix = {}] = mixes.filter(mix => mix.slug === slug);
  return mix;
};

export default connect(
  (state, props) => ({
    ...getMix(state.mixes, props.match.params.slug)
  }),
  actions
)(Show);
