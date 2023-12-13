// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props

  const style =
    matchCardDetails.match_status === 'Lost' ? 'red-res' : 'green-res'

  return (
    <li className="match-card-item-container">
      <img
        src={matchCardDetails.competing_team_logo}
        className="team-logo"
        alt={`competing team ${matchCardDetails.competing_team}`}
      />
      <p className="heading">{matchCardDetails.competing_team}</p>
      <p className="para-h1">{matchCardDetails.result}</p>
      <p className={style}>{matchCardDetails.match_status}</p>
    </li>
  )
}

export default MatchCard
