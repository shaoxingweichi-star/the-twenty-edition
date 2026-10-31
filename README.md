# THE TWENTY EDITION

A static birthday website for Jin Qi. It uses only HTML, CSS, and JavaScript—no build step, database, or server is required.

## Personalise it

1. Put photos (and optionally one authorised music file) in `assets/`.
2. Open `config.js` and change the name, age, cover image, portrait image paths/titles, note, wishes, optional `music.path`, and `easterEgg`.
3. Keep image paths relative to `index.html`, for example `assets/jinqi-cover.jpg`.

The edition includes a soft built-in ambient loop that starts when the recipient opens the edition; the Sound button can then pause it. To use your own local music instead, add its path to `music.path` in `config.js`. Publishing this project uploads its assets to your hosting provider. Photos in a public repository are public; the birthday code is a decorative gate and provides no real access protection.

## Birthday film

The final “One more thing” button opens an isolated, accessible full-screen film. Edit `easterEgg` in `config.js`: copy, four stage durations (milliseconds), and photo references with `portraitIndex` and `position`. Indices start at zero and reuse existing portraits; optional `image` overrides a photo path. Default stages run 4 / 8 / 9 / 9 seconds. The ending stays until Return or Close is pressed. Dedication fades in over 1.5 seconds. Skip opens the complete ending, Replay resets the single timeline, Escape closes, and Tab stays inside the dialog.

The film shares the magazine audio controller; it preserves the existing mute choice. Sound starts only from an actual click. If a browser blocks playback, tap Enable sound again. A failed local track can fall back to the built-in synthesised ambient sound when enabled. No third-party music is used. Backgrounding pauses the timeline and stops audio; returning resumes the visual timeline but requires a new tap to restart sound. Reduced-motion users go directly to the ending. Failed photos leave a dark editorial background and readable captions. Reloading never restores an open film.

Run locally and validate the full 30-second sequence, skip/replay/close, background/return, keyboard focus, missing assets and reduced motion. iPhone WeChat, Safari audio interruption, safe-area behaviour and screenshot framing require physical-device verification before sharing. Local edits do not update the live site until explicitly committed and pushed.

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
- If adding music, set `music.path`; playback remains user-initiated.
- Test the edition in a phone browser and use the photo viewer arrows, Escape key, and swipes.
