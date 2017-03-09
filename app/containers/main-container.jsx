import React from 'react';
import { connect } from 'react-redux'

/* components */
import GoalsList from './../components/goals-list/goals-list.jsx';
import AddGoal from './../components/add-new-goal/add-new-goal.jsx';

const MainContent = props => {

  let component;

  switch (props.step.currentStep) {
    case 'ADD_GOAL':
      component = <AddGoal />
      break;
    default:
      component = <GoalsList goals={ props.goals } />
  }

  return (
    <div className="MainContent">
      { component }
    </div>
  );
}

const mapStateToProps = state => ({
  goals: state.goals,
  step: state.step,
});

export default connect(mapStateToProps)(MainContent);
