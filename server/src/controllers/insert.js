import * as insertService from "../service/insert"
export const insert = async (req, res) => {
    const response = await insertService.insertService()
    return res.status(200).json({
        err: 0,
        msg: "success"
    })
}