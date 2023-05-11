import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="initial">{initial}</p>
            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <h1 className="amount">{balance}</h1>
              <p className="rupee">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="amount">Withdraw</h1>
            <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominaions-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                eachDenomination={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
