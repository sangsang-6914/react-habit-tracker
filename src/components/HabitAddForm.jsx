import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  console.log('habitform');
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };
  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input
        ref={inputRef}
        type="text"
        className="input_box"
        placeholder="add habit.."
      />
      <button className="btn_common">Add</button>
    </form>
  );
});

export default HabitAddForm;
