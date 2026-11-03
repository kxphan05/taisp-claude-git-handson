// Loads opportunities.json and shows each one as a card.
// fetch() needs a local server: run `python3 -m http.server` in this folder
// and open http://localhost:8000

async function load() {
  const res = await fetch("opportunities.json");
  const items = await res.json();
  render(items);
}

function render(items) {
  const list = document.getElementById("list");
  list.innerHTML = "";
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h2>${item.title}</h2>
      <p class="meta">${item.type} · Deadline: ${item.deadline}</p>
      <p>${item.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</p>
      <a href="${item.link}" target="_blank" rel="noopener">View details</a>
    `;
    list.appendChild(card);
  }
}

load();
