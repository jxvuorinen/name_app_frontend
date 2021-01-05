import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/names'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const nameService = { getAll }

export default nameService