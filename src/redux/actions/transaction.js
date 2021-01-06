import * as api from '../../services/urlApi';
import * as actions from './actionTypes';

export const historyCreator = (id)=>{
  return {
    type:actions.fetch_history,
    payload:api.allTransaction(id),
  };
};
