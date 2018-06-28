import React from 'react'

class Result extends React.Component {
  constructor (props) {
    super(props)

    let content = props.content[this.coinFlip()]

    this.state = {
      content: content
    }
  }

  coinFlip () {
    return (Math.floor(Math.random() * 2) === 0) ? 0 : 1
  }

  render () {
    const { className, name, title, paragraphs } = this.state.content

    return (
      <section id='results' className={'variant-c ' + className}>
        <div>
          <img src={'./images/' + name + '/lettering.png'} alt={title} />
        </div>
        <div>
          {paragraphs.map(el => <p>{el}</p>)}
          <img src='./images/shared/sign.png' alt='Paquita Salas' />
          <a id='url-out' href='https://www.netflix.com/es/title/80195828' title='Netflix'>
            <img src={'./images/' + name + '/button.png'} alt='Netflix' />
          </a>
        </div>
      </section>
    )
  }
}

export default Result
