import React from 'react';
import { css } from '@emotion/core';
import Remdlist from './Remdlist';
import MsgitemContainer from '../../containers/MsgitemContainer';
import { getNewSong, getRemdListData } from '../../api/recommend';
import { ScaleLoader } from 'react-spinners';
import { connect } from 'react-redux';
import './index.css';
import Msgitem from '../common/Msgitem'
const style=css`margin-left:${document.documentElement.clientWidth/2-20}px`;

class Recommend extends React.Component {
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
          newSongList: data.result
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
    console.log('remdddddddddddddddddcom', this.props)
    let newSL = [];
    let clickHandle = this.props.clickHandle ? this.props.clickHandle : (function(){})
    if( this.state.newSongList ) {
      newSL = this.state.newSongList.map((item, idx, arr)=> {
        // mark
        let song = item.song;
        let data = {
          id: song.id,
          musicName: song.name,
          singerName: song.artists[0].name,
          albumName: song.album.name,
        };
        return <MsgitemContainer
          data={data}
          key={idx}
          clickHandle={clickHandle}
          ></MsgitemContainer>
      })
    }

    return (
      <div className="remd-page-wrap">
        {/* 推荐音乐 */}
        <div className="remd-music-wrap">
          <div className='pos'></div>
          <h2 className="remd-title">推荐歌单</h2>
          <div className="remd-list">
            <Remdlist data={this.state.remdListData}></Remdlist>
          </div>
        </div>

        {/* 最新音乐 */}
        <div className="new-music-wrap">
          <h2 className="remd-title">最新音乐</h2>
          <div className="new-music-list">
            { newSL }
          </div>
        </div>

        <div className="msg-item-loading"><ScaleLoader css={style} color={'#d43c33'} loading={this.props.clickLoading}></ScaleLoader></div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    clickLoading: state.msgitem.clickLoading,
  }
}

export default connect(
  mapStateToProps
)(Recommend)
