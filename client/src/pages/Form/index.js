import { useReducer } from 'react';
import { useStore } from '../../store';

import { reducer, actions, initial_state } from './form_reducer';

function Form() {
  const { setGlobalState } = useStore();
  const [state, dispatch] = useReducer(reducer, initial_state);

  const handleInputChange = e => {
    const prop = e.target.name;
    const value = e.target.value;

    switch (prop) {
      case 'username':
        dispatch({
          type: actions.UPDATE_USERNAME,
          payload: value
        });
        break;
      case 'taskText':
        dispatch({
          type: actions.UPDATE_TASK_TEXT,
          payload: value
        });
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    setGlobalState(oldState => ({
      ...oldState,
      tasks: [
        ...oldState.tasks,
        {
          text: state.taskText,
          username: state.username,
        }
      ]
    }));

    dispatch({
      type: 'UPDATE_USERNAME',
      payload: ''
    });
    dispatch({
      type: 'UPDATE_TASK_TEXT',
      payload: ''
    });
  };

  return (
    <>
      <h1>Add a Task</h1>

      <form onSubmit={handleSubmit}>
        <input name="username" value={state.username} type="text" onChange={handleInputChange} placeholder="Enter your username" />
        <input name="taskText" value={state.taskText} type="text" onChange={handleInputChange} placeholder="Enter your todo text" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form;