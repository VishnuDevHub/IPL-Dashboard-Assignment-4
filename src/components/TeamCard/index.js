// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetailsCard} = props
  const {id, name, teamImageUrl} = teamDetailsCard

  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="team-list-item">
        <img src={teamImageUrl} className="team-img" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
