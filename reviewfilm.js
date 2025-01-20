//ini untuk navbar
const navLinks = document.querySelectorAll(".nav-icons a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

//cards film
const trendingFilms = [
  {
    name: "Under Paris",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBH_JGRI7j124A6bJlCRN5k9TkhJx6sFhaLg&s",
  },
  {
    name: "Menjelang ajal",
    image: "https://www.telkomsel.com/sites/default/files/2024-05/8.png",
  },
  {
    name: "Munkar",
    image: "https://channel9.id/wp-content/uploads/2023/12/Munkar-720x642.jpg",
  },
  {
    name: "Siksa Kubur",
    image:
      "https://akcdn.detik.net.id/community/media/visual/2024/04/02/glenn-fredly-the-movie.jpeg?w=700&q=90",
  },
  {
    name: "Immaculate",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWEzYjYyMjQtNTJjYi00ZDQ5LWE4N2MtNWY2ZTgxODNhYWM4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "CTRL",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGI5MjMzODQtMDlhMi00MWU0LTk0MzAtZmY4ZmU4NzU1MmY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
];

const latestFilms = [
  {
    name: "Speak No Evil",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCEqKSb2JRWgvlZaZEx-JIo7rbSp3wGpQXTBjmUIFLluxz-Szu",
  },
  {
    name: "Sosok Ketiga",
    image:
      "https://upload.wikimedia.org/wikipedia/id/0/04/Sosok_Ketiga_%282023%29.jpg",
  },
  {
    name: "13 bom di jakarta",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/poster-film-13-bom-di-jakarta-rumah-produksi-13_231206173658-864.jpeg",
  },
  {
    name: "Resident Evil: Death Island",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_RuahGQYP9JB-99n2bdQpRbAaJjYz5cfZQ&s",
  },
  {
    name: "Sijjin",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/924/2023/11/09/Nonton-Gratis-Film-Sijjin-2023-Kualitas-Full-HD-yang-Aman-Tanpa-Iklan-Pakai-Link-Ini-Dijamin-Puas-4151831003.jpg",
  },
  {
    name: "Mangkujiwo2",
    image:
      "https://cosmopolitanpost.com/wp-content/uploads/2023/01/EA312960-B2F3-4B72-8849-D0F2DE6B7B29.jpeg",
  },
];

// Append
function showFilms(films, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (const film of films) {
    const card = createElementCard(film);
    container.appendChild(card);
  }
}

function createElementCard(film) {
  const card = document.createElement("div");
  card.classList.add("film-card");

  card.innerHTML = `
    <img src="${film.image}" alt="${film.name}">
    <div class="film-info">
      <h3>${film.name}</h3>
    </div>
  `;

  return card;
}

showFilms(trendingFilms, "trending");
showFilms(latestFilms, "latest");

// function untuk filter, select form & input
function showFilms(films, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (films.length === 0) {
    // Jika tidak ada film yang cocok, pesan No Results
    const noResultsMessage = document.createElement("p");
    noResultsMessage.classList.add("no-results");
    noResultsMessage.textContent = "No Results";
    container.appendChild(noResultsMessage);
  } else {
    // Jika ada, akan menampilkan film
    for (const film of films) {
      const card = createElementCard(film);
      container.appendChild(card);
    }
  }
}

function createElementCard(film) {
  const card = document.createElement("div");
  card.classList.add("film-card");

  card.innerHTML = `
    <img src="${film.image}" alt="${film.name}">
    <div class="film-info">
      <h3>${film.name}</h3>
    </div>
  `;

  return card;
}

// Fungsi untuk memfilter film
const searchInput = document.querySelector(".input-group input");

function filterFilms() {
  const params = searchInput.value.toLowerCase();

  // Filter film berdasarkan input
  const filteredTrending = trendingFilms.filter((film) =>
    film.name.toLowerCase().includes(params)
  );
  const filteredLatest = latestFilms.filter((film) =>
    film.name.toLowerCase().includes(params)
  );

  showFilms(filteredTrending, "trending");
  showFilms(filteredLatest, "latest");
}

// Listener untuk input pencarian
searchInput.addEventListener("input", filterFilms);
