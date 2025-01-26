// export function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
// }

// function celciustoFahrenheit(celcuis) {
//     return (celcuis * 5)/9 + 32;
// }

const post = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'}
];

const getPosts = () => post;

export const getPostsLength = () => post.length;

export default getPosts;

 