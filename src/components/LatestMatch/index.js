// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="latest-match-container">
      <div className="team-details-container">
        <p className="team-heading-1">{latestMatchDetails.competing_team}</p>
        <p className="date">{latestMatchDetails.date}</p>
        <p className="para-small">{latestMatchDetails.venue}</p>
        <p className="para-small">{latestMatchDetails.result}</p>
      </div>

      <img
        src={latestMatchDetails.competing_team_logo}
        alt={`latest match ${latestMatchDetails.competing_team}`}
        className="competing-team-img"
      />
      <div className="team-innings-container">
        <p className="para-h1">First Innings</p>
        <p className="para-ans">{latestMatchDetails.first_innings}</p>
        <p className="para-h1">Second Innings</p>
        <p className="para-ans">{latestMatchDetails.second_innings}</p>
        <h1 className="para-h1">Man of The Match</h1>
        <p className="para-ans">{latestMatchDetails.man_of_the_match}</p>
        <p className="para-h1">Umpires</p>
        <p className="para-ans">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
