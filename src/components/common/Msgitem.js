import React from 'react';
import { List, Toast } from 'antd-mobile';
import './Msgitem.css';
import { getMusicUrl, getMusicLrc, getMusicPic } from '../../api/msgItem'

const playIcon = <i className='icon play-icon' style={{width: '40px'}}></i>

const sgIcon = <i className='icon sg-icon'></i>
/**
 * 音乐ｉｔｅｍ
 (1) * 传入data
 {
   id,
   order,
   albumName,

   musicName,
   singerName,
   url,
   cover,
   lrc,
   theme
 };
 (2) clickHandle
 */
/*  *  name: 'name1', // 革命
  artist: 'artist1', // 歌手
  url: '',// 歌
  cover: '', // 图被骗
  lrc: '', // 歌词
  theme: '#ebd0c2' // 主题*/
export default class Msgitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    }
    this.clickHandle = this.clickHandle.bind(this);
  }

  componentDidMount() {
  }

  clickHandle() {
    this.props.toggleLoading(true);
    let data = this.props.data,
      musicInfo = {
        name: data.musicName,
        artist: data.singerName,
        cover: data.cover,
        url: '',
        lrc: '',
      },
      id = this.state.data.id,
      ProUrl = getMusicUrl(id).then((res) => {
        musicInfo.url = res.data[0].url;
      }),
      ProLrc = getMusicLrc(id).then((res) => {
        musicInfo.lrc = res.lrc.lyric;
      }),
      ProPic = getMusicPic(id).then( (res) => {
        musicInfo.cover = res.songs[0].al.picUrl;
      });

    Promise.all([ProUrl, ProLrc, ProPic]).then(() => {
      this.props.toggleLoading(false);
      this.props.addPlayList([musicInfo]);
    }).catch(() => {
      this.showToast();
    })
  }

  showToast() {
    Toast.info('发生未知错误！', 1);
  }
  render() {
    let { musicName, singerName, albumName, id, order, } = this.state.data;
    let orderWrap = '';
    let msgFlotRWidth = 'calc(100% - 45px)';
    if(order) {
      msgFlotRWidth = 'calc(100% - 85px)';
      orderWrap = <div
        className='msg-item-l msg-float'
        style={{
          color: `${order<3 ? '#df3436' : '#999'}`
        }}
        >
        {
          String(order).replace(/^\d{1}$/, (val) => {
              return '0' + val;
            }
          )
        }
      </div>
    }
    return (
      <List.Item
        multipleLine
        onClick={this.clickHandle}
        extra={ playIcon }
        className="msg-item"
       /* activeStyle={false}*/
      >
        {orderWrap}
        <div className='msg-item-r msg-float' style={{width: msgFlotRWidth}}>
          <span className='music-name'>{musicName}</span>
          <List.Item.Brief style={{fontSize: '12px', marginTop: 0}}>
            {sgIcon}{`${singerName} - ${albumName}`}
          </List.Item.Brief>
        </div>
      </List.Item>
    )
  }
}
