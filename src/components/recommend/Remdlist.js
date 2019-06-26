import React from 'react';
import Remditem from './Remditem';
import { Grid, Icon } from 'antd-mobile';
import './Remdlist.css';

export default class Remdlist extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let props = this.props;
    let data = [];
    if(props.data) {
      data = props.data.slice(0, 6).map((item) => {
        return {
          icon: (<Remditem/>),
          title: item.name,
          playCount: Math.round((item.playCount/10000)) + "万",
          picUrl: item.picUrl,
        }
      });
    }
                
    return (
      <Grid
        data = { data }
        columnNum={3}
        square={false}
        hasLine={false}
        activeStyle={false}
        className='remd-list'
        itemStyle={{margin: '-15px 0 0'}}
        renderItem={
          dataItem => (<Remditem data={dataItem} />)
        }
      />
    )
  }
}
