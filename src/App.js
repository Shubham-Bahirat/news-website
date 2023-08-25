
import './App.css';
import React, { Component } from 'react';
import Nevbar from './component/Nevbar';
import New from './component/New';   
import {BrowserRouter as Main,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from './component/Home';   

export default class App extends Component {
  apiKey = '9be041080bd648c485439e49053a4973'
  state = {
    progress: 0}

  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  
  render() {
    return (                                                                  
      <>
      <Main>
      <div className='container my-3'>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
          <Nevbar/>
        <Routes>
          <Route  exact path='/home' element={<Home/>} />  
          <Route exact path='/business' element={<New setProgress={this.setProgress} apikey={this.apiKey}  key='business' pageSize='12' country='in' category='business'/>}/>
          <Route exact path='/entertainment' element={<New setProgress={this.setProgress}  apikey={this.apiKey}  key='entertainment' pageSize='12' country='in' category='entertainment'/>}/>
          <Route exact path='/general' element={<New setProgress={this.setProgress}  apikey={this.apiKey}  key='general' pageSize='12' country='in' category='general'/>}/>
          <Route exact path='/health' element={<New setProgress={this.setProgress}  apikey={this.apiKey}  key='health' pageSize='12' country='in' category='health'/>}/>
          <Route exact path='/science' element={<New setProgress={this.setProgress} apikey={this.apiKey}   key='science' pageSize='12' country='in' category='science'/>}/>
          <Route exact path='/sports' element={<New setProgress={this.setProgress}  apikey={this.apiKey}  key='sports' pageSize='12' country='in' category='sports'/>}/>
          <Route exact path='/technology' element={<New setProgress={this.setProgress} apikey={this.apiKey}   key='technology' pageSize='12' country='in' category='technology'/>}/>
       </Routes>
  
  
  
  </div>
      </Main>
      
        </>
    
    );
  }
}
