import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';

const PlayMix = ({playMix, id, currentMix, playing, children}) => (
    <div className={`pointer ${id === currentMix && playing && `playing`}`} onClick={() => playMix({currentMix: id, fromMixcloud: false})}>
        {children}
    </div>
);

export default connect(
    state => state,
    actions
)(PlayMix);
