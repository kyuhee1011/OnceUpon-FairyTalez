//console.log ("js is connects")
//creating disneyChar so that can include all the
const disneyChar = [];

const films = document.querySelectorAll(".films-desc");
const imgFilters = document.querySelectorAll(".anime-char");

const buttonsFilters = document.querySelectorAll(".filterChar");
const imgCharDiv = document.querySelector(".imgChar");

fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((responseCharacters) => {
    responseCharacters.forEach((element) => {
      disneyChar.push(element);
      renderChar(element);
    });
  });

// The renderChar() function is implemented as before
// creates elemment under imgChar div
function renderChar(character) {
  console.log(character);
  const animeChar = document.createElement("div");

  animeChar.classList.add("anime-char");

  //creates class for different characterType
  let charClass = "";
  switch (character.characterType) {
    case "prince":
      charClass = "prince-char";
      break;
    case "princess":
      charClass = "princess-char";
      break;
    case "fairy":
      charClass = "fairy-char";
      break;
    case "villain":
      charClass = "villain-char";
      break;
    case "animal":
      charClass = "animal-char";
      break;
  }

  animeChar.classList.add(charClass);

  const h2 = document.createElement("h2");
  h2.textContent = character.name;

  const img = document.createElement("img");
  img.src = character.imageUrl;
  img.classList.add("disney-image");

  const p = document.createElement("p");
  p.textContent = character.films;
  p.classList.add("films-desc");
  const imgChar = document.querySelector(".imgChar").appendChild(animeChar);
  imgChar.append(img, h2, p);
}

//const disneyChar = [];
// //search bar addevent listener using the submit event
const searchBar = document.querySelector("#search-bar");
const searchSubmits = document.getElementById("searchGrid");

searchSubmits.addEventListener("submit", (e) => {
  e.preventDefault();

  const charactersByFilm = disneyChar.filter((character) => {
    const filmsEqual = character.films.filter((film) =>
      film.toLowerCase().includes(searchTerm)
    );
    // console.log(filmsEqual);
    // debugger;

    if (filmsEqual.length > 0) {
      return true;
    } else {
      return false;
    }
  });

  // const imgCharDiv = document.querySelector(".imgChar");
  // while (imgCharDiv.firstChild) {
  //   imgCharDiv.removeChild(imgCharDiv.firstChild);
  // }
  imgCharDiv.replaceChildren();

  charactersByFilm.forEach((character) => renderChar(character));
  console.log(charactersByFilm);
});

//adding the click addeventlistener to button

//const disneyChar =[];

const buttons = document.querySelectorAll(".filterChar");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => filterButton(button.dataset.id));
});

function filterButton(filterImage) {
  const filterDisneyChar = disneyChar.filter((character) => {
    if (filterImage === "all") {
      return true;
    } else {
      return character.characterType === filterImage;
    }
  });

  console.log(filterDisneyChar);

  imgCharDiv.replaceChildren();

  filterDisneyChar.forEach((character) => renderChar(character));
}

const pageName = document.querySelector("h1");
pageName.addEventListener("mouseover", (e) => {
  console.log("mouse moved in");
});

pageName.addEventListener("mouseleave", (e) => {
  console.log("mouse moved out");
});
