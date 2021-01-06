import Axios from 'axios';

const linkAPI = 'http://192.168.1.37:5000/';

export const getLogin = (credential)=>{
  return Axios.post(`${linkAPI}auth/login`,{
    email:credential.email,
    password:credential.password,
  });
};

export const getRegister = (credential)=>{
  return Axios.post(`${linkAPI}auth/register`,{
    username:credential.username,
    email:credential.email,
    password:credential.password,
  });
};

export const getUser = ()=>{
  return Axios.get(`${linkAPI}user`);
};

