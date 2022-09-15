import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './HabitAddForm';

class Habits extends Component {
  handleOnAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleOnAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          reset
        </button>
      </>
    );
  }
}

export default Habits;
