import React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core';
import MySearchBar from '../components/search/MySearchBar'
import HotSearch from '../components/hotSearch/HotSearch'
import Msgitem from '../components/common/Msgitem'
import {
  queryAction,
  clearSearchAction,
  finSearchAction,
  increaseUpdateSearchAction,
  noResultAction,
} from '../store/action'
import {getHotSearch,searchResult} from '../api/hotSeatch'
import { PullToRefresh } from 'antd-mobile';
import { ScaleLoader } from 'react-spinners';
import './SearchContainer.css'
// class SearchBarExample extends React.Component {
//   render({ query, clear, search }) {
    
//    }
// }
// const SearchBarExample =({ query,list,handleClick, clear, search }) => (
//   <div className="page">
//       <div className="top">
//            <MySearchBar query={query} onClear={clear} onChange={search}></MySearchBar>
//       </div>
//       <div className="bottom">
//            <HotSearch list={list} handleClick={handleClick}></HotSearch>
           
//       </div>
//   </div>
// );
const mapStateToProps=(state)=>{
  return {
    query:state.search.query,
    result:state.search.result,
    loading:state.search.loading,
    searchFin:state.search.searchFin,
    noresult:state.search.noresult
  }
}
const search = (value)=>(dispatch, getState) =>{
  let state=getState();
  console.log(state)
  let limit=state.search.limit;
  let offset=state.search.offset;
  dispatch(queryAction(value))
  if(value){
    searchResult(value).then(res=>{
        if(res.result.songs){
          dispatch(finSearchAction(res.result.songs,limit,offset))
        }else{
          dispatch(noResultAction())
        }
    })
  }
  // dispatch({
  // })
}
const handleClick=(event)=>(dispatch,getState)=>{
  let value=event.target.innerText
  search(value)(dispatch,getState)//连续箭头函数传参 
}
const clear=()=>(dispatch, getState) =>{
  new Promise((a,b)=>{
    a()
  }).then(()=>{
    dispatch(clearSearchAction())
  })
}
const increaseUpdate=()=>(dispatch, getState)=>{
  let state=getState();
  let value=state.search.query
  let limit=state.search.limit;
  let offset=state.search.offset+limit;
  searchResult(value,limit,offset).then(res=>{
      dispatch(increaseUpdateSearchAction(res.result.songs,limit,offset))
  })
  
}
const ETL =(datas)=>{
  if(datas){
    return datas.map(data=>{
      let ETL_data={};
      console.log(data)
      ETL_data.musicName=data.name;
      ETL_data.singerName=data.artists[0].name;
      ETL_data.albumName=data.album.name;
      ETL_data.id=data.id;
      return ETL_data;
    })
  }
  return []
}
const style=css`
    margin-left:${document.documentElement.clientWidth/2-20}px
`;
class SearchContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      height:0,
      width:0
    };
  }
  componentDidMount() {
    getHotSearch().then((res)=>{
      // console.log(document.documentElement.clientHeight,
      //   document.querySelector('[role="tablist"]').clientHeight,
      //   document.querySelector('.header').clientHeight,
      //   document.querySelector('.aplayer-body').clientHeight)
      this.setState({
        list:res.result.hots,
        height:document.documentElement.clientHeight
        -document.querySelector('[role="tablist"]').clientHeight
        -document.querySelector('.top').clientHeight
        -document.querySelector('.header').clientHeight
        -document.querySelector('.aplayer-body').clientHeight,
      })
    })
  }
  render(){
    const { query,result,loading,noresult,searchFin,handleClick,increaseUpdate, clear, search } = this.props
    
    return (
      <div className="page">
          <div className="top">
              <MySearchBar query={query} onClear={clear} onChange={search}></MySearchBar>
          </div>
          <div className="bottom">
              <HotSearch className={(!loading)&&(!searchFin)&&(!noresult)?"show":"hidden"} list={this.state.list} handleClick={handleClick}></HotSearch>
              <PullToRefresh style={{ height: this.state.height,overflow: 'auto',}} direction="up" onRefresh={increaseUpdate} className={searchFin?"show":"hidden"}>
                <div className="listView">
                  {ETL(result).map(item=>{
                    return (<Msgitem key={item.id} data={item} clickHandle={(e)=>{console.log(e)}}></Msgitem>)
                  })}
                </div>
                
              </PullToRefresh>
              <div className={noresult?"show":"hidden"}>
                <div className="noresult">
                  <span>暂无搜索结果</span>
                </div>
              </div>
              
          </div>
          <div className="loading"><ScaleLoader css={style} color={'#d43c33'} loading={loading}></ScaleLoader></div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { search,clear,handleClick,increaseUpdate }
)(SearchContainer)