export const OPEN_ERROR_DIALOG = 'OPEN_ERROR_DIALOG';

export const openErrorDialog = (error) => ({
  type: OPEN_ERROR_DIALOG,
  payload: {
    message: error.message,
    open: true,
  },
})