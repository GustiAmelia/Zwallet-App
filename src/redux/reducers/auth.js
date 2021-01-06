import * as actions from '../actions/actionTypes';

const initialState = {
  isPending:false,
	isFulfilled: false,
  isRejected: false,
  isLogin:false,
  isRegister:false,
  isLoading:false,
  data:null,
};

const authReducers = (state = initialState, action) =>{
  switch (action.type){
    case actions.login + actions.pending:
      return {
        ...state,
        isPending:true,
        isLoading:true,
      };
    case actions.login + actions.rejected:
      return {
        ...state,
        isPending:false,
        isRejected:true,
        isLoading:false,
      };
    case actions.login + actions.fulfilled:
      let login = null;
      if (action.payload.data.isSuccess){
        login = true;
      } else {
        login = false;
      }
      return {
        ...state,
        isPending: false,
        isRejected:false,
        isFulfilled:true,
        isRegister:false,
        isLoading:false,
        isLogin:login,
        data:action.payload.data.results.data,
      };
    case actions.register + actions.pending:
      return {
        ...state,
        isPending:true,
        isLoading:true,
      };
    case actions.register + actions.rejected:
      return {
        ...state,
        isPending:false,
        isRejected:true,
        isLoading:false,
      };
    case actions.register + actions.fulfilled:
      let register = null;
      if (action.payload.data.isSuccess){
        register = true;
      } else {
        register = false;
      }
      return {
        ...state,
        isPending: false,
        isRejected:false,
        isFulfilled:true,
        isRegister:register,
        isLoading:false,
        isLogin:false,
        data:action.payload.data.results,
      };
    default:
      return state;
  }
};

export default authReducers;
