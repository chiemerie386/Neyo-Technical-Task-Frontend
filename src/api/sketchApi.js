import axios from 'axios'

const sketchApi = axios.create({
    baseURL : "http://localhost:4000"
})

const token = localStorage.getItem('token');
const headers = {
    headers: {"Authorization":`Bearer ${token}`}
  }

export const create = async (createPayload) => {
   const response =  await sketchApi.post('/sketch/create', createPayload, headers)
   return response.data
} 

export const getAll = async (getAllPayload) => {
    const response =  await sketchApi.get('/sketch/getsketch', headers)
    return response.data
 } 

export default  sketchApi