import React from 'react';
import { connect } from 'react-redux';
import Msgitem from '../components/common/Msgitem';
import { addListAction } from '../store/action'
const mapStateToProps=(state)=>{
  return {
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addPlayList: list => dispatch(addListAction(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Msgitem)
