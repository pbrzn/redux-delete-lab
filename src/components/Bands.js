import React, { Component } from 'react';
import Band from './Band.js';

class Bands extends Component {
  renderBands = () => this.props.bands.map((band) => <Band
    key={band.id}
    band={band}
    delete={this.props.delete}
    />
  )

  render() {
    debugger
    return (
      <ol>{this.renderBands()}</ol>
    )
  }
}

export default Bands
