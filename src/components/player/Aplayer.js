import React, { Component } from "react";
import ReactAplayer from 'react-aplayer';

import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';

class Aplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio:{}
        };

    }
    render() {
        return (
            <div id={'player'}>

            </div>
        )
    }
    changePlayer(){
        this.ap.list.add(this.props.audio);
    }
    componentDidMount() {
        let player = document.getElementById('player');
        let options = {
            container: player,
            mini: false,
            autoplay: true,
            theme: '#FADFA3',
            loop: 'all',
            order: 'random',
            preload: 'auto',
            volume: 0.7,
            fixed: true,
            listFolded: false,
            listMaxHeight: 90,
            lrcType: 3,
            audio: [
                {
                    name: 'name1',
                    artist: 'artist1',
                    url: 'url1.mp3',
                    cover: 'cover1.jpg',
                    lrc: 'lrc1.lrc',
                    theme: '#ebd0c2'
                },
                {
                    name: 'name2',
                    artist: 'artist2',
                    url: 'url2.mp3',
                    cover: 'cover2.jpg',
                    lrc: 'lrc2.lrc',
                    theme: '#46718b'
                }
            ]
        }
        this.ap = new APlayer(options);
    }



}


export default Aplay;
