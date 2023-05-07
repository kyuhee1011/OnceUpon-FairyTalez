const disneyChar =[];

fetch ('http://localhost:3000/characters')
.then ((res) => res.json())
.then ((responseCharacters)  =>{responseCharacters.forEach((element) => {
    disneyChar.push (element)
 console.log (disneyChar)
});
});
