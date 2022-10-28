import axios from 'axios'

const sketchApi = axios.create({
    baseURL : process.env.REACT_APP_API_URL
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

export const getOne = async (sketchId) => {
  const response =  await sketchApi.get(`sketch/getsketch/${sketchId}`, headers)
  return response.data
}

export const updateSketch = async (updateSketchPayload) => {
  const {body, sketchId} = updateSketchPayload
  const response =  await sketchApi.put(`/sketch/update/${sketchId}`, {body}, headers)
  return response.data
} 

export default  sketchApi