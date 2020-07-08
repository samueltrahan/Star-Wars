import React, {Component} from 'react'
import {getAllStarships} from './services/sw-api'
import {Route, Link} from 'react-router-dom'
import './App.css'
import Shipcard from './components/Shipcard'

class App extends Component {
  state = {
    starships: []
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({starships: starships.results})
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>STAR WARS STARSHIPS</h1>
        </header>
        <Route exact path='/' render={() => 
      <section>
        {this.state.starships.map((starship, idx) =>
        <Link 
        key={starship.name}
        to={`/starship/${idx}`}
        >
        {starship.name}
        </Link>
        )}
      </section>  
      }>
        </Route>
        <Route path="/starship/:idx" render={(props) => 
        <Shipcard 
        {...props}
        />
        }>

        </Route>
      </div>
    )
  }
}

export default App
