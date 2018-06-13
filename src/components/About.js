import React, {Component} from 'react';
import Counter from './Counter';
import Stat from './Stat';

const About = ({mixes}) => (
  <div className="ph3 ph4-l measure center">
    <div className="lh-copy mb4">
      <p className="mt0">
        Marmalade.fm features the latest and greatest in grooves, beats and world music. Whether
        you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have
        you covered!
      </p>
    </div>

    <div className="">
      <Stat statName="Featuring..." statNumber={mixes.length} statWord="Mixes" />
      <Stat
        statName="Played..."
        statNumber={mixes.reduce((accum, current) => accum + current.play_count, 0)}
        statWord="Mixes"
      />
      <Stat
        statName="With..."
        statNumber={mixes.reduce((accum, current) => accum + current.audio_length, 0) / 60}
        statWord="Minutes"
      />
    </div>
  </div>
);

export default About;
