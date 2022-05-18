import { QuizData } from './types'

const quizData: QuizData = {
  quizSets: [
    {
      title: 'Countries',
      quizzes: [
        {
          problem: 'Where is the capital of Japan?',
          choices: [
            { text: 'Tokyo', isCorrect: true },
            { text: 'Osaka' },
            { text: 'Hokkaido' },
            { text: 'Nagoya' },
            { text: 'Yokohama' },
          ],
        },
        {
          problem: 'Where is the capital of Nicaragua?',
          choices: [
            { text: 'Managua', isCorrect: true },
            { text: 'León' },
            { text: 'Tipitapa' },
            { text: 'Masaya' },
            { text: 'Ciudad Sandino' },
          ],
        },
        {
          problem: 'Where is the capital of Netherlands?',
          choices: [
            { text: 'Amsterdam', isCorrect: true },
            { text: 'Rotterdam' },
            { text: 'Den Haag' },
            { text: 'Bruxelles' },
            { text: 'Emmen' },
          ],
        },
      ],
    },
    {
      title: 'JavaScript',
      quizzes: [
        {
          problem: 'What keyword should be used to declare a constant value?',
          choices: [
            { text: 'const', isCorrect: true },
            { text: 'let' },
            { text: 'var' },
            { text: 'class' },
            { text: 'do' },
          ],
        },
        {
          problem: 'What is the result of 2 ** 3 ?',
          choices: [
            { text: '8', isCorrect: true },
            { text: '6' },
            { text: '9' },
            { text: '1.5' },
            { text: '222' },
          ],
        },
        {
          problem: 'What is the result of Math.abs(-0.9)?',
          choices: [
            { text: '0.9', isCorrect: true },
            { text: '1' },
            { text: '0' },
            { text: '-1' },
            { text: '-1.8' },
          ],
        },
      ],
    },
  ],
}

export default quizData
