const initialState = {
  instructors: []
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_ADMIN':
      return action.data;
    default:
      return state;
  }
};

export default admin;
