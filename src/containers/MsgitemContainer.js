import React from 'react';
import { connect } from 'react-redux';
import Msgitem from '../components/common/Msgitem';
import { addListAction, toggleClickStateAction } from '../store/action'

const mapStateToProps=(state)=>{
  return {
    list: state.list,
    clickLoading: state.clickLoading,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addPlayList: list => {
    dispatch(addListAction(list))
  },
  toggleLoading: bool => {
    dispatch(toggleClickStateAction(bool))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Msgitem)
