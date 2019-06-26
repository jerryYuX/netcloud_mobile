import React from 'react';
import { List } from 'antd-mobile';
import './Msgitem.css';

const playIcon = <i className='icon play-icon'></i>

const sgIcon = <i className='icon sg-icon'></i>

/**
 * 音乐ｉｔｅｍ
 (1) * 传入data
 {
   musicName,
   singerName,
   albumName,
   id,
   order,
 };
 (2) clickHandle
 */
export default class Msgitem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = props.clickHandle;
  }
  
  
  render() {
    let data = this.props.data;
    let order = '';
    if(data.order) {
      order = <div className='msg-item-l msg-float'>{data.order}</div>
    }
    return (
      <List.Item
        multipleLine
        onClick={this.clickHandle.bind(this)}
        extra={ playIcon }
        className="msg-item"
        activeStyle={false}
      >
        {order}
        <div className='msg-item-r msg-float'>
          {data.musicName}
          <List.Item.Brief style={{fontSize: '12px', marginTop: 0}}>
            {sgIcon}{`${data.singerName} - ${data.albumName}`}
          </List.Item.Brief>
        </div>
      </List.Item>
    )
  }
}
