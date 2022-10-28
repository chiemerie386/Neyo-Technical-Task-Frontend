import axios from 'axios'

const userApi = axios.create({
    baseURL : process.env.REACT_APP_API_URL
})

const token = localStorage.getItem('token');
const headers = {
    headers: {"Authorization":`Bearer ${token}`}
  }

export const getAllUsers = async () => {
    const response =  await userApi.get('/user/getuser', headers)
    return response.data
 } 

export default  userApi