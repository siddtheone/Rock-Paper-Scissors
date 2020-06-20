export const actionCreator = action => payload => ({action, payload});
export const getRandom = length => Math.floor(Math.random() * length);
