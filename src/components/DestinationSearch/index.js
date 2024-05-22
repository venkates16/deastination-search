// Write your code here
// Write your code here

import './index.css'
import DestinationItem from '../DestinationItem'

import {Component} from 'react'

class DestinationSearch extends Component {
  state = {
    searchItem: '',
  }
  click = event => {
    console.log(event.target.value)
    this.setState({searchItem: event.target.value})
  }

  render() {
    let {searchItem} = this.state
    let {destinationsList} = this.props
    //  console.log(destinationsList)

    let inputSearch = destinationsList.filter(each =>
      each.name.includes(searchItem.toLowerCase()),
    )

    console.log(inputSearch)

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="card">
          <input type="search" onChange={this.click} placeholder="search" />
          <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png " />
        </div>
        <ul>
          {inputSearch.map(each => (
            //console.log(each)

            <DestinationItem obj={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
