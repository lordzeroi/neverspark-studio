# Neverspark Studio Website

Static v1 website for Neverspark Studio / LordZeroi games.

## Files

- `index.html` - homepage layout
- `styles.css` - visual design
- `script.js` - loads and renders the games list
- `games.json` - edit this when adding or updating games
- `assets/race-desk-cover.png` - local Race Desk cover visual

## Hosting on GitHub Pages

1. Create a GitHub repository named `lordzeroi.github.io`.
2. Upload the files from this folder to the repository root.
3. Open the repository settings.
4. Go to Pages.
5. Set the source to the main branch.

The site will use the free address:

```text
https://lordzeroi.github.io
```

## Updating Games

Edit `games.json`. For example:

```json
{
  "title": "Race Desk Manager",
  "status": "Alpha v0.4",
  "genre": "Racing Management",
  "description": "Run a tiny racing team from a broke garage to championship glory.",
  "cover": "./assets/race-desk-cover.png",
  "itchUrl": "https://lordzeroi.itch.io/race-desk-manager",
  "devlogUrl": "https://lordzeroi.itch.io/race-desk-manager/devlog",
  "tags": ["HTML5", "Browser", "Management", "Racing"],
  "group": "Featured"
}
```
