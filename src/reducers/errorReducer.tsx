const errorReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'EMAIL_TAKEN':
      return action.data;
    default:
      return state;
  }
};

export const setError = (error: string) => ({
  type: 'EMAIL_TAKEN',
  data: error,
});

export default errorReducer;
