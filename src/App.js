import React, {Component} from "react";
import {base} from './assets'
import { CupScreen, OneGameScreen, WatchScreen } from './components'
import './App.scss'
import {useSpring, animated} from 'react-spring'

const Close = ({setClose}) => (
  <animated.div style={useSpring({
    to: {transform: 'scale(1)'},
    from: {transform: 'scale(0)'},
    delay: 500,
    config: {duration: 300}
  })} className='App__close' onClick={()=>setClose()}>
    <div className='App__close-stick-one'></div>
    <div className='App__close-stick-two'></div>
  </animated.div>
)
class App extends Component {
    constructor(){
      super()
      this.state = {
        backgroundImage:`url(${base})`,
        start: true,
        appearance: false,
        zIndex: 0,
        close: false
      }
    }
  setClose = () => {
    this.setState({close:true})
  }
  componentDidMount(){
    setTimeout(() => this.setState({appearance: true}), 2000)
    setTimeout(() => this.setState({start: false}), 9000)
    setTimeout(() => this.setState({zIndex: '-1'}), 11000)
  }
  render(){
    let {backgroundImage,close,appearance} = this.state
    return (
      <div className="App" style={{backgroundImage}}>
        {appearance && <div className='App__advert' style={{display: close ? 'none':'block'}}>
        <Close setClose={this.setClose}/>
        <CupScreen/>
        {!this.state.start && <WatchScreen/>}
        <OneGameScreen start={this.state.start} zIndex={this.state.zIndex}/>

      </div>}
      </div>
    );
  }
  }
  

export default App
