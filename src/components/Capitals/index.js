import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].country}

  onChangeDropdown = event => {
    const filteredCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    this.setState({activeId: filteredCountry[0].country})
  }

  render() {
    const {activeId} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="select-styles"
            name="country"
            onChange={this.onChangeDropdown}
          >
            {countryAndCapitalsList.map(eachCountry => (
              <option key={eachCountry.id} value={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="country"> is capital of which country?</label>
          <h1 className="country-name-styles">{activeId}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
