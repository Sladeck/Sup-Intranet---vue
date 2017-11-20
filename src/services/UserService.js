import axios from 'axios'

// Url du serveur

const API_ENDPOINT = '//localhost:1337'

export default {
    fetchAll() {
        return axios.get(`${API_ENDPOINT}/collaborateurs`)
                    .then(res => res.data)
                    .catch(console.error)
    }
}