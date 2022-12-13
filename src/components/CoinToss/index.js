import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, result: 0}

  onButtonClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({result: tossResult})
    this.setState(prevState => ({total: prevState.total + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {total, heads, result, tails} = this.state
    const imageUrl = () =>
      result === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img alt="toss result" src={imageUrl()} />
          <button
            className="toss-btn"
            type="button"
            onClick={this.onButtonClick}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
