import Hero from "../models/Hero.js";


//private
let _marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public'
})

let _characters = 'characters?limit=50'
let _offset = 200
let _apiKey = '53496df3cd682930aa9108759e347171'

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Bryce/heroes'
})

let _state = {
  marvelHeroes: [],
  myHeroes: []
}

let _subscribers = {
  marvelHeroes: [],
  myHeroes: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}


//public
export default class MarvelService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get MarvelHero() {
    return _state.marvelHeroes.map(p => new Hero(p))
  }

  get MyHero() {
    return _state.myHeroes.map(p => new Hero(p))
  }


  getMarvelData() {
    _marvelAPI.get(`${_characters}&offset=${_offset}&apikey=${_apiKey}`)
      .then(response => {
        let data = response.data.data.results.map(rawData => new Hero(rawData))
        _setState('marvelHeroes', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  getMyHero() {
    _sandbox.get()
      .then(response => {
        let hero = response.data.data.map(p => new Hero(p))
        _setState('myHeroes', hero)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHero() {
    _sandbox.post('', _state.myHeroes)
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

