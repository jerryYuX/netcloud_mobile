import React, { Component } from "react";
import ReactAplayer from 'react-aplayer';
function Aplay(props) {
    let m_props = {
        theme: '#F57F17',
        lrcType: 3,
        fixed: true,
        audio: [
            {
                name: '光るなら',
                artist: 'Goose house',
                url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
                cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
                lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
                theme: '#ebd0c2'
            }
        ]
    };
    let ap;
    let onPlay = () => {
        console.log('on play');
    };

    let onPause = () => {
        console.log('on pause');
    };

    // example of access aplayer instance
    // let onInit = ap => {
    //     this.ap = ap;
    // };
    return (
        <div>
        <ReactAplayer
            {...m_props}

            onPlay={onPlay}
            onPause={onPause}
            // style={'height:300px'}
        />

    </div>)

}
export default Aplay;
