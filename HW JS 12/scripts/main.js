const submitBtn = document.querySelector('.serach_btns');
const container = document.querySelector('.container')
const characters = document.getElementById('characters');
const btnback = document.querySelector('.back')

const planets = document.querySelector('.planets')

//-----------------------------------------------------------------
async function getCharacterFromFlim(reviceCharacter){
    const inputValue = document.querySelector('.inputFill').value;
    let mainLink = fetch(`https://swapi.dev/api/films/${inputValue}/`);

    try{
        let respones = await mainLink;
        let data = await respones.json();
        container.classList.add('hide')
        let allCharacter =  data.characters;
        reviceCharacter(allCharacter)
    }
    catch(err){
        console.log(err);
        let alert = document.createElement("p")
        alert.classList.add("error_alert");
        alert.innerText = "Opps something goes wrong, please try again"
        characters.append(alert)
    }

}
let photoOfCharacter = {}
function reviceCharacter(characters){
    characters.forEach(element => {
        fetch(element).then((respones)=>{
                return respones.json();
            })
            .then((data)=>{
                creatDiv(data)
            })
    });
}
function creatDiv(data){
    characters.innerHTML += `
    <div class="info">
        <img src='photos/${data.name}.webp'  alt="photo"/ class="image">
        <div class="allInfo">
            <h2 class="name">${data.name}</h2>
            <p class="years">${data.birth_year}</p>
            <p class="gender">${data.gender}</p>
        </div>
    </div>
    ` ;
}
//show planets-----------------------------------------------------------------
async function getPlanets(){
    let response = await fetch("https://swapi.dev/api/planets/");
    let data = await response.json();
    let planets = data.results;
    getNameOfPlanet(planets)
}
function getNameOfPlanet(arr){
    for(let obj of arr){
        let name = obj.name
        creatPlanetsDiv(name)
    }
}
function creatPlanetsDiv(name){
    planets.innerHTML += `
    <p class="nameOfPlanet">${name}</p>
    `
}
getPlanets()