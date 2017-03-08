import React from 'react';

const goalsList = props => {

  const goals = props.store.goals;

  const goalsListItems = goals.map(goal => {
    return <li key={ goal.id }>{ goal.name }</li>
  });

  const style = {
    background: 'url(app/public/images/goals-list/background.png)',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className="page goalsList"
      style={ style }
      >
      <div className="goalsList_buttonContainer">
        <div className="button-outer">
          <button type="button" name="button" className="goalsList_button">ADD A GOAL &nbsp;+</button>
        </div>
      </div>
      <div className="goalsList_list">
        <ul>
          { goalsListItems }
        </ul>
      </div>
    </div>
  )
};

export default goalsList;
