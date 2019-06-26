import React from 'react';
import { List } from 'antd-mobile';
import './Msgitem.css';

const playIcon = <i className='icon play-icon' style={{width: '40px'}}></i>

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
    this.clickHandle = props.clickHandle ? props.clickHandle :(function(){});
  }
  
  
  render() {
    let data = this.props.data;
    let order = '';
    if(data.order) {
      order = <div 
        className='msg-item-l msg-float'
        style={{
          color: `${data.order<3 ? '#df3436' : '#999'}`
        }}
        >
        {
          String(data.order).replace(/^\d{1}$/, (val) => { 
              return '0' + val; 
            }
          )
        }
      </div>
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
