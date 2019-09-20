import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
    this.state = {
      authors: {}
    }
  }

  async componentWillMount() {
    const response = await request('list');

    this.setState({ authors: response.data });
  }
  
  handleOnClick(soundPath) {
    return request(soundPath);
  }

  render() {
    return <div className='app-container'>
      {Object.keys(this.state.authors).map((author) =>
        <div key={author} className='author-row'>
          <div className='author-title'>{author}</div>
          <div className='sounds-list'>
          {this.state.authors[author].map((sound) => <button onClick={() => this.handleOnClick(`${author}/${sound}`)} key={sound} className='sound-item'>{sound}</button>)}
          </div>
        </div>
      )}
    </div>;
  }
}

export default App;
