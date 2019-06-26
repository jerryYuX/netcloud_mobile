import React from 'react';

/*
 * 传入　data:
 *   {
 *     icon,
 *     title,
 *     number, -- 序号
 *   }
 */
export default class Remditem extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandle() {
    console.log(this);
  }
  render() {
    let data = this.props.data;
    return (
      <div
        className='remd-item'
        onClick={this.clickHandle.bind(this)}
        >
        <span　className='u-earp remd-lnum'>{data.playCount}</span>
        <div className='remd-img-wrap'>
          <img className='remd-img' src={ data.picUrl } alt="" />
        </div>
        <div className='remd-text'>
          <span>{data.title}</span>
        </div>
      </div>
    )
  }
}
