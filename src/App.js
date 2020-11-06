import React, { Component } from 'react';
import PhotoListContainer  from './modules/components/PhotoListContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import 'react-image-lightbox/style.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <PhotoListContainer />
      </MuiThemeProvider>
    )
  }
}

export default App;
