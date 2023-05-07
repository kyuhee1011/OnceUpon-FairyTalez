const disneyChar =[];

const searchBar=document.querySelector('#search-bar');
const buttons =document.querySelectorAll('.filterChar')

const films=document.querySelectorAll ('.films-desc')
const imgFilters=document.querySelectorAll('.anime-char');



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
imgChar.append (h2, img, p)

}


//search bar event

searchBar.addEventListener("keydown", (e) => {
    console.log (`key=${e.key}, code =${e.code}`);
    });
    
//button click event
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
