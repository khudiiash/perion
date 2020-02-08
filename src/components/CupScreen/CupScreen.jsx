import React from 'react';
import './CupScreen.scss'
import {cup,confetti} from '../../assets'
import {useSpring, animated} from 'react-spring'
import * as easings from 'd3-ease'


const CupScreen = () => {
    
    let cupImg = `url(${cup})`
    let confettiImg = `url(${confetti})`
    
    let cupHoisting = useSpring({
        to: {transform: 'translateY(0)',backgroundImage:cupImg},
        from: {transform: 'translateY(100%)'},
        config: { duration: 1400, easing: easings.easeCubicOut}})
    let confettiHoisting = useSpring({
        to: {transform: 'translateY(0)',backgroundImage:confettiImg},
        from: {transform: 'translateY(100%)'},
        config: { delay: 1000,mass: 8,friction: 25, tension: 15, easing: easings.easeQuad},
    })
    return (
        <div className='cup-screen'>
            <animated.div style={cupHoisting} className="cup-screen__cup"></animated.div>
            <animated.div style={confettiHoisting} className="cup-screen__confetti"><div></div></animated.div>
            <animated.div style={confettiHoisting} className="cup-screen__confetti-middle"></animated.div>
            <animated.div style={confettiHoisting} className="cup-screen__confetti-top"></animated.div>
        </div>
    );
};

export default CupScreen;