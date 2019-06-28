import React, { Component } from "react";
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
        console.log()
        let player = document.getElementById('player');
        let options = {
            container: player,
            mini: true,
            autoplay: false,
            theme: '#FADFA3',
            loop: 'all',
            order: 'random',
            preload: 'auto',
            volume: 0.7,
            fixed: true,
            listFolded: true,
            listMaxHeight: 90,
            lrcType: 1,
            audio: [

            ]
        }
        // options.audio = this.props.audio;
        this.ap = new APlayer(options);


        this.ap.list.add(this.props.audio);


    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        this.ap.list.clear();
        this.ap.list.add(this.props.audio);


        this.ap.play();
    }


}


export default Aplay;
