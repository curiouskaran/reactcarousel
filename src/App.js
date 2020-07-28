import React from 'react';

import './App.css';
import SlideShow from './SlideShow';

const App = () => {
    return (
      <div className="App">
        <SlideShow>
          <img src="http://placekitten.com/300/200" alt="catimg"/>
          <img src="http://placekitten.com/300/201" alt="catimg"/>
          <img src="http://placekitten.com/300/202" alt="catimg"/>
          <img src="http://placekitten.com/300/199" alt="catimg"/>
          <img src="http://placekitten.com/300/203" alt="catimg"/>
        </SlideShow>
      </div>
    );
}

export default App;
