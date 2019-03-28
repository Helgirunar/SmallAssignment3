import React from 'react';
import { connect } from 'react-redux';
import bossesService from '../../services/bossesServices';

class Bosses extends React.Component{
  constructor(props) {
    super(props);
      console.log("constructor " + this.props);
    this.state = {
      bosses: [],
      boss:{}
    };
  }
  componentDidMount(){
    console.log("MOUNTING " + this.props);
  }
  render() {
    console.log(this.props.bosses.bosses);
    return (
      <>
      <div className="container">
      <h1> Bosses </h1>
        {this.props.bosses.bosses.bosses.map(function(boss, i){
          return(
            <div className="boss" key={i}>
             <h3>{boss.name}</h3>
             <p>{boss.description}</p>
             <img src={ boss.encodedImg } style={{ width: 200 }} />
             </div>
        )}
        )
      }
      </div>
      </>
    )
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    bosses: reduxStoreState
  }
}
export default connect(mapStateToProps)(Bosses);
