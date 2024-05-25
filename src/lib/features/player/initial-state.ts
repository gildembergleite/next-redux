export const initialState = {
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
            title: 'Qual a REAL diferença entre Arquivos Binário e Texto?? 🤔',
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
            title: 'Só Precisamos de 640 kB de Memória? | 16-bits até 64-bits!',
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
      {
        id: '2',
        index: 2,
        title: 'Sistemas Operacionais',
        lessons: [
          {
            id: 'suSvMnNwV-8',
            title: 'Entendendo Apple, GPL e Compiladores',
            duration: '43:46',
          },
          {
            id: 'brIQSA8FtDo',
            title:
              'Falando um pouco de MAC, LINUX e WINDOWS | Qual eu devo escolher?',
            duration: '53:43',
          },
          {
            id: 'epiyExCyb2s',
            title: 'O Guia DEFINITIVO de UBUNTU para Devs Iniciantes',
            duration: '1:20:18',
          },
          {
            id: '28jHuWBi72w',
            title: 'Entendendo WSL 2 | E uma curta história sobre Windows NT',
            duration: '01:13:58',
          },
          {
            id: 'sjrW74Hx5Po',
            title: 'O Melhor Setup Dev com Arch e WSL2',
            duration: '01:13:43',
          },
          {
            id: 'kz3649U2sJY',
            title: 'Turing Complete, Emuladores e o Chip ARM M1',
            duration: '23:41',
          },
          {
            id: 'unpJgmjTLEg',
            title: 'Top 3 Distros Linux | Qual Recomendo?',
            duration: '18:21',
          },
        ],
      },
    ],
  },
  currentLesson: {
    moduleIndex: 0,
    lessonIndex: 0,
  },
}
