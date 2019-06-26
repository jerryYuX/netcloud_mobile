import React from 'react';
import './MySearchBar.css'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const MySearchBar=({query,onChange,onClear})=>{
    return (
        <div>
            <WhiteSpace size="lg"/>
            <SearchBar value={query} placeholder="Search" maxLength={8} onClear={onClear} onChange={onChange} />
        </div>
    )
}

// class MySearchBar extends React.Component {
//     state = {
//       value: '美食',
//     };
//     componentDidMount() {
//       this.autoFocusInst.focus();
//     }
//     onChange= (value) => {
//       this.setState({ value });
//     };
//     clear = () => {
//       this.setState({ value: '' });
//     };
//     handleClick = () => {
//       this.manualFocusInst.focus();
//     }
//     render() {
//       return (
//           <div>
//               <WingBlank><div className="sub-title">Normal</div></WingBlank>
//               <SearchBar placeholder="Search" maxLength={8} onClear={this.clear} onChange={this.onChange} />
//               <WhiteSpace />
//           </div>
//       );
//     }
//   }
  export default MySearchBar