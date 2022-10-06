import axios from 'axios'
import { useAuth } from './token'

// export const base_url = 'http://127.0.0.1:8000/api/'
export const base_url = 'https://back-app-2y9c7.ondigitalocean.app/api/'

export const ApiLogin = async ({email, password}) => {
  const {data} = await axios.post(base_url + 'auth/login', {
    email, password
  })
  return data;
}

export const ApiRegister = async ({email, password, first_name, last_name}) => {
  const {data} = await axios.post(base_url + 'auth/register', {
    email, password, first_name, last_name
  })
  return data;
}

export const ApiProfile = async () => {
  const {data} = await axios.post(base_url + 'auth/profile', {
    jwt: useAuth().token
  })
  return data;
} 

