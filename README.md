# WordCrown

English word cards for iPhone (EN ↔ RU) with images, British pronunciation, a session timer with a reward video, and a 20-level princess progression.

| File | What it is |
|---|---|
| `index.html` | The app she uses on the iPhone |
| `editor.html` | **WordCrown Studio**: your editor on the PC |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make it installable and work offline |

---

## 1. Put it online (GitHub Pages, one time, about 10 minutes)

1. Create a free account at github.com.
2. Click **+ → New repository**. Name it `wordcrown`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**. Drag in **everything inside this folder**: `index.html`, `editor.html`, `pool.json`, `manifest.webmanifest`, `sw.js`, `README.md` and the `icons` folder. Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Branch*, choose `main` and `/ (root)`, then **Save**.
5. After about 1 minute, the site is live at:
   - App: `https://YOUR-NAME.github.io/wordcrown/`
   - Editor: `https://YOUR-NAME.github.io/wordcrown/editor.html`

To update later, upload the changed file to the repo again. The phone picks up the new version the next time she opens the app while online.

## 2. Install on her iPhone

1. Open the app link in **Safari**. It must be Safari, not Chrome or Telegram's built-in browser.
2. Tap **Share → Add to Home Screen → Add**.
3. Open WordCrown from the Home Screen icon. From then on it runs full-screen and works offline.

> Always open it from the icon. The icon version keeps its own storage, separate from Safari.

## 3. Make words (on your PC)

Open `editor.html` in Chrome or Edge, either from the GitHub link or by double-clicking the file. Words are saved automatically in that browser.

- **Excel:** fill in `WordCrown_words_template.xlsx` (English | IPA | Russian | Example | Image), then click **Import Excel**.
- **Images:** click **Add images**, or drag the picture files onto the page. A file named like the word (`apple.jpg`, `ice_cream.png`) or like the Excel *Image* column is matched automatically. Images are shrunk to keep the pool light.
- **No image, no save.** The word form will not save without an image, and words still missing one are never exported. The **No image** filter shows which words need one.
- **Order matters** for the *First N* setting. Excel row order is study order; use ↑ ↓ to adjust.
- **Media & levels** tab: the reward video (1:1, ~20 s, MP4 with sound), the two 16:9 button animations (GIF, animated WebP or a silent MP4), and 20 level pictures and names. Words per level defaults to 100.

## 4. Send words to her

**Easiest: through GitHub.** The app loads `pool.json` from the site by itself every time she opens it online, and only downloads it when it has changed. Her progress is always kept.

1. In Studio, click **Export pool** → choose **All words** → tick *Include video…* → **Download**. The file is saved as `pool.json`.
2. On GitHub: **Add file → Upload files** → drop `pool.json` → **Commit changes**. It replaces the old one.
3. Next time she opens WordCrown with internet, the new words appear.

Keep `pool.json` under 25 MB (GitHub's limit for web uploads).

**Or by hand** (no GitHub needed):

1. In Studio, click **Export pool** → **Download**. Pick *All words* the first time; after that, *Only new & changed* is enough. Tick *Include video…* when you change media.
2. Send the `.json` file through Telegram, WhatsApp, AirDrop or email.
3. On her iPhone: save the file to **Files** (in Telegram: tap the file → Share → **Save to Files**).
4. In WordCrown: **Settings → Import word pool** → pick the file.

New words are added, edited words are updated, and **her progress is never lost**.

## 5. How learning works

- She chooses a session length from 5 to 45 min, then taps **Begin session**.
- The card shows the English word with IPA and a 🔊 button, or the Russian word (direction: EN→RU, RU→EN or Mix).
- She taps **I know it** or **I can't recall**. The card flips to show the translation, the picture, an example sentence (with 🔊) and her progress pips.
- A correct answer is **+1**; a miss is **−2**. At **5** (adjustable 2–10) the word becomes **Learned**. If she was too optimistic, *Actually, I got it wrong* fixes it.
- Learned words come back for review after 2, 5, 12, 30, 60 and 120 days. Missing a review sends the word back to practice.
- Words to study: **All** (20 in rotation at a time), **Picked** (chosen in the Words tab with *Select*), or **First N** (10/15/20/30/custom; when one is learned, the next joins).
- When the timer ends: *Time's up* → she taps **Play my reward** → your video plays with sound. iPhone requires a tap before playing sound, which is why there is a button.
- Minutes count only while the app is open on screen.

## 6. Safety net

- **Settings → Back up everything** saves words, progress and settings to one file. Importing that file restores it all.
- In Studio, keep an *All words* export of your own as your master copy.

## Notes

- The Excel import uses a small library loaded from the internet, so the PC needs to be online.
- Pronunciation uses the iPhone's British voice. For a better voice: iPhone **Settings → Accessibility → Spoken Content → Voices → English (UK)** → download an *Enhanced* voice, then choose it in WordCrown → Settings → Voice.
- Deleting a word in Studio does not delete it from her phone. She can delete it in the app (Words → tap the word → Delete word).
