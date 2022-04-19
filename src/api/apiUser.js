export const apiUser = async ({ id }) => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
}