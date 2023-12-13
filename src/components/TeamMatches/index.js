// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()
    this.setState({
      latestMatchDetails: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
      teamBannerUrl: jsonData.team_banner_url,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
    } = this.state
    return (
      <div className="team-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-img"
            />
            <p className="para-h1">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-cards-lists-container">
              {recentMatches.map(each => (
                <MatchCard key={each.id} matchCardDetails={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
