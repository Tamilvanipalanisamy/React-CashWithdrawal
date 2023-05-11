import './index.css'

const DenominationItem = props => {
  const {eachDenomination, updateBalance} = props
  const {value} = eachDenomination

  const onClickDenominationItem = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenominationItem}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
