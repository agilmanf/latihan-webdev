// Membuat Cards Untuk Setiap Data Game //
const cardsContainer = document.querySelector(".cards-container");
data.forEach((game) => {
  cardsContainer.innerHTML += cardElement(game);
});

function directToGamePages(location) {
  window.open(location);
}

function cardElement(game) {
  return `
    <div class="card" onclick="directToGamePages('${game.game_url}')">
            <img src="${game.thumbnail}" alt="${game.title}" />
            <div class="card-title">
              <h5>${game.title}</h5>
            </div>
          </div>
    `;
}
///////////////////////////////////////////
