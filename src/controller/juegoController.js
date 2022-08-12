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
}
