import MarvelService from "./MarvelService.js";



//private

let _marvelService = new MarvelService();

function _drawMarvelHero() {
  let hero = _marvelService.MarvelHero
  let template = ''
  for (let i = 0; i < hero.length; i++) {
    let herolist = hero[i];
    template += `<li>${herolist.name}`
  }
  document.getElementById('marvel-hero').innerHTML = template
}

function _drawMyHero() {
  let hero = _marvelService.MyHero
  let template = ''
  for (let i = 0; i < hero.length; i++) {
    let herolist = hero[i];
    template += herolist.getTemplate(`
        <button onclick="app.controllers.marvelController.removeHero('${herolist._id}')">Remove from Pokedex</button>`)
  }
  document.getElementById('my-hero').innerHTML = template
}

//public
export default class MarvelController {
  constructor() {
    //register subscribers
    _marvelService.addSubscribers('marvelHeros', _drawMarvelHero)
    _marvelService.addSubscribers('myHeroes', _drawMyHero)
    //fetch data
    _marvelService.getMarvelHero()
    _marvelService.getMyHero()
  }

  addHero() {
    _marvelService.addHero()
  }

  removePokemon(id) {
    _marvelService.removeHero(id)
  }
}

/* <button onclick="app.controllers.marvelController.getDetails('${poke.name}')">Get Details</button></li > ` */