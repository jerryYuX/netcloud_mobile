import React from 'react';

export default class Remditem extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandle() {
    console.log(this);
  }
  render() {
    let data = this.props.data;
    data.title = 'title';
    data.number = '播放量';
    data.icon = 'http://p2.music.126.net/Kqc6NLGm8uCyvo1b0cfFNQ==/109951164171001799.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp';
    return (
      <div
        className='remd-item'
        onClick={this.clickHandle.bind(this)}
        >
        <span　className='u-earp remd-lnum'>{data.number}</span>
        <img className='remd-img' src={ data.icon } alt="" />
        <div className='remd-text'>
          <span>{data.title}</span>
        </div>
      </div>
    )
  }
}
