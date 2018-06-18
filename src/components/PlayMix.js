import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
import classNames from 'classnames';

const PlayMix = ({playMix, id, currentMix, playing, children, className, fromMixcloud}) => (
  <div
    className={classNames({
      [className]: className,

      //mixcloud takes control of playign the mix
      playing: id === currentMix && playing && fromMixcloud,
      // when we request to play a mix we need to show loading state
      // wd fo this by seeing where the event came from
      loading: id === currentMix && !playing && !fromMixcloud
    })}
    onClick={() => playMix({currentMix: id, fromMixcloud: false})}
  >
    {children}
  </div>
);

export default connect(
  state => state,
  actions
)(PlayMix);
