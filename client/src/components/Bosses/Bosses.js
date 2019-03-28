import React from 'react';
import bossesService from '../../services/bossesServices';

class Bosses extends React.Component{
  componentDidMount(){
    this.setState({bosses: bossesService.getBosses()});
  }
  constructor(props) {
    super(props);
    this.state = {
      bosses: []
    };
  }
  render() {
    return (
      <>
      <div className="container">
      <h1> Bosses </h1>
      </div>
      </>
    )
  }
}

export default Bosses;
