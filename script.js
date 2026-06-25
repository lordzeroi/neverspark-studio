const fallbackGames = [
  {
    title: "Race Desk Manager",
    status: "Alpha v0.4",
    genre: "Racing Management",
    description: "Run a tiny racing team from a broke garage to championship glory.",
    itchUrl: "https://lordzeroi.itch.io/race-desk-manager",
    devlogUrl: "https://lordzeroi.itch.io/race-desk-manager/devlog",
    tags: ["HTML5", "Browser", "Management", "Racing"],
    group: "Featured"
  },
  {
    title: "Dungeon Manager",
    status: "Coming later",
    genre: "Management",
    description: "In development. This one can stay quiet until there is a public build.",
    itchUrl: "",
    devlogUrl: "",
    tags: ["In Development"],
    group: "In Development"
  }
];

const gamesGrid = document.querySelector("#games-grid");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderGames(games) {
  gamesGrid.innerHTML = games.map((game) => {
    const tags = (game.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
    const playLink = game.itchUrl
      ? `<a class="button primary" href="${escapeHtml(game.itchUrl)}">Play on itch.io</a>`
      : "";
    const devlogLink = game.devlogUrl
      ? `<a class="button secondary" href="${escapeHtml(game.devlogUrl)}">View Devlog</a>`
      : "";
    const statusText = [game.group, game.status].filter(Boolean).join(": ");

    return `
      <article class="game-card">
        <div>
          <span class="status-badge">${escapeHtml(statusText)}</span>
          <h3>${escapeHtml(game.title)}</h3>
          <p>${escapeHtml(game.description)}</p>
          <div class="tag-row">${tags}</div>
        </div>
        <div class="card-actions">
          ${playLink}
          ${devlogLink}
        </div>
      </article>
    `;
  }).join("");
}

async function loadGames() {
  if (window.location.protocol === "file:") {
    renderGames(fallbackGames);
    return;
  }

  try {
    const response = await fetch("games.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Could not load games.json");
    }
    const games = await response.json();
    renderGames(games);
  } catch (error) {
    renderGames(fallbackGames);
  }
}

loadGames();
