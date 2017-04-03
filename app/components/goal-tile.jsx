import React from 'react';

import * as steps from './../steps.js';

const tile = props => {

  const goal = props.goal;
  const score = goal.ratings && goal.ratings.length ? goal.ratings[0].score : undefined;
  const pathAvatar = `./images/avatars/${goal.avatar}.svg`;

  return (
    <div
      className="goalTile"
      onClick={ () => { if (props.step === steps.GOALS_LIST) { props.onSelectGoal(goal); }}}
    >
      <div className="goalTile_progress"></div>
      <div className="goalTile_avatarContainer">
        <img className="goalTile_img" src={ pathAvatar } />
      </div>
      <div className="goalTile_nameContainer">
        <p>{ goal.name }</p>
      </div>
      <div className="goalTile_rating">
        <p>{ score }</p>
      </div>
    </div>
  );
};

tile.propTypes = {
  goal: React.PropTypes.object,
  step: React.PropTypes.string,
  onSelectGoal: React.PropTypes.func,
};

export default tile;
