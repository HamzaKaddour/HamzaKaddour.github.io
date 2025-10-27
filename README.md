# Personal Portfolio (GitHub Pages Template)

A clean, fast, no-build personal site you can host with **GitHub Pages**.

## Quick Start

1. **Create a new GitHub repo** (recommended name: `<your-username>.github.io`).
2. **Download this template** (`Code` ▸ `Upload files`) or push it via git.
3. Go to **Settings ▸ Pages** and set:
   - **Source**: `GitHub Actions`
4. The included workflow auto-deploys on every push to `main`. Your site will be live at:
   - `https://<your-username>.github.io/` (or `https://<your-username>.github.io/<repo>` if you use a different repo name).

## Customize

- Edit `index.html` sections (About, Projects, Publications, Blog, Contact).
- Replace placeholder images in `assets/img/`.
- Add your **CV** in `assets/docs/cv.pdf` and update the link.
- Update `site meta` (title, description, social preview) in `<head>` of `index.html`.
- Change theme colors in `css/style.css`.

## Local Preview

Just open `index.html` in a browser, or run a simple server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deployment

Push to `main`. GitHub Actions (see `.github/workflows/pages.yml`) builds and deploys to Pages automatically.

## License

MIT — see `LICENSE`.