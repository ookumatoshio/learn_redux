export const FETCH_USERS = 'FETCH_USERS';
export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const OPEN_ERROR_DIALOG = 'OPEN_ERROR_DIALOG';

export const fetchUsers = (users) =>({
  type: FETCH_USERS,
  users,
});

export const showProgress = (flg) => ({
  type: SHOW_PROGRESS,
  flg,
});

export const openErrorDialog = (flg) => ({
  type: OPEN_ERROR_DIALOG,
  flg,
})