export const selectorUserLoading = (store) => store.user?.loading || false;
export const selectorUserData = (store) => store.user?.data;
export const selectorUserError = (store) => store.user?.error;