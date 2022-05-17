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
  ],
}

export default quizData
