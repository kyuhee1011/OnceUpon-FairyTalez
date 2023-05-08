const disneyChar =[];

const searchBar=document.querySelector('#search-bar');


const films=document.querySelectorAll ('.films-desc')
const imgFilters=document.querySelectorAll('.anime-char');

const buttonsFilters=document.querySelectorAll('.filterChar');


fetch ('http://localhost:3000/characters')
.then ((res) => res.json())
.then ((responseCharacters)  =>{responseCharacters.forEach((element) => {
    disneyChar.push (element)
    renderChar(element)
});
});

// The renderChar() function is implemented as before
function renderChar (character) {

const animeChar =document.createElement ("div")
animeChar.classList.add ("anime-char")

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


const h2 =document.createElement ("h2");
h2.textContent =character.name;

const  img =document.createElement ("img");
img.src=character.imageUrl;
img.classList.add ("disney-image");

const  p =document.createElement("p");
p.textContent = character.films;
p.classList.add ("films-desc")
;
const imgChar= document.querySelector (".imgChar").appendChild (animeChar)
imgChar.append (img, h2, p)

}


//search bar event

searchBar.addEventListener("keydown", (e) => {
    const searchMovie =e.target.value.toLowerCase();
    e.preventDefault()
    //     console.log (`key=${e.key}, code =${e.code}`);
        const searchFilms = disneyChar.filter ((character) => {
            return (
            character.name.includes(searchMovie) || character.films.includes (searchMovie)
            );
        })
    
        displayMovie(searchFilms);
    });
    
    const loadCharcMovie =async () => {
        try {
            const res = await fetch('http://localhost:3000/characters')
            disneyChar=await res.json ();
            displayMovie (disneyChar, characFilm);
        
        } catch (err) {
            console.log (err)};
        }
    
    const displayMovie = (disneyChar)=> {
        const imgChar = document.querySelector(".imgChar");
        const filmPlay = disneyChar
        .map ((character) => {
                return `
                <img src="${character.image}"/>
                <h2> ${character.name}</h2>
                <ul> films:
                    <li> ${character.films}<li>
                    </ul>`;
            })
            .join ("");
    
            characFilm.textContent =filmPlay;
    }
//button click event


// //button click event
// function addsEventListenerButton () {
//     document.getElementsByClassName ('imgFilter').addEventListener ("click", buttonsFilters)
    
//     }
    
//     function  buttonsFilters (e) {
//             e.preventDefault ();
//             setClickBtn (e);
//             const imgBtn =e.target.dataset.filter
//             filterButton(imgBtn);       
//         }
    
    
//const buttonsFilters=document.querySelectorAll('.filterChar');

// buttonsFilters.forEach ((button)=> {
//     button.addEventListener ("click", (e)=> {
//         e.preventDefault ();
//         setClickBtn (e);
//         const imgBtn =e.target.dataset.filter
//         filterButton(imgBtn);       
//     })
// })

//onclick function

function filterButton(filterImage) {
    const disneyImg = document.getElementsByClassName("anime-char");
    

    for (let i = 0; i < disneyImg.length; i++){
    if (filterImage === "all"|| disneyImg[i].dataset.characterType === filterImage) 
    {
        disneyImg[i].classList.remove("hide");
        disneyImg[i].classList.add("show");
      }
    else {
          disneyImg[i].classList.remove("show");
          disneyImg[i].classList.add("hide");
        }
    }
}

function  setClickBtn(e){
  buttonsFilters.forEach((button)=>{
    button.classList.remove("active");
  });
  e.target.classList.add("active");
}
