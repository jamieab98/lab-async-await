// Write your code here!

async function fetching() {
await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        const target = document.getElementById('test');
        target.textContent = error;
    });
}

async function displayPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    if(!response.ok) throw new Error(`Status: ${response.status}`);
    const postArray = await response.json();
    postArray.forEach(post => {
        const newItem = document.createElement('li');
        const newHeading = document.createElement('h1');
        newHeading.textContent = post.title;
        const newParagraph = document.createElement('p');
        newParagraph.textContent = post.body;
        newItem.appendChild(newHeading);
        newItem.appendChild(newParagraph)
        document.getElementById('post-list').appendChild(newItem);

    })
}

displayPosts();