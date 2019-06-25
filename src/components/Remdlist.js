import React from 'react';
import Remditem from './Remditem';
import { Grid, Icon } from 'antd-mobile';
import './Remdlist.css';
const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading',
];

export default class Remdlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;

    const data = list.map(item => ({
      icon: (<Remditem/>),
      text: item,
    }));
    return (
      <Grid
        data = { data }
        columnNum={3}
        square={false}
        hasLine={false}
        activeStyle={false}
        className='remd-list'
        itemStyle={{margin: '-15px 0 -5px 0'}}
        renderItem={
          dataItem => (<Remditem data={dataItem} />)
        }
      />
    )
  }
}
