import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import quizData from './quiz-data'
import { Choice, Quiz, QuizSet, State } from './types'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const state: State = {
  page: 'menu',
  quizSet: undefined,
  quizIndex: 0,
}

const shuffle = <T>(array: T[]) => {
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i)
    ;[array[k], array[i - 1]] = [array[i - 1], array[k]]
  }
  return array
}

const handleMenuClick = (quizSet: QuizSet) => {
  console.log(quizSet)
  state.quizSet = quizSet
  state.quizIndex = 0
  state.page = 'quiz'

  state.quizSet.quizzes = shuffle(state.quizSet.quizzes)
  state.quizSet.quizzes.forEach((i) => (i.choices = shuffle(i.choices)))
  renderApp()
}

const handleChoiceClick = (choice: Choice) => {
  if (!state.quizSet) return
  console.log(choice)
  if (choice.isCorrect) {
    if (state.quizIndex < state.quizSet.quizzes.length - 1) {
      state.quizIndex++
    } else {
      state.quizIndex = 0
      state.quizSet = undefined
      state.page = 'menu'
    }
  }
  renderApp()
}

const QuizSetList = () => {
  return html`<div class="page">
    <div class="quizset-list">
    ${quizData.quizSets.map(
      (i) =>
        html`<button type="button" @click=${() => handleMenuClick(i)}>
          ${i.title}
        </button>`
    )}</button>
    </div>
</div>`
}

const QuizPage = () => {
  if (!state.quizSet) {
    return html`Select a quiz set`
  }

  const q = state.quizSet.quizzes[state.quizIndex]

  return html` <div class="page">
    <h3>${state.quizSet.title}</h3>
    <div class="quiz">
      <div class="problem">${q.problem}</div>
      <div class="choices">
        ${q.choices.map(
          (i) =>
            html`<button
              type="button"
              class="choice"
              @click=${() => handleChoiceClick(i)}
            >
              ${i.text}
            </button>`
        )}
      </div>
    </div>
  </div>`
}

const App = () => {
  let page
  switch (state.page) {
    case 'menu': {
      page = QuizSetList()
      break
    }
    case 'quiz': {
      page = QuizPage()
      break
    }
  }
  return page
}

const renderApp = () => {
  render(App(), appRoot)
}

renderApp()

