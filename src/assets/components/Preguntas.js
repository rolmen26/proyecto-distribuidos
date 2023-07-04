const preguntas = (juego) => [
  {
    pregunta: '¿Cuándo se lanzo el juego?',
    opciones: [
      {
        opcion: juego.released,
        correcta: true
      },
      {
        opcion: '2010-01-01',
        correcta: false
      },
      {
        opcion: '2008-04-12',
        correcta: false
      },
      {
        opcion: '2015-05-01',
        correcta: false
      }
    ]
  },
  {
    pregunta: '¿Cuántas horas de juego tiene el juego?',
    opciones: [
      {
        opcion: '3',
        correcta: false
      },
      {
        opcion: juego.playtime,
        correcta: true
      },
      {
        opcion: '5',
        correcta: false
      },
      {
        opcion: '10',
        correcta: false
      }
    ]
  },
  {
    pregunta: 'Elige el equipo desarollador del juego',
    opciones: [
      {
        opcion: juego.developers[0]['name'],
        correcta: true
      },
      {
        opcion: 'Sony',
        correcta: false
      },
      {
        opcion: 'Nintendo',
        correcta: false
      },
      {
        opcion: 'Microsoft',
        correcta: false
      }
    ]
  },
  {
    pregunta: '¿Cuál es el genero del juego?',
    opciones: [
      {
        opcion: 'Sports',
        correcta: false
      },
      {
        opcion: 'RPG',
        correcta: false
      },
      {
        opcion: 'Shooter',
        correcta: false
      },
      {
        opcion: juego.genres[0]['name'],
        correcta: true
      }
    ]
  },
  {
    pregunta: '¿Cuál es el tag del juego?',
    opciones: [
      {
        opcion: juego.tags[0]['name'],
        correcta: true
      },
      {
        opcion: 'Multiplayer',
        correcta: false
      },
      {
        opcion: 'MMO',
        correcta: false
      }
    ]
  },
  {
    pregunta: '¿Cuál es el publisher del juego?',
    opciones: [
      {
        opcion: 'Sony',
        correcta: false
      },
      {
        opcion: 'Nintendo',
        correcta: false
      },
      {
        opcion: juego.publishers === [] ? juego.publishers[0]['name'] : 'No hay publisher',
        correcta: true
      },
      {
        opcion: 'Microsoft',
        correcta: false
      }
    ]
  },
  {
    pregunta: '¿En que plataforma esta disponible el juego?',
    opciones: [
      {
        opcion: 'Xbox',
        correcta: false
      },
      {
        opcion: 'Playstation',
        correcta: false
      },
      {
        opcion: juego.platforms[0]['platform']['name'],
        correcta: true
      }
    ]
  },
  {
    pregunta: 'Selecciona un contenido adicional del juego',
    opciones: [
      {
        opcion: 'GTA: Trilogy',
        correcta: false
      },
      {
        opcion: juego.additions
          ? juego.additions[0]['adicion_nombre']
          : 'No tiene contenido adicional',
        correcta: true
      },
      {
        opcion: 'Ethan Winters Collection 1',
        correcta: false
      }
    ]
  },
  {
    pregunta: 'Selecciona un logro del juego',
    opciones: [
      {
        opcion: 'Los Santos Legends',
        correcta: false
      },
      {
        opcion: juego.achievements ? juego.achievements[0]['nombre_logro'] : 'No tiene logros',
        correcta: true
      },
      {
        opcion: 'A true warrior',
        correcta: false
      }
    ]
  },
  {
    pregunta: 'Selecciona creadores del juego',
    opciones: [
      {
        opcion: juego.creators ? juego.creators[0]['creador_nombre'] : 'Creadores no disponibles',
        correcta: true
      },
      {
        opcion: 'David Cage',
        correcta: false
      },
      {
        opcion: 'Hideo Kojima',
        correcta: false
      },
      {
        opcion: 'Clint Hocking',
        correcta: false
      }
    ]
  }
]

export default preguntas
