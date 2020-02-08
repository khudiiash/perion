import React from 'react';
import './CupScreen.scss'
import {cup,confetti} from '../../assets'
import {useSpring, animated} from 'react-spring'
import * as easings from 'd3-ease'


const CupScreen = () => {
    
    let cupImg = `url(${cup})`
    let confettiImg = `url(${confetti})`
    
    let cupHoisting = useSpring({
        to: {top: '0',backgroundImage:cupImg},
        from: {top: '100%'},
        config: {  delay: 1000, duration: 1400, easing: easings.easeCubicOut}})
    let confettiHoisting = useSpring({
        to: {top: '60%',backgroundImage:confettiImg},
        from: {top: '100%'},
        config: { delay: 1300,mass: 22,friction: 6, tension: 15, easing: easings.easeQuad},
    })
    let confettiHoisting1 = useSpring({
        to: {top: '30%',backgroundImage:confettiImg},
        from: {top: '100%'},
        config: { delay: 1400,mass: 25,friction: 2, tension: 15, easing: easings.easeQuad},
    })
    let confettiHoisting2 = useSpring({
        to: {top: '0',backgroundImage:confettiImg},
        from: {top: '100%'},
        config: { delay: 1700,mass: 10,friction: 10, tension: 15, easing: easings.easeQuad},
    })
    return (
        <div className='cup-screen'>
            <animated.div style={cupHoisting} className="cup-screen__cup"></animated.div>
            <animated.div style={confettiHoisting} className="cup-screen__confetti"><div></div></animated.div>
            <animated.div style={confettiHoisting1} className="cup-screen__confetti-middle"></animated.div>
            <animated.div style={confettiHoisting2} className="cup-screen__confetti-top"></animated.div>
        </div>
    );
};

export default CupScreen;