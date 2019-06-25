import React from 'react';
import { List } from 'antd-mobile';
import './Msgitem.css';

const playIcon = <i className='icon play-icon'></i>

const sgIcon = <i className='icon sg-icon'></i>

export default class Msgitem extends React.Component {
  constructor(props) {
    super(props);
  }
  // title description
  clickHandle() {
    console.log(this)
  }
  render() {
    let props = this.props;
    let order='';
    if(true) {
      order = <div className='msg-item-l msg-float'>q</div>
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
          {props.title}
          <List.Item.Brief style={{fontSize: '12px', marginTop: 0}}>
            {sgIcon}{props.description}
          </List.Item.Brief>
        </div>
      </List.Item>
    )
  }
}
