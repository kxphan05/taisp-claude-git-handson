// Shows each opportunity from data.js as a card.

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

render(OPPORTUNITIES);
