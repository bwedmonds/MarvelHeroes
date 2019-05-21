import MarvelService from "./MarvelService.js";

//private

let _marvelService = new MarvelService();

function _drawMarvelHero() {
  let hero = _marvelService.MarvelHero
  let template = ''
  for (let i = 0; i < hero.length; i++) {
    let herolist = hero[i];
    template += herolist.Template
  }
  document.getElementById("marvel-hero").innerHTML = template;
}

function _drawMyHero() {
  let hero = _marvelService.MyHero
  let template = ''
  for (let i = 0; i < hero.length; i++) {
    let herolist = hero[i];
    template += herolist.Template
  }
  document.getElementById("my-hero").innerHTML = template;
}

//public
export default class MarvelController {
  constructor() {
    //register subscribers
    _marvelService.addSubscriber('marvelHeroes', _drawMarvelHero)
    _marvelService.addSubscriber('myHeroes', _drawMyHero)
    //fetch data
    _marvelService.getMarvelData()
    _marvelService.getMyHero()
  }

  addHero() {
    _marvelService.addHero()
  }

  removePokemon(id) {
    _marvelService.removeHero(id)
  }
}