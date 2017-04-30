import React from 'react';

import GoalTile from '../goal-tile.jsx';
import LoadingModal from './../loading-modal.jsx';


import * as steps from './../../steps.js';

const createListItem = (goal, fn) => (
  <li key={ goal.id } >
    <GoalTile
      goal={ goal }
      step={ steps.GOALS_LIST }
      onSelectGoal={ fn }
    />
  </li>
);

const GoalsList = ({ goals, stepAddGoal, onSelectGoal, dataLoaded, }) => {

  const goalsListItems = goals.map(goal => createListItem(goal, onSelectGoal));

  const dynamicStyle = {
    height: Math.max(window.innerHeight - 90, goals.length * 108 + 115),
  };

  const loading = !dataLoaded
    ? <LoadingModal />
    : null;

  return (
    <div className="page goals-list" style={ dynamicStyle }>
      <div className="goals-list-button-container">
        <div className="button-outer">
          <button
            type="button"
            name="button"
            className="goals-list-button"
            onClick={ stepAddGoal }
          >ADD A GOAL &nbsp;+</button>
        </div>
      </div>
      <div className="goals-list-list">
        <ul>{ goalsListItems }</ul>
      </div>
    </div>
  );
};

GoalsList.propTypes = {
  goals: React.PropTypes.array,
  stepAddGoal: React.PropTypes.func,
  onSelectGoal: React.PropTypes.func,
  dataLoaded: React.PropTypes.boolean,
};

export default GoalsList;
