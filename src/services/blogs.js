import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'
// const baseUrl = 'http://localhost:3003/api/users'

let token = null

const setToken = newToken =>{
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject =>{
  const config = {
    headers: {Authorization: token}
  }
  // console.log('config is :', config)
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject)=>{
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, create, setToken, update }