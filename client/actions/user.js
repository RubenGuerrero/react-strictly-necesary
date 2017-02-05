const updateNameDone = name => ({
  type: 'UPDATE_NAME_DONE',
  name
});

export const updateName = name => dispatch => {
  dispatch(updateNameDone(name));
};
