import React, {Component} from "react";
import './hot_song.css'
import Msgitem from '../../containers/MsgitemContainer'
import {get_hot_list} from '../../api/hot_song'

class Hot_song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };

    }

    componentDidMount() {
        get_hot_list(1).then((res) => {
            let list = [


            ]
            for (let i = 0; i < 20; i++) {
                list.push({
                    musicName: res.playlist.tracks[i].name,
                    singerName: res.playlist.tracks[i].ar[0].name,
                    albumName: res.playlist.tracks[i].al.name,
                    id: res.playlist.tracks[i].id,
                    order: i + 1


                })


            }
            this.setState({
                list: list
            })

        })

    }

    render() {
        let items = [];
        for(let i = 0;i<this.state.list.length;i++){
            items.push(<Msgitem data={this.state.list[i]} clickHandle={()=>'test'} key={this.state.list[i].id}/>)

        }
        return (
            <div>
                <div className="hotop">
                    <div className="hotopct">
                        <div className="u-hmsprt hoticon"></div>
                        <div className="hottime">更新日期：06月20日</div>
                    </div>
                </div>
                <div>
                    {items}


                </div>


            </div>
        )
    }


}

export default Hot_song;
