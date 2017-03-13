// import actions here
import stepAddGoal from './../actions/goals-list.js';

// steps
import * as steps from './../steps.js';

const defaultState = {
  // app state here
  goals: [
    {
      id: 0,
      name: 'Eat more pizza',
      created: 1488984810654,
      avatar: 'sprout',
      status: 0,
      currentRating: 7,
      ratings: [],
    },
    {
      id: 1,
      name: 'Drink more champagne',
      created: 1488984810658,
      avatar: 'pumpkin',
      status: 0,
      currentRating: 8,
      ratings: [],
    },
    {
      id: 2,
      name: 'Be cool',
      created: 1488984810658,
      avatar: 'pepper',
      status: 0,
      currentRating: 10,
      ratings: [],
    },
  ],
  step: steps.GOALS_LIST,
  previousStep: null,
  newGoal: {
    name: '',
    avatar: ''
  },
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'STEP_ADD_GOAL':
      return {
        ...state,
        step: steps.ADD_GOAL,
        previousStep: steps.GOALS_LIST,
      }
    case 'INPUT_GOAL':
      return {
        ...state, newGoal: {
          ...state.newGoal, name: action.input,
        },
      }
    default:
      return state;
  }
};
