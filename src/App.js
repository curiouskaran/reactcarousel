import React, { Component} from 'react';

import './App.css';
import SlideShow from './SlideShow';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SlideShow>
          <img src="http://placekitten.com/300/200" alt="catimg"/>
          <img src="http://placekitten.com/300/201" alt="catimg"/>
          <img src="http://placekitten.com/300/202" alt="catimg"/>
        </SlideShow>
      </div>
    );
  }
}

export default App;
