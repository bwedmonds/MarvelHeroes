export default class Hero {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.img = data.img
  }

  get Template() {
    return `
      < div class="card" style = "width: 18rem;" >
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
            ${button}
          </div>
      </div>
    `
  }
}


// name: { type: String, required: true },
// img: { type: String, required: true },
// description: { type: String, required: true },
// user: { type: String, required: true }