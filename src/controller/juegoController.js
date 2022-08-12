export class Juego {
  name;
  descripcion;
  alternative_name;
  released;
  genero;
  plataformas;
  desarrolladores;
  publishers;

  constructor(
    name,
    descripcion,
    alternative_name,
    released,
    genero,
    plataformas,
    desarrolladores,
    publishers
  ) {
    this.name = name;
    this.descripcion = descripcion;
    this.alternative_name = alternative_name;
    this.released = released;
    this.genero = genero;
    this.plataformas = plataformas;
    this.desarrolladores = desarrolladores;
    this.publishers = publishers;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }
  getDescripcion() {
    return this.descripcion;
  }

  setAlternative_name(alternative_name) {
    this.alternative_name = alternative_name;
  }
  getAlternative_name() {
    return this.alternative_name;
  }

  setReleased(released) {
    this.released = released;
  }
  getReleased() {
    return this.released;
  }

  setGenero(genero) {
    this.genero = genero;
  }

  getGenero() {
    return this.genero;
  }

  setPlataformas(plataformas) {
    this.plataformas = plataformas;
  }

  getPlataformas() {
    return this.plataformas;
  }

  setDesarrolladores(desarrolladores) {
    this.desarrolladores = desarrolladores;
  }

  getDesarrolladores() {
    return this.desarrolladores;
  }

  setPublishers(publishers) {
    this.publishers = publishers;
  }

  getPublishers() {
    return this.publishers;
  }

  getJuego() {
    return {
      name: this.name,
      descripcion: this.descripcion,
      alternative_name: this.alternative_name,
      released: this.released,
      genero: this.genero,
      plataformas: this.plataformas,
      desarrolladores: this.desarrolladores,
      publishers: this.publishers,
    };
  }

  getJuegoJSON() {
    return JSON.stringify(this.getJuego());
  }

  getJuegoJSONString() {
    return this.getJuegoJSON();
  }

  getJuegoJSONObject() {
    return JSON.parse(this.getJuegoJSON());
  }
}
