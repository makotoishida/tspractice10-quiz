import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import quizData from './quiz-data'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const QuizSetList = () => {
  return html`<div class="quizset-list">${quizData.quizSets.map(
    (i) => html`<button type="button">${i.title}</button>`
  )}</button></div>`
}

const App = () => {
  return html`<div>${QuizSetList()}</div>`
}

render(App(), appRoot)
