import axios from 'axios'

const authApi = axios.create({
    baseURL : "http://localhost:4000"
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