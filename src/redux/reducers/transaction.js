import * as actions from '../actions/actionTypes';

const initialState = {
  isPending:false,
	isFulfilled: false,
  isRejected: false,
  allHistory:null,
  homeHistory:null,
};

const transactionReducers = (state = initialState,action)=>{
  switch (action.type){
    case actions.fetch_history + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.fetch_history + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
      };
    case actions.fetch_history + actions.fulfilled:
      return {
        ...state,
        isPending:false,
        isRejected:false,
        isFulfilled:true,
        allHistory:action.payload.data.results,
        homeHistory:action.payload.data.results.slice(0,3),
      };
    default:
      return state;
  }
};

export default transactionReducers;
