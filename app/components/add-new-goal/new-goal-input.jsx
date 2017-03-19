import React from 'react';

class NewGoalInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputGoal(event.target.value);
  }

  render() {
    return (
      <div className="newGoal_inputContainer-inner">
        <textarea
          name="new-goal"
          id="newGoalInput"
          maxLength="50"
          value={ this.props.newGoal.name }
          placeholder="My goal is..."
          className="newGoal_input"
          type="text"
          onKeyUp={ this.handleChange }
          onChange={ this.handleChange }
          autoFocus
        />
      </div>
    )
  };
}

export default NewGoalInput;