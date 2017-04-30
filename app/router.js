import React from 'react';

import * as steps from './steps.js';

/* components */
import GoalsList from './components/goals-list/goals-list.jsx';
import AddGoal from './components/add-new-goal/add-new-goal.jsx';
import ViewGoal from './components/view-goal/view-goal.jsx';
import RateGoal from './components/rate-goal/rate-goal.jsx';
import Feedback from './components/feedback/feedback.jsx';
import LineChartDetail from './components/view-goal/line-chart-detail.jsx';
import EditGoal from './components/edit-goal/edit-goal.jsx';

const router = (props, style) => {

  switch (props.step) {
  case steps.ADD_GOAL: {
    return <AddGoal
        newGoal={ props.newGoal }
        onInputGoal={ props.onInputGoal }
        onSelectAvatar={ props.onSelectAvatar }
        saveNewGoal={ props.saveNewGoal }
        triggerConfirmation={ props.triggerConfirmation }
        screenHeight={ props.screenHeight }
        dynamicStyle={ style }
      />;
  }
  case steps.VIEW_GOAL:
    return <ViewGoal
        currentGoal={ props.currentGoal }
        rateGoal={ props.stepRateGoal }
        stepLineChartDetail={ props.stepLineChartDetail }
        dynamicStyle={ style }
      />;
  case steps.RATE_GOAL:
    return <RateGoal
        currentGoal={ props.currentGoal }
        feedback={ props.stepFeedback }
        onMoveSlider={ props.onMoveSlider }
        setPreviousScore={ props.setPreviousScore }
        dynamicStyle={ style }
      />;
  case steps.FEEDBACK:
    return <Feedback
        currentGoal={ props.currentGoal }
        onInputFeedback={ props.onInputFeedback }
        saveRating={ props.saveRating }
        screenHeight={ props.screenHeight }
        dynamicStyle={ style }
      />;
  case steps.LINE_CHART_DETAIL:
    return <LineChartDetail
      currentGoal={ props.currentGoal }
      onSelectRating={ props.onSelectRating }
      dynamicStyle={ style }
    />;
  case steps.EDIT_GOAL:
    return <EditGoal
      goal={ props.currentGoal }
      newGoal={ props.newGoal }
      onInputEditGoal={ props.onInputEditGoal }
      onSaveEditGoal={ props.onSaveEditGoal }
    />;
  default:
    return <GoalsList
        goals={ props.goals }
        stepAddGoal={ props.stepAddGoal }
        onSelectGoal={ props.onSelectGoal }
        onBorderClick={ props.onBorderClick }
        onDeleteGoal={ props.onDeleteGoal }
        onEditGoal={ props.onEditGoal }
        toggleDeleteModal={ props.toggleDeleteModal }
        deleteModal={ props.deleteModal }
        dataLoaded={ props.dataLoaded }
      />;
  }
};

router.propTypes = {
  step: React.PropTypes.string,
  goals: React.PropTypes.array,
  stepAddGoal: React.PropTypes.func,
  onSelectGoal: React.PropTypes.func,
  onBorderClick: React.PropTypes.func,
  onDeleteGoal: React.PropTypes.func,
  onEditGoal: React.PropTypes.func,
  onSaveEditGoal: React.PropTypes.func,
  currentGoal: React.PropTypes.object,
  onInputGoal: React.PropTypes.func,
  onSelectAvatar: React.PropTypes.func,
  onMoveSlider: React.PropTypes.func,
  onInputFeedback: React.PropTypes.func,
  stepFeedback: React.PropTypes.func,
  stepRateGoal: React.PropTypes.func,
  newGoal: React.PropTypes.object,
  saveNewGoal: React.PropTypes.func,
  saveRating: React.PropTypes.func,
  triggerConfirmation: React.PropTypes.func,
  setPreviousScore: React.PropTypes.func,
  stepLineChartDetail: React.PropTypes.func,
  onSelectRating: React.PropTypes.func,
<<<<<<< HEAD
  toggleDeleteModal: React.PropTypes.func,
  onInputEditGoal: React.PropTypes.func,
=======
  dataLoaded: React.PropTypes.boolean,
  screenHeight: React.PropTypes.number,
>>>>>>> 67dd9c9e6262854f9e839a6d3255f97bffdf4295
};

export default router;
