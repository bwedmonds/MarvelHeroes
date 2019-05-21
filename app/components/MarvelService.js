import Hero from "../models/hero.js";


//private
let _marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public'
})

let _characters = 'characters?limit=50'
let _offset = 200
let _apiKey = 'f7bdc82ab1095c9cb2519cdc759cd47a'

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Bryce/heroes'
})

let _state = {
  marvelHeros: [],
  myHeros: [],
}

let _subscribers = {
  marvelHeros: [],
  myHeros: [],
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}


//public
export default class MarvelService {
  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get MarvelHero() {
    return _state.marvelHeros.map(p => new Hero(p))
  }

  get MyHero() {
    return _state.myHeros.map(p => new Hero(p))
  }


  getMarvelData() {
    _marvelAPI.get(`${_characters}&offset=${_offset}&apikey=${_apiKey}`)
      .then(res => {
        let data = response.data.map(rawData => new Hero(rawData))
        _setState('marvelHeros', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  getMyHero() {
    _sandbox.get()
      .then(response => {
        let hero = response.data.data.map(p => new Hero(p))
        _setState('myHeros', hero)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHero() {
    _sandbox.post('', _state.myHeros)
      .then(response => {
        this.getMyHero()
      })
      .catch(err => {
        console.error(err)
      })
  }

  removeHero(id) {
    _sandbox.delete(id)
      .then(response => {
        this.getMyHero()
      })
  }

}

