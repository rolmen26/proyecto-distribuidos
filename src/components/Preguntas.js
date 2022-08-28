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
        opcion: juego.developers[0]['name'],
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
        opcion: juego.genres[0]['name'],
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
];

export default preguntas;
