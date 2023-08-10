export const initial_state = {
  taskText: '',
  username: ''
};

export const actions = {
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_TASK_TEXT: 'UPDATE_TASK_TEXT'
};

export const reducer = (state, actionObj) => {
  switch (actionObj.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: actionObj.payload
      };
    case 'UPDATE_TASK_TEXT':
      return {
        ...state,
        taskText: actionObj.payload
      }
  }
};