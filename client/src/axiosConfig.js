import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
}
)

instance.interceptors.request.use(function(config) {
    // làm gì đó trước khi request được gửi 
    const token = localStorage.getItem('persist:auth')
    console.log(token)
    return config

}, function(error) {
    // làm gì với request bị lỗi
    console.log(error)
    return Promise.reject(error)
})

export default instance