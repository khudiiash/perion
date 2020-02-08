import React, {Component} from "react";
import {base} from './assets'
import { CupScreen, OneGameScreen, WatchScreen } from './components'
import './App.scss'

const Close = ({setClose}) => (
  <div className='App__close' onClick={()=>setClose()}>
    <div className='App__close-stick-one'></div>
    <div className='App__close-stick-two'></div>
  </div>
)
class App extends Component {
    constructor(){
      super()
      this.state = {
        backgroundImage:`url(${base})`,
        start: true,
        zIndex: 0,
        close: false
      }
    }
  setClose = () => {
    this.setState({close:true})
  }
  componentDidMount(){
    setTimeout(() => this.setState({start: false}),6000)
    setTimeout(() => this.setState({zIndex: '-1'}),8000)
  }
  render(){
    let {backgroundImage,close} = this.state
    return (
      <div className="App" style={{backgroundImage}}>
        <div className='App__advert' style={{display: close ? 'none':'block'}}>
        <Close setClose={this.setClose}/>
        <CupScreen/>
        {!this.state.start && <WatchScreen/>}
        <OneGameScreen start={this.state.start} zIndex={this.state.zIndex}/>

      </div>
      </div>
    );
  }
  }
  

export default App
