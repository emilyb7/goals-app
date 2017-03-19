import React from 'react';
import GoalTileComponent from '../goal-tile.jsx'
import ProgressBarComponent from './progress-bar.jsx'

const viewGoal = ( { currentGoal } ) => {
  const ratings = [5, 6, 7];
  const progressBars = ratings.map( rating =>
     <ProgressBarComponent
       key={rating}
       rating={rating}
       time={"today"} />
   );

  return (
    <div className="view-goal">
      <div className="view-goal-goal-tile-container">
        <GoalTileComponent goal={currentGoal} />
      </div>
      <div className="view-goal-progress-container">
        {progressBars}
      </div>
      <div className="line-chart-container">
        <div className="line-chart-title">
          <p>Line chart</p>
          <img src="" className="line-chart-arrow" />
        </div>
        <div className="line-chart-img">
          <img src="images/line-chart-placeholder.png" />
        </div>
      </div>

      <div className="view-goal-buttonContainer">
        <div className="button-outer">
          <button
            type="button"
            name="button"
            className="new-rating-button"
          >New Rating</button>
        </div>
      </div>
    </div>
  )
}

export default viewGoal;
