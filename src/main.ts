import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import quizData from './quiz-data'
import { Choice, QuizSet, State } from './types'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const state: State = {
  page: 'menu',
  quizSet: undefined,
  quizIndex: 0,
  isOKAnimationActive: false,
  isNGAnimationActive: false,
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
  if (state.isOKAnimationActive || state.isNGAnimationActive) return
  console.log(choice)
  if (choice.isCorrect) {
    const isLast = state.quizIndex >= state.quizSet.quizzes.length - 1
    startOKAnimation(isLast)
  } else {
    startNGAnimation()
  }
}

const startOKAnimation = (isLast: boolean) => {
  state.isOKAnimationActive = true

  setTimeout(() => {
    state.isOKAnimationActive = false
    if (isLast) {
      state.quizIndex = 0
      state.quizSet = undefined
      state.page = 'menu'
    } else {
      state.quizIndex++
    }
    renderApp()
  }, 1000)

  renderApp()
}

const startNGAnimation = () => {
  state.isNGAnimationActive = true

  setTimeout(() => {
    state.isNGAnimationActive = false
    renderApp()
  }, 800)

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

      ${state.isOKAnimationActive ? html`<div class="ok_anim">OK</div>` : ''}
      ${state.isNGAnimationActive ? html`<div class="ng_anim">NG</div>` : ''}
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

