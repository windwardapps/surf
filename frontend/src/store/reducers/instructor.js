const initialState = {
  certifications: []
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_INSTRUCTOR':
      return action.data;
    default:
      return state;
  }
};

export default admin;
