import * as authService from "../service/auth"
export const register = async (req, res) => {
    const {name, phone, password} = req.body
    try {
        if(!name || !phone || !password) return res.status(400).json({
            err: 1,
            msg: "missing inputs"
        })
        const response = await authService.registerService(req.body)
        console.log("ressponse", response)
        return res.status(200).json(response)
    
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'fail ar autj controller: ' + error
        })
    }
}

export const login = async (req, res) => {
    const {phone, password} = req.body
    try {
        if(!phone || !password) return res.status(400).json({
            err: 1,
            msg: "missing inputs"
        })
        const response = await authService.loginService(req.body)
        console.log(response)
        return res.status(200).json(response)
    
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'fail ar autj controller: ' + error
        })
    }
}
