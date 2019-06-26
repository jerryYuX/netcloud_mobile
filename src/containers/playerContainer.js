import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import {searchResult} from "../api/hotSeatch";
import {addListAction} from "../store/action";

import Aplayer from '../components/player/Aplayer'
//数据映射获取仓库数据
const mapStateToProps=(state)=>{
    console.log(state);
    return {
        list:state.list.list,

    }
}
//数据修改，修改仓库数据函数
const clearList=()=>(dispatch, getState)=>{
    let state=getState();
    let list = [];

    dispatch(addListAction(list))


}
class PlayerContainer extends Component{
    constructor(props){
        super(props);

    }
    render() {
        const { list } = this.props
        console.log(this.props)
        return(
            <div>
                <Aplayer audio={list}/>
                {/*<button onClick={clearList}></button>*/}

            </div>
        )
    }




}
export default connect(
    mapStateToProps,
    { clearList }
)(PlayerContainer)
