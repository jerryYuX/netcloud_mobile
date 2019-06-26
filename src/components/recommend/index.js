import React from 'react';
import './index.css';
import Remdlist from './Remdlist';
import Msgitem from '../common/Msgitem';
import { getNewSong } from '../../api/recommend';

// ce shi
const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading',
];

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
  }
  
  fetchNewSon() {
    getNewSong().then((data) => {
      if(data.code === 200) {
        this.setState({
          newSongList: data.result.map((item, idx, arr)=> {
            // mark
            let data = {
              title: item.song.name,
              description: `${item.song.artists.name} - ${item.song.name}`,
              isOrder: '',
              order: '',
              id:'',
            };
            return <Msgitem data={data} key={idx}></Msgitem>
          })    
        })
      }
    })
  }
  fetchRemdList() {
    
  }
  render() {
    return (
      <div className="remd-wrap">
        {/* 推荐音乐 */}
        <div className="remd-wrap">
          <h2 className="remd-title">推荐歌单</h2>
          <div className="remd-list">
            <Remdlist list={list}></Remdlist>
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