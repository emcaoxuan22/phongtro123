import { Sequelize } from "sequelize";

const sequelize = new Sequelize('phongtro123', 'root', 'longdtttk58', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

const connectDatabase = (async() => {
    try {
        await sequelize.authenticate();
        console.log('ket noi data base duoc thanh lap')
    } catch (error) {
        console.log("ket noi da bi loi", error)
    }
})()

export default connectDatabase