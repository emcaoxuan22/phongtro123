import axiosConfig from '../axiosConfig'


// cách 1 này khá oke, để hiểu bản chất 
// export const apiRegister = (payload) => {
//     const response = axiosConfig({
//         method: 'post',
//         url:'/api/v1/auth/register',
//         data: payload
//     })
//     return response
// } 

export const apiRegister = (payload)  => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url:'/api/v1/auth/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiLogin = (payload)  => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url:'/api/v1/auth/login',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

