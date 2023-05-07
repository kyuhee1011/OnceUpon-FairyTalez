const disneyChar =[];

fetch ('http://localhost:3000/characters')
.then ((res) => res.json())
.then ((responseCharacters)  =>{responseCharacters.forEach((element) => {
    disneyChar.push (element)
    renderChar(element)
});
});

// adding the renderChar() function is implemented 
function renderChar (character) {
    const animeChar =document.createElement ("div")
    animeChar.classList.add ("anime-char")
    
        
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
