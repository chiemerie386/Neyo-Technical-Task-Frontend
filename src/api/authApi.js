import axios from 'axios'

const authApi = axios.create({
    baseURL : process.env.REACT_APP_API_URL
})

export const login = async (loginPayload) => {
   const response =  await authApi.post('/auth/login', loginPayload)
   return response.data
} 

export const register = async (registerPayload) => {
    const response =  await authApi.post('/auth/register', registerPayload)
    return response.data
 } 

export default  authApi