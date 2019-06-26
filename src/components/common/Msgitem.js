import React from 'react';
import { List } from 'antd-mobile';
import './Msgitem.css';

const playIcon = <i className='icon play-icon'></i>

const sgIcon = <i className='icon sg-icon'></i>

/**
 * 音乐ｉｔｅｍ
 * 传入data
 {
   title,
   description,
   isOrder,
   order,
   id,
 };
 */
export default class Msgitem extends React.Component {
  constructor(props) {
    super(props);
  }
  // title description
  clickHandle() {
    console.log(this)
  }
  render() {
    let data = this.props.data;
    let order = '';
    if(data.isOrder) {
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
          {data.title}
          <List.Item.Brief style={{fontSize: '12px', marginTop: 0}}>
            {sgIcon}{data.description}
          </List.Item.Brief>
        </div>
      </List.Item>
    )
  }
}
