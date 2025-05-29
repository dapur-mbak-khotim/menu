fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("menu-container");
    data.forEach(menu => {
      const item = document.createElement("div");
      item.className = "menu-item";
      item.innerHTML = `
        <img src="images/${menu.image}" alt="Menu">
        <div class="menu-content">
          <h3>${menu.price}</h3>
          <p>${menu.items}</p>
        </div>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => {
    console.error("Gagal memuat menu:", error);
  });
