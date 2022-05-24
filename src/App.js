import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Page from './components/Page';
import Nope from './components/Nope';
import Container from './components/Container';

/*class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isSignedUp: false
    }
  }

  authChangeCallBack = () => {
    this.setState({isSignUp: true})
  }

   showWelcome = () => {
    if (this.state.isSignUp) {
      return <Welcome />

    } else {
      return <SignUp userAuthChanged={this.authChangeCallBack}/>
    }
  }

  render() { */
  function App() {
  return( 
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Container />} />
       <Route path="Welcome" element={<Welcome />} />
       <Route path="Page" element={<Page />} />
       <Route path="*" element={<Nope />} />
      </Routes>
    </BrowserRouter>
    </div>
  ) 
}

//}
export default App;
