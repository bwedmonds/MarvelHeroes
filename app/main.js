import MarvelController from "./components/MarvelController.js";

class App {
  constructor() {
    this.controllers = {
      marvelController: new MarvelController()
    }
  }
}

window['app'] = new App();