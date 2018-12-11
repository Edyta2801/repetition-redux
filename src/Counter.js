

const counter = (value = 1) => ({
  
  value
});

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state + action.value);
    default:
      return state;
  }
};
