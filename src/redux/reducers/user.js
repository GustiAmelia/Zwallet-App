import * as actions from '../actions/actionTypes';

const initialState = {
  isPending:false,
	isFulfilled: false,
  isRejected: false,
  user:null,
};

const userReducers = (state = initialState, action)=>{
  switch (action.type){
    case actions.fetch_user + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.fetch_user + actions.rejected:
      return {
        ...state,
        isPending:false,
        isRejected:true,
      };
    case actions.fetch_user + actions.fulfilled:
      return {
        ...state,
        isPending:false,
        isRejected:false,
        isFulfilled:true,
        user:action.payload.data.results,
      };
    default:
      return state;
  }
};

export default userReducers;
