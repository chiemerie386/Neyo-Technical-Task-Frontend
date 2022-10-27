import axios from 'axios'

const userApi = axios.create({
    baseURL : "http://localhost:4000"
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