export const selectorUsersLoading = (store) => store.users?.loading || false;
export const selectorUsersList = (store) => store.users?.list || [];
export const selectorUsersError = (store) => store.users?.error;