const preguntas = (juego) => [
  {
    pregunta: "¿Cuándo se lanzo el juego?",
    opciones: [
      {
        opcion: juego.released,
        correcta: true,
      },
      {
        opcion: "En el año 2010",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Cuántas horas de juego tiene el juego?",
    opciones: [
      {
        opcion: juego.playtime,
        correcta: true,
      },
      {
        opcion: "3 horas",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Elige el equipo desarollador del juego",
    opciones: [
      {
        opcion: juego.developers[0]["name"],
        correcta: true,
      },
      {
        opcion: "Sony",
        correcta: false,
      },
      {
        opcion: "Nintendo",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Cuál es el genero del juego?",
    opciones: [
      {
        opcion: juego.genres[0]["name"],
        correcta: true,
      },
      {
        opcion: "Acción",
        correcta: false,
      },
      {
        opcion: "Deportivo",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Cuál es el tag del juego?",
    opciones: [
      {
        opcion: juego.tags[0]["name"],
        correcta: true,
      },
      {
        opcion: "Multijugador",
        correcta: false,
      },
      {
        opcion: "Un jugador",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Cuál es el publisher del juego?",
    opciones: [
      {
        opcion: juego.publishers[0]["name"],
        correcta: true,
      },
      {
        opcion: "Sony",
        correcta: false,
      },
      {
        opcion: "Nintendo",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿En que plataforma esta disponible el juego?",
    opciones: [
      {
        opcion: juego.platforms[0]["platform"]["name"],
        correcta: true,
      },

      {
        opcion: "Xbox",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Selecciona un contenido adicional del juego",
    opciones: [
      {
        opcion: juego.additions
          ? juego.additions[0]["adicion_nombre"]
          : "No tiene contenido adicional",
        correcta: true,
      },
      {
        opcion: "Juego de cartas",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Selecciona un logro del juego",
    opciones: [
      {
        opcion: juego.achievements
          ? juego.achievements[0]["nombre_logro"]
          : "No tiene logros",
        correcta: true,
      },
      {
        opcion: "Logro de 100 puntos",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Selecciona creadores del juego",
    opciones: [
      {
        opcion: juego.creators
          ? juego.creators[0]["creador_nombre"]
          : "Creadores no disponibles",
        correcta: true,
      },
      {
        opcion: "Juan",
        correcta: false,
      },
    ],
  },
];

export default preguntas;
