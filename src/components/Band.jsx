import React, { Component } from 'react'
import data from './Data/data.json'

class Band extends Component {
  state = { band: {} }

  componentDidMount() {
    const currentBand = data.bands.filter(
      item => item.slug === this.props.match.params.band
    )[0]
    console.log(currentBand)
    this.setState({
      band: currentBand
    })
  }

  static getDerivedStateFromProps(props, state) {
    const currentBand = data.bands.filter(
      item => item.slug === props.match.params.band
    )[0]
    return { band: currentBand }
  }

  render() {
    return (
      <>
        {/* <h1>
          {this.props.match.params.band}
        </h1> */}
        <h1>{this.state.band.name}</h1>
        <img src={this.state.band.imageURL} alt="" />
        <p>
          They have an album that came out sometime in the past. It was good
        </p>
      </>
    )
  }
}

export default Band
