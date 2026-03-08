// Load posts from markdown files in posts/ directory
async function loadPosts() {
    try {
        const response = await fetch('posts/index.json');
        const posts = await response.json();
        
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = '';

        posts.forEach(post => {
            const postEl = document.createElement('article');
            postEl.className = 'post';
            postEl.innerHTML = `
                <h3>${post.title}</h3>
                <div class="post-date">${new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}</div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="posts/${post.file}">Read more →</a>
            `;
            postsList.appendChild(postEl);
        });
    } catch (error) {
        console.log('Posts will be loaded when added');
    }
}

// Load posts on page load
document.addEventListener('DOMContentLoaded', loadPosts);
