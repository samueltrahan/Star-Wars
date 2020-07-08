import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './StarshipPage.css'
import { getAllStarships} from '../services/sw-api'

class Shipcard extends Component {
    state = {
        starships: [],
        starship: []
    }

    getStarships = (idx) => {
        return this.state.starships[idx]
      }

    async componentDidMount() {
        const starships = await getAllStarships();
        this.setState({starships: starships.results})
        const starship = await this.getStarships(this.props.match.params.idx)
        this.setState({starship: starship})
    }

   
    render () {
        return(
            <div className="StarshipPage">
                {this.state.starship.name ?
                <>
                <div className="StarshipPage-starship">
               <span>Name: {this.state.starship.name}</span> 
                <span>Model: {this.state.starship.model}</span>
                <span>Crew: {this.state.starship.crew}</span>
                <span>Manufacturer: {this.state.starship.manufacturer}</span>
                <Link to='/'>Return</Link>
                </div>
                </>
                :
                <h3>Loading...</h3>
                }
            </div>
        )
    }
}

export default Shipcard