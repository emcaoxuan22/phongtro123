import db from "../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {v4} from 'uuid'
require('dotenv').config()
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const registerService = ({phone, password, name}) => new Promise(async(resolve, reject) => {
    try {
        const response =  await db.User.findOrCreate({
            where: {phone},
            defaults: {
                phone: phone,
                name: name,
                password: hashPassword(password),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({id: response[0].id, phone: response[0].phone}, process.env.SECRET_KEY, {expiresIn: '2d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'register is successfully' : 'Phone number has been already used',
            token: token || null
        })

        
    } catch (error) {
        reject(error)
    }
})

export const loginService = async({phone, password}) => {
    // console.log("aloso")
    // const response =  await db.User.findOne({
    //     where: {phone},
    //     raw: true
    // })
    // console.log("day la response", response.id)
    // const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
    // console.log("day la is correct", isCorrectPassword)
    // const token = isCorrectPassword && jwt.sign({id: response.id, phone: response.phone}, process.env.SECRET_KEY, {expiresIn: '2d'})
    // console.log("day la thoken", token)
    
    // return {
    //     err: token ? 0 : 2,
    //     msg: token ? 'login is successfully' : response ? 'Password is wrong':'Phone number not found',
    //     token: token || null
    // }
    return new Promise(async(resolve, reject) => {
        try {
            const response =  await db.User.findOne({
                where: {phone},
                raw: true
            })
            console.log("day la response", response.id)
            const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
            console.log("day la is correct", isCorrectPassword)
            const token = isCorrectPassword && jwt.sign({id: response.id, phone: response.phone}, process.env.SECRET_KEY, {expiresIn: '2d'})
            console.log("day la thoken", token)
            resolve({
                err: token ? 0 : 2,
                msg: token ? 'login is successfully' : response ? 'Password is wrong':'Phone number not found',
                token: token || null
            })
            
        } catch (error) {
            reject(error)
        }
    })

}


