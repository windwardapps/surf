const initialState = {
  user: { type: '' },
  links: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      return action.data;
    default:
      return state;
  }
};

export default app;
