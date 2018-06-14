/* global Mixcloud */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';

class Player extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentMix !== this.props.currentMix) {
            console.log('new mix!', nextProps.currentMix);
            this.widget.load(nextProps.currentMix, true);
        }
    }
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

    componentDidMount() {
        this.mountAudio();
    }

    render() {
        return (
            <iframe
                className="player db fixed bottom-0 z-5"
                width="100%"
                height="60"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
                frameBorder="0"
                ref={player => (this.player = player)}
            />
        );
    }
}

export default connect(
    state => state,
    actions
)(Player);
