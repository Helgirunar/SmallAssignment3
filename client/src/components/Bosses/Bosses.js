import React from 'react';

class Bosses extends React.Components {
  componentDidMount(){
    fetch('http://localhost:4500/api/bosses').then(resp => {
      if(resp.ok) { return resp.json();}
    }).then(data => {
      const bosses = data.results.map(d => { return {id: d.id, name: d.name, description: d.description, img: d.img} });
      this.setState({bosses});
    });
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

export default bosses;
