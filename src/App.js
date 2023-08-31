
import './App.css';
import React, { Component } from 'react';
import Nevbar from './component/Nevbar';
import New from './component/New';   
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from './component/Home';   

export default class App extends Component {

  state = {
    progress: 0}

  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  
  render() {
    return (                                                                  
      <>
      <BrowserRouter basename='/news'>
      <div className='container my-3'>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress} />
          <Nevbar/>
        <Routes >
          <Route  exact path='/home' element={<Home/>} />  
          <Route exact path='/business' element={<New setProgress={this.setProgress}    key='business' pageSize='12' country='in' category='business'/>}/>
          <Route exact path='/entertainment' element={<New setProgress={this.setProgress}     key='entertainment' pageSize='12' country='in' category='entertainment'/>}/>
          <Route exact path='/general' element={<New setProgress={this.setProgress}     key='general' pageSize='12' country='in' category='general'/>}/>
          <Route exact path='/health' element={<New setProgress={this.setProgress}     key='health' pageSize='12' country='in' category='health'/>}/>
          <Route exact path='/science' element={<New setProgress={this.setProgress}     key='science' pageSize='12' country='in' category='science'/>}/>
          <Route exact path='/sports' element={<New setProgress={this.setProgress}     key='sports' pageSize='12' country='in' category='sports'/>}/>
          <Route exact path='/technology' element={<New setProgress={this.setProgress}     key='technology' pageSize='12' country='in' category='technology'/>}/>
       </Routes>
  
  
  
  </div>
      </BrowserRouter>
      
        </>
    
    );
  }
}
