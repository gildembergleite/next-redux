import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          index: 1,
          title: 'Como os Computadores Funcionam?',
          lessons: [
            {
              id: '8G80nuEyDN4',
              title: 'O Guia +Hardcore de Introdução à COMPUTAÇÃO',
              duration: '01:18:27',
            },
            {
              id: 'hYJ3dvHjeOE',
              title:
                'Aprendendo sobre Computadores com Super Mario (do jeito Hardcore++)',
              duration: '01:27:20',
            },
            {
              id: 'G4MvFT8TGII',
              title:
                'O Computador de Turing e Von Neumann | Por que calculadoras não são computadores?',
              duration: '45:42',
            },
            {
              id: 'vUqLLpUJ47s',
              title: 'Introdução a Videogames e Emuladores',
              duration: '37:06',
            },
            {
              id: 'oSCVb4Ts-G4',
              title:
                'Qual a REAL diferença entre Arquivos Binário e Texto?? 🤔',
              duration: '30:56',
            },
            {
              id: 'Gp2m8ZuXoPg',
              title: 'Hello World Como Você Nunca Viu! | Entendendo C',
              duration: '01:09:21',
            },
            {
              id: 'YyWMN_0g3BQ',
              title: 'O que vem DEPOIS do Hello World | Consertando meu C',
              duration: '59:04',
            },
            {
              id: '9GdesxWtOgs',
              title:
                'Árvores: O Começo de TUDO | Estruturas de Dados e Algoritmos',
              duration: '57:40',
            },
            {
              id: 'cTVXKfYOYxo',
              title:
                'Só Precisamos de 640 kB de Memória? | 16-bits até 64-bits!',
              duration: '49:12',
            },
            {
              id: 'JEp7ozWqIps',
              title:
                'A Longa História de CPUs e GPUs | Jogos de Windows em Linux??',
              duration: '01:15:24',
            },
            {
              id: 'SNyh-cubxaU',
              title: 'Linguagem Compilada vs Interpretada | Qual é melhor?',
              duration: '01:11:44',
            },
            {
              id: '_7nISfpofec',
              title: 'Fiz um servidor de "SQL"?? | Entendendo Banco de Dados',
              duration: '01:14:41',
            },
          ],
        },
      ],
    },
    currentLesson: {
      moduleIndex: 0,
      lessonIndex: 0,
    },
  },
  reducers: {
    setCurrentLesson: (state, action) => {
      state.course.modules.forEach((module, moduleIndex) => {
        const lessonIndex = module.lessons.findIndex(
          (lesson) => lesson.id === action.payload.id,
        )

        if (lessonIndex !== -1) {
          state.currentLesson = { moduleIndex, lessonIndex }
        }
      })

      return state
    },
  },
})

export const player = playerSlice.reducer
export const { setCurrentLesson } = playerSlice.actions
