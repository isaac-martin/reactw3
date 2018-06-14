import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stat from './Stat';

const About = ({mixes}) => (
    <div className="ph3 ph4-l pad-bottom">
        <div className="measure center lh-copy">
            <p className="mt0">Marmalade.fm features the latest and greatest in grooves, beats and world music. </p>

            <p className="mb4">Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have you covered!</p>

            <Stat statName="Featuring..." statNumber={mixes.length} statWord="Mixes" />
            <Stat statName="Played..." statNumber={mixes.reduce((accum, current) => accum + current.play_count, 0)} statWord="Mixes" />
            <Stat statName="With..." statNumber={mixes.reduce((accum, current) => accum + current.audio_length, 0) / 60} statWord="Minutes" />
        </div>
    </div>
);

export default connect(state => state)(About);
