import React, {useState} from 'react';
import './WatchScreen.scss'
import FF from '../../assets/FF.png'
import ReactPlayer from 'react-player';

const WatchButton = ({setShow,show}) => (
    <div className='watch-screen__watch-btn'>
                <div className="watch-screen__watch-btn-border" onClick={() => setShow(!show)}>
                    <div className="watch-screen__watch-btn-border-circle">
                        <div className="watch-screen__watch-btn-border-circle-plus" style={{transform: `rotate(${show?'45deg':'0'})`}}>
                            <div className="watch-screen__watch-btn-border-circle-plus-vertical"></div>
                            <div className="watch-screen__watch-btn-border-circle-plus-horizontal"></div>
                        </div>
                    </div>
                </div>
                <p className='watch-screen__watch-btn__text' style={{opacity: show ? 0 : 1}}>WATCH TV SPOT</p>
        </div>
)

const PlayButton = ({show,play,setPlay}) => 
(<div className='watch-screen__video__play-btn' style={{display: show ? 'block':'none',opacity:play ? 0 : 1}} >
                <div className="watch-screen__video__play-btn-border" onClick={() => setPlay(!play)}>
                    <div className="watch-screen__video__play-btn-border-circle">
                        <div className="watch-screen__video__play-btn-border-circle-triangle">
                            <div className="watch-screen__video__play-btn-border-circle-triangle-icon"></div>
                        </div>
                    </div>
                </div>
        </div>
)

const WatchScreen = () => {
    let FFImg = `url(${FF})`
    let [show,setShow] = useState(false)
    let [play,setPlay] = useState(false)
    return (
        <div className='watch-screen' style={{backgroundImage:FFImg}}>
            <div className='watch-screen-darken' style={{background: show ? 'rgba(0,0,0,.4)':'rgba(0,0,0,0)'}}>
            
            <div  className='watch-screen__video'>
            <WatchButton setShow={setShow} show={show} />
            <ReactPlayer
               url='https://res.cloudinary.com/dwslf2mo2/video/upload/v1581181088/video_w3dwjq.mp4' 
               width='100%'
               height='100%'
               positio='absolute'
               playing={play && show}
               controls={false}
               style={{display: show ? 'block':'none'}}
           />
             <PlayButton show={show} play={play} setPlay={setPlay}/>  
            </div>
            
            
            </div>
        </div>
    );
};

export default WatchScreen;