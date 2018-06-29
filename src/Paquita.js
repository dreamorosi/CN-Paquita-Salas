import React from 'react'
import Result from './Result'

class Paquita extends React.Component {
  constructor () {
    super()

    this.state = {
      current: 0,
      content: window.json.quiz,
      results: -1
    }
  }

  preloadNext (current) {
    current = (current++).toString()
    current = current.length > 1 ? current : '0' + current

    let i = 0
    while (i < 3) {
      i++
      (new window.Image()).src = window.location.href + 'images/preg-' + current + '/option-0' + i + '.png'
    }
  }

  handleAnswer (option) {
    let { current } = this.state
    if (current < 9) {
      current++
      this.preloadNext(current)
      this.setState({ current })
    } else {
      this.setState({results: 1})
    }

    if (current === 2) {
      new window.Image().src = window.location.href + 'images/preg-5/background.jpg'
    }

    if (current === 5) {
      new window.Image().src = window.location.href + 'images/preg-8/background.jpg'
    }

    if (current === 7) {
      new window.Image().src = window.location.href + 'images/final-a/background.jpg'

      new window.Image().src = window.location.href + 'images/final-b/background.jpg'
    }
  }

  render () {
    let { current, content, results } = this.state
    if (content.length > 0 && results === -1) {
      let { taglines, question, number, answers } = content[current]
      current++

      return (
        <section className={'variant-b p' + current}>
          {taglines[0].length ? <h3>{taglines[0]}</h3> : <h3 />}
          <p><span>Pregunta <span>{number}</span>:</span></p>
          <h2>{question}</h2>
          {taglines[1].length ? <h3>{taglines[1]}</h3> : <h3 />}
          <hr className='mobile' />
          <div className='options'>
            <p onClick={e => this.handleAnswer()}>{answers[0]}</p>
            <p onClick={e => this.handleAnswer()}>{answers[1]}</p>
            <p onClick={e => this.handleAnswer()}>{answers[2]}</p>
          </div>
          <hr />
          <button type='button' name='button' onClick={e => this.handleAnswer()}>{current < 10 ? 'Saltar a la siguente pregunta' : 'Ir a la respuesta final'}</button>
          <hr />
          <img src='./images/shared/logo-down.png' alt='Paquita Salas' />
        </section>
      )
    } else if (content.length === 0) {
      return <h1>Loading</h1>
    } else if (results !== -1) {
      return <Result content={window.json.results} />
    }
  }
}

export default Paquita
