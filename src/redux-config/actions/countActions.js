export const COUNT_TYPE = {
    increment: '[Event] On Increment Counter',
    decrement: '[Event] On Decrement Counter',
}

export const actionCount = {
    increment: (amount = 1) => ({
        type: COUNT_TYPE.increment,
        payload: amount
    }),
    decrement: (amount = 1) => ({
        type: COUNT_TYPE.decrement,
        payload: amount
    })
}