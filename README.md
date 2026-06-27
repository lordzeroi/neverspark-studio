# Neverspark Studio Website

Static v1 website for Neverspark Studio / LordZeroi games.

## Files

- `index.html` - homepage layout
- `styles.css` - visual design
- `script.js` - loads and renders the games list
- `games.json` - edit this when adding or updating games
- `assets/dungeon-manager-cover.png` - local Dungeon Manager cover visual
- `assets/race-desk-cover.png` - local Race Desk cover visual

Keep the `assets` folder in the repository. GitHub tracks the PNG files inside it, so the folder will be recognized as long as the cover images are uploaded with the rest of the site.

## Hosting on GitHub Pages

1. Create a GitHub repository named `lordzeroi.github.io`.
2. Upload the files from this folder to the repository root, including the `assets` folder.
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
  "title": "Dungeon Manager: Lord of the Underkeep",
  "status": "Itch page live",
  "genre": "Dungeon Management",
  "description": "Build the underkeep, manage danger, and grow a dungeon worth fearing.",
  "cover": "assets/dungeon-manager-cover.png",
  "itchEmbed": "https://itch.io/embed/4721140?linkback=true&border_width=5&border_color=fe1818",
  "itchUrl": "https://lordzeroi.itch.io/dungeon-manager-lord-of-the-underkeep",
  "devlogUrl": "",
  "tags": ["In Development", "Management", "Dungeon"],
  "group": "Featured"
}
```
