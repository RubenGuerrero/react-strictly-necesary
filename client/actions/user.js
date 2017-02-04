const updateNameDone = (name) => ({
  type: 'UPDATE_NAME_DONE',
  name
});

export const updateName = (name) => {
  return (dispatch) => {
    dispatch(updateNameDone(name));
  }
}
