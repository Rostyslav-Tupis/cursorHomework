const submitBtn = document.querySelector('.serach_btns');
const container = document.querySelector('.container')
const characters = document.getElementById('characters');
const btnback = document.querySelector('.back')
const slider_planets = document.querySelector('.slider_planets')
const overlay = document.getElementById('overlay')
//planets ! ----------------------------------------------------------------
let planetsPrevious = document.getElementById('planets-previous')
let planetsNext = document.getElementById('planets-next')

let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;

//--------------------------------------------------------------------------
function removeInfo(info){
    info.forEach(elem=>{
        elem.remove(info)
    })
}
async function getCharacterFromFlim(reviceCharacter){
    let info = document.querySelectorAll('.info')
    removeInfo(info)
    let error = document.querySelectorAll('.error_alert')
    const inputValue = document.querySelector('.inputFill').value;
    let mainLink = fetch(`https://swapi.dev/api/films/${inputValue}/`);
    try{
        overlay.classList.add('active');
        let respones = await mainLink;
        let data = await respones.json();
        let allCharacter =  data.characters;
        error.forEach(elem=>{
            elem.remove(info)
        })
        reviceCharacter(allCharacter)
        overlay.classList.remove('active')

    }
    catch(err){
        let alert = document.createElement("p")
        alert.classList.add("error_alert");
        alert.innerText = "Opps something goes wrong, please try again"
        characters.append(alert)
        overlay.classList.remove('active')
    }
}
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
        <img src='photos/${data.name}.webp'  alt="photo"" class="image">
        <div class="allInfo">
            <h2 class="name">${data.name}</h2>
            <p class="years">${data.birth_year}</p>
            <p class="gender">${data.gender}</p>
        </div>
    </div>
    ` ;
}

//show planets-----------------------------------------------------------------
async function getPlanets() {
    let results = await fetch(URL_Planets);
    const data = await results.json();

    nextPlanets = data.next;          //зберігаємо посилання на наступну Лінку з планетами  
    previousPlanets = data.previous;

    let planets = data.results; //дістаємо масив з об'єктами про планети 
    let outPut = ' ';
    planets.forEach(planet => {
      outPut += `<div class="card">
                    <h2>${planet.name}</h2>
                 </div>`
    })
    slider_planets.innerHTML = outPut;
  }

  function pageNextPlanets() {
    if(nextPlanets) {
      URL_Planets = new URL(nextPlanets); // передається лінк з функції вище 
    }
    getPlanets()
      .then(response => { 
    })
      .catch(error => { 
        console.log(error)
    });
  }
  
  function pagePreviousPlanets() {
    if(previousPlanets) {
      URL_Planets = new URL(previousPlanets);
    }
    getPlanets()
      .then(response => { 
    })
      .catch(error => { 
      console.log(error)
    });
  }
