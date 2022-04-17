import {create} from 'apisauce'


const apiClient = create({
    baseURL:"http://192.168.24.247:9000/api"
})

export default apiClient