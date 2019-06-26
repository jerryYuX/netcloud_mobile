import React from 'react';
import './index.css';
import Remdlist from './Remdlist';
import Msgitem from '../common/Msgitem';
import { getNewSong, getRemdListData } from '../../api/recommend';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSongList: null,
      remdListData: null,
    }
  }
  componentDidMount() {
    this.fetchNewSon();
    this.fetchRemdListData();
  }
  
  fetchNewSon() {
    getNewSong().then((data) => {
      if(data.code === 200) {
        this.setState({
          newSongList: data.result.map((item, idx, arr)=> {
            // mark
            let data = {
              musicName: item.song.name,
              singerName: item.song.artists[0].name,
              albumName: item.song.name,
              id: item.song.id,
            };
            return <Msgitem 
              data={data} 
              key={idx}
              clickHandle={function(){console.log(this)}}
              ></Msgitem>
          })    
        })
      }
    })
  }
  
  fetchRemdListData() {
    getRemdListData().then((data) => {
      if(data.code === 200) {
        this.setState({
          remdListData: data.result
        })
      }
    })
  }
  
  
  render() {
    return (
      <div className="remd-wrap">
        {/* 推荐音乐 */}
        <div className="remd-wrap">
          <h2 className="remd-title">推荐歌单</h2>
          <div className="remd-list">
            <Remdlist data={this.state.remdListData}></Remdlist>
          </div>
        </div>
        
        {/* 最新音乐 */}
        <div className="new-music-wrap">
          <h2 className="remd-title">最新音乐</h2>
          <div className="new-music-list">
            {this.state.newSongList}
          </div>
        </div>
      </div>
    )  
  }
}