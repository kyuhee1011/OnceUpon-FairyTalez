const disneyChar = [];

const searchBar = document.querySelector("#search-bar");

const films = document.querySelectorAll(".films-desc");
const imgFilters = document.querySelectorAll(".anime-char");

const buttonsFilters = document.querySelectorAll(".filterChar");

fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((responseCharacters) => {
    responseCharacters.forEach((element) => {
      disneyChar.push(element);
      renderChar(element);
    });
  });

// The renderChar() function is implemented as before
function renderChar(character) {
    console.log (character)
  const animeChar = document.createElement("div");

  animeChar.classList.add("anime-char");

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

//search bar event
const form=document.querySelector("form")
form.addEventListener ("submit", (e)=> {
    e.preventDefault ()
    const formData= new FormData (form)
    console.log (formData.entries())
})


// function addEventListener () {
//     document.getElementById ("searchGrid").addEventListener ("submit", searchSubmitForm)
// }

function searchSubmitForm (e){
    e.preventDefault ()
    console.log (e)
}


// searchBar.addEventListener("keydown", (e) => {
//   const searchMovie = e.target.value.toLowerCase();
//   e.preventDefault();
//   //     console.log (`key=${e.key}, code =${e.code}`);
//   const searchFilms = disneyChar.filter((character) => {
//     return (
//       character.name.includes(searchMovie) ||
//       character.films.includes(searchMovie)
//     );
//   });

//   displayMovie(searchFilms);
// });

// const loadCharcMovie = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/characters");
//     disneyChar = await res.json();
//     displayMovie(disneyChar, characFilm);
//   } catch (err) {
//     console.log(err);
//   }
// };

const displayMovie = (disneyChar) => {
  const imgChar = document.querySelector(".imgChar");
  const filmPlay = disneyChar
    .map((character) => {
      return `
                <img src="${character.image}"/>
                <h2> ${character.name}</h2>
                <ul> films:
                    <li> ${character.films}<li>
                    </ul>`;
    })
    .join("");

  characFilm.textContent = filmPlay;
};

//button click event

//const disneyChar =[];
const buttons = document.querySelectorAll (".filterChar")
buttons.forEach ((button)=> {
    button.addEventListener ("click", (e)=> filterButton(button.dataset.id))
})

function filterButton(filterImage) {
  const filterDisneyChar = disneyChar.filter((character) => {
    if (filterImage === "all") {
      return true;
    } else {
      return character.characterType === filterImage;
    }
  });

  console.log(filterDisneyChar);

const imgCharDiv =  document.querySelector (".imgChar")
while (imgCharDiv.firstChild) {
    imgCharDiv.removeChild (imgCharDiv.firstChild); 
}
  
filterDisneyChar.forEach (character => renderChar(character))
}