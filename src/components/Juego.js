export class Juego {
  id;
  name;
  description_raw;
  alternative_namess;
  background_image;
  released;
  genero;
  plataformas;
  desarrolladores;
  publishers;

  constructor(
    id,
    name,
    description_raw,
    background_image,
    alternative_names,
    released,
    genero,
    plataformas,
    desarrolladores,
    publishers
  ) {
    this.id = id;
    this.name = name;
    this.description_raw = description_raw;
    this.background_image = background_image;
    this.alternative_names = alternative_names;
    this.released = released;
    this.genero = genero;
    this.plataformas = plataformas;
    this.desarrolladores = desarrolladores;
    this.publishers = publishers;
  }

  getJuego() {
    return {
      id: this.id,
      name: this.name,
      description_raw: this.descripcion,
      alternative_names: this.alternative_names,
      released: this.released,
      genero: this.genero,
      plataformas: this.plataformas,
      desarrolladores: this.desarrolladores,
      publishers: this.publishers,
    };
  }
}
