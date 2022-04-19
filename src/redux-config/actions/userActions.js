export const USER_TYPE = {
    request: '[Event] On User Request',
    succes: '[Action] On User Request Success',
    error: '[Action] On User Request Error',
}

export const actionUser = {
    request: (id) => ({
        type: USER_TYPE.request,
        payload: id
    }),
    success: (data) => ({
        type: USER_TYPE.succes,
        payload: data
    }),
    error: (error) => ({
        type: USER_TYPE.error,
        payload: error
    })
}