export type Choice = { text: string; isCorrect?: boolean }

export type Quiz = {
  problem: string
  choices: Choice[]
}

export type QuizSet = {
  title: string
  quizzes: Quiz[]
}

export type QuizData = {
  quizSets: QuizSet[]
}


export type State = {
  page: 'menu' | 'quiz'
  quizSet: QuizSet | undefined
  quizIndex: number
}
