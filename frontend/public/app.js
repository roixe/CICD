const apiUrl = 'http://localhost:3000/api/posts';

async function fetchPosts() {
  const res = await fetch(apiUrl);
  const posts = await res.json();
  const postsList = document.getElementById('posts');
  postsList.innerHTML = '';
  posts.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${post.title}</strong>: ${post.content} <button onclick="deletePost(${post.id})">🗑️</button>`;
    postsList.appendChild(li);
  });
}

async function deletePost(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchPosts();
}

document.getElementById('post-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  fetchPosts();
});

fetchPosts();
