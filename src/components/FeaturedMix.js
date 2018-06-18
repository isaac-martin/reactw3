import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PlayMix from './PlayMix';
import PlayButton from './PlayButton';

const FeaturedMix = ({name, pictures = {}, picture_primary_color, title, id, slug, ...props}) => (
  <div
    className="w-50-l vh-100 flex items-center justify-center cover bg-center pad-bottom fixed-l left-0 mix-overlay"
    style={{
      backgroundImage: `url(${pictures.extra_large})`,
      backgroundColor: `#${picture_primary_color}`
    }}
  >
    <div className="w-100 tc pa3 relative z-2">
      <p className="b biryani white ttu f6">{title}</p>
      <h1 className="mix-title mt0 mb3 anton white ttu">{name}</h1>
      <Link to={`/show/${slug}`} className="absolute absolute--fill z-3" />
      <PlayMix id={id} className="relative pointer z-5">
        <PlayButton />
      </PlayMix>
    </div>
  </div>
);

// on show page we will set the deatured mix to be the currently viewwd mix
// if a mix playing we weill set that

//if none of the above show featured mix as first mix
const getMix = state => {
  //if we have a featuredmx in redux we show that
  // if theres currently playing show that
  // otherwise show the first mix

  let featuredMix;

  if (state.featuredMix) {
    [featuredMix] = state.mixes.filter(mix => mix.id === state.featuredMix);
  } else {
    [featuredMix] = state.mixes.filter(mix => mix.id === state.currentMix);
  }

  const [firstMix = {}] = state.mixes;
  //return featured mix if it exists - if not return firstMix
  return featuredMix || firstMix;
};

const getTitle = state => {
  if (state.featuredMix) {
    return 'currently viewing';
  } else if (state.currentMix && state.playing) {
    return 'currently playing';
  } else {
    return 'featured mix';
  }
};

export default connect(state => ({
  ...getMix(state),
  title: getTitle(state)
}))(FeaturedMix);
