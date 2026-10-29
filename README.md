# THE TWENTY EDITION

A static birthday website for Jin Qi. It uses only HTML, CSS, and JavaScript—no build step, database, or server is required.

## Personalise it

1. Put private photos (and optionally one music file) in `assets/`.
2. Open `config.js` and change the name, age, cover image, portrait image paths/titles, note, wishes, and optional `musicPath`.
3. Keep image paths relative to `index.html`, for example `assets/jinqi-cover.jpg`.

The edition includes a soft built-in ambient loop that starts when the recipient opens the edition; the Sound button can then pause it. To use your own local music instead, add its path to `music.path` in `config.js`; nothing is uploaded or fetched from a third-party image service.

## Run locally

Open `index.html` in a modern browser, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Commit and push this directory to a GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and `/ (root)` folder, then save.
4. Open the Pages URL GitHub supplies.

All references are relative, so it works on a GitHub Pages project subpath such as `https://username.github.io/repository-name/`.

## Checks before sharing

- Replace all placeholder images in `config.js`.
- If adding music, set `musicPath`; playback remains user-initiated.
- Test the edition in a phone browser and use the photo viewer arrows, Escape key, and swipes.
