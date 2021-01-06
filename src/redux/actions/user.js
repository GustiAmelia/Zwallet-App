import * as api from '../../services/urlApi';
import * as actions from './actionTypes';

export const getUserCreator = ()=>{
  return {
    type:actions.fetch_user,
    payload:api.getUser,
  };
};
