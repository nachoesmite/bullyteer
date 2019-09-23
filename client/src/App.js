import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, UncontrolledCollapse, Button, Alert } from 'reactstrap';

//const BASE_PATH = 'http://localhost:3001';
//const BASE_PATH = 'http://localhost';

const request = async (path) => {
  let response;

  try {
    const url = `/${path}`;

    response = await axios.get(url);
  } catch (error) {
  }

  return response;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      authors: {},
      collapse: false
    }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  async componentWillMount() {
    const response = await request('list');

    this.setState({ authors: response.data });
  }
  
  handleOnClick(soundPath) {
    return request(soundPath);
  }
  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  Spaces(str){
    return str.replace(/_/g, " ")
  }

  render() {
    return <div className='app-container'>
      <Navbar color="dark">
        <NavbarBrand href="/">Bullyteer!</NavbarBrand>
      </Navbar>
      {Object.keys(this.state.authors).map((author) =>
        <div style={{ marginBottom:'3px' }} key={author} className='author-row'>
          <div className='author-title'>
            <Alert style={{ marginBottom:'0px' }} color="info">
              <Button color="info" id={author} style={{ margin: '0.1rem'}}>{author}</Button>
            </Alert>
          </div>
          <div className='sounds-list'>
            <UncontrolledCollapse toggler={author}>
              <Alert style={{ marginBottom:'2px' }} outline color="info">
                {this.state.authors[author].map((sound) => 
                  <Button outline color="primary" 
                  style={{ marginLeft: '0.5rem', marginBottom:'0.3rem' }} 
                  size="sm" 
                  onClick={() => this.handleOnClick(`${author}/${sound}`)} 
                  key={sound} className='sound-item'>
                  {this.Spaces(this.Capitalize(sound))}
                  </Button>)}
              </Alert>
            </UncontrolledCollapse>
          </div>
        </div>
      )}
    </div>;
  }
}

export default App;
