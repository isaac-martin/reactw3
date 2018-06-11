import React, {Component} from 'react';

const Stat = ({statName, statNumber, statWord}) => (
  <div className="w-third tc pa3 ba bw2 b--light-gray" style={{marginRight: -2}}>
    <div className="f6 biryani ttu">{statName}</div>
    <div className="f5 b biryani-black ttu tracked">
      {statNumber} {statWord}
    </div>
  </div>
);

const About = props => (
  <div className="ph3 ph4-l">
    <div className="measure center lh-copy f4 ph3">
      <p>
        Marmalade.fm features the latest and greatest in grooves, beats and world music. Whether
        you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have
        you covered!
      </p>
    </div>

    <div className="flex pt3">
      <Stat statName="Featuring..." statNumber={11} statWord="Mixes" />
      <Stat statName="Played..." statNumber={114746} statWord="Mixes" />
      <Stat statName="With..." statNumber={64851} statWord="Seconds" />
    </div>
  </div>
);

export default About;
