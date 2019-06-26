import React from 'react'
import { connect } from 'react-redux'
import MySearchBar from '../components/search/MySearchBar'
import HotSearch from '../components/hotSearch/HotSearch'
import {queryAction,clearSearchAction} from '../store/action'
import {getHotSearch} from '../api/hotSeatch'
import './SearchContainer.css'
// class SearchBarExample extends React.Component {
//   render({ query, clear, search }) {
    
//    }
// }
const SearchBarExample =({ query,list,handleClick, clear, search }) => (
  <div className="page">
      <div className="top">
           <MySearchBar query={query} onClear={clear} onChange={search}></MySearchBar>
      </div>
      <div className="bottom">
           <HotSearch list={list} handleClick={handleClick}></HotSearch>
      </div>
  </div>
);
const mapStateToProps=(state)=>{
  return {
    query:state.search.query,
    list:[]
  }
}
const search = (value)=>(dispatch, getState) =>{
  dispatch(queryAction(value))
  // dispatch({
  // })
}
const handleClick=(val)=>(dispatch,getState)=>{
  console.log(val)
}
const clear=()=>(dispatch, getState) =>{
  dispatch(clearSearchAction())
}

class SearchContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {list:[]};
  }
  componentDidMount() {
    getHotSearch().then((res)=>{
      console.log(res.result)
      this.setState({
        list:res.result.hots
      })
    })
  }
  render(){
    const { query,list,handleClick, clear, search } = this.props
    
    return (
      <div className="page">
          <div className="top">
              <MySearchBar query={query} onClear={clear} onChange={search}></MySearchBar>
          </div>
          <div className="bottom">
              <HotSearch list={this.state.list} handleClick={handleClick}></HotSearch>
          </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { search,clear }
)(SearchContainer)