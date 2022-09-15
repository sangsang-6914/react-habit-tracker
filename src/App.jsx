import React from 'react';
import './App.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends React.Component {
  state = {
    habits: [
      {
        id: 1,
        name: 'Reading',
        count: 0,
      },
      {
        id: 2,
        name: 'Running',
        count: 0,
      },
      {
        id: 3,
        name: 'Coding',
        count: 0,
      },
    ],
    habitCount: 0,
    addHabit: '',
  };
  handleIncrement = (habit) => {
    console.log(habit);
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({ habits });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let maxId = 0;
    if (this.state.habits.length) {
      maxId = Math.max(...this.state.habits.map((habit) => habit.id));
    }

    const habit = {
      id: maxId + 1,
      name: this.state.addHabit,
      count: 0,
    };
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };
  handleChange = (event) => {
    this.setState({ addHabit: event.target.value });
  };
  handleAdd = (name) => {
    let maxId = 0;
    if (this.state.habits.length) {
      maxId = Math.max(...this.state.habits.map((habit) => habit.id));
    }

    const habit = {
      id: maxId + 1,
      name,
      count: 0,
    };

    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
