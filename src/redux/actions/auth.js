import * as api from '../../services/urlApi';
import * as actions from './actionTypes';

export const loginCreator = (credential)=>{
  return {
    type:actions.login,
    payload:api.getLogin(credential),
  };
};

export const registerCreator = (credential)=>{
  return {
    type:actions.register,
    payload:api.getRegister(credential),
  };
};
