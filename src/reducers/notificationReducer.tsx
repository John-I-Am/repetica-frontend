const notificationReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data;
    default:
      return state;
  }
};

export const setNotification = (notification: string) => ({
  type: 'SET_NOTIFICATION',
  data: notification,
});

export default notificationReducer;
