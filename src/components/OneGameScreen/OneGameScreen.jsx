import React from 'react';
import './OneGameScreen.scss'
import {
    timbers as TimbersLogo, 
    dallas as DallasLogo, 
    crowdLeft, 
    crowdRight
} from '../../assets'

import {useSpring, animated} from 'react-spring'
import * as easings from 'd3-ease'

const OneGameScreen = ({start,zIndex}) => {
    let crowdLeftImg = `url(${crowdLeft})`
    let crowdRightImg = `url(${crowdRight})`

    // Left Crowd Animation
    let moveLeftCrowd = useSpring({
        to: {left: start ? '0' : '-100%'},
        from: {left: start ? '-100%' : '0'},
        delay: start ? 2000 : 0,
        config: { duration: 2000, easing: easings.easeQuad}
    })

    // Right Crowd Animation
    let moveRightCrowd = useSpring({
        to: {right: start ? '0' : '-100%'},
        from: {right: start ? '-100%' : '0'},
        delay: start ? 2000 : 0,
        config: { duration: 2000, easing: easings.easeQuad}
    })
    
        // Text Animation
    let appearOne = useSpring({
        to: {opacity: start ? 1 : 0},
        from: {opacity: start ? 0 : 1},
        delay: start ? 4000 : 0,
        config: {duration: start ? 1000 : 700}
    })
    let moveGame = useSpring({
        to: {opacity: start ? 1 : 0,transform: start ? 'translateY(0)' : 'translateY(55%)'},
        from: {opacity: start ? 0 : 1,transform: start ? 'translateY(55%)' : 'translateY(0)'},
        delay: start ? 4000 : 0,
        config: { duration: start ? 1000: 500, easing: easings.easeQuadIn}
    })
    let moveGlory = useSpring({
        to: {opacity: start ? 1 : 0,transform: start ? 'translateY(0)' : 'translateY(100%)'},
        from: {opacity: start ? 0 : 1,transform: start ? 'translateY(100%)' : 'translateY(0)'},
        delay: start ? 4500 : 0,
        config: { duration: start ? 1200: 300, easing: easings.easeQuad}
    })
    
        // Logo Animation
    let moveTimbers = useSpring({
        to: {opacity: start ? 1 : 0,transform: start ? 'translateX(0) scale(1)':'translateX(-50%) scale(1)'},
        from: {opacity: start ? 0 : 1,transform: start ? 'translateX(-50%) scale(4)':  'translateX(0) scale(1)'},
        delay: start ? 5000 : 0,
        config: { duration: 1000, easing: easings.easeQuad}
    })
    let moveDallas = useSpring({
        to: {opacity: start ? 1 : 0,transform: start ? 'translateX(0) scale(1)':'translateX(50%) scale(1)'},
        from: {opacity: start ? 0 : 1,transform: start ? 'translateX(50%) scale(4)':  'translateX(0) scale(1)'},
        delay: start ? 5000 : 0,
        config: { duration: 1000, easing: easings.easeQuad}
    })

    return (
        <div className='one-game-screen' style={{zIndex}}>
            <animated.div style={moveLeftCrowd} className="one-game-screen__crowd-left" >
                <div  className="one-game-screen__crowd-left-img" style={{backgroundImage:crowdLeftImg}}></div>
            </animated.div>
            <animated.div style={moveRightCrowd} className="one-game-screen__crowd-right">
                <div  className="one-game-screen__crowd-right-img" style={{backgroundImage:crowdRightImg}}></div>
            </animated.div>  
            <div className='one-game-screen__central-text'>
                <animated.div style={appearOne} className="one-game-screen__central-text-one">ONE</animated.div>
                <animated.div style={moveGame} className="one-game-screen__central-text-game">GAME</animated.div>
                <animated.div style={moveGlory} className="one-game-screen__central-text-to-glory">TO GLORY</animated.div>
            </div>
           
            <animated.div style={moveTimbers} className="one-game-screen__timbers">
                <img className ="one-game-screen__timbers-logo" width='100%' height='100%' src={TimbersLogo}/>
            </animated.div>
            <animated.div style={moveDallas} className="one-game-screen__dallas">
                <img className ="one-game-screen__dallas-logo" src={DallasLogo}/>
            </animated.div>
        </div>
    );
};

export default OneGameScreen;