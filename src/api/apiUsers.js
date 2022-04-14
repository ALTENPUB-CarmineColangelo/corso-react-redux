export const apiUsers = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}