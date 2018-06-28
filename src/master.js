import React from 'react'
import { render } from 'react-dom'

import Paquita from './Paquita'

let start = document.querySelector('#start_quiz')
let intro = document.querySelector('#content')
window.json = {}

window.fetch('./content.json')
  .then(res => res.json())
  .then(content => {
    window.json = content
    start.onclick = function () {
      intro.style.display = 'none'
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      render(<Paquita />, document.querySelector('#content-root'))
    }
  })
