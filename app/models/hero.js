export default class Hero {
  constructor(data) {
    this.name = data.name
    this.description = data.description || ""
    this.img = data.img || data.thumbnail.path + "." + data.thumbnail.extension
  }

  get Template() {
    return `
      <div class="card" style = "width: 18rem;">
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">"${this.name}"</h5>
            <p class="card-text">"${this.description}"</p>
          </div>
      </div>
    `
  }
}