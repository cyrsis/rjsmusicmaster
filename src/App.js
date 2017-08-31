import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">
          <h2>Music Master</h2>
        </div>

          <FormGroup>
              <InputGroup>
              <FormControl
                  type="text"
                  placeholder="searching for an Artist"
              />
                  <InputGroup.Addon>
                    <Glyphicon glyph="search"/>
                  </InputGroup.Addon>
              </InputGroup>
          </FormGroup>
          <div className="Profile">
              <div>Artist Picture</div>
              <div>Artist Name</div>
          </div>
          <div className="Gallery">
           Gallery
          </div>

      </div>
    );
  }
}

export default App;
