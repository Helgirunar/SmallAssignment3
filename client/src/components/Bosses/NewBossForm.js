import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import bossesService from '../../services/bossesServices';
import { addBoss } from '../../actions/bossActions';

class Bosses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      img: '',
      encodedImg: '',
      description: ''
    };
  }
  onInput(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();

      const { id, name, encodedImg, description } = this.state;
      const { addBoss } = this.props;
      addBoss({ name, description, encodedImg});
      this.setState({
        id: this.state.id+1,
        name: '',
        img: '',
        encodedImg: '',
        description: ''
      });
  }
  previewImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.addEventListener('load', () => {
      this.setState({ encodedImg: reader.result })
    });

    reader.readAsDataURL(file);
  }
  render() {
    const { name, img, description, encodedImg } = this.state;
    return (
      <>
      <div className="container">
      <h1> Upload a new Boss </h1>
      <Form onSubmit={ e => this.onFormSubmit(e) }>
        <Input
          type="text"
          onInput={ e => this.onInput(e)}
          name="name"
          htmlId="name"
          value={ name }
          label="Enter boss name" />
        <Input
          type="file"
          onInput={ e => {
            this.onInput(e)
            this.previewImage(e)
          }}
          name="img"
          htmlId="img"
          value={ img }
          label="Boss Image" />
        <Input
          type="text"
          onInput={ e => this.onInput(e)}
          name="description"
          htmlId="description"
          value={ description }
          label="boss description" />
          <div className="well">
            <img src={ encodedImg } style={{width:175, height:150}} />
          </div>
        <input type="submit" value="Add a new boss" className="btn btn-primary" style={{float:'right', clear:'both'}} />

      </Form>
      </div>
      </>
    )
  }
}

const mapStateToProps = reduxStoreState => {
  console.log(reduxStoreState);
  return {

  }
}
export default connect(mapStateToProps, { addBoss })(Bosses);
