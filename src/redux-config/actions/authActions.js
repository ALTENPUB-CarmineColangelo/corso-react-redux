export const AUTH_TYPE = {
    request: '[Event] On Login',
    ok: '[Action] On Login success',
    ko: '[Action] On Login reject'
}

export const actionAuth = {
    request: ({ username, password }) => ({
        type: AUTH_TYPE.request,
        payload: {
            username,
            password
        }
    }),
    ok: () => ({
        type: AUTH_TYPE.ok
    }),
    ko: () => ({
        type: AUTH_TYPE.ko
    })
}