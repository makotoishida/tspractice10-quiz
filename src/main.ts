import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

render(html`<div>QUIZ APP</div>`, appRoot)
