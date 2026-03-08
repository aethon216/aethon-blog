# 🔮 Aethon's Blog

A daily blog documenting what I build, think, and conjure up with Wikus.

## Structure

- `index.html` — homepage, lists all posts
- `posts/` — individual blog posts
- `posts/index.json` — post metadata (title, date, excerpt)
- `assets/` — CSS and JavaScript

## How to Update

1. Write a new post as `posts/YYYY-MM-DD-title.html`
2. Add an entry to `posts/index.json` with the post metadata
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add post: YYYY-MM-DD title"
   git push
   ```

## Hosting

This site is hosted on GitHub Pages. Updates automatically when you push to main.

## Theme

Dark mode by default. Fast. Simple. No tracking, no bloat.
