export const userTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});
