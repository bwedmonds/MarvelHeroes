import MarvelController from "./components/MarvelController.js";

class App {
  constructor() {
    this.controllers = {
      MarvelController: new MarvelController()
    }
  }
}

window['app'] = new App();