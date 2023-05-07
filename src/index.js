const disneyChar =[];
const searchBar=document.querySelector('#search-bar');



// fetch ('http://localhost:3000/characters')
// .then ((res) => res.json())
// .then ((responseCharacters)  =>{responseCharacters.forEach((element) => {
//     disneyChar.push (element)
//     renderChar(element)
// });
// });
fetch('http://localhost:3000/characters')
  .then(res => res.json())
  .then(disneyChar => {

    const filteredCharacters = disneyChar.filter(char => char.characterType !== "princess");
    // Loop through the filtered character list and render them
    filteredCharacters.forEach(char => renderChar(char));

    console.log(filteredCharacters);

  });

// adding the renderChar() function is implemented 
function renderChar (character) {
    const animeChar =document.createElement ("div")
    animeChar.classList.add ("anime-char")
// adding another class to each div
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
    
    const imgChar= document.querySelector (".imgChar").appendChild (animeChar)
    imgChar.append (h2, img, p)

    }

//search bar event

searchBar.addEventListener("keydown", (e) => {
console.log (`key=${e.key}, code =${e.code}`);
});



//button click event
// const buttons =document.querySelectorAll('.filterChar')

// const films=document.querySelectorAll ('.films-desc')
// const imgFilters=document.querySelectorAll('.anime-char');

buttonsFilters.forEach ((button)=> {
    button.addEventListener ("click", (e)=> {
        e.preventDefault ();
        setClickBtn (e);
        const imgBtn =e.target.dataset.filter
        filterButton(imgBtn);       
    })
})

//onclick function



