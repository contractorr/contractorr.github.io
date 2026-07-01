# contractorr.github.io

Personal site — built with [Jekyll](https://jekyllrb.com/), hosted on GitHub Pages.
GitHub Pages builds the site automatically on push; nothing to install or run.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Landing page (minimalist about-me) |
| `cv.html` | CV page, served at `/cv/` |
| `blog/index.html` | Blog index, served at `/blog/` |
| `_posts/` | Blog posts (markdown) |
| `_layouts/` | Shared page shells (`default`, `post`) |
| `assets/css/main.css` | The one stylesheet (light + dark mode) |
| `Raj-Contractor-CV.pdf` | Downloadable CV, linked from the CV page |

## Writing a blog post

Create a markdown file in `_posts/` named `YYYY-MM-DD-slug.md`:

```markdown
---
title: "My post title"
description: "Optional one-liner shown on the blog index."
---

Post content in markdown.
```

Commit, push — done. The post appears at `/blog/YYYY/MM/slug/` and on the
blog index and homepage automatically.

## Updating the CV

- Edit `cv.html` for the web version.
- Replace `Raj-Contractor-CV.pdf` for the downloadable version.
