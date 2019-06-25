import React from 'react'
import { connect } from 'react-redux'
import MySearchBar from '../components/search/MySearchBar'
import {queryAction} from '../store/action'

// class SearchBarExample extends React.Component {
//   render({ query, clear, search }) {
    
//    }
// }
const SearchBarExample =({ query, clear, search }) => (
  <div class="page">
      <div class="top">
           <MySearchBar query={query} onClear={clear} onChange={search}></MySearchBar>
      </div>
      <div class="bottom">
           
      </div>
  </div>
);
const mapStateToProps=(state)=>{
  console.log(state)
  return {
    query:state.search.query
  }
}
const search = (value)=>(dispatch, getState) =>{
  console.log(value,dispatch, getState)
  dispatch(queryAction(value))
  // dispatch({
  // })
}
function clear(){

}
export default connect(
  mapStateToProps,
  { search,clear }
)(SearchBarExample)
// const SearchContainer= (state)=>{
//     return (
//         <div class="tabctitem">
//             <div class="m-hmsrch">
//                 <form class="m-input f-bd f-bd-btm" method="get" action="#">
//                 <div class="inputcover">
//                 <i class="u-svg u-svg-srch"></i>
//                 <input type="search" name="search" class="input" placeholder="" autocomplete="off" value="" />
//                 <label class="holder">搜索歌曲、歌手、专辑</label>
//                 <figure class="close">
//                 <i class="u-svg u-svg-empty"></i>
//                 </figure>
//                 </div>
//                 </form>
//                 <div class="m-default">
//                 <section class="m-hotlist">
//                 <h3 class="title">热门搜索</h3>
//                 <ul class="list">
//                 <li class="item f-bd f-bd-full"><a class="link" href="javascript:void(0);">远东韵律张碧晨</a></li>
//                 </ul>
//                 </section>
//                 </div>
//             </div>
//          </div>
//     );
// }

