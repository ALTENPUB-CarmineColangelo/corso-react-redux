export const USERS_TYPE = {
    request: '[Event] On Users Request',
    succes: '[Action] On Users Request Success',
    error: '[Action] On Users Request Error',
}

export const actionUsers = {
    request: () => ({
        type: USERS_TYPE.request
    }),
    success: (list) => ({
        type: USERS_TYPE.succes,
        payload: list
    }),
    error: (error) => ({
        type: USERS_TYPE.error,
        payload: error
    })
}